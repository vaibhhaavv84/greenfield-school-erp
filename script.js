const STORAGE_KEY = "greenfield-erp-state-v2";

const seedState = {
  students: [
    { id: "STU-001", name: "Aarav Sharma", className: "8-A", roll: "14", parent: "Neha Sharma", phone: "98765 43210", address: "Civil Lines, Jaipur", feeTotal: 48000, paid: 32000, dueDate: "2026-08-05", attendance: 92 },
    { id: "STU-002", name: "Meera Khan", className: "8-A", roll: "18", parent: "Imran Khan", phone: "98765 11223", address: "Adarsh Nagar, Jaipur", feeTotal: 48000, paid: 48000, dueDate: "2026-08-05", attendance: 96 },
    { id: "STU-003", name: "Rohan Verma", className: "9-B", roll: "07", parent: "Sanjay Verma", phone: "98765 22110", address: "Vaishali Nagar, Jaipur", feeTotal: 56000, paid: 28000, dueDate: "2026-07-25", attendance: 88 },
    { id: "STU-004", name: "Tanya Joshi", className: "10-A", roll: "03", parent: "Ritika Joshi", phone: "98765 77889", address: "Mansarovar, Jaipur", feeTotal: 64000, paid: 54000, dueDate: "2026-08-10", attendance: 94 },
    { id: "STU-005", name: "Ishita Soni", className: "7-A", roll: "11", parent: "Manish Soni", phone: "98765 43118", address: "Bani Park, Jaipur", feeTotal: 44000, paid: 22000, dueDate: "2026-07-28", attendance: 91 },
    { id: "STU-006", name: "Kabir Jain", className: "6-B", roll: "21", parent: "Rashi Jain", phone: "98765 64002", address: "Malviya Nagar, Jaipur", feeTotal: 42000, paid: 42000, dueDate: "2026-08-02", attendance: 97 },
    { id: "STU-007", name: "Naina Kapoor", className: "10-A", roll: "17", parent: "Rohit Kapoor", phone: "98765 90442", address: "C Scheme, Jaipur", feeTotal: 64000, paid: 40000, dueDate: "2026-07-26", attendance: 86 },
    { id: "STU-008", name: "Vivaan Roy", className: "9-B", roll: "24", parent: "Ananya Roy", phone: "98765 32780", address: "Jagatpura, Jaipur", feeTotal: 56000, paid: 46000, dueDate: "2026-08-08", attendance: 93 }
  ],
  teachers: [
    { id: "TCH-001", name: "Priya Mehta", subject: "Mathematics", classes: ["8-A", "9-B"], phone: "99887 12345", salary: 42000, paidSalary: 42000, attendance: 98 },
    { id: "TCH-002", name: "Arjun Singh", subject: "Science", classes: ["8-A", "10-A"], phone: "99887 34567", salary: 45000, paidSalary: 30000, attendance: 95 },
    { id: "TCH-003", name: "Kavita Rao", subject: "English", classes: ["9-B", "10-A"], phone: "99887 56789", salary: 40000, paidSalary: 40000, attendance: 97 },
    { id: "TCH-004", name: "Sameer Gupta", subject: "Social Studies", classes: ["6-B", "7-A"], phone: "99887 66770", salary: 38000, paidSalary: 38000, attendance: 96 }
  ],
  homework: [
    { id: "HW-001", className: "8-A", subject: "Mathematics", teacher: "Priya Mehta", title: "Linear equations practice", details: "Complete exercise 4.2, questions 1 to 8.", dueDate: "2026-07-23" },
    { id: "HW-002", className: "10-A", subject: "Science", teacher: "Arjun Singh", title: "Acids and bases notes", details: "Prepare short notes with five examples from daily life.", dueDate: "2026-07-24" },
    { id: "HW-003", className: "9-B", subject: "English", teacher: "Kavita Rao", title: "Diary writing", details: "Write one diary entry about the annual day rehearsal.", dueDate: "2026-07-25" },
    { id: "HW-004", className: "7-A", subject: "Social Studies", teacher: "Sameer Gupta", title: "Map activity", details: "Mark the major rivers of northern India on the outline map.", dueDate: "2026-07-24" },
    { id: "HW-005", className: "6-B", subject: "Social Studies", teacher: "Sameer Gupta", title: "Civics reading", details: "Read chapter 3 and write five key points in the notebook.", dueDate: "2026-07-26" }
  ],
  marks: [
    { studentId: "STU-001", term: "Unit Test 1", subject: "Mathematics", marks: 84, max: 100 },
    { studentId: "STU-001", term: "Unit Test 1", subject: "Science", marks: 78, max: 100 },
    { studentId: "STU-001", term: "Unit Test 1", subject: "English", marks: 88, max: 100 },
    { studentId: "STU-002", term: "Unit Test 1", subject: "Mathematics", marks: 92, max: 100 },
    { studentId: "STU-003", term: "Unit Test 1", subject: "English", marks: 81, max: 100 },
    { studentId: "STU-004", term: "Unit Test 1", subject: "Science", marks: 88, max: 100 },
    { studentId: "STU-005", term: "Unit Test 1", subject: "Social Studies", marks: 86, max: 100 },
    { studentId: "STU-006", term: "Unit Test 1", subject: "English", marks: 90, max: 100 },
    { studentId: "STU-007", term: "Unit Test 1", subject: "Mathematics", marks: 75, max: 100 },
    { studentId: "STU-008", term: "Unit Test 1", subject: "Science", marks: 83, max: 100 }
  ],
  curriculum: [
    { className: "6-B", focus: "Curiosity, communication, and strong learning habits", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { className: "7-A", focus: "Concept discovery through projects and discussion", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { className: "8-A", focus: "Foundational science, mathematics fluency, and language confidence", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { className: "9-B", focus: "Concept building, practical work, and exam readiness", subjects: "Math, Science, English, Hindi, Social Studies, Computer" },
    { className: "10-A", focus: "Board preparation, practicals, and structured revision", subjects: "Math, Science, English, Hindi, Social Studies, IT" }
  ],
  notices: [
    { title: "Parent-teacher meeting", date: "2026-07-26", body: "Class-wise parent meetings begin at 10:00 AM in the senior block." },
    { title: "Fee installment window", date: "2026-08-05", body: "The next offline fee installment cycle opens in the first week of August." },
    { title: "Inter-house quiz", date: "2026-07-29", body: "Selected students should report to the auditorium at 11:30 AM." },
    { title: "Monsoon activity day", date: "2026-08-01", body: "Primary and middle school activity details are available with class teachers." }
  ],
  gallery: [
    { title: "Annual Day Celebration", date: "2026-05-22", image: "assets/school-campus.webp" },
    { title: "Science Exhibition", date: "2026-04-18", image: "assets/school-campus.webp" },
    { title: "Sports Meet", date: "2026-03-12", image: "assets/school-campus.webp" }
  ]
};

const monthlyFinance = [
  { month: "Feb", collected: 74, target: 82 },
  { month: "Mar", collected: 86, target: 88 },
  { month: "Apr", collected: 62, target: 78 },
  { month: "May", collected: 91, target: 92 },
  { month: "Jun", collected: 79, target: 90 },
  { month: "Jul", collected: 83, target: 94 }
];

const navConfig = {
  admin: [
    { id: "overview", label: "Overview", icon: "layout-dashboard" },
    { id: "student-directory", label: "Students", icon: "users" },
    { id: "fee-management", label: "Fees and installments", icon: "wallet-cards" },
    { id: "attendance", label: "Attendance", icon: "calendar-check" },
    { id: "faculty", label: "Faculty and payroll", icon: "briefcase-business" },
    { id: "curriculum", label: "Curriculum", icon: "book-open-check" },
    { id: "gallery", label: "Gallery", icon: "images" }
  ],
  teacher: [
    { id: "teacher-overview", label: "My workspace", icon: "layout-dashboard" },
    { id: "homework-tools", label: "Homework", icon: "notebook-tabs" },
    { id: "assigned-students", label: "My students", icon: "users" },
    { id: "teacher-salary", label: "Salary", icon: "badge-indian-rupee" },
    { id: "teacher-notices", label: "School notices", icon: "megaphone" }
  ],
  student: [
    { id: "student-overview", label: "Home", icon: "house" },
    { id: "student-homework", label: "Homework diary", icon: "notebook-tabs" },
    { id: "student-fees", label: "Fees", icon: "receipt-indian-rupee" },
    { id: "student-marks", label: "Academics", icon: "chart-no-axes-column" },
    { id: "student-gallery", label: "School gallery", icon: "images" }
  ],
  website: []
};

const viewMeta = {
  admin: ["School operations", "Good morning, Anita"],
  teacher: ["Faculty workspace", "Teacher dashboard"],
  student: ["Family portal", "Student overview"],
  website: ["Public website", "Greenfield Public School"]
};

let state = loadState();
let currentView = "admin";
let selectedStudentId = state.students[0]?.id || "";
let selectedTeacherId = state.teachers[0]?.id || "";
let adminClassFilter = "all";
let toastTimer;

const root = document.getElementById("viewRoot");
const sideNav = document.getElementById("sideNav");
const portalSwitcher = document.getElementById("portalSwitcher");
const viewEyebrow = document.getElementById("viewEyebrow");
const viewTitle = document.getElementById("viewTitle");
const quickAction = document.getElementById("quickAction");
const globalSearch = document.getElementById("globalSearch");
const searchResults = document.getElementById("searchResults");
const appDialog = document.getElementById("appDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogEyebrow = document.getElementById("dialogEyebrow");
const dialogBody = document.getElementById("dialogBody");
const toast = document.getElementById("toast");

portalSwitcher.addEventListener("change", () => setView(portalSwitcher.value));

document.querySelectorAll(".mobile-nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.getElementById("menuButton").addEventListener("click", openSidebar);
document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
document.getElementById("sidebarBackdrop").addEventListener("click", closeSidebar);
document.getElementById("dialogClose").addEventListener("click", closeDialog);
document.getElementById("notificationButton").addEventListener("click", () => showToast(`${state.notices.length} school updates are available.`));

document.getElementById("resetDemo").addEventListener("click", () => {
  if (!window.confirm("Reset all sample ERP data?")) return;
  state = clone(seedState);
  selectedStudentId = state.students[0]?.id || "";
  selectedTeacherId = state.teachers[0]?.id || "";
  saveState();
  render();
  showToast("Sample school data has been reset.");
});

quickAction.addEventListener("click", () => {
  if (currentView === "admin") openStudentDialog();
  if (currentView === "teacher") scrollToSection("homework-tools");
  if (currentView === "student") scrollToSection("student-fees");
});

sideNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scroll]");
  if (!button) return;
  sideNav.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item === button));
  scrollToSection(button.dataset.scroll);
  closeSidebar();
});

