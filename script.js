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
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "record-payment") openPaymentDialog(target.dataset.studentId);
  if (action === "add-student") openStudentDialog();
  if (action === "add-notice") openNoticeDialog();
  if (action === "add-gallery") openGalleryDialog();
  if (action === "delete-homework") deleteHomework(target.dataset.homeworkId);
  if (action === "export-fees") exportFeesCsv();
  if (action === "download-marks-template") downloadMarksTemplate();
  if (action === "switch-view") setView(target.dataset.targetView);
  if (action === "scroll-public") document.getElementById(target.dataset.target)?.scrollIntoView({ behavior: "smooth" });
});

root.addEventListener("submit", (event) => {
  if (event.target.id !== "homeworkForm") return;
  event.preventDefault();
  addHomework(new FormData(event.target));
  event.target.reset();
});

root.addEventListener("change", (event) => {
  if (event.target.id === "studentSelect") {
    selectedStudentId = event.target.value;
    renderStudent();
  }
  if (event.target.id === "teacherSelect") {
    selectedTeacherId = event.target.value;
    renderTeacher();
  }
  if (event.target.id === "adminClassFilter") {
    adminClassFilter = event.target.value;
    renderAdmin();
  }
  if (event.target.id === "marksUpload") importMarks(event.target.files[0]);
});

appDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

function render() {
  document.body.classList.toggle("public-mode", currentView === "website");
  document.body.classList.remove("sidebar-open");
  portalSwitcher.value = currentView;
  const [eyebrow, title] = viewMeta[currentView];
  viewEyebrow.textContent = eyebrow;
  viewTitle.textContent = title;
  renderSideNav();
  updateQuickAction();

  document.querySelectorAll(".mobile-nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === currentView);
  });

  if (currentView === "admin") renderAdmin();
  if (currentView === "teacher") renderTeacher();
  if (currentView === "student") renderStudent();
  if (currentView === "website") renderWebsite();
  refreshIcons();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderSideNav() {
  const items = navConfig[currentView] || [];
  sideNav.innerHTML = items.length ? `
    <span class="nav-section-label">Workspace</span>
    ${items.map((item, index) => `
      <button class="nav-item ${index === 0 ? "is-active" : ""}" data-scroll="${safe(item.id)}" type="button">
        ${icon(item.icon)}<span>${safe(item.label)}</span>
      </button>
    `).join("")}
  ` : "";
  refreshIcons();
}

function updateQuickAction() {
  const config = {
    admin: ["plus", "Add student"],
    teacher: ["notebook-pen", "Add homework"],
    student: ["receipt-indian-rupee", "View fees"],
    website: ["arrow-right", "Open portal"]
  }[currentView];
  quickAction.innerHTML = `${icon(config[0])}<span>${safe(config[1])}</span>`;
}

