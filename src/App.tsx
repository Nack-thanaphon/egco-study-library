import { useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  ExternalLink,
  FileAudio,
  FolderOpen,
  GraduationCap,
  MessageSquareText,
  Search,
  Sparkles,
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
    <main className="app-shell library-shell">
      <header className="library-header">
        <div className="course-mark" aria-hidden="true"><GraduationCap size={25} /></div>
        <div>
          <p className="eyebrow">Mahidol · M.Eng. Computer Engineering</p>
          <h1>EGCO Study Library</h1>
          <p className="library-description">
            เลือกวิชาเพื่อดูจำนวนคาบ สิ่งที่เรียน สิ่งที่คุยในห้อง และแหล่งเสียงต้นฉบับ พร้อมดาวน์โหลดคู่มือสำหรับทบทวนกับ AI
          </p>
        </div>
      </header>

      <section className="library-metrics" aria-label="ภาพรวมคลังวิชา">
        <div><strong>{courses.length}</strong><span>รายวิชา</span></div>
        <div><strong>{totalLectures}</strong><span>คาบที่รวบรวม</span></div>
        <div><strong>{courses.length}</strong><span>ไฟล์ SKILL.md</span></div>
      </section>

      <section className="course-library">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Course dashboards</p>
            <h2>เลือกรายวิชา</h2>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.code} style={{ '--accent': course.accent } as CSSProperties}>
              <button className="course-card-main" onClick={() => onOpenCourse(course)}>
                <div className="course-code">{course.code}</div>
                <h3>{course.shortTitle}</h3>
                <p>{course.description}</p>
                <div className="course-stats">
                  <span><BookOpen size={17} /> {course.lectures.length} คาบ</span>
                  <span><FileAudio size={17} /> อ้างอิงเสียงรายคาบ</span>
                </div>
                <span className="open-course">เปิด Dashboard <ChevronRight size={19} /></span>
              </button>
              <a className="course-skill-link" href={course.skillPath} download>
                <Download size={17} /> ดาวน์โหลด {course.code} SKILL.md
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>สรุปจากเนื้อหาหลังเรียนจริงและเอกสารประกอบ</span>
        <span>ไฟล์เสียงเปิดได้เฉพาะผู้ที่ได้รับสิทธิ์</span>
      </footer>
    </main>
  )
}

function CourseDashboard({ course, onBack, onOpenLecture }: { course: Course; onBack: () => void; onOpenLecture: (lecture: Lecture) => void }) {
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
      <button className="back-button" onClick={onBack}><ArrowLeft size={19} /> ทุกวิชา</button>
      <header className="course-header">
        <div className="course-mark" aria-hidden="true"><GraduationCap size={25} /></div>
        <div className="course-copy">
          <p className="eyebrow">{course.title}</p>
          <h1>{course.code}</h1>
          <p className="course-description">{course.description}</p>
          <div className="course-actions">
            <a className="download-skill" href={course.skillPath} download>
              <Download size={18} /> ดาวน์โหลด SKILL.md
            </a>
            <span>คู่มืออ่านง่ายสำหรับทบทวนเองหรือใช้ติวกับ AI</span>
          </div>
        </div>
      </header>

      <section className="metrics" aria-label={`ภาพรวม ${course.code}`}>
        <article className="metric-card metric-primary">
          <span className="metric-icon"><BookOpen size={21} /></span>
          <div><strong>{course.lectures.length}</strong><span>คาบที่รวบรวมแล้ว</span></div>
        </article>
        <article className="metric-card">
          <span className="metric-icon"><FolderOpen size={21} /></span>
          <div><strong>{course.lectures.length}</strong><span>หน้าสรุปรายคาบ</span></div>
        </article>
        <article className="metric-card">
          <span className="metric-icon"><FileAudio size={21} /></span>
          <div><strong>{audioCount}/{course.lectures.length}</strong><span>ลิงก์เสียงที่เพิ่มแล้ว</span></div>
        </article>
      </section>

      <section className="lecture-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Class archive</p>
            <h2>คาบเรียนทั้งหมด</h2>
          </div>
          <label className="search-box">
            <Search size={19} aria-hidden="true" />
            <span className="sr-only">ค้นหาเนื้อหา</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาหัวข้อหรือคำสำคัญ" />
          </label>
        </div>

        <div className="lecture-grid">
          {filteredLectures.map((lecture) => (
            <button className="lecture-card" key={lecture.id} onClick={() => onOpenLecture(lecture)}>
              <div className="lecture-meta"><span>{lecture.week}</span><span>{lecture.date}</span></div>
              <div className="lecture-number">คาบ {String(lecture.number).padStart(2, '0')}</div>
              <h3>{lecture.title}</h3>
              <p>{lecture.subtitle}</p>
              <div className="lecture-footer">
                <span><MessageSquareText size={17} /> {lecture.topics.length} หัวข้อหลัก</span>
                <span className={`audio-state ${lecture.audioUrl ? 'ready' : ''}`}>
                  <FileAudio size={17} /> {lecture.audioUrl ? 'มีไฟล์เสียง' : 'รอลิงก์เสียง'}
                </span>
                <ChevronRight size={20} className="chevron" />
              </div>
            </button>
          ))}
        </div>

        {filteredLectures.length === 0 && <div className="empty-state">ไม่พบคาบที่ตรงกับ “{query}”</div>}
      </section>

      <footer className="site-footer">
        <span>{course.focus}</span>
        <span>ข้อมูลจากสรุปหลังเรียน สไลด์ และไฟล์ถอดเสียง</span>
      </footer>
    </main>
  )
}

