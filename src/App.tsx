import { useMemo, useState } from 'react'
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
  GraduationCap,
  MessageSquareText,
  Search,
  Sparkles,
} from 'lucide-react'
import './App.css'

type Lecture = {
  id: string
  number: number
  date: string
  week: string
  title: string
  subtitle: string
  duration?: string
  topics: string[]
  discussions: string[]
  emphasis: string[]
  assignments: string[]
  audioUrl: string | null
  audioLabel: string
  sourceNote: string
}

const lectures: Lecture[] = [
  {
    id: 'lecture-01',
    number: 1,
    date: '22 สิงหาคม 2569',
    week: 'Week 1',
    title: 'เริ่มต้นกระบวนการวิจัยและจริยธรรม',
    subtitle: 'ภาพรวมวิชา ตั้งโจทย์วิจัย จริยธรรม และเส้นทางการทำวิทยานิพนธ์',
    topics: [
      'ภาพรวมกระบวนการวิจัย ตั้งแต่ตั้งโจทย์ ค้นงาน เขียน วิเคราะห์ และนำเสนอ',
      'ความแตกต่างของปัญหาวิจัย วัตถุประสงค์ และผลลัพธ์ที่คาดหวัง',
      'จริยธรรมการวิจัย CITI Program และกระบวนการ MU-IRB',
      'เกณฑ์การประเมินรายวิชาและแผนการเรียนตลอดภาค',
    ],
    discussions: [
      'งานด้านคอมพิวเตอร์หรือ Machine Learning ที่ใช้ข้อมูลสาธารณะหรือข้อมูลนิรนามอาจเข้าข่าย Exemption แต่ต้องตรวจตามลักษณะงานจริง',
      'นักศึกษาต้องเริ่มจาก concept paper ของตัวเอง และมองให้ออกว่าปัญหาที่ต้องการแก้คืออะไร',
      'การตีพิมพ์และ Turnitin เป็นส่วนหนึ่งของเส้นทางจบ ไม่ใช่งานเอกสารที่ทำช่วงท้ายเท่านั้น',
    ],
    emphasis: [
      'โจทย์วิจัยต้องชัดก่อนเลือกเครื่องมือ',
      'ถ้ามีมนุษย์หรือข้อมูลส่วนบุคคล ต้องคิดเรื่องจริยธรรมตั้งแต่ต้น',
      'การบ้านมีน้ำหนักมากและมีแทบทุกสัปดาห์',
    ],
    assignments: [
      'ทำ CITI Program: IPS for Students and Instructors และ Responsible Conduct of Research for Engineers',
      'ปรับ concept paper และหาเปเปอร์ที่เกี่ยวข้อง 2 เรื่องเพื่ออ่านในชั้นเรียน',
    ],
    audioUrl: null,
    audioLabel: 'ไฟล์เสียงคาบ 22 ส.ค. 2569',
    sourceNote: 'อ้างอิงจากสรุปหลังเรียน EGCO604 และเอกสาร Week 1',
  },
  {
    id: 'lecture-02',
    number: 2,
    date: '29 สิงหาคม 2569',
    week: 'Week 2',
    title: 'Literature Review และการค้นหาเปเปอร์',
    subtitle: 'เปลี่ยน Objective ให้ค้นงานได้ คัดกรองแหล่งข้อมูล และอ่านอย่างมีวิจารณญาณ',
    topics: [
      'การเขียน Objective ให้เฉพาะเจาะจงและวัดผลได้',
      'การคัดกรองเปเปอร์จากผู้แต่ง ปี สำนักพิมพ์ peer review และแหล่งตีพิมพ์',
      'ความต่างระหว่าง Journal กับ Conference และการตรวจ Scopus',
      'Backward Search, Forward Search และการสร้างสายงานวิจัย',
      'ระดับการทบทวนวรรณกรรม: Describe → Analyse → Evaluate → Offer your view',
    ],
    discussions: [
      'ให้อ่าน Abstract และ Conclusion ก่อน เพื่อประเมินว่าเปเปอร์ตรงกับโจทย์หรือไม่',
      'AI และ Consensus ช่วยค้นหรือเทียบสรุปได้ แต่ผู้เรียนต้องอ่านต้นฉบับและอธิบายเอง',
      'การ paraphrase ต้องตามด้วยการวิเคราะห์ ไม่ใช่เพียงเปลี่ยนคำจากต้นฉบับ',
      'เปเปอร์กลุ่มเรื่อง DGA และ Machine Learning ถูกใช้เป็นตัวอย่างเชื่อม Objective กับงานที่ค้นพบ',
    ],
    emphasis: [
      'เลือกเปเปอร์เพราะตอบ Objective ไม่ใช่เพราะชื่อดูใกล้เคียง',
      'ตรวจความน่าเชื่อถือก่อนเสียเวลาอ่านทั้งฉบับ',
      'Turnitin ต้องต่ำกว่าเกณฑ์และไม่ควรคัดลอกประโยคยาวจากแหล่งเดียว',
    ],
    assignments: [
      'เลือกเปเปอร์หลักจากงานของตัวเอง',
      'ทำ Backward Search อย่างน้อย 3 เรื่อง และ Forward Search อย่างน้อย 3 เรื่อง',
      'เขียน bullet summary ด้วยตัวเองก่อนนำไปเปรียบเทียบกับ AI',
    ],
    audioUrl: null,
    audioLabel: 'ไฟล์เสียงคาบ 29 ส.ค. 2569',
    sourceNote: 'อ้างอิงจาก transcript คาบ 29 ส.ค. และ Week2 Literature Review.pdf',
  },
  {
    id: 'lecture-03',
    number: 3,
    date: '5 กันยายน 2569',
    week: 'Week 3',
    title: 'Scientific Presentation',
    subtitle: 'เล่างานวิจัยให้คนฟังเข้าใจ ตั้งแต่ปัญหาไปจนถึงผลและข้อสรุป',
    topics: [
      'รูปแบบการนำเสนอทางวิชาการ: seminar, conference, poster และ viva/defense',
      'โครงเรื่อง Background → Problem → Objective → Method → Result → Discussion → Conclusion',
      'หลัก Simplicity, Visibility, Unity, Quality และ Feasibility',
      'การเลือกกราฟและภาพให้เหมาะกับสิ่งที่ต้องการสื่อ',
      'เทคนิคเตรียมตอบคำถามและสไลด์สำรอง',
    ],
    discussions: [
      'Problem statement เป็นจุดสำคัญที่สุด เพราะถ้าคนฟังไม่เข้าใจปัญหา เขาจะตาม Method และ Result ไม่ได้',
      'สไลด์ที่ AI สร้างมักอัดข้อมูลแน่นเกินไป ผู้พูดต้องตัดและเรียบเรียงให้เป็นภาษาของตัวเอง',
      'แนวคิด minimize text และ maximize pictures ไม่ได้แปลว่าตัดคำอธิบายทั้งหมด แต่ให้ภาพช่วยเล่าเรื่อง',
    ],
    emphasis: [
      'หนึ่งสไลด์ควรมีหน้าที่เดียว',
      'ซ้อมเวลาและเตรียม Q&A ก่อนนำเสนอจริง',
      'พูดให้เห็นเส้นเรื่องจากปัญหาไปสู่คำตอบของงานวิจัย',
    ],
    assignments: [
      'เตรียม Journal Club จากเปเปอร์ 1 เรื่อง',
      'ส่งสไลด์และเปเปอร์ที่เลือก',
      'นำเสนอประมาณ 10 นาที และตอบคำถามประมาณ 5 นาที',
    ],
    audioUrl: null,
    audioLabel: 'ไฟล์เสียงคาบ 5 ก.ย. 2569',
    sourceNote: 'อ้างอิงจาก transcript คาบ 5 ก.ย. และ Week3 Presentation.pdf',
  },
  {
    id: 'lecture-04',
    number: 4,
    date: '19 กันยายน 2569',
    week: 'Week 4',
    title: 'Journal Club: อ่านงานและป้องกันงานวิจัย',
    subtitle: 'การนำเสนอเปเปอร์ 10 เรื่อง พร้อมคำถามเรื่องวิธีวิจัย ผลลัพธ์ และข้อจำกัด',
    topics: [
      'Explainable AI สำหรับพอร์ตคริปโตและการตรวจอคติของโมเดล',
      'Stochastic MPC และ Conformal Prediction สำหรับ Energy Hub',
      'การวางแผนเปลี่ยนหม้อแปลงด้วย Health Index และ Optimization',
      'SAM, Ransomware Detection, LPN, Thai OCR และ Person Re-ID',
      'Self-Consistency สำหรับ Chain-of-Thought และการประเมินความน่าเชื่อถือของผล',
    ],
    discussions: [
      'ทุกงานถูกถามเป็นเส้นเดียวกันว่า ปัญหาคืออะไร วิธีนี้แก้ช่องว่างตรงไหน และตัวเลขผลลัพธ์หมายถึงอะไร',
      'Shapley Value สูงไม่ได้แปลว่าสินทรัพย์นั้นดีที่สุด แต่แปลว่ามีอิทธิพลต่อผลลัพธ์ของโมเดลมาก',
      'ผลที่ดีขึ้นต้องเทียบกับ baseline และต้องถามว่าคุ้มกับเวลา หน่วยความจำ หรือความซับซ้อนที่เพิ่มขึ้นหรือไม่',
      'Negative result ยังมีคุณค่าทางวิชาการ หากอธิบายได้ว่าทำไมสมมติฐานจึงไม่สำเร็จ',
      'Explainability ไม่เท่ากับ Usability จนกว่าจะพิสูจน์ว่าผู้ใช้จริงเข้าใจคำอธิบาย',
    ],
    emphasis: [
      'อย่าพูดเพียงว่าโมเดลแม่นขึ้น ต้องบอก baseline, metric และเงื่อนไขการทดลอง',
      'แยกสิ่งที่เปเปอร์รายงานออกจากความคิดเห็นของผู้นำเสนอ',
      'เตรียมตอบ limitation และเหตุผลที่เลือก Method ให้ชัด',
    ],
    assignments: [
      'ไม่มีการบ้านใหม่ที่ได้ยินชัดในคาบ',
      'นำข้อเสนอแนะจาก Q&A ไปปรับการนำเสนอและงานวิจัยของตัวเอง',
    ],
    audioUrl: null,
    audioLabel: 'ไฟล์เสียงคาบ 19 ก.ย. 2569',
    sourceNote: 'อ้างอิงจากไฟล์ถอดเสียงคาบ Journal Club วันที่ 19 ก.ย. 2569',
  },
]

