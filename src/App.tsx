import { useMemo, useState, type CSSProperties } from 'react'
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  FileAudio,
  FolderOpen,
  Search,
} from 'lucide-react'
import { courses, type Course, type Lecture } from './courseData'
import './App.css'

function App() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null)
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null)

  if (activeCourse && activeLecture) {
    return <LectureDetail course={activeCourse} lecture={activeLecture} onBack={() => setActiveLecture(null)} />
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

function LibraryHome({ onOpenCourse }: { onOpenCourse: (course: Course) => void }) {
  const totalLectures = courses.reduce((sum, course) => sum + course.lectures.length, 0)

  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="kicker">Mahidol University · M.Eng. Computer Engineering</p>
        <h1>EGCO Study Library</h1>
        <p className="lead">
          เลือกวิชาเพื่อดูสรุปรายคาบตามวันที่ และแหล่งเสียงต้นฉบับ
        </p>
        <p className="meta-line library-stats">
          <span>{courses.length} รายวิชา</span>
          <span>·</span>
          <span><strong>{totalLectures}</strong> คาบ</span>
          <span>·</span>
          <span>{courses.length} ไฟล์ SKILL.md</span>
        </p>
      </header>

      <section className="block">
        <h2>รายวิชา</h2>
        <ol className="course-table">
          {courses.map((course) => (
            <li className="course-card" key={course.code} style={{ '--accent': course.accent } as CSSProperties}>
              <button type="button" className="course-row course-card-main" onClick={() => onOpenCourse(course)}>
                <span className="code">{course.code}</span>
                <span className="title-block">
                  <strong>{course.shortTitle}</strong>
                  <span>{course.description}</span>
                </span>
                <span className="count">{course.lectures.length} คาบ</span>
                <span className="go">เปิด <ChevronRight size={16} /></span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <footer className="site-footer">
        <span>สรุปจากเนื้อหาหลังเรียนจริงและเอกสารประกอบ</span>
      </footer>
    </main>
  )
}

function CourseDashboard({
  course,
  onBack,
  onOpenLecture,
}: {
  course: Course
  onBack: () => void
  onOpenLecture: (lecture: Lecture) => void
}) {
  const [query, setQuery] = useState('')
  const filteredLectures = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('th')
    if (!needle) return course.lectures
    return course.lectures.filter((lecture) =>
      [lecture.title, lecture.subtitle, lecture.date, lecture.week, ...lecture.topics, ...lecture.discussions, ...lecture.emphasis]
        .join(' ')
        .toLocaleLowerCase('th')
        .includes(needle),
    )
  }, [course.lectures, query])
  const audioCount = course.lectures.filter((lecture) => lecture.audioUrl).length

  return (
    <main className="app-shell" style={{ '--accent': course.accent } as CSSProperties}>
      <button type="button" className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> ทุกวิชา
      </button>

      <header className="page-header">
        <p className="kicker">{course.title}</p>
        <h1 className="course-code-heading">{course.code}</h1>
        <p className="lead">{course.description}</p>
        <p className="meta-line">
          {course.lectures.length} คาบ · เสียง {audioCount}/{course.lectures.length}
        </p>
        <a className="download-btn download-skill" href={course.skillPath} download>
          <Download size={16} /> ดาวน์โหลด SKILL.md
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
                    {lecture.audioUrl ? ' · มีไฟล์เสียง' : ' · รอลิงก์เสียง'}
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

function LectureDetail({
  course,
  lecture,
  onBack,
}: {
  course: Course
  lecture: Lecture
  onBack: () => void
}) {
  return (
    <main className="app-shell detail-shell" style={{ '--accent': course.accent } as CSSProperties}>
      <button type="button" className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> กลับไปทุกคาบ
      </button>

      <article className="lecture-notes">
        <header className="page-header detail-header">
          <div className="detail-topline">
            <span className="detail-course-code">{course.code}</span>
            <span className="detail-sep">·</span>
            <span>{lecture.week}</span>
            <span className="detail-sep">·</span>
            <span>คาบ {String(lecture.number).padStart(2, '0')}</span>
            {lecture.duration && (
              <>
                <span className="detail-sep">·</span>
                <span>{lecture.duration}</span>
              </>
            )}
          </div>
          <p className="detail-date">{lecture.date}</p>
          <h1>{lecture.title}</h1>
          <p className="lead">{lecture.subtitle}</p>
        </header>

        <section className="audio-strip" aria-label="เสียงต้นฉบับ">
          <div className="audio-strip-copy">
            <p className="audio-strip-label"><FileAudio size={16} /> เสียงต้นฉบับ</p>
            <p>{lecture.audioLabel}</p>
          </div>
          {lecture.audioUrl ? (
            <a className="audio-strip-link" href={lecture.audioUrl} target="_blank" rel="noreferrer">
              เปิดไฟล์เสียง <ExternalLink size={15} />
            </a>
          ) : (
            <span className="audio-strip-pending">รอเพิ่มลิงก์ Google Drive</span>
          )}
        </section>

        <div className="notes-body">
          <ContentSection number="1" label="เรียนอะไรบ้าง" items={lecture.topics} />
          <ContentSection number="2" label="ในห้องคุยอะไร" items={lecture.discussions} />
          <ContentSection number="3" label="สิ่งที่อาจารย์เน้น" items={lecture.emphasis} accent />
          <ContentSection number="4" label="งานและสิ่งที่ต้องทำต่อ" items={lecture.assignments} />
        </div>

        <footer className="notes-footer">
          <p><strong>ที่มาของสรุป</strong> — {lecture.sourceNote}</p>
        </footer>
      </article>
    </main>
  )
}

function ContentSection({
  number,
  label,
  items,
  accent = false,
}: {
  number: string
  label: string
  items: string[]
  accent?: boolean
}) {
  return (
    <section className={`content-section ${accent ? 'accent-section' : ''}`}>
      <h2>
        <span className="section-num" aria-hidden="true">{number}</span>
        {label}
      </h2>
      <ol className="note-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  )
}

export default App