globalSearch.addEventListener("input", () => renderSearch(globalSearch.value));
globalSearch.addEventListener("focus", () => renderSearch(globalSearch.value));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".global-search")) searchResults.classList.remove("is-open");
});

searchResults.addEventListener("click", (event) => {
  const item = event.target.closest("[data-result-type]");
  if (!item) return;
  const type = item.dataset.resultType;
  const id = item.dataset.resultId;
  if (type === "student") {
    selectedStudentId = id;
    setView("student");
  } else if (type === "teacher") {
    selectedTeacherId = id;
    setView("teacher");
  } else {
    setView("teacher");
    scrollToSection("homework-tools");
  }
  globalSearch.value = "";
  searchResults.classList.remove("is-open");
});

root.addEventListener("click", (event) => {
  const target = event.ta…19630 tokens truncated…{
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
}

.compact-table {
  min-width: 0;
}

th,
td {
  height: 50px;
  border-bottom: 1px solid var(--line);
  padding: 8px 10px;
  text-align: left;
  vertical-align: middle;
}

th {
  color: var(--muted);
  font-size: 0.67rem;
  font-weight: 800;
  text-transform: uppercase;
}

td {
  font-size: 0.78rem;
}

tr:last-child td {
  border-bottom: 0;
}

.table-person {
  display: flex;
  min-width: 165px;
  align-items: center;
  gap: 9px;
}

.mini-avatar {
  display: grid;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 7px;
  color: var(--forest-2);
  background: var(--forest-soft);
  font-size: 0.67rem;
  font-weight: 850;
}

.table-person strong,
.table-person span {
  display: block;
}

.table-person strong {
  font-size: 0.76rem;
}

.table-person span {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.66rem;
}

.status {
  min-height: 25px;
  border-radius: 999px;
  padding: 0 9px;
  font-size: 0.66rem;
}

.status.good { color: #24654f; background: var(--forest-soft); }
.status.warn { color: #8b591b; background: var(--amber-soft); }
.status.bad { color: #923c35; background: var(--coral-soft); }
.status.info { color: #285f81; background: var(--blue-soft); }

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.filters select,
.filters input,
.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  min-height: 40px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  color: var(--ink);
  background: #ffffff;
  padding: 8px 10px;
}

.filters select {
  width: auto;
  min-width: 135px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.form-grid label {
  display: grid;
  gap: 6px;
  color: #44534d;
  font-size: 0.75rem;
  font-weight: 750;
}

.form-grid textarea {
  min-height: 100px;
  resize: vertical;
}

.form-grid .span-2 {
  grid-column: 1 / -1;
}

.teacher-profile-strip,
.student-profile-strip {
  display: grid;
  align-items: center;
  gap: 18px;
  padding: 18px;
}

.teacher-profile-strip {
  grid-template-columns: minmax(260px, 1.4fr) repeat(3, minmax(130px, 0.7fr));
}

.student-profile-strip {
  grid-template-columns: minmax(300px, 1.3fr) repeat(3, minmax(150px, 0.7fr));
}

.student-identity {
  min-width: 0;
  gap: 13px;
}

.avatar {
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  border-radius: 8px;
}

.student-identity strong,
.student-identity span {
  display: block;
}

.student-identity span {
  margin-top: 3px;
  color: var(--muted);
  font-size: 0.76rem;
}

.profile-stat {
  min-height: 66px;
  border-left: 1px solid var(--line);
  padding-left: 18px;
}

.profile-stat span,
.profile-stat small,
.profile-stat strong {
  display: block;
}

.profile-stat span,
.profile-stat small {
  color: var(--muted);
  font-size: 0.69rem;
}

.profile-stat strong {
  margin: 5px 0;
  font-size: 1.12rem;
}

.homework-item,
.notice-item {
  border-bottom: 1px solid var(--line);
  padding: 2px 0 12px;
}

.homework-item:last-child,
.notice-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.homework-item header,
.notice-item header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.homework-item p,
.notice-item p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.5;
}

.homework-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 7px;
}

.subject-chip,
.date-chip {
  min-height: 24px;
  border-radius: 999px;
  padding: 0 8px;
  font-size: 0.64rem;
}

.subject-chip {
  color: var(--blue);
  background: var(--blue-soft);
}

.date-chip {
  color: var(--amber);
  background: var(--amber-soft);
}

.score-item {
  display: grid;
  grid-template-columns: 98px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 10px;
}

.score-item span,
.score-item strong {
  font-size: 0.73rem;
}

.score-item strong {
  text-align: right;
}

.score-bar {
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: #e8eeea;
}

.score-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--blue);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.gallery-card {
  overflow: hidden;
}

.gallery-card img {
  display: block;
  width: 100%;
  height: 118px;
  object-fit: cover;
}

.gallery-card div {
  padding: 11px;
}

.gallery-card strong,
.gallery-card span {
  display: block;
}

.gallery-card strong {
  font-size: 0.73rem;
}

.gallery-card span {
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.65rem;
}

.empty-state {
  display: grid;
  min-height: 150px;
  place-items: center;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius);
  color: var(--muted);
  padding: 20px;
  text-align: center;
}

.empty-state svg {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}

/* Public website */
body.public-mode {
  background: #ffffff;
}

body.public-mode .app-shell {
  display: block;
}

body.public-mode .sidebar,
body.public-mode .topbar,
body.public-mode .mobile-nav {
  display: none;
}

body.public-mode .workspace {
  padding: 0;
}

body.public-mode .view-root {
  display: block;
  max-width: none;
}

.public-site {
  color: #15211d;
  background: #ffffff;
}

.public-header {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  color: #ffffff;
  background: var(--forest);
  padding: 0 clamp(20px, 5vw, 72px);
}

.public-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.public-brand .brand-mark {
  width: 38px;
  height: 38px;
}

.public-brand strong,
.public-brand span {
  display: block;
}

.public-brand strong {
  font-size: 0.88rem;
}

.public-brand span {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.67rem;
}

.public-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.public-links a {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
}

.public-links a:hover {
  color: #ffffff;
}

.public-portal-button {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: var(--radius);
  color: #ffffff;
  background: transparent;
  padding: 0 12px;
  font-weight: 750;
}

.public-hero {
  position: relative;
  display: grid;
  min-height: min(74svh, 720px);
  align-items: end;
  overflow: hidden;
  color: #ffffff;
  background: var(--forest);
}

.public-hero > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.public-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(15, 45, 37, 0.64);
}

.public-hero-content {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 72px 0 64px;
}

.admission-line {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 18px;
  color: #f5d58e;
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
}

.admission-line::before {
  content: "";
  width: 28px;
  height: 2px;
  background: #f1c66c;
}

.public-hero h1 {
  max-width: 850px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 600;
  line-height: 0.94;
}

.public-hero p {
  max-width: 620px;
  margin: 22px 0 26px;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.65;
}

.public-hero .primary-button {
  border-color: #f1c66c;
  color: var(--forest);
  background: #f1c66c;
}

.public-hero .secondary-button {
  border-color: rgba(255, 255, 255, 0.34);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.public-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  color: #ffffff;
  background: var(--forest);
  padding: 0 clamp(20px, 5vw, 72px);
}

.public-stat {
  min-height: 112px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  padding: 24px clamp(12px, 2.6vw, 34px);
}

.public-stat:first-child {
  padding-left: 0;
}

.public-stat:last-child {
  border-right: 0;
}

.public-stat strong,
.public-stat span {
  display: block;
}

.public-stat strong {
  font-family: Georgia, "Times New Roman", serif;
  color: #f1c66c;
  font-size: 1.8rem;
  font-weight: 600;
}

.public-stat span {
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.75rem;
}

.public-section {
  padding: 76px clamp(20px, 5vw, 72px);
}

.public-section.alt {
  background: #f2f5f2;
}

.section-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(260px, 1fr);
  align-items: end;
  gap: 60px;
  margin-bottom: 34px;
}

