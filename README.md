# EGCO Study Library

Dashboard สรุปเนื้อหารายวิชาแบบแยกคาบ อ่านง่ายบนมือถือ และตรวจย้อนกลับไปยังไฟล์เสียงต้นฉบับได้

**เว็บไซต์:** https://nack-thanaphon.github.io/egco-study-library/

## รุ่นปัจจุบัน

- EGCO604 Research Methodology and Seminar
- 4 คาบ: 22 ส.ค., 29 ส.ค., 5 ก.ย. และ 19 ก.ย. 2569
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

## การตรวจสอบ

```bash
node scripts/verify.mjs
```

ชุดตรวจสอบครอบคลุมจำนวนคาบ การค้นหา การเปิดรายละเอียด การดาวน์โหลด `SKILL.md` และ horizontal overflow ที่ความกว้าง 390px

## ความเป็นส่วนตัว

เว็บไซต์สรุปเป็นสาธารณะ แต่ไม่เก็บไฟล์เสียงหรือ transcript ดิบไว้ใน repository ไฟล์เสียงอยู่บน Google Drive และเจ้าของไฟล์เป็นผู้กำหนดสิทธิ์เข้าถึง
