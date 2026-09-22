import type { Course } from './courseData'

export const generatedCourses: Course[] = [
  {
    "code": "EGCO611",
    "title": "Mathematical Modelling, Optimization and Dynamic Systems",
    "shortTitle": "Mathematical Modelling & Optimization",
    "description": "แบบจำลอง การหาค่าที่ดีที่สุด และระบบพลวัต — เรียนวิธีเปลี่ยนปัญหาจริงให้เป็นสมการ เลือกคำตอบที่ดีที่สุดภายใต้ข้อจำกัด ใช้โปรแกรมช่วยแก้ และอธิบายระบบที่เปลี่ยนตามเวลา",
    "focus": "คิดเป็นลำดับจากเรื่องจริง → ตัวแปรและสมการ → solver → ตรวจคำตอบกับข้อจำกัดและความหมายในโลกจริง",
    "accent": "#003366",
    "lectures": [
      {
        "id": "egco611-session-01",
        "number": 1,
        "date": "11 สิงหาคม 2569 ",
        "week": "Week 1",
        "title": "Mathematical Modelling: เปลี่ยนเรื่องจริงเป็นสมการ",
        "subtitle": "เริ่มจากขอบเขต สมมติฐาน และหน่วย ก่อนแก้หรือทำนายระบบ",
        "topics": [
          "ความหมายของแบบจำลองคณิตศาสตร์ และเหตุผลที่โมเดลเก็บเฉพาะส่วนสำคัญของระบบจริง",
          "ขั้นตอนสร้างโมเดล: กำหนดปัญหา ขอบเขต สมมติฐาน สมการ วิธีแก้ และการตรวจสอบ",
          "ระบบพลวัตและอัตราการเปลี่ยนแปลง dx/dt เช่น อุณหภูมิและการแพร่โรค",
          "Optimization, Sensitivity และ Uncertainty เพื่อหาคำตอบที่ดีและดูว่าโมเดลไวต่อข้อมูลเพียงใด"
        ],
        "discussions": [
          "ตัวอย่างระบบหล่อเย็น CPU และท่อน้ำมันช่วยให้เห็นว่าต้องเลือกตัวแปรที่สำคัญและกำหนดขอบเขตให้ชัด",
          "โมเดลนักล่า–เหยื่อและ SIR แสดงว่าค่าปัจจุบันของระบบเปลี่ยนต่อเนื่องตามเวลา",
          "ตัวอย่างกำไรจากการขายสินค้าใช้แนวคิดรายได้ลบต้นทุนเพื่อหาจุดที่เหมาะที่สุด"
        ],
        "emphasis": [
          "โมเดลไม่ใช่โลกจริงทั้งหมด แต่เป็นภาพย่อที่ตอบคำถามเฉพาะเรื่อง",
          "ห้ามบวกหรือเปรียบเทียบค่าคนละหน่วย ต้องตรวจหน่วยทุกครั้ง",
          "แก้สมการได้ยังไม่พอ ต้องตรวจว่าผลสอดคล้องกับข้อมูลและพฤติกรรมจริง"
        ],
        "assignments": [
          "ฝึกเขียนขั้นตอนสร้างโมเดล 6 ขั้นจากปัญหาใกล้ตัวหนึ่งเรื่อง",
          "ลองแยกขอบเขต สมมติฐาน ตัวแปร และหน่วยของระบบหล่อเย็น CPU",
          "ทบทวนความหมายของ dx/dt, SIR และการวิเคราะห์ความไวก่อนเข้าสู่ LP"
        ],
        "audioUrl": null,
        "audioLabel": "รอลิงก์เสียงคาบ Week 1",
        "sourceNote": "อ้างอิงจากสรุปหลังเรียน EGCO611 ที่โพสต์วันที่ 11 ส.ค. 2569; ต้นทางระบุเพียง Week 1 จึงไม่เดาวันเรียน"
      },
      {
        "id": "egco611-session-02",
        "number": 2,
        "date": "16 สิงหาคม 2569 ",
        "week": "Week 2",
        "title": "Linear Programming Formulation",
        "subtitle": "แปลงโจทย์แบ่งทรัพยากรเป็นตัวแปร เป้าหมาย และข้อจำกัดเชิงเส้น",
        "topics": [
          "ส่วนประกอบของ LP: set, parameter, decision variable, objective และ constraint",
          "การอ่านรูปมาตรฐาน maximize cᵀx ภายใต้ Ax ≤ b และขอบเขตของตัวแปร",
          "สมมติฐานของ LP: สัดส่วนตรง ผลรวม แบ่งเป็นทศนิยมได้ และรู้ค่าสัมประสิทธิ์แน่นอน",
          "การแปลคำว่าไม่เกิน อย่างน้อย สมดุล และไม่ติดลบเป็นอสมการ",
          "สถานะคำตอบ feasible, optimal, infeasible, unbounded และความหมายของ slack"
        ],
        "discussions": [
          "โจทย์แบ่ง CPU และหน่วยความจำถูกใช้เพื่อเล่าว่า A คือการใช้ทรัพยากรและ b คือทรัพยากรที่มี",
          "ตัวแปรที่เป็นจำนวนเครื่องหรือการเลือกใช่–ไม่ใช่ไม่ผ่านเงื่อนไขแบ่งเป็นทศนิยมได้ จึงไม่ควรใช้ LP แล้วปัดคำตอบ",
          "เทคนิค reformulation ช่วยเปลี่ยนอสมการ ตัวแปรอิสระ ค่าสัมบูรณ์ และ minimax ให้อยู่ในรูปที่ solver รับได้",
          "คำตอบ unbounded มักเป็นสัญญาณว่าลืมข้อจำกัดหรือใส่เครื่องหมายผิด"
        ],
        "emphasis": [
          "นิยามตัวแปรและหน่วยก่อนเขียน objective เสมอ",
          "ตรวจว่าทุกความสัมพันธ์เป็นเชิงเส้น ไม่มีตัวแปรคูณกัน ยกกำลัง หรืออยู่ในส่วนหาร",
          "solver หา optimum ของสมการที่ป้อน แต่ไม่รับรองว่าสมการแทนโลกจริงถูกต้อง"
        ],
        "assignments": [
          "ฝึกแยกโจทย์หนึ่งข้อเป็นตัวแปร เป้าหมาย ข้อจำกัด และขอบเขต",
          "ตรวจหน่วยทั้งสองข้างของทุก constraint และทดลองค่าพื้นฐาน เช่น x = 0",
          "ทบทวนวิธีวินิจฉัย infeasible กับ unbounded ก่อนลงโปรแกรม"
        ],
        "audioUrl": null,
        "audioLabel": "รอลิงก์เสียงคาบ Linear Programming",
        "sourceNote": "อ้างอิงจากสรุป EGCO611 เรื่อง Linear Programming Formulations ที่โพสต์วันที่ 16 ส.ค. 2569; ไม่ใช้โพสต์เตรียมเรียนเป็นหลักฐานวันเรียน"
      },
      {
        "id": "egco611-session-03",
        "number": 3,
        "date": "23 สิงหาคม 2569",
        "week": "Week 3",
        "title": "LP ใน Python และ Integer Programming",
        "subtitle": "ใช้ SciPy แก้ LP อ่านผลลัพธ์ แล้วขยายสู่ ILP, Binary และ MILP",
        "topics": [
          "การส่ง c, A_ub, b_ub, A_eq, b_eq และ bounds เข้า scipy.optimize.linprog",
          "การแปลง maximize เป็น minimize และการอ่าน success, x, fun และ message",
          "การตรวจ slack, utilization และ marginal value หลัง solver ให้คำตอบ",
          "ความต่างของ LP, ILP, Binary และ MILP รวมถึงเหตุผลที่ห้ามปัดเศษคำตอบ LP",
          "แนวคิด LP relaxation, Branch and Bound, linking constraint และ Big-M"
        ],
        "discussions": [
          "คาบช่วงแรกทดลองแปลงโมเดลบนกระดาษเป็นเมทริกซ์ที่โปรแกรมรับ และตรวจคำตอบกลับใน constraint",
          "คาบช่วงหลังใช้ตัวอย่างโต๊ะ–ตู้และการผลิตแบบ batch เพื่อแยกตัวแปรต่อเนื่อง จำนวนเต็ม และ binary",
          "ตัวอย่างปัดคำตอบเศษขึ้นแล้วใช้ทรัพยากรเกิน แสดงว่าการปัดไม่รักษา feasibility",
          "พูดถึงข้อผิดพลาดจากการใช้ NumPy @ กับ * สลับกัน รวมถึงมิติของตัวแปรที่ไม่ตรง"
        ],
        "emphasis": [
          "constraint แบบ ≥ ต้องจัดรูปให้ตรงกับ solver และเมื่อคูณด้วยค่าติดลบต้องกลับเครื่องหมาย",
          "หลังได้คำตอบต้องแทนค่ากลับ ตรวจ slack และคำนวณ objective ซ้ำเอง",
          "Parameter คือค่าที่ป้อน ส่วน variable คือค่าที่โปรแกรมต้องหา",
          "Big-M ที่ใหญ่เกินไปอาจทำให้การคำนวณช้าหรือไม่เสถียร"
        ],
        "assignments": [
          "เตรียมแปลง MILP เป็นโปรแกรม โดยแยกตัวแปรต่อเนื่องกับตัวแปรจำนวนเต็มให้ชัด",
          "ฝึกโมเดลโจทย์ batch ที่มีค่าตั้งเครื่อง ชั่วโมงล่วงเวลา และตัวแปรเปิด–ปิด",
          "ติดตามประกาศการบ้าน modelling และการเขียนโปรแกรม เพราะในคาบยังไม่ยืนยันโจทย์และกำหนดส่ง"
        ],
        "audioUrl": "https://drive.google.com/drive/folders/1Xa0XqFOcdfu1PiBiyhU4GmYdGfrtU6ni",
        "audioLabel": "ไฟล์เสียงคาบ 23 ส.ค. 2569",
        "sourceNote": "รวมสรุปซ้ำจากเสียงคาบ 13:20 และ 15:07 วันที่ 23 ส.ค. เป็นหนึ่ง taught session; เก็บสาระจากทั้ง LP implementation และ MILP โดยไม่เลือกตัวเลขที่ขัดกัน"
      },
      {
        "id": "egco611-session-04",
        "number": 4,
        "date": "30 สิงหาคม 2569",
        "week": "Week 4",
        "title": "MILP สำหรับ Server และการเปิดหัวข้อ ODE",
        "subtitle": "แก้โจทย์เลือก CPU แบ่ง workload และเชื่อมจากโมเดลคงที่ไปสู่ระบบที่เปลี่ยนตามเวลา",
        "topics": [
          "โจทย์เลือกจำนวน CPU แบบ ILP และการตรวจ computing, memory, slot และต้นทุน",
          "โจทย์แบ่ง workload แบบ MILP ที่มีต้นทุนเปิดเครื่องและต้นทุนตามปริมาณงาน",
          "การใช้ scipy.optimize.milp, integrality, bounds และ LinearConstraint",
          "โมเดล task assignment ที่งานแบ่งไม่ได้และเครื่องต้องเปิดก่อนรับงาน",
          "บทนำ ODE: state, เวลา, balance law และความต่างของ static กับ dynamic"
        ],
        "discussions": [
          "ตัวอย่าง CPU ได้คำตอบจำนวนเต็มและตรวจกลับกับข้อจำกัดทุกข้อก่อนยอมรับต้นทุน",
          "ตัวอย่าง workload ใช้ q เป็นงานต่อเนื่องและ y เป็น binary เพื่อบังคับว่าปิดเครื่องแล้วรับงานไม่ได้",
          "โจทย์ task assignment เชื่อมแนวคิด fixed cost, capacity และการส่งแต่ละงานไปเพียงเครื่องเดียว",
          "ตัวอย่างอุณหภูมิ CPU แบตเตอรี่ และวงจรช่วยอธิบายว่าระบบ dynamic มีความจำและเปลี่ยนตามเวลา"
        ],
        "emphasis": [
          "ค่า integer จาก solver อาจคลาดเล็กน้อยทางทศนิยม จึงต้องอ่านอย่างระวังและตรวจ constraint ซ้ำ",
          "linking constraint เชื่อมปริมาณงานกับสถานะเปิด–ปิดของทรัพยากร",
          "หัวใจของ ODE คือ อัตราสะสม = ไหลเข้า − ไหลออก + สร้างขึ้น − ถูกใช้",
          "PDE ถูกกล่าวถึงเป็นความรู้ต่อยอด แต่ไม่ใช่เนื้อหาที่ลงรายละเอียดในคาบนี้"
        ],
        "assignments": [
          "ติดตามการบ้านทบทวนช่วงงดเรียนจากช่องทางของรายวิชา",
          "ฝึกเขียนโมเดล server ทั้งแบบงานแบ่งได้และงานแบ่งไม่ได้ พร้อมตรวจคำตอบด้วยมือ",
          "เตรียม ODE, solve_ivp และ system of ODE สำหรับคาบถัดไป",
          "เตรียมสอบกลางภาคหลังจบ ODE; หลักฐานขณะนั้นระบุวันที่ 27 ก.ย."
        ],
        "audioUrl": "https://drive.google.com/drive/folders/1xzeiKRHtaji8jLsYglGAhg8eNBUalIMn",
        "audioLabel": "ไฟล์เสียงคาบ 30 ส.ค. 2569",
        "sourceNote": "รวมสรุปสองตอนของคาบเดียววันที่ 30 ส.ค. 2569 เป็นหนึ่ง taught session: MILP/Server และ ODE introduction"
      },
      {
        "id": "egco611-session-05",
        "number": 5,
        "date": "14 กันยายน 2569",
        "week": "Week 6",
        "title": "ODE และ Dynamic Model ด้วย solve_ivp",
        "subtitle": "สร้างสมการจากกฎสมดุล แยก state/input/parameter และตีความการเปลี่ยนแปลงตามเวลา",
        "topics": [
          "การแยก State, Input, Parameter, Output และ Initial condition จากโจทย์",
          "การสร้าง ODE ด้วยกฎสมดุลและจัดรูป dx/dt = f(t, x, u, θ)",
          "ตัวอย่างถังน้ำรั่ว Newton’s law of cooling และโมเดลความร้อนของ CPU",
          "จุดสมดุลและ time constant ที่ใช้อธิบายปลายทางกับความเร็วการตอบสนองของระบบ",
          "การใช้ solve_ivp และ RK45 ด้วย fun, t_span, y0 และ t_eval"
        ],
        "discussions": [
          "เครื่องหมายของอนุพันธ์บอกทิศทาง: ค่าบวกคือเพิ่ม ค่าลบคือลด และศูนย์คือสมดุล",
          "โมเดล CPU ใช้เรื่องราวความร้อนสะสมเท่ากับความร้อนที่สร้างลบความร้อนที่ระบายออก",
          "วงจร RC ถูกใช้เทียบให้เห็น state ของแรงดัน การชาร์จ การคายประจุ และค่าคงตัว RC",
          "ผลจากวิธีเชิงตัวเลขเป็นค่าประมาณตามจุดเวลา ไม่ใช่สูตรปิดที่สวยเสมอไป"
        ],
        "emphasis": [
          "เริ่มจากเรื่องราวและ balance ก่อนเขียนสูตร เพื่อไม่ให้สลับเครื่องหมายเข้า–ออก",
          "ต้องระบุค่าเริ่มต้น ตรวจหน่วย และทดสอบพฤติกรรมของสมการก่อนเรียก solver",
          "แยกค่าที่ควบคุมได้ออกจากคุณสมบัติคงที่ของระบบให้ชัด",
          "ข้อสอบมีแนวโน้มถามทั้งการตั้งสมการ การจัดรูปสำหรับ solver และการตีความผล"
        ],
        "assignments": [
          "เตรียมการบ้านประมาณ 3 ส่วน: Linear Programming, Binary Programming และ Mixed-Integer Programming",
          "แต่ละส่วนควรมี mathematical model, Python ด้วย PuLP และ post-analysis ใน Jupyter Notebook",
          "รอประกาศตัวเลขโจทย์และกำหนดส่งอย่างเป็นทางการ เพราะหลักฐานวันที่ 14 ก.ย. ยังไม่ยืนยัน",
          "ฝึกเขียน ODE ของถังน้ำ โมเดลอุณหภูมิ CPU แบบกำลังเปลี่ยนช่วง และวงจร RC"
        ],
        "audioUrl": "https://drive.google.com/drive/folders/1MiHi10ViC4BRJDnCnLa6qFyE28gCGBaG",
        "audioLabel": "ไฟล์เสียงคาบ 13 ก.ย. 2569",
        "sourceNote": "อ้างอิงจากสรุปหลังเรียน ODE สองตอนที่โพสต์วันที่ 14 ก.ย. 2569 และระบุว่ามาจากข้อความถอดเสียงคาบ; ไม่รวม daily drill เป็นหลักฐานการสอน"
      },
      {
        "id": "egco611-session-06",
        "number": 6,
        "date": "20 กันยายน 2569",
        "week": "Week 7",
        "title": "Buffer Model, System of ODE และ SIR",
        "subtitle": "เพิ่ม Constraint ให้โมเดล แยกเคสด้วย max/min และ events ขยายสู่หลายสมการและระบบ non-linear",
        "topics": [
          "Communication Buffer Model: dQ/dt = λ(t) − μ(t) แบบไม่จำกัดความจุ และปัญหาที่ตามมา (Q ติดลบ / ทะลุ Q_max)",
          "แบ่ง 3 เคสด้วย constraint: Q=0 (ต้อง max(0, λ−μ)), 0<Q<Q_max (สมการปกติ), Q=Q_max (ต้อง min(λ, μ) หรือปฏิเสธของเข้า)",
          "solve_ivp events: ฟังก์ชัน event พร้อม attribute terminal=True หยุดการ integrate และ direction=+1/−1/0 ระบุทิศการตัดเกณฑ์",
          "t_events และ y_events อ่านเวลา/ค่า ณ จุดที่ event เกิด (เช่น empty buffer ที่ t≈2.57, full buffer ที่ t=3)",
          "System of ODE: CPU→Heatsink→สิ่งแวดล้อม ได้ 2 สมการ T_P, T_H ผูกกันผ่าน Q = ΔT/R",
          "จัดรูปเป็น State-space ẋ = Ax + Bu (A คูณกับ state, B คูณกับ input/parameter) — solver รับหลายสมการโดยไม่ต้องจัด matrix ก็ได้",
          "SIR Model: dS/dt=−βSI/N, dI/dt=βSI/N−γI, dR/dt=γI — non-linear จากพจน์ S×I",
          "ตรวจโมเดลด้วย conservation: สมการทุกตัวบวกกันแล้วเหลือแค่ in−out (ความร้อนรวม, S+I+R=N)",
          "ความหมายของ Heat capacity C: พลังงานเข้าน้อยเทียบ C ใหญ่ → อุณหภูมิแทบไม่ขยับ (initial derivative = P/C)",
          "ทุก parameter เปลี่ยนเป็น function of time ได้ (P(t), λ(t), μ(t), T_A(t) เป็น step function ได้)"
        ],
        "discussions": [
          "ถามในห้อง: โมเดล buffer แบบง่ายมีปัญหาตรงไหน — นำไปสู่การเพิ่ม constraint 0 ≤ Q(t) ≤ Q_max",
          "ถามต่อ: ทำไมไม่เซ็ต dQ/dt=0 ตอน Q=0 — เพราะยังมีของไหลเข้า-ออกพร้อมกันได้ จึงต้องเขียนเป็น max/min ให้ flexible",
          "ลองเล่น Colab ที่แชร์: ปรับ arrival/transmit rate และเปลี่ยน events ดูว่าเกิด empty/full เมื่อไหร่",
          "ผู้เรียนถามเรื่อง Plague Inc. — อาจารย์ยืนยันเกมสร้างบนโมเดลแพร่เชื้อแบบ SIR/SIRD จริง",
          "ถามหน่วยของ β, γ: อาจารย์อธิบายคน/เวลา และการตรวจหน่วยให้สอดคล้อง (คน/เวลา ทุกพจน์)",
          "ช่วงท้ายมีการเช็คชื่อและเตือนเรื่องเวลาสอนเกิน (อาจารย์ขอโทษที่คลาสยาว)"
        ],
        "emphasis": [
          "โมเดลตามทฤษฎีถูกแต่ใช้จริงไม่ได้ ต้องแยก case ตาม constraint (สิ่งที่จำกัดเช่น buffer/battery capacity)",
          "Event ของ solve_ivp ส่วนใหญ่ set terminal=True หยุดการทำงาน และ event function ต้องรับ argument เท่ากับโมเดล",
          "จำนวน state = จำนวน output ที่ต้องการ (SIR มี 3 state → 3 สมการ) และ initial state ต้องสอดคล้อง constraint (เช่น Q₀ ≤ Q_max)",
          "CPU ไม่แลกเปลี่ยนกับสิ่งแวดล้อมโดยตรง (เฉพาะผ่าน heatsink) — ถ้าเพิ่มทางแลกตรงต้องเพิ่มพจน์ −(T_P−T_A)/R_PA",
          "SIR non-linear ตรงพจน์ βSI/N — ต่างจาก linear system ที่ state คูณกับค่าคงที่บวกลบกันเฉย ๆ",
          "SIR assumption: ประชากรปิด ไม่มีเกิด/ตาย/ย้ายเข้าออก หายแล้วหายเลย (ไม่กลับไป S ถ้าไม่เพิ่มเส้น R→S)",
          "ตรวจความถูกต้อง: สมการทุกตัวบวกกัน → conservation; ค่าเริ่มต้นที่สมดุล → derivative เป็น 0; พลังงานน้อย/C ใหญ่ → แทบไม่ขยับ",
          "เมื่ออัตราติดเชื้อสูงกว่าอัตราหายมาก คนจะติดเชื้อจนเกือบหมดแล้วหายไป R เกือบ N"
        ],
        "assignments": [
          "การบ้านโพสต์แล้ว (แต่งเลขให้ครบ มีโน้ตกำกับ) — ข้อสุดท้าย optional ใช้ solver อะไรก็ได้ แนะนำ PuLP เพราะกินสมการ symbolic ตรง ๆ",
          "หนึ่งข้อมีสองคำตอบ (objective เท่ากัน) — อาจารย์เตือนไม่ต้องตกใจ",
          "ส่ง 2 ไฟล์: .ipynb (แบ่ง section 1-2-3 ใน Colab) และไฟล์เอกสารคำอธิบาย/วิเคราะห์ (desc→สมการ→แทนเลข→post-analysis)",
          "หากสอบต้องเขียน solve_ivp อาจารย์ให้ credit ที่ logic สมการถูก — syntax ผิดเล็กน้อยไม่หัก (อ่านรู้เรื่อง ไม่หัก)",
          "ครั้งหน้า: Linear Algebra ~6 ชั่วโมง ต่อเนื่อง Data Mining; อีก ~2 สัปดาห์ถึง midterm"
        ],
        "audioUrl": "https://drive.google.com/drive/folders/1j8QufhqnXpyYrZZbMX3oB6zMyZX9Cah8",
        "audioLabel": "ไฟล์เสียงคาบ 20 ก.ย. 2569",
        "sourceNote": "สรุปจาก transcript ไฟล์เสียงคาบ 20 ก.ย. 2569 (กรอง noise ทักทายซ้ำออกแล้ว) — สอนต่อจากคาบ 14 ก.ย. อย่างต่อเนื่อง"
      }
    ],
    "skillPath": "./downloads/egco611/SKILL.md"
  },
  {
    "code": "EGCO623",
    "title": "Data Mining and Machine Learning",
    "shortTitle": "Data Mining & ML",
    "description": "จากการทำความเข้าใจและเตรียมข้อมูล คลังข้อมูล OLAP Dashboard ไปจนถึง Association Analysis หาความสัมพันธ์ของไอเทมที่ซื้อพร้อมกัน",
    "focus": "เน้นสำรวจข้อมูล เตรียมข้อมูล วิเคราะห์หลายมิติ และนำข้อมูลไปใช้ตัดสินใจ",
    "accent": "#003366",
    "lectures": [
      {
        "id": "egco623-session-01",
        "number": 1,
        "date": "11 สิงหาคม 2569",
        "week": "Week 1",
        "title": "Data Mining, KDD และจริยธรรมข้อมูล",
        "subtitle": "เริ่มจากข้อมูลดิบ เปลี่ยนให้เป็นความรู้ และเลือกชนิดงานวิเคราะห์ให้ตรงโจทย์",
        "topics": [
          "ลำดับ Data → Information → Knowledge → Wisdom",
          "กระบวนการ KDD: เตรียมข้อมูล → ทำ Data Mining → ตรวจและนำผลไปใช้",
          "งานหลัก Classification, Regression, Clustering และ Anomaly Detection",
          "Supervised กับ Unsupervised Learning และภาพรวมเครื่องมือ Machine Learning",
          "Ethics, Privacy, Bias และการดูแลโมเดลหลังใช้งานด้วย MLOps"
        ],
        "discussions": [
          "เปรียบข้อมูลเหมือนเบาะแส: รหัสไฟแดงเป็นข้อมูลดิบ แต่เมื่อรู้สถานที่และช่วงรถติดจึงใช้ตัดสินใจได้",
          "ยกตัวอย่างทำนายลูกค้าย้ายค่าย ยอดขาย ความเร็วลม การโกงบัตรเครดิต และการแบ่งกลุ่มลูกค้า",
          "โมเดลที่แม่นอาจยังไม่ดี หากเลือกปฏิบัติจากเพศหรือเชื้อชาติ หรือใช้ข้อมูลโดยไม่เคารพความเป็นส่วนตัว"
        ],
        "emphasis": [
          "เริ่มจากคำถามว่าอยากรู้อะไร แล้วค่อยเลือกวิธีวิเคราะห์",
          "การเตรียมข้อมูลเป็นส่วนหนึ่งของกระบวนการ ไม่ใช่งานเก็บกวาดท้ายสุด",
          "ความแม่นยำต้องเดินคู่กับจริยธรรม ความเป็นส่วนตัว และการตรวจอคติ"
        ],
        "assignments": [
          "ฝึกแยกโจทย์ว่าเป็น Classification, Regression, Clustering หรือ Anomaly Detection",
          "ทบทวนว่า Supervised และ Unsupervised Learning ต่างกันอย่างไร",
          "ไม่มีหลักฐานกำหนดส่งงานเฉพาะคาบในข้อความสรุปนี้"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 11 ส.ค. 2569",
        "sourceNote": "อ้างอิงสรุปหลังเรียน Slack ts 1786424583.446999 (S1)"
      },
      {
        "id": "egco623-session-02",
        "number": 2,
        "date": "16 สิงหาคม 2569",
        "week": "Week 2",
        "title": "Exploring Data และ Data Quality",
        "subtitle": "รู้จักแถว คอลัมน์ ชนิดข้อมูล คุณภาพข้อมูล และสถิติพื้นฐานก่อนสร้างโมเดล",
        "topics": [
          "Concept, Instance/Object และ Attribute/Feature",
          "Nominal, Ordinal, Interval, Ratio รวมถึง Discrete และ Continuous",
          "รูปแบบข้อมูล Record, Data Matrix, Document, Transaction, Graph และ Ordered Data",
          "Noise, Outlier, Missing Value, ข้อมูลไม่สอดคล้อง ข้อมูลซ้ำ และข้อมูลเก่า",
          "Mean, Median, Range, Variance, Standard Deviation, IQR และการทำ EDA"
        ],
        "discussions": [
          "ชนิดข้อมูลเหมือนป้ายบนกล่อง: ถ้าติดป้ายผิด เครื่องมือก็จัดการของข้างในผิด เช่นเปรียบว่า outlook มากกว่า sunny ซึ่งไม่มีความหมาย",
          "Mean ถูก outlier ดึงง่าย ขณะที่ Median และ IQR มักทนกว่า",
          "เมื่อนำหลายแหล่งมารวม ต้องตรวจรูปแบบเวลา key หน่วย และระดับการสรุปให้ตรงกัน",
          "ผลลัพธ์การเรียนรู้ยกตัวอย่าง Decision Table, Decision Tree, IF–THEN Rule และ k-nearest neighbors"
        ],
        "emphasis": [
          "สำรวจข้อมูลก่อนเชื่อหรือสร้างโมเดล",
          "เลือกสถิติให้เหมาะกับชนิดข้อมูลและผลกระทบของ outlier",
          "อย่าแก้ค่าหายด้วยสูตรเดียวทุกกรณี ต้องเข้าใจบริบทข้อมูล"
        ],
        "assignments": [
          "คำนวณ sample mean, variance, standard deviation, median, quartiles, range และ IQR จากค่า yield strength 11 ค่า",
          "ตรวจปัญหาคุณภาพข้อมูลในตารางบุคคล เช่น ID ซ้ำ วันที่คนละรูปแบบ ค่าหาย และข้อมูลขัดแย้ง"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 16 ส.ค. 2569",
        "sourceNote": "อ้างอิงสรุปหลังเรียน Slack ts 1786847322.238019 (S2); ไม่ใช้โพสต์เตรียมเรียน"
      },
      {
        "id": "egco623-session-03",
        "number": 3,
        "date": "22 หรือ 23 สิงหาคม 2569 (ข้อความต้นทางระบุไม่ตรงกัน)",
        "week": "Week 3",
        "title": "Visualization และ Data Preprocessing",
        "subtitle": "รวมสรุปซ้ำของช่วงเรียนเดียวกัน: อ่านกราฟ ล้างข้อมูล ปรับสเกล สุ่มตัวอย่าง และลดมิติ",
        "topics": [
          "Visualization ด้วย Histogram, Boxplot, Scatter Plot และ Correlation Matrix",
          "Data Cleaning: ค่าหาย ข้อมูลผิด หน่วยไม่ตรง และหมวดหมู่ไม่สอดคล้อง",
          "หา Outlier ด้วย Z-score และ IQR",
          "ปรับสเกลด้วย Min-Max Normalization และ Z-score Standardization",
          "Sampling, Aggregation, Discretization และ Curse of Dimensionality",
          "Feature Selection กับ Feature Extraction เช่น PCA และ LDA"
        ],
        "discussions": [
          "การเตรียมข้อมูลเหมือนล้างและหั่นวัตถุดิบก่อนปรุง: Garbage In ย่อมได้ Garbage Out",
          "กราฟช่วยเห็นรูปแบบและจุดผิดปกติเร็ว แต่จำนวน bin มุมมอง 3 มิติ และการเลือกข้อมูลอาจทำให้ตีความต่างกัน",
          "เติมค่าหายด้วย mean โดยไม่เข้าใจคอลัมน์อาจสร้างค่าที่ไม่มีความหมาย จึงควรถามผู้รู้โดเมนหรือเจ้าของฐานข้อมูล",
          "PCA เหมือนหามุมถ่ายรูปที่เห็นความต่างมากที่สุด ส่วน LDA หามุมที่แยกกลุ่มที่รู้ป้ายแล้วให้ชัด",
          "สรุปวันที่ 22 ส.ค. สองข้อความและ 23 ส.ค. สองข้อความมีเนื้อหาต่อเนื่องและทับซ้อน จึงนับเป็นคาบเดียวแทนการเพิ่มจำนวนคาบ"
        ],
        "emphasis": [
          "อย่าลบค่าหายหรือ outlier ทันที ต้องถามก่อนว่าค่านั้นผิดจริงหรือเป็นเหตุการณ์สำคัญ",
          "ปรับสเกลเมื่อฟีเจอร์มีช่วงตัวเลขต่างกันมาก เพื่อไม่ให้คอลัมน์เลขใหญ่ครอบโมเดล",
          "ลดมิติเพื่อแก้ข้อมูลเบาบางและลดฟีเจอร์ซ้ำซ้อน แต่ต้องรักษาความหมายที่จำเป็น"
        ],
        "assignments": [
          "In-class 0.5 คะแนน: เติม Normalize และ Standardize ในไฟล์ Excel ส่วนสูง 14 คน แล้วส่ง Classroom",
          "คำนวณ Pearson r ของ (160,55), (170,65), (180,75) และบอกความแรงกับทิศทาง",
          "เลือกฟีเจอร์ useful/irrelevant สำหรับทำนายราคาบ้านพร้อมเหตุผล",
          "วิเคราะห์ correlation ระหว่างขนมกับน้ำอัดลม แล้วเสนอฟีเจอร์รวมหนึ่งตัว",
          "กำหนดส่งที่สรุประบุคือเที่ยงคืนของวันที่เรียน แต่วันเรียนขัดกันระหว่าง 22 กับ 23 ส.ค.; ต้องตรวจ Classroom ก่อนยืนยันวันปฏิทิน"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงช่วงเรียน 22/23 ส.ค. 2569 (รอตรวจวันที่)",
        "sourceNote": "รวมสรุปซ้ำ S3–S6: Slack ts 1787418604.643899, 1787418605.134559, 1787498424.697089, 1787498425.182199; วันที่หัวข้อความระบุ 22 และ 23 ส.ค. ไม่ตรงกัน จึงไม่เดา"
      },
      {
        "id": "egco623-session-04",
        "number": 4,
        "date": "30 สิงหาคม 2569",
        "week": "Week 4",
        "title": "Data Warehouse, OLAP และ Power BI",
        "subtitle": "มองข้อมูลหลายมิติ สรุปจากคลังข้อมูล และเปลี่ยนตารางให้เป็น Dashboard ที่ตอบคำถามได้",
        "topics": [
          "Data Warehouse แบบ Subject-oriented, Integrated, Time-variant และ Non-volatile",
          "Data Cube และ OLAP operators: Roll-up, Drill-down, Slice, Dice และ Pivot",
          "ROLAP, MOLAP, HOLAP และโครงสร้าง Star, Snowflake, Fact Constellation",
          "ความต่างระหว่าง OLTP สำหรับธุรกรรมประจำวันกับ OLAP สำหรับการวิเคราะห์อดีต",
          "Power BI workflow: Import → Model Relationship → Visualize → Slicer → Measure"
        ],
        "discussions": [
          "Data Warehouse เหมือนตู้เย็นกลางบ้านที่รวมวัตถุดิบจากหลายที่ให้พร้อมใช้ ส่วน Data Mart เป็นช่องย่อยของแต่ละแผนก",
          "Data Cube เหมือนลูกบาศก์รูบิคที่ดูยอดขายผ่านมิติสินค้า ร้าน และเวลา แล้วหมุนมุมมองเพื่อหาคำตอบ",
          "ROLAP เก็บแบบตารางและใช้ SQL, MOLAP คำนวณสรุปล่วงหน้าเพื่อความเร็ว, HOLAP ผสมสองแบบ",
          "ใน Power BI เชื่อม CategoryID แบบ many-to-one แล้วใช้ Slicer ให้ทุกกราฟเปลี่ยนตามหมวดที่เลือก"
        ],
        "emphasis": [
          "เลือกมิติและค่าที่ต้องการวัดให้ตรงคำถามธุรกิจ",
          "Roll-up คือสรุปกว้างขึ้น ส่วน Drill-down คือเปิดรายละเอียดลึกลง",
          "Dashboard หนึ่งหน้าควรช่วยตอบคำถาม ไม่ใช่เพียงรวมกราฟสวย ๆ"
        ],
        "assignments": [
          "Zoom assignment #7: ทำ Power BI dashboard หนึ่งหน้า มี KPI, Sales Trend, Product Performance, Customer Analysis, Sales by Category และ Slicer",
          "ส่งภาพหน้าจอและตอบคำถามเรื่องสินค้าขายดี ลูกค้ารายได้สูงสุด แนวโน้มยอดขาย ความต่างของแต่ละหมวด และ Average Order Value",
          "ข้อความประกาศระบุว่างดเรียนสองสัปดาห์ และจะเริ่ม Association Analysis เมื่อกลับมา"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 30 ส.ค. 2569",
        "sourceNote": "รวมสรุปสองตอนของคาบเดียวกัน Slack ts 1788109078.728709 และ 1788109079.223369 (S7–S8)"
      },
      {
        "id": "egco623-session-05",
        "number": 5,
        "date": "20 กันยายน 2569",
        "week": "Week 7",
        "title": "Association Analysis (Market Basket Analysis)",
        "subtitle": "หาไอเทมที่ถูกหยิบพร้อมกันบ่อย แล้วสร้างกฎ ถ้าเห็น X แล้วมักเห็น Y ตามมา",
        "topics": [
          "ที่มา Market Basket Analysis: วิเคราะห์ตะกร้าซื้อของ ขยายไปหนังสือ หนัง เพลง ระบบแนะนำ การแพทย์ และ Web mining",
          "คำศัพท์หลัก: Item set (ชุดไอเทมอย่างน้อย 1 ชิ้น เป็นเซต ลำดับไม่มีผล), Transaction (รายการซื้อ 1 ครั้ง), K-itemset",
          "Frequent itemset: itemset ที่ support ≥ minimum support threshold",
          "Association rule X → Y: ฝั่งซ้ายคือ antecedent ฝั่งขวาคือ consequent ความหมายจริงคือเกิดพร้อมกัน (co-occurrence)",
          "สูตรหลัก: support(X∪Y) = count(X∪Y)/N, confidence(X→Y) = support(X∪Y)/support(X), lift(X→Y) = confidence(X→Y)/support(Y)",
          "ตัวอย่างตะกร้า 5 รายการ (Bread, Milk, Diaper, Beer, Egg, Coke): นับ support และ confidence ทีละกฎ",
          "คุณสมบัติ anti-monotone (downward closure): ถ้า itemset ไม่ frequent แล้ว superset ทุกตัวไม่ frequent",
          "Apriori algorithm: สร้าง candidate รายตัว → ตัดตัวไม่ผ่าน → join เป็น k+1 ทีละระดับ จนหมด",
          "FP-Growth: บีบอัดข้อมูลเป็น FP-tree เพื่อเลี่ยง candidate generation เร็วกว่าในชุดข้อมูลใหญ่",
          "Maximal frequent itemset: frequent itemset ที่ไม่มี superset ที่ยัง frequent; Closed itemset: ไม่มี superset ที่มีค่า support เท่ากัน; Maximal ⊆ Closed",
          "การสร้างกฎจาก frequent itemset: กฎทั้งหมด 2^k − 2 แบบ, pruning ด้วย confidence ฝั่งซ้าย/ขวา",
          "Drawback ของ confidence: กฎชา→กาแฟ confidence 0.75 แต่คนดื่มกาแฟอยู่แล้ว 90% กฎจึงไม่ให้ข้อมูลใหม่",
          "คุณสมบัติของ measure: support และ lift เป็น symmetric, confidence เป็น asymmetric"
        ],
        "discussions": [
          "แน็กและเพื่อนถามว่าเบียร์ต้องแยกยี่ห้อไหม: อาจารย์ตอบขึ้นกับระดับความละเอียดของการวิเคราะห์ ถ้าสนใจแบรนด์ค่อยแยก ถ้าไม่สนก็รวมเป็นกลุ่มเดียว (บาร์โค้ดก็ใช้ได้)",
          "เคสผ้าอ้อมกับเบียร์: พ่อบ้านอายุน้อยซื้อผ้าอ้อมแล้วมักซื้อเบียร์ในวันศุกร์ ร้านใช้จัดวางชั้นและวางแผนโปรโมชัน",
          "ทำไมต้องหา Maximal/Closed: ทุก frequent itemset สร้างกฎได้เยอะและซ้ำซ้อน เลือกขอบกราฟ (Maximal) หรือตัวที่ support สูง (Closed) ไปต่อคุ้มกว่า",
          "กฎเยอะเมื่อ threshold ต่ำ: ผู้ใช้ต้องคัดกรองเอง บางกฎผ่านตัวเลขแต่ไม่สมเหตุสมผลในเชิงธุรกิจ",
          "การใช้งานจริง: วางขนมปังกับนมไว้ใกล้กัน ทำโปรโมชันซื้อคู่ หรือแนะนำสินค้าในระบบ recommendation"
        ],
        "emphasis": [
          "Association analysis เป็น unsupervised: มีแต่ตัวอย่าง ไม่มีคำตอบ อัลกอริทึมต้องจับความสัมพันธ์เอง",
          "support ใช้เลือก frequent itemset, confidence ใช้เลือกกฎ, lift ใช้เทียบกับ random chance",
          "กฎจาก itemset เดียวกัน support เท่ากันหมด แต่ confidence ต่างกันตามตัวหาร (ฝั่งซ้าย)",
          "คัดแล้วเหลือน้อยแต่ล้วนคุ้ม: ตัดไข่กับโค้กตั้งแต่ 1-itemset แล้ว superset ที่มีสองตัวนี้ไม่ต้องพิจารณา"
        ],
        "assignments": [
          "Exercise ในห้อง: หา support กับ confidence ของกฎ 7 ข้อจาก itemset {ขนมปัง, นม, ผ้าอ้อม} แล้วเช็คกับ min-support 0.4 / min-confidence 0.5",
          "Exercise 2: หา maximal/closed itemset จาก transaction 5 รายการ (min-support 2)",
          "Exercise 3: สร้าง association rules จาก transaction เดิม (min-support 0.6, min-confidence 0.5) ได้ผ่านเกณฑ์ 8 กฎ",
          "โจทย์เพิ่มเติมในสไลด์: min-support 0.3 / min-confidence 0.6 สำหรับเซ็ตไอเทมใหม่ (ฝึกเพิ่มเติม)",
          "งานส่งในคาบ (เขียนชื่อ-รหัส): กระดาษคำนวณ support/confidence และระบุกฎที่ผ่านเกณฑ์"
        ],
        "audioUrl": "https://drive.google.com/drive/folders/1JNWLP8uAYba1yTdpeEW0S6t4XzfYfm9M",
        "audioLabel": "ไฟล์เสียงคาบ 20 ก.ย. 2569",
        "sourceNote": "สรุปจาก transcript ที่ผู้ใช้ส่ง 20/09/2569 (อ่านจากการถอดเสียงโดยตรง)"
      }
    ],
    "skillPath": "./downloads/egco623/SKILL.md"
  },
  {
    "code": "EGCO676",
    "title": "Network Security and Risk Assessment",
    "shortTitle": "Network Security",
    "description": "สรุปหลังเรียนจริง 5 คาบ ตั้งแต่พื้นฐานความเสี่ยง การเข้ารหัส ความถูกต้องของข้อมูล โครงสร้างความเชื่อถือของกุญแจ ไปจนถึงคาบวิชาการเรื่อง Research Gap",
    "focus": "ความมั่นคงปลอดภัย การเข้ารหัส และการจัดการความเสี่ยง",
    "accent": "#003366",
    "lectures": [
      {
        "id": "lecture-01",
        "number": 1,
        "date": "15 สิงหาคม 2569",
        "week": "Week 1",
        "title": "Introduction, CIA และการประเมินความเสี่ยง",
        "subtitle": "รู้ว่าต้องปกป้องอะไร แยกภัยคุกคามออกจากช่องโหว่ และเลือกวิธีจัดการความเสี่ยง",
        "topics": [
          "CIA Triad: Confidentiality, Integrity และ Availability",
          "Authentication, Authorization, Accountability/Auditing และ Non-repudiation",
          "ความแตกต่างระหว่าง Threat, Vulnerability, Risk และ Countermeasure",
          "Defense in Depth, Security–Usability balance และการลด Attack Surface",
          "ภาพรวม Symmetric, Asymmetric, Hash, MAC, Digital Signature, PKI และ Key Management"
        ],
        "discussions": [
          "ใช้ Mobile Banking แยกภาพของความลับ ความถูกต้อง และความพร้อมใช้",
          "ความเสี่ยงต้องดูทั้งมูลค่าของสิ่งที่ปกป้อง ภัยคุกคาม ช่องโหว่ โอกาสเกิด และผลกระทบ",
          "ระบบที่ปลอดภัยไม่ควรฝากความหวังไว้กับด่านเดียว แต่ต้องป้องกันหลายชั้นทั้งคน ขั้นตอน เครือข่าย และข้อมูล",
          "โปรเจกต์เป็นงานเดี่ยว ใช้หัวข้อเดียวต่อเนื่องทั้งเทอม และอาจต่อยอดเป็นหัวข้อจบได้"
        ],
        "emphasis": [
          "CIA เป็นเป้าหมาย ไม่ใช่รายชื่อเครื่องมือ",
          "Top-down มักสำเร็จกว่า เพราะผู้บริหารกำหนดนโยบาย ผู้รับผิดชอบ และการบังคับใช้ได้",
          "Key Management สำคัญพอ ๆ กับการเลือกอัลกอริทึม",
          "ตารางรายวิชายังเปลี่ยนได้ ให้ตรวจประกาศล่าสุดใน Google Classroom"
        ],
        "assignments": [
          "Assignment 3 ครั้ง รวม 15%",
          "Term Project 4 ช่วง รวม 55%: Topic 5%, Literature Review 10%, Progress/Methodology 15%, Final Presentation + Report 25%",
          "Examination 30%",
          "เตรียม Project 01: Topic, Motivation, Objective และ Expected Outcome สำหรับ 26 กันยายน"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 15 ส.ค. 2569",
        "sourceNote": "อ้างอิงจากสรุปหลังเรียน Week 01 และบันทึกคำบรรยายวันที่ 15 ส.ค. 2569"
      },
      {
        "id": "lecture-02",
        "number": 2,
        "date": "22 สิงหาคม 2569",
        "week": "Week 2",
        "title": "Symmetric Cryptography",
        "subtitle": "กุญแจลับดอกเดียว แบบจำลองการโจมตี และเส้นทางจาก DES ไป AES",
        "topics": [
          "Symmetric key และสมการ C = E(K, P), P = D(K, C)",
          "Cryptography ต่างจาก Steganography อย่างไร",
          "การโจมตีแบบ Ciphertext-only, Known-plaintext, Chosen-plaintext และ Chosen-ciphertext",
          "DES, Double DES, 3DES และ AES",
          "โหมด ECB, CBC, CFB, OFB, CTR และ Stream cipher"
        ],
        "discussions": [
          "กุญแจดอกเดียวทำให้เข้ารหัสข้อมูลจำนวนมากได้เร็ว แต่ติดปัญหาว่าจะส่งกุญแจให้ผู้รับอย่างปลอดภัยอย่างไร",
          "ตามหลัก Kerckhoffs ระบบควรยังปลอดภัยแม้อัลกอริทึมเปิดเผย เพราะความลับอยู่ที่กุญแจ",
          "Double DES ไม่ได้เพิ่มความแข็งแรงเป็นสองเท่า เพราะการโจมตี meet-in-the-middle",
          "ECB เผยรูปแบบของข้อมูลซ้ำ ส่วน CTR ทำงานขนานได้และความผิดพลาดไม่กระจายไปบล็อกอื่น",
          "รหัสผ่านยาวร่วมกับ MFA และ password manager ช่วยได้มากกว่าการจำรหัสสั้นที่ซับซ้อน"
        ],
        "emphasis": [
          "DES เลิกใช้แล้ว; หากต้องเลือกรหัสสมมาตรสมัยใหม่ให้คิดถึง AES",
          "AES รองรับกุญแจ 128, 192 และ 256 บิต โดยใช้ 10, 12 และ 14 รอบตามลำดับ",
          "ห้ามเลือก mode จากชื่ออย่างเดียว ต้องดู pattern, การทำงานขนาน และการกระจายของ error",
          "การเข้ารหัสช่วยเรื่อง Confidentiality แต่ไม่ได้รับประกัน Integrity หรือ Authentication โดยอัตโนมัติ"
        ],
        "assignments": [
          "คาบนี้ไม่มีการบ้าน EGCO676 ใหม่",
          "ทบทวนความต่างของโหมด ECB, CBC และ CTR พร้อมอธิบายข้อดีข้อเสีย",
          "เตรียมคาบถัดไปเรื่อง Asymmetric key และผลกระทบจาก Quantum computing"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 22 ส.ค. 2569",
        "sourceNote": "อ้างอิงจากสรุปหลังเรียน EGCO676 สัปดาห์ที่ 2 สองตอน และข้อความแก้ไขของคาบเดียวกัน"
      },
      {
        "id": "lecture-03",
        "number": 3,
        "date": "29 สิงหาคม 2569",
        "week": "Week 3",
        "title": "Asymmetric, Hybrid และ Post-Quantum Cryptography",
        "subtitle": "กุญแจคู่ช่วยแลกกุญแจ เซ็นข้อความ และเตรียมระบบรับภัยจากคอมพิวเตอร์ควอนตัม",
        "topics": [
          "Public key, Private key และปัญหาการกระจายกุญแจ",
          "Hybrid encryption: ใช้ Asymmetric ส่ง session key แล้วใช้ Symmetric กับข้อมูลจริง",
          "Digital Signature: Private key เซ็น และ Public key ตรวจ",
          "RSA, Diffie–Hellman, ElGamal และ ECC",
          "Shor algorithm, Harvest now decrypt later และ Post-Quantum Cryptography"
        ],
        "discussions": [
          "Public key เปรียบเหมือนช่องหยอดตู้ไปรษณีย์ ส่วน Private key เป็นกุญแจเปิดตู้",
          "AES-128, RSA-3072 และ ECC-256 ถูกใช้เทียบระดับความปลอดภัยโดยประมาณในคาบ",
          "ระบบจริงใช้ Hybrid เพราะ Asymmetric ช่วยแก้เรื่องแลกกุญแจ แต่ Symmetric เร็วกว่าสำหรับข้อมูลจำนวนมาก",
          "ลายเซ็นดิจิทัลเซ็น digest ของข้อความ ไม่ได้เซ็นข้อมูลทั้งก้อน",
          "RSA, Diffie–Hellman และ ECC เสี่ยงต่อ Shor ส่วนกลุ่ม lattice-based, code-based และ hash-based signature เป็นแนวทางหลังควอนตัม"
        ],
        "emphasis": [
          "Encryption ใช้ Public key ของผู้รับเพื่อความลับ; Signature ใช้ Private key ของผู้ส่งเพื่อยืนยันผู้ส่งและความถูกต้อง",
          "Digital Signature ไม่ทำให้ข้อความเป็นความลับ ต้องเข้ารหัสเพิ่มหากไม่ต้องการให้คนอื่นอ่าน",
          "Public key ที่แจกโดยไม่มีการรับรองอาจถูกสลับด้วยการโจมตีแบบ man-in-the-middle",
          "การย้ายระบบไป Post-Quantum ต้องเริ่มก่อนคอมพิวเตอร์ควอนตัมพร้อมใช้งาน เพราะข้อมูลอาจถูกเก็บวันนี้แล้วถอดในอนาคต"
        ],
        "assignments": [
          "เตรียมหัวข้อโปรเจกต์และ Presentation รอบแรกวันที่ 26 กันยายนแบบ onsite",
          "ทบทวนว่า TLS ใช้ Asymmetric และ Symmetric ร่วมกันอย่างไร",
          "สไลด์บทที่ 3 จะมีฉบับอัปโหลดใหม่เพราะตัวเลขสมการเพี้ยน ให้ใช้ฉบับล่าสุด",
          "กำหนดการเดือนตุลาคมที่ประกาศในคาบยังรอยืนยันอีกครั้ง"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 29 ส.ค. 2569",
        "sourceNote": "อ้างอิงจากสรุปหลังเรียนคาบ 29 ส.ค. 2569 เรื่อง Asymmetric, ECC และ Post-Quantum พร้อมประกาศต่อท้าย"
      },
      {
        "id": "lecture-04",
        "number": 4,
        "date": "5 กันยายน 2569",
        "week": "Week 4",
        "title": "Hash, MAC, Signature, Key Management และ PKI",
        "subtitle": "ตรวจการแก้ไข ยืนยันผู้ส่ง เซ็นข้อมูล และสร้างสายความเชื่อถือให้กุญแจสาธารณะ",
        "topics": [
          "Hash และคุณสมบัติ Preimage, Second-preimage และ Collision resistance",
          "MDC, MAC และความต่างระหว่าง Integrity กับ Authentication",
          "Digital Signature, DSS/DSA และการเซ็น digest",
          "KDC, Session key และ Kerberos",
          "Certificate X.509, CA, Chain of Trust, วงจรกุญแจ และ PKI"
        ],
        "discussions": [
          "Hash สร้างลายนิ้วมือขนาดคงที่เพื่อตรวจว่าข้อมูลเปลี่ยนหรือไม่ แต่ไม่ได้ซ่อนข้อมูลและไม่ได้ยืนยันผู้ส่งเพียงลำพัง",
          "MAC เพิ่ม Secret key ให้การตรวจความถูกต้อง จึงช่วยยืนยันว่าผู้สร้าง MAC ถือกุญแจร่วมกัน",
          "Digital Signature ใช้ Private key เซ็นและให้คนอื่นใช้ Public key ตรวจ จึงรองรับ Non-repudiation ได้มากกว่า MAC",
          "Kerberos ทำงานเป็นลำดับ AS ตรวจตัวตน, TGS ออก ticket และ Real Server ให้บริการ",
          "CA เซ็น Certificate เพื่อผูก Public key กับเจ้าของ และ PKI ดูแลระบบความเชื่อถือทั้งหมด"
        ],
        "emphasis": [
          "Hash ไม่ใช่ Encryption: Hash ย้อนกลับเพื่อเอาข้อความเดิมไม่ได้ และไม่ได้ให้ Confidentiality",
          "MAC กับ Signature ต่างกันที่ MAC ใช้ Secret key ร่วมกัน ส่วน Signature ใช้กุญแจคู่และเปิดให้ตรวจด้วย Public key",
          "MD5 และ SHA-1 พบปัญหา collision แล้ว; ใช้อย่างต่ำ SHA-256 หรือ SHA-3 ตามเนื้อหาในคาบ",
          "Certificate ไม่ได้เข้ารหัสเว็บด้วยตัวเอง แต่ช่วยยืนยันว่า Public key เป็นของเจ้าของที่อ้างจริง",
          "PKI คือทั้งคน กติกา ระบบ และที่เก็บใบรับรอง ไม่ใช่ชื่ออัลกอริทึมเข้ารหัส"
        ],
        "assignments": [
          "ทำ TryHackMe ฟรี 3 ห้อง และส่ง screenshot หน้า achievement ก่อนเรียน 19 กันยายน",
          "12 กันยายนงดเรียนและให้ใช้เวลาทำการบ้าน",
          "เตรียม Presentation ครั้งที่ 1 มูลค่า 5% สำหรับ 26 กันยายน โดยต้องมีหัวข้อ ขอบเขต และวัตถุประสงค์"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียงคาบ 5 ก.ย. 2569",
        "sourceNote": "อ้างอิงจากสไลด์ Week 04 และ transcript คาบ 5 ก.ย. 2569; ข้อความสรุปถูกโพสต์วันที่ 7 ก.ย."
      },
      {
        "id": "lecture-05",
        "number": 5,
        "date": "19 กันยายน 2569",
        "week": "Week 5",
        "title": "จากหัวข้อวิจัยสู่ Research Gap",
        "subtitle": "เลือกโจทย์ที่ทำจริงได้ ใช้ Survey/Review วางแผนการอ่าน และเตรียม Assignment 1",
        "topics": [
          "เลือกหัวข้องานวิจัยตั้งแต่เนิ่น ๆ แล้วคุยกับอาจารย์ที่ปรึกษา เพื่อให้พัฒนาเป็นโครงงานจบได้จริง",
          "ทำข้อเสนอเริ่มต้นให้ชัดด้วย Scope, Motivation, Objective และ Expected Outcome",
          "เริ่ม Literature Review จากเปเปอร์ประเภท Survey, Review หรือ Taxonomy เพื่อเห็นวิธีที่มีอยู่ ข้อจำกัด และปัญหาที่ยังเปิดอยู่",
          "สำหรับหัวข้อคอมพิวเตอร์ อาจารย์ขอให้ใช้เปเปอร์ปี 2024 เป็นต้นไปเป็นหลัก",
          "แยกการสรุปเปเปอร์ออกจาก Discussion ของผู้เรียน: ต้องบอก trade-off, ความเหมาะสม และแนวทางต่อยอดของตัวเอง"
        ],
        "discussions": [
          "ตัวอย่าง Survey ด้าน Cryptography เปรียบเทียบ symmetric, asymmetric, hash และ OTP ด้วยเกณฑ์ CIA, ความแข็งแรง, performance, การใช้งาน, ช่องโหว่, scalability, ทรัพยากร และ key management",
          "ความปลอดภัยสูงขึ้นมักแลกกับเวลา พลังงาน หรือทรัพยากรที่มากขึ้น; DES และ MD5 เป็นตัวอย่างวิธีเก่าที่มีเหตุผลให้เปลี่ยน",
          "Hybrid approach รวมข้อดีของหลายวิธีได้ แต่ทำให้ระบบซับซ้อนและดูแลรักษายากขึ้น",
          "อุปกรณ์ IoT มี CPU, หน่วยความจำ และพลังงานจำกัด จึงต้องพิจารณา lightweight encryption, digital signature และ key management",
          "บริบท IoT ที่ยกตัวอย่างมี Smart Home, Healthcare, Agriculture, Transport, Energy, Cloud และ Blockchain; ภัยที่ควรคิดถึงมี replay, man-in-the-middle และ DDoS"
        ],
        "emphasis": [
          "Research Gap คือช่องว่างที่มีหลักฐานจากงานเดิม ไม่ใช่เพียงเรื่องที่เราสนใจ",
          "Gap ตัวอย่างของ IoT ได้แก่ มาตรฐานยังไม่ครบ การนำไปใช้จริงยังมีช่องว่าง infrastructure ยังเปราะบาง และวิธี asymmetric ยังหนักเกินไปสำหรับอุปกรณ์บางชนิด",
          "AI หรือเครื่องมือค้นช่วยหาและจัดโครงได้ แต่ผู้เรียนต้องอ่านเปเปอร์จริง เพราะคำถามปากเปล่าจะตรวจความเข้าใจรายละเอียด",
          "อย่านำเสนอเพียงว่าเปเปอร์พูดเรื่องอะไร ต้องอธิบายวิธี เปรียบเทียบ ผล ข้อจำกัด และความเห็นของเราเอง",
          "ชื่อเครื่องมือค้นหลักใน transcript ไม่ชัด จึงไม่ควรระบุชื่อจนกว่าจะได้ลิงก์ยืนยันจากอาจารย์"
        ],
        "assignments": [
          "Assignment 1 คิดเป็น 5%: นำเสนอหัวข้องานวิจัยของตัวเอง ไม่ใช่สรุปเปเปอร์เพียงหนึ่งฉบับ",
          "เตรียม Scope, Motivation, Objective, Expected Outcome, เปเปอร์ล่าสุดที่เกี่ยวข้อง, Research Gap และ Discussion ของตัวเอง",
          "นำเสนอประมาณไม่เกิน 10 นาที และมีช่วงคำถามแยกต่างหาก",
          "อัปโหลดสไลด์ภายในวันศุกร์ก่อนเที่ยงคืน เพื่อให้อาจารย์ตรวจล่วงหน้า",
          "ลำดับนำเสนอขึ้นกับความพร้อม; หากมาไม่ได้ อาจนำเสนอออนไลน์ได้เมื่อจัดการกับอาจารย์ล่วงหน้า"
        ],
        "audioUrl": null,
        "audioLabel": "ไฟล์เสียง/ถอดเสียงคาบ 19 ก.ย. 2569",
        "sourceNote": "อ้างอิงจาก transcript คาบ EGCO676 วันที่ 19 ก.ย. 2569 (สรุป Slack ts 1789869329.944079 เดิมเก็บใต้ช่อง EGCO676); ยืนยันจากผู้ใช้ว่าเป็นคาบของ EGCO676 ไม่ใช่วิชา EGCO679"
      }
    ],
    "skillPath": "./downloads/egco676/SKILL.md"
  }
]