.section-heading .eyebrow {
  margin-bottom: 12px;
}

.section-heading h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 600;
  line-height: 1.05;
}

.section-heading > p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.7;
}

.program-grid,
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.program-card,
.faculty-card {
  padding: 22px;
}

.program-card .number {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 7px;
  color: var(--forest-2);
  background: var(--forest-soft);
  font-size: 0.72rem;
  font-weight: 850;
}

.program-card h3,
.faculty-card h3 {
  margin-top: 24px;
  font-size: 1.04rem;
}

.program-card p,
.faculty-card p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.faculty-avatar {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 8px;
  color: #ffffff;
  background: var(--blue);
  font-weight: 850;
}

.public-gallery {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  grid-template-rows: repeat(2, 200px);
  gap: 12px;
}

.public-gallery figure {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius);
  background: var(--forest);
}

.public-gallery figure:first-child {
  grid-row: 1 / 3;
}

.public-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.public-gallery figcaption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  color: #ffffff;
  background: rgba(13, 33, 28, 0.78);
  padding: 13px;
  font-size: 0.75rem;
  font-weight: 750;
}

.public-cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  color: #ffffff;
  background: var(--forest);
  padding: 38px clamp(20px, 5vw, 72px);
}

.public-cta h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 600;
}

.public-cta p {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.68);
}