function App() {
  const [query, setQuery] = useState('')
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null)

  const filteredLectures = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('th')
    if (!needle) return lectures
    return lectures.filter((lecture) =>
      [
        lecture.title,
        lecture.subtitle,
        lecture.date,
        lecture.week,
        ...lecture.topics,
        ...lecture.discussions,
        ...lecture.emphasis,
      ]
        .join(' ')
        .toLocaleLowerCase('th')
        .includes(needle),
    )
  }, [query])

  if (activeLecture) {
    return <LectureDetail lecture={activeLecture} onBack={() => setActiveLecture(null)} />
  }

  return (
    <main className="app-shell">
      <header className="course-header">
        <div className="course-mark" aria-hidden="true"><GraduationCap size={25} /></div>
        <div className="course-copy">
          <p className="eyebrow">Research Methodology and Seminar</p>
          <h1>EGCO604</h1>
          <p className="course-description">
            Dashboard สรุปสิ่งที่เรียนและสิ่งที่พูดคุย แยกตามคาบ พร้อมกลับไปตรวจไฟล์เสียงต้นฉบับได้
          </p>
          <div className="course-actions">
            <a className="download-skill" href="./downloads/egco604/SKILL.md" download>
              <Download size={18} /> ดาวน์โหลด SKILL.md
            </a>
            <span>คู่มืออ่านง่ายสำหรับทบทวนเองหรือใช้ติวกับ AI</span>
          </div>
        </div>
      </header>

      <section className="metrics" aria-label="ภาพรวมรายวิชา">
        <article className="metric-card metric-primary">
          <span className="metric-icon"><BookOpen size={21} /></span>
          <div><strong>{lectures.length}</strong><span>คาบที่เรียนแล้ว</span></div>
        </article>
        <article className="metric-card">
          <span className="metric-icon"><CalendarDays size={21} /></span>
          <div><strong>4</strong><span>สัปดาห์เนื้อหา</span></div>
        </article>
        <article className="metric-card">
          <span className="metric-icon"><FileAudio size={21} /></span>
          <div><strong>0/{lectures.length}</strong><span>ลิงก์เสียงที่เพิ่มแล้ว</span></div>
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
            <button className="lecture-card" key={lecture.id} onClick={() => setActiveLecture(lecture)}>
              <div className="lecture-meta">
                <span>{lecture.week}</span>
                <span>{lecture.date}</span>
              </div>
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

        {filteredLectures.length === 0 && (
          <div className="empty-state">ไม่พบคาบที่ตรงกับ “{query}”</div>
        )}
      </section>

      <footer className="site-footer">
        <span>ข้อมูลจากสรุปหลังเรียน สไลด์ และไฟล์ถอดเสียงของรายวิชา</span>
        <span>ปรับปรุงล่าสุด 20 กันยายน 2569</span>
      </footer>
    </main>
  )
}