function renderAdmin() {
  const students = adminClassFilter === "all" ? state.students : state.students.filter((student) => student.className === adminClassFilter);
  const totalFees = sum(state.students.map((student) => student.feeTotal));
  const collected = sum(state.students.map((student) => student.paid));
  const due = totalFees - collected;
  const averageAttendance = Math.round(sum(state.students.map((student) => student.attendance)) / state.students.length);
  const salaryDue = sum(state.teachers.map((teacher) => teacher.salary - teacher.paidSalary));
  const fullyPaid = state.students.filter((student) => student.paid >= student.feeTotal).length;
  const partial = state.students.filter((student) => student.paid > 0 && student.paid < student.feeTotal).length;
  const overdue = state.students.filter((student) => student.paid < student.feeTotal && new Date(`${student.dueDate}T23:59:59`) < new Date()).length;
  const paidRate = Math.round((fullyPaid / state.students.length) * 100);
  const partialRate = Math.round((partial / state.students.length) * 100);
  const classAttendance = getClassAttendance();

  root.innerHTML = `
    <section class="page-intro" id="overview">
      <p>${safe(formatLongDate(new Date()))} | Here is what is happening across the school today.</p>
      <span class="live-badge">Live school overview</span>
    </section>

    <section class="metrics-grid">
      ${metricCard("users", "Total students", state.students.length, "5 active classes", "green", "+3 this month")}
      ${metricCard("indian-rupee", "Fees collected", money(collected), `${money(due)} outstanding`, "blue", `${Math.round((collected / totalFees) * 100)}% collected`)}
      ${metricCard("calendar-check", "Student attendance", `${averageAttendance}%`, "Average attendance today", "amber", "+1.8% vs last week")}
      ${metricCard("briefcase-business", "Faculty payroll", money(salaryDue), "Pending salary balance", "coral", `${state.teachers.length} staff records`)}
    </section>

    <section class="quick-actions" aria-label="Quick actions">
      ${quickActionCard("user-plus", "Add student", "Create a new school record", "add-student")}
      ${quickActionCard("receipt-indian-rupee", "Record fees", "Update an installment", "record-payment", state.students.find((student) => student.paid < student.feeTotal)?.id)}
      ${quickActionCard("megaphone", "Publish notice", "Share a school update", "add-notice")}
      ${quickActionCard("images", "Add gallery event", "Update the school gallery", "add-gallery")}
    </section>

    <section class="dashboard-grid">
      <article class="panel col-8" id="fee-management">
        <header class="panel-head">
          <div><h2>Fee collection</h2><p>Monthly collection against planned target</p></div>
          <div class="legend"><span><i class="legend-dot" style="background:var(--forest-2)"></i>Collected</span><span><i class="legend-dot" style="background:#d6e0db"></i>Target</span></div>
        </header>
        ${financeChart()}
        <div class="chart-summary">
          <div><strong>${money(collected)}</strong><span>Collected this academic cycle</span></div>
          <span class="status ${due > 0 ? "warn" : "good"}">${money(due)} due</span>
        </div>
      </article>

      <article class="panel col-4">
        <header class="panel-head"><div><h2>Payment status</h2><p>Student fee accounts</p></div></header>
        <div class="donut-wrap">
          <div class="donut" style="background:conic-gradient(var(--forest-2) 0 ${paidRate}%, var(--amber) ${paidRate}% ${paidRate + partialRate}%, var(--coral) ${paidRate + partialRate}% 100%)">
            <div class="donut-label"><strong>${Math.round((collected / totalFees) * 100)}%</strong><span>value paid</span></div>
          </div>
          <div class="breakdown-list">
            ${breakdown("#245d4d", "Fully paid", fullyPaid)}
            ${breakdown("#a96a1f", "Partial", partial)}
            ${breakdown("#b65046", "Overdue", overdue)}
          </div>
        </div>
      </article>

      <article class="panel col-5" id="attendance">
        <header class="panel-head"><div><h2>Attendance by class</h2><p>Today across active sections</p></div><span class="status good">${averageAttendance}% avg</span></header>
        <div class="attendance-list">
          ${classAttendance.map((item) => `<div class="attendance-row"><span>${safe(item.className)}</span><div class="progress"><span style="width:${item.attendance}%"></span></div><strong>${item.attendance}%</strong></div>`).join("")}
        </div>
      </article>

      <article class="panel col-3">
        <header class="panel-head"><div><h2>Today</h2><p>School schedule</p></div></header>
        <div class="timeline">
          ${timelineItem("08:00", "Morning assembly", "Main courtyard")}
          ${timelineItem("10:30", "Fee desk review", "Accounts office")}
          ${timelineItem("12:15", "Inter-house practice", "Auditorium")}
          ${timelineItem("14:00", "Faculty briefing", "Conference room")}
        </div>
      </article>

      <article class="panel col-4">
        <header class="panel-head"><div><h2>Recent notices</h2><p>Latest school communication</p></div><button class="text-button" data-action="add-notice" type="button">Add notice</button></header>
        ${noticeList(state.notices.slice(0, 3))}
      </article>

      <article class="panel col-12" id="student-directory">
        <div class="toolbar">
          <div><h2>Student fee ledger</h2><p class="panel-subtitle">Offline payment records and installment status</p></div>
          <div class="filters">
            <select id="adminClassFilter" aria-label="Filter students by class">${classOptions(adminClassFilter)}</select>
            <button class="small-button" data-action="download-marks-template" type="button">${icon("file-down")}Marks template</button>
            <label class="small-button" for="marksUpload">${icon("file-up")}Import marks<input id="marksUpload" type="file" accept=".csv,text/csv" hidden></label>
            <button class="small-button" data-action="export-fees" type="button">${icon("download")}Export fees</button>
          </div>
        </div>
        ${feeTable(students)}
      </article>

      <article class="panel col-6" id="faculty">
        <header class="panel-head"><div><h2>Faculty and payroll</h2><p>Monthly salary status</p></div><span class="status info">${state.teachers.length} faculty</span></header>
        ${salaryTable()}
      </article>

      <article class="panel col-6" id="curriculum">
        <header class="panel-head"><div><h2>Curriculum overview</h2><p>Class-wise academic focus</p></div></header>
        <div class="activity-list">
          ${state.curriculum.map((item) => `<div class="activity-item"><strong>${safe(item.className)} | ${safe(item.focus)}</strong><span>${safe(item.subjects)}</span></div>`).join("")}
        </div>
      </article>

      <article class="panel col-12" id="gallery">
        <header class="panel-head"><div><h2>School gallery</h2><p>Recent campus events and functions</p></div><button class="small-button" data-action="add-gallery" type="button">${icon("plus")}Add event</button></header>
        <div class="gallery-grid">${state.gallery.map(galleryCard).join("")}</div>
      </article>
    </section>
  `;
  refreshIcons();
}