.public-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: #aebbb5;
  background: #102c25;
  padding: 22px clamp(20px, 5vw, 72px);
  font-size: 0.7rem;
}

/* Dialogs and feedback */
.app-dialog {
  width: min(620px, calc(100% - 28px));
  max-height: min(86vh, 760px);
  overflow: auto;
  border: 0;
  border-radius: var(--radius);
  background: transparent;
  padding: 0;
  box-shadow: var(--shadow-lg);
}

.app-dialog::backdrop {
  background: rgba(12, 30, 25, 0.55);
}

.dialog-shell {
  background: #ffffff;
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid var(--line);
  padding: 18px;
}

#dialogBody {
  padding: 18px;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  margin-top: 18px;
}

.toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 80;
  max-width: min(360px, calc(100% - 44px));
  transform: translateY(20px);
  border-radius: var(--radius);
  color: #ffffff;
  background: #183e34;
  padding: 12px 15px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
  box-shadow: var(--shadow-lg);
  font-size: 0.78rem;
}

.toast.is-visible {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav {
  display: none;
}

@media (max-width: 1180px) {
  .metrics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8 {
    grid-column: span 6;
  }

  .teacher-profile-strip,
  .student-profile-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .teacher-profile-strip .student-identity,
  .student-profile-strip .student-identity {
    grid-column: 1 / -1;
  }

  .profile-stat:first-of-type {
    border-left: 0;
    padding-left: 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: fixed;
    left: 0;
    transform: translateX(-102%);
    width: 270px;
    transition: transform 190ms ease;
  }

  body.sidebar-open .sidebar {
    transform: translateX(0);
  }

  .sidebar-close,
  .menu-button {
    display: inline-flex;
  }

  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    z-index: 25;
    background: rgba(12, 30, 25, 0.45);
  }

  body.sidebar-open .sidebar-backdrop {
    display: block;
  }

  .global-search {
    width: min(280px, 34vw);
  }

  .quick-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .program-grid,
  .faculty-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .public-links {
    display: none;
  }
}