function LectureDetail({ lecture, onBack }: { lecture: Lecture; onBack: () => void }) {
  return (
    <main className="app-shell detail-shell">
      <button className="back-button" onClick={onBack}><ArrowLeft size={19} /> กลับไปทุกคาบ</button>

      <header className="detail-header">
        <div className="detail-index">คาบ {String(lecture.number).padStart(2, '0')}</div>
        <div>
          <div className="detail-meta"><span>{lecture.week}</span><span><CalendarDays size={16} /> {lecture.date}</span>{lecture.duration && <span><Clock3 size={16} /> {lecture.duration}</span>}</div>
          <h1>{lecture.title}</h1>
          <p>{lecture.subtitle}</p>
        </div>
      </header>

      <div className="detail-layout">
        <div className="detail-content">
          <ContentSection icon={<BookOpen size={20} />} label="เรียนอะไรบ้าง" items={lecture.topics} />
          <ContentSection icon={<MessageSquareText size={20} />} label="ในห้องคุยอะไร" items={lecture.discussions} />
          <ContentSection icon={<Sparkles size={20} />} label="สิ่งที่อาจารย์เน้น" items={lecture.emphasis} accent />
          <ContentSection icon={<CheckCircle2 size={20} />} label="งานและสิ่งที่ต้องทำต่อ" items={lecture.assignments} />
        </div>

        <aside className="source-panel">
          <div className="source-icon"><FileAudio size={25} /></div>
          <p className="eyebrow">Audio reference</p>
          <h2>เสียงต้นฉบับของคาบ</h2>
          <p>{lecture.audioLabel}</p>
          {lecture.audioUrl ? (
            <a className="audio-link" href={lecture.audioUrl} target="_blank" rel="noreferrer">
              เปิดไฟล์เสียง <ExternalLink size={17} />
            </a>
          ) : (
            <button className="audio-link disabled" disabled>รอเพิ่มลิงก์ Google Drive</button>
          )}
          <div className="source-note">
            <strong>ที่มาของสรุป</strong>
            <span>{lecture.sourceNote}</span>
          </div>
          <p className="privacy-note">ไฟล์เสียงจำกัดสิทธิ์ ผู้เปิดลิงก์ต้องได้รับอนุญาตจากเจ้าของไฟล์</p>
        </aside>
      </div>
    </main>
  )
}

function ContentSection({ icon, label, items, accent = false }: { icon: React.ReactNode; label: string; items: string[]; accent?: boolean }) {
  return (
    <section className={`content-section ${accent ? 'accent-section' : ''}`}>
      <div className="content-title"><span>{icon}</span><h2>{label}</h2></div>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </section>
  )
}

export default App
