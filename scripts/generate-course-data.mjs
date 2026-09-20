import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const files = ['egco611.json', 'egco623.json', 'egco676.json', 'egco679.json']
const courses = files.map((file) => {
  const source = path.join(root, 'research', file)
  if (!fs.existsSync(source)) throw new Error(`Missing course data: ${source}`)
  const course = JSON.parse(fs.readFileSync(source, 'utf8'))
  const required = ['title', 'shortTitle', 'description', 'focus']
  for (const field of required) {
    if (course[field] === undefined) throw new Error(`${file}: missing ${field}`)
  }
  const code = course.courseCode || course.code
  const sessions = course.sessions || course.lectures
  if (!code) throw new Error(`${file}: missing courseCode/code`)
  if (!Array.isArray(sessions) || sessions.length === 0) throw new Error(`${file}: sessions/lectures must not be empty`)
  const numbers = sessions.map((session) => session.number)
  if (new Set(numbers).size !== numbers.length) throw new Error(`${file}: duplicate session number`)
  return {
    code,
    title: course.title,
    shortTitle: course.shortTitle,
    description: course.description,
    focus: course.focus,
    accent: course.accent || '#205f4e',
    lectures: sessions,
    skillPath: `./downloads/${code.toLowerCase()}/SKILL.md`,
  }
})

const output = `import type { Course } from './courseData'\n\nexport const generatedCourses: Course[] = ${JSON.stringify(courses, null, 2)}\n`
const target = path.join(root, 'src', 'generatedCourses.ts')
fs.writeFileSync(target, output)
console.log(`generated ${courses.length} courses -> ${target}`)
