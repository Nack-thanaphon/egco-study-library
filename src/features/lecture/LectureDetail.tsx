import type { CSSProperties } from 'react'
import { ArrowLeft, ExternalLink, FileAudio } from 'lucide-react'
import { lectureAudioLinks, type Course, type Lecture } from '@/domain/course'
import { ContentSection } from './ContentSection'

type LectureDetailProps = {
  course: Course
  lecture: Lecture
  onBack: () => void
}

export function LectureDetail({ course, lecture, onBack }: LectureDetailProps) {
  const audioLinks = lectureAudioLinks(lecture)

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
          {audioLinks.length > 0 ? (
            <div className="audio-strip-links">
              {audioLinks.map((audio) => (
                <a className="audio-strip-link" key={audio.url} href={audio.url} target="_blank" rel="noreferrer">
                  {audio.label} <ExternalLink size={15} />
                </a>
              ))}
            </div>
          ) : (
            <span className="audio-strip-pending">ไม่มี</span>
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