function renderTeacher() {
  const teacher = state.teachers.find((item) => item.id === selectedTeacherId) || state.teachers[0];
  const classes = teacher.classes;
  const assignedStudents = state.students.filter((student) => classes.includes(student.className));
  const posts = state.homework.filter((item) => item.teacher === teacher.name);
  const pendingSalary = teacher.salary - teacher.paidSalary;

  root.innerHTML = `
    <section class="page-intro" id="teacher-overview">
      <p>Plan the day, publish homework, and keep class information close at hand.</p>
      <div class="filters"><select id="teacherSelect" aria-label="Select teacher">${state.teachers.map((item) => `<option value="${safe(item.id)}" ${item.id === teacher.id ? "selected" : ""}>${safe(item.name)} | ${safe(item.subject)}</option>`).join("")}</select></div>
    </section>

    <section class="teacher-profile-strip">
      <div class="student-identity"><span class="avatar">${safe(initials(teacher.name))}</span><div><strong>${safe(teacher.name)}</strong><span>${safe(teacher.subject)} teacher | ${safe(teacher.phone)}</span></div></div>
      ${profileStat("Classes", classes.join(", "), `${assignedStudents.length} students`)}
      ${profileStat("Attendance", `${teacher.attendance}%`, "This month")}
      ${profileStat("Salary", money(teacher.paidSalary), pendingSalary > 0 ? `${money(pendingSalary)} pending` : "Paid in full")}
    </section>

    <section class="dashboard-grid">
      <article class="panel col-5">
        <header class="panel-head"><div><h2>Today's schedule</h2><p>${safe(formatLongDate(new Date()))}</p></div></header>
        <div class="timeline">
          ${timelineItem("08:40", `${teacher.subject} | ${classes[0]}`, "Room 204")}
          ${timelineItem("10:20", `${teacher.subject} | ${classes[1] || classes[0]}`, "Room 306")}
          ${timelineItem("12:10", "Student support hour", "Faculty room")}
          ${timelineItem("14:00", "Faculty briefing", "Conference room")}
        </div>
      </article>

      <article class="panel col-7" id="homework-tools">
        <header class="panel-head"><div><h2>Publish homework</h2><p>Homework appears instantly in the selected class diary</p></div></header>
        <form id="homeworkForm" class="form-grid">
          <label>Class<select name="className" required>${classes.map((className) => `<option value="${safe(className)}">${safe(className)}</option>`).join("")}</select></label>
          <label>Subject<input name="subject" value="${safe(teacher.subject)}" required></label>
          <label>Homework title<input name="title" placeholder="Example: Fractions revision" required></label>
          <label>Due date<input name="dueDate" type="date" required></label>
          <label class="span-2">Instructions<textarea name="details" placeholder="Write clear homework instructions" required></textarea></label>
          <input name="teacher" type="hidden" value="${safe(teacher.name)}">
          <div class="span-2 button-row"><button class="primary-button" type="submit">${icon("send")}Publish homework</button></div>
        </form>
      </article>

      <article class="panel col-7">
        <header class="panel-head"><div><h2>My homework posts</h2><p>${posts.length} active entries</p></div></header>
        ${posts.length ? homeworkList(posts.slice().reverse(), true) : emptyState("notebook-tabs", "No homework has been published yet.")}
      </article>

      <article class="panel col-5" id="teacher-notices">
        <header class="panel-head"><div><h2>School notices</h2><p>Updates from administration</p></div></header>
        ${noticeList(state.notices.slice(0, 3))}
      </article>

      <article class="panel col-12" id="assigned-students">
        <header class="panel-head"><div><h2>Assigned students</h2><p>Students in ${safe(classes.join(" and "))}</p></div><span class="status info">${assignedStudents.length} students</span></header>
        ${studentTable(assignedStudents)}
      </article>

      <article class="panel col-12" id="teacher-salary">
        <header class="panel-head"><div><h2>Salary statement</h2><p>Current month payroll summary</p></div></header>
        <div class="metrics-grid">
          ${metricCard("badge-indian-rupee", "Gross salary", money(teacher.salary), "Monthly salary", "green", "July 2026")}
          ${metricCard("circle-check-big", "Paid amount", money(teacher.paidSalary), "Recorded by accounts", "blue", pendingSalary ? "Part payment" : "Paid")}
          ${metricCard("clock-3", "Pending amount", money(pendingSalary), pendingSalary ? "Awaiting payment" : "No balance", "amber", pendingSalary ? "Open" : "Closed")}
          ${metricCard("calendar-check", "Staff attendance", `${teacher.attendance}%`, "Used for payroll record", "coral", "This month")}
        </div>
      </article>
    </section>
  `;
  refreshIcons();
}

