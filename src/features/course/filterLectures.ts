import type { Lecture } from '@/domain/course'

export function filterLectures(lectures: Lecture[], query: string): Lecture[] {
  const needle = query.trim().toLocaleLowerCase('th')
  if (!needle) return lectures

  return lectures.filter((lecture) =>
    searchableText(lecture).toLocaleLowerCase('th').includes(needle),
  )
}

function searchableText(lecture: Lecture): string {
  return [
    lecture.title,
    lecture.subtitle,
    lecture.date,
    lecture.week,
    ...lecture.topics,
    ...lecture.discussions,
    ...lecture.emphasis,
  ].join(' ')
}