@media (max-width: 720px) {
  body:not(.public-mode) {
    padding-bottom: 68px;
  }

  .workspace {
    padding: 0 14px 20px;
  }

  .topbar {
    min-height: 74px;
    margin: 0 -14px 16px;
    padding: 11px 14px;
  }

  .topbar h1 {
    max-width: 54vw;
    overflow: hidden;
    font-size: 1.22rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .topbar .eyebrow {
    display: none;
  }

  .global-search,
  .notification-button {
    display: none;
  }

  .topbar-actions .primary-button {
    width: 40px;
    padding: 0;
  }

  .topbar-actions .primary-button span {
    display: none;
  }

  .mobile-nav {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 45;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    min-height: 64px;
    border-top: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.97);
    padding: 6px max(8px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));
  }

  .mobile-nav-item {
    display: grid;
    min-width: 0;
    place-items: center;
    gap: 3px;
    border: 0;
    border-radius: 6px;
    color: var(--muted);
    background: transparent;
    padding: 3px;
    font-size: 0.62rem;
    font-weight: 750;
  }

  .mobile-nav-item svg {
    width: 18px;
    height: 18px;
  }

  .mobile-nav-item.is-active {
    color: var(--forest-2);
    background: var(--forest-soft);
  }

  .page-intro {
    align-items: flex-start;
    flex-direction: column;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
  }

  .metric-card {
    min-height: 124px;
    padding: 13px;
  }

  .metric-card strong {
    font-size: 1.25rem;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-12 {
    grid-column: 1;
  }

  .panel {
    padding: 14px;
  }

  .fee-chart {
    height: 190px;
    gap: 7px;
  }

  .donut-wrap {
    grid-template-columns: 112px minmax(0, 1fr);
  }

  .donut {
    width: 112px;
    height: 112px;
  }

  .donut::after {
    width: 74px;
    height: 74px;
  }

  .teacher-profile-strip,
  .student-profile-strip {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 14px;
  }

  .teacher-profile-strip .student-identity,
  .student-profile-strip .student-identity {
    grid-column: 1 / -1;
  }

  .profile-stat {
    border-left: 0;
    border-top: 1px solid var(--line);
    padding: 12px 0 0;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-grid .span-2 {
    grid-column: auto;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-card img {
    height: 170px;
  }

  .public-header {
    height: 64px;
    padding: 0 16px;
  }

  .public-hero {
    min-height: 68svh;
  }

  .public-hero-content {
    width: calc(100% - 32px);
    padding: 54px 0 44px;
  }

  .public-hero h1 {
    font-size: clamp(2.6rem, 14vw, 4.5rem);
  }

  .public-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 16px;
  }

  .public-stat {
    min-height: 96px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 18px 12px;
  }

  .public-stat:nth-child(2) {
    border-right: 0;
  }

  .public-section {
    padding: 54px 16px;
  }

  .program-grid,
  .faculty-grid {
    grid-template-columns: 1fr;
  }

  .public-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 230px);
  }

  .public-gallery figure:first-child {
    grid-row: auto;
  }

  .public-cta {
    grid-template-columns: 1fr;
    padding: 34px 16px;
  }

  .public-footer {
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 16px;
  }

  .toast {
    right: 14px;
    bottom: 78px;
    max-width: calc(100% - 28px);
  }
}

@media (max-width: 430px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .metric-card {
    min-height: 112px;
  }

  .quick-actions,
  .teacher-profile-strip,
  .student-profile-strip {
    grid-template-columns: 1fr;
  }

  .teacher-profile-strip .student-identity,
  .student-profile-strip .student-identity {
    grid-column: auto;
  }

  .donut-wrap {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .breakdown-list {
    width: 100%;
  }

  .score-item {
    grid-template-columns: 78px minmax(0, 1fr) 38px;
  }

  .public-stats {
    grid-template-columns: 1fr 1fr;
  }

  .public-hero .button-row {
    align-items: stretch;
    flex-direction: column;
  }

  .public-hero .button-row button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