function renderStudent() {
  const student = state.students.find((item) => item.id === selectedStudentId) || state.students[0];
  const homework = state.homework.filter((item) => item.className === student.className);
  const marks = state.marks.filter((item) => item.studentId === student.id);
  const due = student.feeTotal - student.paid;
  const paidPercent = Math.min(100, Math.round((student.paid / student.feeTotal) * 100));
  const averageScore = marks.length ? Math.round(sum(marks.map((item) => (Number(item.marks) / Number(item.max)) * 100)) / marks.length) : 0;

  root.innerHTML = `
    <section class="page-intro" id="student-overview">
      <p>Everything the family needs: homework, fees, attendance, marks, and school updates.</p>
      <div class="filters"><select id="studentSelect" aria-label="Select student">${state.students.map((item) => `<option value="${safe(item.id)}" ${item.id === student.id ? "selected" : ""}>${safe(item.name)} | ${safe(item.className)}</option>`).join("")}</select></div>
    </section>

    <section class="student-profile-strip">
      <div class="student-identity"><span class="avatar">${safe(initials(student.name))}</span><div><strong>${safe(student.name)}</strong><span>Class ${safe(student.className)} | Roll ${safe(student.roll)} | ${safe(student.id)}</span></div></div>
      ${profileStat("Attendance", `${student.attendance}%`, student.attendance >= 90 ? "On track" : "Needs attention")}
      ${profileStat("Fees due", money(due), due > 0 ? `Due ${formatDate(student.dueDate)}` : "Paid in full")}
      ${profileStat("Average score", marks.length ? `${averageScore}%` : "--", `${marks.length} subjects reported`)}
    </section>

    <section class="dashboard-grid">
      <article class="panel col-7" id="student-homework">
        <header class="panel-head"><div><h2>Homework diary</h2><p>${homework.length} assignments for ${safe(student.className)}</p></div><span class="status info">Updated today</span></header>
        ${homework.length ? homeworkList(homework.slice().reverse(), false) : emptyState("notebook-tabs", "No homework has been assigned for this class.")}
      </article>

      <article class="panel col-5" id="student-fees">
        <header class="panel-head"><div><h2>Fee status</h2><p>Academic session 2026-27</p></div><span class="status ${due > 0 ? "warn" : "good"}">${due > 0 ? "Balance due" : "Paid"}</span></header>
        <div class="donut-wrap">
          <div class="donut" style="background:conic-gradient(var(--forest-2) 0 ${paidPercent}%, #e8eeea ${paidPercent}% 100%)"><div class="donut-label"><strong>${paidPercent}%</strong><span>paid</span></div></div>
          <div class="breakdown-list">
            ${breakdown("#245d4d", "Total fees", money(student.feeTotal))}
            ${breakdown("#2d6488", "Paid", money(student.paid))}
            ${breakdown("#a96a1f", "Balance", money(due))}
          </div>
        </div>
      </article>

      <article class="panel col-7" id="student-marks">
        <header class="panel-head"><div><h2>Academic performance</h2><p>Latest uploaded marks</p></div><span class="status good">${marks.length ? `${averageScore}% average` : "Pending"}</span></header>
        ${marks.length ? `<div class="score-list">${marks.map((item) => { const percent = Math.round((Number(item.marks) / Number(item.max)) * 100); return `<div class="score-item"><span>${safe(item.subject)}</span><div class="score-bar"><span style="width:${percent}%"></span></div><strong>${percent}%</strong></div>`; }).join("")}</div>` : emptyState("chart-no-axes-column", "Marks have not been uploaded yet.")}
      </article>

      <article class="panel col-5">
        <header class="panel-head"><div><h2>Student profile</h2><p>Basic school record</p></div></header>
        <div class="activity-list">
          ${profileRow("Parent", student.parent)}
          ${profileRow("Phone", student.phone)}
          ${profileRow("Address", student.address)}
          ${profileRow("Student ID", student.id)}
        </div>
      </article>

      <article class="panel col-5">
        <header class="panel-head"><div><h2>School notices</h2><p>Important dates and updates</p></div></header>
        ${noticeList(state.notices.slice(0, 4))}
      </article>

      <article class="panel col-7" id="student-gallery">
        <header class="panel-head"><div><h2>School moments</h2><p>Events and function gallery</p></div></header>
        <div class="gallery-grid">${state.gallery.map(galleryCard).join("")}</div>
      </article>
    </section>
  `;
  refreshIcons();
}

