import { useState } from 'react'
import type { Course, Lecture } from '@/domain/course'
import { CourseDashboard } from '@/features/course/CourseDashboard'
import { LectureDetail } from '@/features/lecture/LectureDetail'
import { LibraryHome } from '@/features/library/LibraryHome'
import '@/styles/app.css'

export default function App() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null)
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null)

  if (activeCourse && activeLecture) {
    return (
      <LectureDetail
        course={activeCourse}
        lecture={activeLecture}
        onBack={() => setActiveLecture(null)}
      />
    )
  }

  if (activeCourse) {
    return (
      <CourseDashboard
        course={activeCourse}
        onBack={() => setActiveCourse(null)}
        onOpenLecture={setActiveLecture}
      />
    )
  }

  return <LibraryHome onOpenCourse={setActiveCourse} />
}
