export type AudioLink = {
  label: string
  url: string
}

export type Lecture = {
  id: string
  number: number
  date: string
  week: string
  title: string
  subtitle: string
  topics: string[]
  discussions: string[]
  emphasis: string[]
  assignments: string[]
  audioUrl: string | null
  audioUrls?: AudioLink[]
  audioLabel: string
  sourceNote: string
}

export type Course = {
  code: string
  term: string
  title: string
  shortTitle: string
  focus: string
  accent: string
  lectures: Lecture[]
  skillPath: string
}

export function skillFileName(course: Course): string {
  return `${course.code}-SKILL.md`
}

export function lectureAudioLinks(lecture: Lecture): AudioLink[] {
  if (lecture.audioUrls && lecture.audioUrls.length > 0) return lecture.audioUrls
  return lecture.audioUrl ? [{ label: 'เปิดไฟล์เสียง', url: lecture.audioUrl }] : []
}

export function hasAudio(lecture: Lecture): boolean {
  return lectureAudioLinks(lecture).length > 0
}