function renderWebsite() {
  root.innerHTML = `
    <div class="public-site">
      <header class="public-header">
        <a class="public-brand" href="#home" aria-label="Greenfield Public School home"><span class="brand-mark">G</span><span><strong>Greenfield Public School</strong><span>Learn with purpose</span></span></a>
        <nav class="public-links" aria-label="Public website navigation"><a href="#about">About</a><a href="#curriculum-public">Curriculum</a><a href="#faculty-public">Faculty</a><a href="#gallery-public">Gallery</a></nav>
        <button class="public-portal-button" data-action="switch-view" data-target-view="student" type="button">${icon("log-in")}Portal login</button>
      </header>

      <section class="public-hero" id="home">
        <img src="assets/school-campus.webp" alt="Greenfield Public School campus courtyard">
        <div class="public-hero-content">
          <div class="admission-line">Admissions open for 2026-27</div>
          <h1>Greenfield Public School</h1>
          <p>A thoughtful learning community where strong academics, confident communication, and everyday character grow together.</p>
          <div class="button-row">
            <button class="primary-button" data-action="scroll-public" data-target="curriculum-public" type="button">Explore curriculum ${icon("arrow-down")}</button>
            <button class="secondary-button" data-action="switch-view" data-target-view="student" type="button">Student and parent portal</button>
          </div>
        </div>
      </section>

      <section class="public-stats" aria-label="School highlights">
        ${publicStat("12:1", "Student-teacher ratio")}
        ${publicStat("18+", "Learning activities")}
        ${publicStat("96%", "Average attendance")}
        ${publicStat("2026-27", "Admissions open")}
      </section>

      <section class="public-section" id="about">
        <div class="section-inner">
          <div class="section-heading"><div><p class="eyebrow">A grounded education</p><h2>Built for curiosity, confidence, and care.</h2></div><p>Greenfield brings classroom learning, practical exploration, sport, creativity, and close family communication into one coherent school experience.</p></div>
          <div class="program-grid">
            ${programCard("01", "Strong foundations", "Clear concepts, consistent practice, and individual academic support across every class.")}
            ${programCard("02", "Learning by doing", "Projects, laboratories, clubs, and collaborative activities that connect ideas to real life.")}
            ${programCard("03", "Connected families", "Attendance, homework, fees, marks, notices, and school moments stay accessible in one portal.")}
          </div>
        </div>
      </section>

      <section class="public-section alt" id="curriculum-public">
        <div class="section-inner">
          <div class="section-heading"><div><p class="eyebrow">Curriculum</p><h2>A clear path through every stage.</h2></div><p>Each class balances subject depth with communication, practical work, technology, and age-appropriate exam preparation.</p></div>
          <div class="program-grid">${state.curriculum.slice(0, 3).map((item, index) => programCard(String(index + 1).padStart(2, "0"), `Class ${item.className}`, `${item.focus}. ${item.subjects}.`)).join("")}</div>
        </div>
      </section>

      <section class="public-section" id="faculty-public">
        <div class="section-inner">
          <div class="section-heading"><div><p class="eyebrow">Our faculty</p><h2>Teachers who know their students.</h2></div><p>Subject expertise matters. So do attention, encouragement, and the ability to make each learner feel seen.</p></div>
          <div class="faculty-grid">${state.teachers.slice(0, 3).map((teacher) => `<article class="faculty-card"><span class="faculty-avatar">${safe(initials(teacher.name))}</span><h3>${safe(teacher.name)}</h3><p>${safe(teacher.subject)} | Classes ${safe(teacher.classes.join(", "))}</p></article>`).join("")}</div>
        </div>
      </section>

      <section class="public-section alt" id="gallery-public">
        <div class="section-inner">
          <div class="section-heading"><div><p class="eyebrow">School life</p><h2>Moments beyond the timetable.</h2></div><p>Celebrations, exhibitions, sport, and shared experiences give students room to discover what they enjoy.</p></div>
          <div class="public-gallery">${state.gallery.map((item) => `<figure><img src="${safe(item.image)}" alt="${safe(item.title)}"><figcaption>${safe(item.title)} | ${safe(formatDate(item.date))}</figcaption></figure>`).join("")}</div>
        </div>
      </section>

      <section class="public-cta">
        <div><h2>Your school day, all in one place.</h2><p>Open the family portal for homework, attendance, fees, marks, and notices.</p></div>
        <div class="website-actions"><button class="primary-button" data-action="switch-view" data-target-view="student" type="button">Open family portal ${icon("arrow-right")}</button><button class="secondary-button" data-action="switch-view" data-target-view="teacher" type="button">Teacher login</button></div>
      </section>

      <footer class="public-footer"><span>Greenfield Public School | Jaipur, Rajasthan</span><span>Admissions office: Monday to Saturday, 9:00 AM to 3:00 PM</span></footer>
    </div>
  `;
  refreshIcons();
}

function metricCard(iconName, label, value, detail, tone, trendText) {
  return `<article class="metric-card tone-${safe(tone)}"><div class="metric-top"><span class="metric-icon">${icon(iconName)}</span><span class="trend">${safe(trendText)}</span></div><span>${safe(label)}</span><strong>${safe(String(value))}</strong><small>${safe(detail)}</small></article>`;
}

function quickActionCard(iconName, title, detail, action, id = "") {
  return `<button class="quick-action-card" data-action="${safe(action)}" ${id ? `data-student-id="${safe(id)}"` : ""} type="button">${icon(iconName)}<strong>${safe(title)}</strong><span>${safe(detail)}</span></button>`;
}

function financeChart() {
  return `<div class="fee-chart" aria-label="Monthly fee collection chart">${monthlyFinance.map((item) => `<div class="chart-month"><div class="chart-bars"><span class="chart-bar collected" style="height:${item.collected}%" title="${item.month} collected ${item.collected}%"></span><span class="chart-bar target" style="height:${item.target}%" title="${item.month} target ${item.target}%"></span></div><span>${item.month}</span></div>`).join("")}</div>`;
}

function breakdown(color, label, value) {
  return `<div class="breakdown-row"><i class="legend-dot" style="background:${safe(color)}"></i><span>${safe(label)}</span><strong>${safe(String(value))}</strong></div>`;
}

function timelineItem(time, title, location) {
  return `<div class="timeline-item"><span class="timeline-time">${safe(time)}</span><div class="timeline-content"><strong>${safe(title)}</strong><span>${safe(location)}</span></div></div>`;
}

function profileStat(label, value, detail) {
  return `<div class="profile-stat"><span>${safe(label)}</span><strong>${safe(value)}</strong><small>${safe(detail)}</small></div>`;
}

function profileRow(label, value) {
  return `<div class="activity-item"><span>${safe(label)}</span><strong>${safe(value)}</strong></div>`;
}

function publicStat(value, label) {
  return `<div class="public-stat"><strong>${safe(value)}</strong><span>${safe(label)}</span></div>`;
}

