import { useMemo, useState, type CSSProperties } from 'react'
import { ArrowLeft, BookOpen, ChevronRight, Download, FileAudio, FolderOpen, Search } from 'lucide-react'
import { hasAudio, skillFileName, type Course, type Lecture } from '@/domain/course'
import { filterLectures } from './filterLectures'

type CourseDashboardProps = {
  course: Course
  onBack: () => void
  onOpenLecture: (lecture: Lecture) => void
}

export function CourseDashboard({ course, onBack, onOpenLecture }: CourseDashboardProps) {
  const [query, setQuery] = useState('')
  const filteredLectures = useMemo(
    () => filterLectures(course.lectures, query),
    [course.lectures, query],
  )
  const audioCount = course.lectures.filter(hasAudio).length

  return (
    <main className="app-shell" style={{ '--accent': course.accent } as CSSProperties}>
      <button type="button" className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> ทุกวิชา
      </button>

      <header className="page-header">
        <p className="kicker">{course.title}</p>
        <h1 className="course-code-heading">{course.code}</h1>
        <p className="meta-line">
          {course.lectures.length} คาบ · เสียง {audioCount}/{course.lectures.length}
        </p>
        <a className="download-btn download-skill" href={course.skillPath} download={skillFileName(course)}>
          <Download size={16} /> ดาวน์โหลด {skillFileName(course)}
        </a>
      </header>

      <section className="stats-line" aria-label={`ภาพรวม ${course.code}`}>
        <span><BookOpen size={15} /> {course.lectures.length} คาบ</span>
        <span><FolderOpen size={15} /> {course.lectures.length} หน้าสรุป</span>
        <span><FileAudio size={15} /> เสียง {audioCount}/{course.lectures.length}</span>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>คาบเรียนทั้งหมด</h2>
          <label className="search-box">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">ค้นหาเนื้อหา</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ค้นหาหัวข้อหรือคำสำคัญ"
            />
          </label>
        </div>

        <ol className="lecture-table">
          {filteredLectures.map((lecture) => (
            <li key={lecture.id}>
              <button type="button" className="lecture-row lecture-card" onClick={() => onOpenLecture(lecture)}>
                <span className="lec-date">
                  <strong>{lecture.date}</strong>
                  <span>{lecture.week} · คาบ {String(lecture.number).padStart(2, '0')}</span>
                </span>
                <span className="title-block">
                  <strong>{lecture.title}</strong>
                  <span>{lecture.subtitle}</span>
                  <span className="lec-meta">
                    {lecture.topics.length} หัวข้อ
                    {hasAudio(lecture) ? ' · มีไฟล์เสียง' : ' · ไม่มีไฟล์เสียง'}
                  </span>
                </span>
                <ChevronRight size={16} className="go-icon" />
              </button>
            </li>
          ))}
        </ol>

        {filteredLectures.length === 0 && (
          <p className="empty-state">ไม่พบคาบที่ตรงกับ “{query}”</p>
        )}
      </section>

      <footer className="site-footer">
        <span>{course.focus}</span>
        <span>ข้อมูลจากสรุปหลังเรียน สไลด์ และไฟล์ถอดเสียง</span>
      </footer>
    </main>
  )
}
