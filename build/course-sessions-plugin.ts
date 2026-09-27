import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import type { Course, Lecture } from '../src/domain/course.ts'

const VIRTUAL_ID = 'virtual:courses'
const RESOLVED_ID = `\0${VIRTUAL_ID}`
const SESSION_FILE = /^session-\d+\.json$/
const COURSE_FIELDS = ['courseCode', 'term', 'title', 'shortTitle', 'focus']
const SESSION_FIELDS = ['session', 'week', 'date', 'title', 'subtitle', 'topics', 'discussions', 'emphasis', 'assignments', 'audioLabel', 'sourceNote']

type JsonRecord = Record<string, any>

function readJson(file: string): JsonRecord {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function requireFields(data: JsonRecord, fields: string[], label: string): void {
  for (const field of fields) {
    if (data[field] === undefined) throw new Error(`${label}: missing ${field}`)
  }
}

function toLecture(session: JsonRecord, code: string): Lecture {
  const number: number = session.session
  return {
    id: `${code.toLowerCase()}-session-${String(number).padStart(2, '0')}`,
    number,
    date: session.date.trim(),
    week: session.week,
    title: session.title,
    subtitle: session.subtitle,
    topics: session.topics,
    discussions: session.discussions,
    emphasis: session.emphasis,
    assignments: session.assignments,
    audioUrl: session.audioUrl ?? null,
    ...(session.audioUrls ? { audioUrls: session.audioUrls } : {}),
    audioLabel: session.audioLabel,
    sourceNote: session.sourceNote,
  }
}

function readLectures(courseDir: string, code: string): Lecture[] {
  const files = fs.readdirSync(courseDir).filter((file) => SESSION_FILE.test(file))
  if (files.length === 0) throw new Error(`${code}: no session-*.json files`)

  const sessions = files.map((file) => {
    const session = readJson(path.join(courseDir, file))
    const label = `${code}/${file}`
    requireFields(session, SESSION_FIELDS, label)
    if (session.courseCode !== code) throw new Error(`${label}: courseCode ${session.courseCode} != ${code}`)
    return session
  })

  const numbers = sessions.map((session) => session.session)
  if (new Set(numbers).size !== numbers.length) throw new Error(`${code}: duplicate session number`)

  return sessions
    .sort((a, b) => a.session - b.session)
    .map((session) => toLecture(session, code))
}

function readCourse(courseDir: string): Course {
  const courseFile = path.join(courseDir, 'course.json')
  if (!fs.existsSync(courseFile)) throw new Error(`${path.basename(courseDir)}: missing course.json`)

  const course = readJson(courseFile)
  requireFields(course, COURSE_FIELDS, courseFile)
  const code: string = course.courseCode

  return {
    code,
    term: course.term,
    title: course.title,
    shortTitle: course.shortTitle,
    focus: course.focus,
    accent: course.accent || '#003366',
    lectures: readLectures(courseDir, code),
    skillPath: `./downloads/${code.toLowerCase()}/SKILL.md`,
  }
}

function courseDirs(sessionsDir: string): string[] {
  const dirs = fs.readdirSync(sessionsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(sessionsDir, entry.name))
    .sort()
  if (dirs.length === 0) throw new Error(`No course folders in ${sessionsDir}`)
  return dirs
}

/**
 * Exposes `virtual:courses`, built from research/sessions/<course>/{course,session-NN}.json.
 * Raw `sources` stay out of the bundle; only fields the UI renders are emitted.
 */
export function courseSessionsPlugin(sessionsDir: string): Plugin {
  return {
    name: 'course-sessions',

    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined
    },

    load(id) {
      if (id !== RESOLVED_ID) return undefined
      const courses = courseDirs(sessionsDir).map(readCourse)
      return `export const courses = ${JSON.stringify(courses)}`
    },

    configureServer(server) {
      server.watcher.add(sessionsDir)
      const reloadOnSessionChange = (file: string) => {
        if (!file.startsWith(sessionsDir) || !file.endsWith('.json')) return
        const module = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (module) server.moduleGraph.invalidateModule(module)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', reloadOnSessionChange)
      server.watcher.on('change', reloadOnSessionChange)
      server.watcher.on('unlink', reloadOnSessionChange)
    },
  }
}