function programCard(number, title, body) {
  return `<article class="program-card"><span class="number">${safe(number)}</span><h3>${safe(title)}</h3><p>${safe(body)}</p></article>`;
}

function feeTable(students) {
  if (!students.length) return emptyState("search-x", "No students match this class filter.");
  return `<div class="table-wrap"><table><thead><tr><th>Student</th><th>Class</th><th>Total fees</th><th>Paid</th><th>Balance</th><th>Progress</th><th>Due date</th><th></th></tr></thead><tbody>${students.map((student) => {
    const due = student.feeTotal - student.paid;
    const percent = Math.min(100, Math.round((student.paid / student.feeTotal) * 100));
    const overdue = due > 0 && new Date(`${student.dueDate}T23:59:59`) < new Date();
    return `<tr><td><div class="table-person"><span class="mini-avatar">${safe(initials(student.name))}</span><span><strong>${safe(student.name)}</strong><span>${safe(student.id)}</span></span></div></td><td>${safe(student.className)}</td><td>${money(student.feeTotal)}</td><td>${money(student.paid)}</td><td><span class="status ${due <= 0 ? "good" : overdue ? "bad" : "warn"}">${due <= 0 ? "Paid" : money(due)}</span></td><td><div class="progress"><span style="width:${percent}%"></span></div></td><td>${safe(formatDate(student.dueDate))}</td><td><button class="small-button" data-action="record-payment" data-student-id="${safe(student.id)}" type="button">Record</button></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function salaryTable() {
  return `<div class="table-wrap"><table><thead><tr><th>Faculty</th><th>Subject</th><th>Salary</th><th>Paid</th><th>Status</th></tr></thead><tbody>${state.teachers.map((teacher) => {
    const pending = teacher.salary - teacher.paidSalary;
    return `<tr><td><div class="table-person"><span class="mini-avatar">${safe(initials(teacher.name))}</span><span><strong>${safe(teacher.name)}</strong><span>${safe(teacher.id)}</span></span></div></td><td>${safe(teacher.subject)}</td><td>${money(teacher.salary)}</td><td>${money(teacher.paidSalary)}</td><td><span class="status ${pending <= 0 ? "good" : "warn"}">${pending <= 0 ? "Paid" : `${money(pending)} due`}</span></td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function studentTable(students) {
  if (!students.length) return emptyState("users", "No students are assigned to these classes.");
  return `<div class="table-wrap"><table><thead><tr><th>Student</th><th>Class</th><th>Roll</th><th>Parent</th><th>Phone</th><th>Attendance</th></tr></thead><tbody>${students.map((student) => `<tr><td><div class="table-person"><span class="mini-avatar">${safe(initials(student.name))}</span><span><strong>${safe(student.name)}</strong><span>${safe(student.id)}</span></span></div></td><td>${safe(student.className)}</td><td>${safe(student.roll)}</td><td>${safe(student.parent)}</td><td>${safe(student.phone)}</td><td><span class="status ${student.attendance >= 90 ? "good" : "warn"}">${student.attendance}%</span></td></tr>`).join("")}</tbody></table></div>`;
}

function homeworkList(items, allowDelete) {
  return `<div class="homework-list">${items.map((item) => `<article class="homework-item"><header><div><h3>${safe(item.title)}</h3><div class="homework-meta"><span class="subject-chip">${safe(item.subject)}</span><span class="date-chip">Due ${safe(formatDate(item.dueDate))}</span></div></div>${allowDelete ? `<button class="icon-button" data-action="delete-homework" data-homework-id="${safe(item.id)}" type="button" aria-label="Remove ${safe(item.title)}">${icon("trash-2")}</button>` : ""}</header><p>${safe(item.details)}</p><p>${safe(item.className)} | ${safe(item.teacher)}</p></article>`).join("")}</div>`;
}

function noticeList(items) {
  return `<div class="notice-list">${items.map((notice) => `<article class="notice-item"><header><h3>${safe(notice.title)}</h3><span class="date-chip">${safe(formatDate(notice.date))}</span></header><p>${safe(notice.body)}</p></article>`).join("")}</div>`;
}

function galleryCard(item) {
  return `<article class="gallery-card"><img src="${safe(item.image)}" alt="${safe(item.title)}"><div><strong>${safe(item.title)}</strong><span>${safe(formatDate(item.date))}</span></div></article>`;
}

function emptyState(iconName, message) {
  return `<div class="empty-state"><div>${icon(iconName)}<p>${safe(message)}</p></div></div>`;
}

function classOptions(selected) {
  const classes = ["all", ...new Set(state.students.map((student) => student.className))];
  return classes.map((className) => `<option value="${safe(className)}" ${className === selected ? "selected" : ""}>${className === "all" ? "All classes" : safe(className)}</option>`).join("");
}

function getClassAttendance() {
  const classes = [...new Set(state.students.map((student) => student.className))];
  return classes.map((className) => {
    const students = state.students.filter((student) => student.className === className);
    return { className, attendance: Math.round(sum(students.map((student) => student.attendance)) / students.length) };
  });
}

function renderSearch(query) {
  const term = query.trim().toLowerCase();
  if (term.length < 2) {
    searchResults.classList.remove("is-open");
    searchResults.innerHTML = "";
    return;
  }

  const students = state.students.filter((student) => [student.name, student.id, student.className, student.parent].some((value) => String(value).toLowerCase().includes(term))).slice(0, 4);
  const teachers = state.teachers.filter((teacher) => [teacher.name, teacher.id, teacher.subject].some((value) => String(value).toLowerCase().includes(term))).slice(0, 3);
  const homework = state.homework.filter((item) => [item.title, item.subject, item.className].some((value) => String(value).toLowerCase().includes(term))).slice(0, 3);
  const results = [
    ...students.map((student) => searchResult("student", student.id, student.name, `${student.id} | Class ${student.className}`)),
    ...teachers.map((teacher) => searchResult("teacher", teacher.id, teacher.name, `${teacher.subject} | ${teacher.id}`)),
    ...homework.map((item) => searchResult("homework", item.id, item.title, `${item.className} | ${item.subject}`))
  ];
  searchResults.innerHTML = results.length ? results.join("") : `<div class="search-result"><span><strong>No results</strong><small>Try a name, class, or subject</small></span></div>`;
  searchResults.classList.add("is-open");
}

function searchResult(type, id, title, subtitle) {
  return `<button class="search-result" data-result-type="${safe(type)}" data-result-id="${safe(id)}" type="button"><span><strong>${safe(title)}</strong><small>${safe(subtitle)}</small></span>${icon("arrow-up-right")}</button>`;
}

function openStudentDialog() {
  openDialog("Add student", "Student record", `
    <form id="studentForm" class="form-grid">
      <label>Full name<input name="name" required></label>
      <label>Class and section<input name="className" placeholder="Example: 8-A" required></label>
      <label>Roll number<input name="roll" required></label>
      <label>Parent name<input name="parent" required></label>
      <label>Phone number<input name="phone" inputmode="tel" required></label>
      <label>Total annual fees<input name="feeTotal" type="number" min="0" required></label>
      <label>Amount paid<input name="paid" type="number" min="0" value="0" required></label>
      <label>Next due date<input name="dueDate" type="date" required></label>
      <label class="span-2">Address<textarea name="address" required></textarea></label>
      <div class="span-2 dialog-actions"><button class="secondary-button" data-dialog-cancel type="button">Cancel</button><button class="primary-button" type="submit">${icon("user-plus")}Create student</button></div>
    </form>
  `);
  const form = document.getElementById("studentForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nextNumber = String(state.students.length + 1).padStart(3, "0");
    const student = {
      id: `STU-${nextNumber}`,
      name: String(data.get("name")),
      className: String(data.get("className")).toUpperCase(),
      roll: String(data.get("roll")),
      parent: String(data.get("parent")),
      phone: String(data.get("phone")),
      address: String(data.get("address")),
      feeTotal: Number(data.get("feeTotal")),
      paid: Number(data.get("paid")),
      dueDate: String(data.get("dueDate")),
      attendance: 100
    };
    state.students.push(student);
    selectedStudentId = student.id;
    saveState();
    closeDialog();
    renderAdmin();
    showToast(`${student.name} was added to the school register.`);
  });
  bindDialogCancel();
}

function openPaymentDialog(studentId) {
  const student = state.students.find((item) => item.id === studentId);
  if (!student) return;
  const due = student.feeTotal - student.paid;
  openDialog("Record fee payment", "Fee installment", `
    <form id="paymentForm" class="form-grid">
      <div class="span-2 student-profile-strip"><div class="student-identity"><span class="avatar">${safe(initials(student.name))}</span><div><strong>${safe(student.name)}</strong><span>${safe(student.id)} | Class ${safe(student.className)}</span></div></div>${profileStat("Total fees", money(student.feeTotal), "Annual structure")}${profileStat("Paid", money(student.paid), "Recorded amount")}${profileStat("Balance", money(due), `Due ${formatDate(student.dueDate)}`)}</div>
      <label>Payment amount<input name="amount" type="number" min="1" max="${due}" required></label>
      <label>Payment mode<select name="mode"><option>Cash</option><option>UPI (manual record)</option><option>Bank transfer</option><option>Cheque</option></select></label>
      <label class="span-2">Reference or note<input name="note" placeholder="Optional receipt or bank reference"></label>
      <div class="span-2 dialog-actions"><button class="secondary-button" data-dialog-cancel type="button">Cancel</button><button class="primary-button" type="submit">${icon("receipt-indian-rupee")}Record payment</button></div>
    </form>
  `);
  const form = document.getElementById("paymentForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(new FormData(form).get("amount"));
    if (!Number.isFinite(amount) || amount <= 0) return;
    student.paid = Math.min(student.feeTotal, student.paid + amount);
    saveState();
    closeDialog();
    render();
    showToast(`${money(amount)} payment recorded for ${student.name}.`);
  });
  bindDialogCancel();
}

