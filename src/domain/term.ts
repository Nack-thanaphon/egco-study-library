import type { Course } from './course'

export function termLabel(term: string): string {
  const [semester, year] = term.split('/')
  return `ภาคเรียนที่ ${semester} ปีการศึกษา ${year}`
}

export type TermGroup = {
  term: string
  label: string
  courses: Course[]
}

export function groupCoursesByTerm(courses: Course[]): TermGroup[] {
  const terms = [...new Set(courses.map((course) => course.term))].sort()
  return terms.map((term) => ({
    term,
    label: termLabel(term),
    courses: courses.filter((course) => course.term === term),
  }))
}
