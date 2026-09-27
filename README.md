# EGCO Study Library

Dashboard สรุปเนื้อหารายวิชาแบบแยกคาบ อ่านง่ายบนมือถือ และตรวจย้อนกลับไปยังไฟล์เสียงต้นฉบับได้

**เว็บไซต์:** https://nack-thanaphon.github.io/egco-study-library/

## รุ่นปัจจุบัน

- EGCO604 Research Methodology
- EGCO611 Programming Techniques for Advanced Applications
- EGCO623 Data Mining and Machine Learning
- EGCO676 Information Security and Risk Assessment
- 20 คาบรวม 4 วิชา: EGCO604 (4) · EGCO611 (6) · EGCO623 (5) · EGCO676 (5)
- ค้นหาเนื้อหารายคาบ
- หน้ารายละเอียด: เรียนอะไร / คุยอะไร / อาจารย์เน้นอะไร / งานที่ต้องทำ
- ปุ่มอ้างอิง Google Drive แยกแต่ละคาบ
- ดาวน์โหลด `SKILL.md` สำหรับอ่านเองหรือใช้ติวกับ AI

## การพัฒนา

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## ข้อมูลรายคาบ

ข้อมูลทั้งหมดอยู่ใน `research/sessions/<รหัสวิชา>/`

- `course.json` — ข้อมูลรายวิชา (ชื่อ ภาคเรียน สี)
- `session-NN.json` — หนึ่งไฟล์ต่อหนึ่งคาบ: หัวข้อ สิ่งที่คุย สิ่งที่อาจารย์เน้น งาน ลิงก์เสียง และ `sources` ต้นฉบับ

Vite plugin `build/course-sessions-plugin.ts` อ่านไฟล์เหล่านี้ตรงตอน `npm run dev` / `npm run build` แล้วส่งให้แอปผ่าน `virtual:courses` (`sources` ไม่ถูกรวมเข้าเว็บ) แก้ JSON แล้วหน้า dev reload เอง

## การตรวจสอบ

```bash
node scripts/verify.mjs
```

ชุดตรวจสอบครอบคลุมจำนวนคาบ การค้นหา การเปิดรายละเอียด การดาวน์โหลด `SKILL.md` และ horizontal overflow ที่ความกว้าง 390px

## ความเป็นส่วนตัว

เว็บไซต์สรุปเป็นสาธารณะ แต่ไม่เก็บไฟล์เสียงหรือ transcript ดิบไว้ใน repository ไฟล์เสียงอยู่บน Google Drive และเจ้าของไฟล์เป็นผู้กำหนดสิทธิ์เข้าถึง