function openNoticeDialog() {
  openDialog("Publish notice", "School communication", `
    <form id="noticeForm" class="form-grid">
      <label class="span-2">Notice title<input name="title" required></label>
      <label>Date<input name="date" type="date" required></label>
      <label>Audience<select name="audience"><option>All families</option><option>Students</option><option>Teachers</option></select></label>
      <label class="span-2">Message<textarea name="body" required></textarea></label>
      <div class="span-2 dialog-actions"><button class="secondary-button" data-dialog-cancel type="button">Cancel</button><button class="primary-button" type="submit">${icon("megaphone")}Publish notice</button></div>
    </form>
  `);
  const form = document.getElementById("noticeForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    state.notices.unshift({ title: String(data.get("title")), date: String(data.get("date")), body: String(data.get("body")) });
    saveState();
    closeDialog();
    render();
    showToast("The school notice is now visible in each portal.");
  });
  bindDialogCancel();
}

function openGalleryDialog() {
  openDialog("Add gallery event", "School gallery", `
    <form id="galleryForm" class="form-grid">
      <label class="span-2">Event title<input name="title" required></label>
      <label>Event date<input name="date" type="date" required></label>
      <label>Category<select name="category"><option>School event</option><option>Academic</option><option>Sports</option><option>Celebration</option></select></label>
      <div class="span-2 dialog-actions"><button class="secondary-button" data-dialog-cancel type="button">Cancel</button><button class="primary-button" type="submit">${icon("images")}Add event</button></div>
    </form>
  `);
  const form = document.getElementById("galleryForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    state.gallery.unshift({ title: String(data.get("title")), date: String(data.get("date")), image: "assets/school-campus.webp" });
    saveState();
    closeDialog();
    render();
    showToast("The gallery event has been added.");
  });
  bindDialogCancel();
}

