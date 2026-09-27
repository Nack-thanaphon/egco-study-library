import type { CSSProperties } from 'react'
import { ChevronRight } from 'lucide-react'
import { courses } from 'virtual:courses'
import type { Course } from '@/domain/course'
import { groupCoursesByTerm } from '@/domain/term'

type LibraryHomeProps = {
  onOpenCourse: (course: Course) => void
}

export function LibraryHome({ onOpenCourse }: LibraryHomeProps) {
  const totalLectures = courses.reduce((sum, course) => sum + course.lectures.length, 0)
  const termGroups = groupCoursesByTerm(courses)

  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="kicker">Mahidol University · M.Eng. Computer Engineering</p>
        <h1>EGCO Study Library</h1>
        <p className="lead">สรุปรายคาบ พร้อมลิงก์ไฟล์เสียงต้นฉบับ</p>
        <p className="meta-line library-stats">
          <span>{termGroups.length} ภาคเรียน</span>
          <span>·</span>
          <span><strong>{courses.length}</strong> รายวิชา</span>
          <span>·</span>
          <span><strong>{totalLectures}</strong> คาบ</span>
        </p>
      </header>

      {termGroups.map((group) => (
        <section className="block term-block" key={group.term}>
          <div className="block-head">
            <h2>{group.label}</h2>
            <span className="block-count">{group.courses.length} รายวิชา</span>
          </div>
          <ol className="course-table">
            {group.courses.map((course) => (
              <li className="course-card" key={course.code} style={{ '--accent': course.accent } as CSSProperties}>
                <button type="button" className="course-row course-card-main" onClick={() => onOpenCourse(course)}>
                  <span className="code">{course.code}</span>
                  <span className="title-block">
                    <strong>{course.shortTitle}</strong>
                  </span>
                  <span className="count">{course.lectures.length} คาบ</span>
                  <span className="go">เปิด <ChevronRight size={16} /></span>
                </button>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <footer className="site-footer">
        <span>สรุปจากเนื้อหาหลังเรียนจริงและเอกสารประกอบ</span>
      </footer>
    </main>
  )
}