function LectureDetail({ course, lecture, onBack }: { course: Course; lecture: Lecture; onBack: () => void }) {
  return (
    <main className="app-shell detail-shell" style={{ '--accent': course.accent } as CSSProperties}>
      <button className="back-button" onClick={onBack}><ArrowLeft size={19} /> กลับไปทุกคาบ</button>

      <header className="detail-header">
        <div className="detail-chips">
          <span className="chip chip-course">{course.code} · คาบ {String(lecture.number).padStart(2, '0')}</span>
          <span className="chip">{lecture.week}</span>
          <span className="chip"><CalendarDays size={15} /> {lecture.date}</span>
          {lecture.duration && <span className="chip"><Clock3 size={15} /> {lecture.duration}</span>}
        </div>
        <h1>{lecture.title}</h1>
        <p>{lecture.subtitle}</p>
      </header>

      <div className="detail-layout">
        <div className="detail-content">
          <div className="content-grid">
            <ContentSection icon={<BookOpen size={20} />} label="เรียนอะไรบ้าง" items={lecture.topics} />
            <ContentSection icon={<MessageSquareText size={20} />} label="ในห้องคุยอะไร" items={lecture.discussions} />
            <ContentSection icon={<Sparkles size={20} />} label="สิ่งที่อาจารย์เน้น" items={lecture.emphasis} accent />
            <ContentSection icon={<CheckCircle2 size={20} />} label="งานและสิ่งที่ต้องทำต่อ" items={lecture.assignments} />
          </div>
        </div>

        <aside className="source-panel">
          <div className="source-icon"><FileAudio size={25} /></div>
          <p className="eyebrow">Audio reference</p>
          <h2>เสียงต้นฉบับของคาบ</h2>
          <p>{lecture.audioLabel}</p>
          {lecture.audioUrl ? (
            <a className="audio-link" href={lecture.audioUrl} target="_blank" rel="noreferrer">เปิดไฟล์เสียง <ExternalLink size={17} /></a>
          ) : (
            <button className="audio-link disabled" disabled>รอเพิ่มลิงก์ Google Drive</button>
          )}
          <div className="source-note"><strong>ที่มาของสรุป</strong><span>{lecture.sourceNote}</span></div>
          <p className="privacy-note">ไฟล์เสียงจำกัดสิทธิ์ ผู้เปิดลิงก์ต้องได้รับอนุญาตจากเจ้าของไฟล์</p>
        </aside>
      </div>
    </main>
  )
}

function ContentSection({ icon, label, items, accent = false }: { icon: ReactNode; label: string; items: string[]; accent?: boolean }) {
  return (
    <section className={`content-section ${accent ? 'accent-section' : ''}`}>
      <div className="content-title"><span>{icon}</span><h2>{label}</h2></div>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </section>
  )
}

export default App