function openDialog(title, eyebrow, body) {
  dialogTitle.textContent = title;
  dialogEyebrow.textContent = eyebrow;
  dialogBody.innerHTML = body;
  document.body.classList.add("dialog-open");
  appDialog.showModal();
  refreshIcons();
}

function closeDialog() {
  if (appDialog.open) appDialog.close();
  document.body.classList.remove("dialog-open");
}

function bindDialogCancel() {
  document.querySelectorAll("[data-dialog-cancel]").forEach((button) => button.addEventListener("click", closeDialog));
}

function addHomework(form) {
  const entry = {
    id: `HW-${Date.now()}`,
    className: String(form.get("className")),
    subject: String(form.get("subject")),
    teacher: String(form.get("teacher")),
    title: String(form.get("title")),
    dueDate: String(form.get("dueDate")),
    details: String(form.get("details"))
  };
  state.homework.push(entry);
  saveState();
  renderTeacher();
  showToast(`Homework published for Class ${entry.className}.`);
}

function deleteHomework(homeworkId) {
  state.homework = state.homework.filter((item) => item.id !== homeworkId);
  saveState();
  render();
  showToast("Homework entry removed.");
}

function importMarks(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const imported = parseMarksCsv(String(reader.result || ""));
    if (!imported.length) {
      showToast("No valid marks found. Use the downloadable CSV template.");
      return;
    }
    state.marks.push(...imported);
    saveState();
    renderAdmin();
    showToast(`${imported.length} marks rows imported successfully.`);
  };
  reader.readAsText(file);
}

function parseMarksCsv(text) {
  const rows = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map(parseCsvLine);
  if (!rows.length) return [];
  const header = rows[0].map((cell) => cell.toLowerCase().replace(/[^a-z]/g, ""));
  const hasHeader = header.includes("studentid");
  const body = hasHeader ? rows.slice(1) : rows;
  return body.map(([studentId, term, subject, marks, max]) => ({ studentId, term, subject, marks: Number(marks), max: Number(max) })).filter((item) => state.students.some((student) => student.id === item.studentId) && item.term && item.subject && Number.isFinite(item.marks) && Number.isFinite(item.max) && item.max > 0);
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"' && line[index + 1] === '"' && quoted) {
      current += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      cells.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }
  cells.push(current.trim());
  return cells;
}

function downloadMarksTemplate() {
  downloadCsv("greenfield-marks-template.csv", [
    ["studentId", "term", "subject", "marks", "max"],
    ["STU-001", "Unit Test 2", "Mathematics", "88", "100"]
  ]);
  showToast("Marks import template downloaded.");
}

function exportFeesCsv() {
  downloadCsv("greenfield-fee-ledger.csv", [
    ["studentId", "name", "class", "roll", "totalFees", "paid", "due", "dueDate"],
    ...state.students.map((student) => [student.id, student.name, student.className, student.roll, student.feeTotal, student.paid, student.feeTotal - student.paid, student.dueDate])
  ]);
  showToast("Fee ledger exported as CSV.");
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function setView(view) {
  currentView = view;
  render();
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openSidebar() {
  document.body.classList.add("sidebar-open");
}

function closeSidebar() {
  document.body.classList.remove("sidebar-open");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : clone(seedState);
  } catch {
    return clone(seedState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function money(value) {
  return `Rs. ${Number(value || 0).toLocaleString("en-IN")}`;
}

function sum(values) {
  return values.reduce((total, value) => total + Number(value || 0), 0);
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date);
}

function initials(name) {
  return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function safe(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function icon(name) {
  return `<i data-lucide="${safe(name)}" aria-hidden="true"></i>`;
}

function refreshIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons();
}
