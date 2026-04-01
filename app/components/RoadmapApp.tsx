"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import LoginScreen from "./LoginScreen";
import DAY_QUESTIONS from "@/app/data/dayQuestions";

// ─── THEME ───
// ─── THEME ───
const C = {
  bg:       "var(--bg)",
  surface:  "var(--surface)",
  surface2: "var(--border)",
  border:   "var(--border)",
  text:     "var(--text)",
  muted:    "var(--muted)",
  faint:    "var(--faint)",
  orange:   "var(--orange)",
  orangeL:  "var(--orangeL)",
  blue:     "var(--blue)",
  blueL:    "var(--blueL)",
  emerald:  "var(--emerald)",
  amber:    "var(--amber)",
  rose:     "var(--rose)",
  sky:      "var(--sky)",
  violet:   "var(--violet)",
  indigo:   "var(--indigo)",
};

/** Professional Minimalist SVG Icons */
const Icons = {
  Moon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  ),
  Sun: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  ),
  Logout: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  ),
  Home: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  Target: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),
  Building: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="9" y1="22" x2="9" y2="22"></line>
      <line x1="9" y1="2" x2="9" y2="2"></line>
    </svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Rocket: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
    </svg>
  ),
  Flame: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3 3.5 3 5 5.5 5 8.5a4.5 4.5 0 0 1-9 0c0-1.15.33-2.21.9-3.1a2.5 2.5 0 0 0 1.6 3.1z"></path>
    </svg>
  ),
  Briefcase: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Pulse: ({ color }: { color: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, animation: 'pulse 2s infinite' }} />
      <style>{`@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 ${color}70; } 70% { transform: scale(1); box-shadow: 0 0 0 10px ${color}00; } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 ${color}00; } }`}</style>
    </div>
  ),
  Brain: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Sparkles: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 1.91 5.81L20 10.73l-4.5 4.38L16.55 21 12 18.23 7.45 21l1.05-5.89L4 10.73l6.09-1.92L12 3z"></path>
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  Trash: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
};

/** Theme Toggle Hook/Component */
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };
  return (
    <button onClick={toggle} style={{
      background: "transparent", border: `1px solid ${C.border}`, width: 36, height: 36, borderRadius: 10,
      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: theme === "light" ? C.muted : C.text,
      transition: 'all 0.2s'
    }}>
      {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
    </button>
  );
}

const PHASES = [
  { num: 1, label: "DSA Foundations",   sub: "Days 1–14",  color: C.emerald, range: [0,  13] },
  { num: 2, label: "Algorithmic Mastery", sub: "Days 15–30", color: C.sky,     range: [14, 29] },
  { num: 3, label: "Advanced Fullstack", sub: "Days 31–50", color: C.violet,  range: [30, 49] },
  { num: 4, label: "System Architecture", sub: "Days 51–70", color: C.amber,   range: [50, 69] },
  { num: 5, label: "Interview Simulation", sub: "Days 71–90", color: C.rose,    range: [70, 89] },
];

const companies = [
  { tier: 1, name: "Razorpay",    ctc: "14–20 LPA",    desc: "Fintech unicorn. Large eng team, strong product culture. Hires continuously — DSA + system design focus.", tags: ["React · Node · Go", "Bangalore", "Fintech"] },
  { tier: 1, name: "Postman",     ctc: "14–22 LPA",    desc: "API platform used by 30M+ devs. Excellent eng culture, strong dev-tools focus. Coding + design interviews.", tags: ["React · Node · Electron", "Bangalore", "DevTools"] },
  { tier: 1, name: "Freshworks",  ctc: "12–18 LPA",    desc: "Listed SaaS company (Freshdesk, Freshsales). Good WLB, structured hiring — DSA + HLD rounds.", tags: ["React · Node · Ruby", "Chennai · Bangalore", "SaaS"] },
  { tier: 1, name: "Swiggy",      ctc: "14–20 LPA",    desc: "Consumer tech at massive scale. Real-time systems, logistics, high throughput engineering challenges.", tags: ["React · Java · Kotlin", "Bangalore", "Consumer"] },
  { tier: 1, name: "Meesho",      ctc: "14–20 LPA",    desc: "Social commerce unicorn. Aggressive tech hiring, strong focus on scale. High ownership early.", tags: ["React · Node · Python", "Bangalore", "E-commerce"] },
  { tier: 1, name: "CRED",        ctc: "16–25 LPA",    desc: "Fintech with one of India's best eng cultures. High bar but worth aiming for. Beautiful product.", tags: ["React · Node · Kotlin", "Bangalore", "Fintech"] },
  { tier: 1, name: "PhonePe",     ctc: "14–22 LPA",    desc: "India's top UPI platform. Large-scale distributed systems. Engineering-heavy culture.", tags: ["React · Java · Spring", "Bangalore · Pune", "Fintech"] },
  { tier: 2, name: "MoEngage",    ctc: "12–18 LPA",    desc: "Customer engagement SaaS platform. AI-powered (Sherpa). Strong eng team, Bangalore-based.", tags: ["React · Node · Python", "Bangalore", "MarTech SaaS"] },
  { tier: 2, name: "CleverTap",   ctc: "12–18 LPA",    desc: "Mobile-first customer engagement & analytics. Strong in APAC. Real-time behavioral engine.", tags: ["React · Node · Java", "Mumbai", "MarTech SaaS"] },
  { tier: 2, name: "WebEngage",   ctc: "10–16 LPA",    desc: "CDP + marketing automation. Mumbai-based. Journey orchestration platform. Intuitive eng culture.", tags: ["React · Node · Python", "Mumbai", "MarTech SaaS"] },
  { tier: 2, name: "Atlassian",   ctc: "14–22 LPA",    desc: "Jira/Confluence maker. Best WLBs in industry. Fully remote India. DSA + system design + values round.", tags: ["React · Node · Java", "Remote", "DevTools"] },
  { tier: 2, name: "Groww",       ctc: "12–18 LPA",    desc: "Investment platform growing fast. React-heavy frontend. Good for fintech interest. Hires year-round.", tags: ["React · Node · Java", "Bangalore", "Fintech"] },
  { tier: 2, name: "BrowserStack",ctc: "12–18 LPA",    desc: "Testing infrastructure used globally. Product eng culture. Strong Node.js. Mumbai-based, remote-friendly.", tags: ["React · Node · Ruby", "Mumbai", "DevTools"] },
  { tier: 2, name: "Zomato",      ctc: "12–18 LPA",    desc: "Food delivery + Blinkit (quick commerce). Massive scale. Consumer-facing + internal tools teams.", tags: ["React · Node · Python · Go", "Gurgaon", "Consumer"] },
  { tier: 2, name: "HighRadius",  ctc: "10–16 LPA",    desc: "AI-powered fintech SaaS. Strong lateral hiring. Known for structured training. Great for 1-2 yrs exp.", tags: ["React · Java · Python · Azure", "Hyderabad", "Fintech SaaS"] },
  { tier: 2, name: "Chargebee",   ctc: "12–18 LPA",    desc: "Subscription management SaaS. Great product culture. Small teams = high ownership from day 1.", tags: ["React · Ruby · Node", "Chennai", "SaaS"] },
  { tier: 2, name: "Gupshup",     ctc: "10–16 LPA",    desc: "Conversational messaging platform. API-first product. Node + React stack.", tags: ["React · Node · Java", "Mumbai · Bangalore", "Messaging SaaS"] },
  { tier: 2, name: "Hasura",      ctc: "14–22 LPA",    desc: "GraphQL engine — open source. Deeply technical product. Fullstack roles use React + Node.", tags: ["React · Node · Haskell", "Bangalore", "DevTools"] },
  { tier: 2, name: "Druva",       ctc: "12–20 LPA",    desc: "Cloud data protection SaaS. 5000+ enterprise clients incl NASA. Pune-based.", tags: ["React · Python · Go", "Pune", "Enterprise SaaS"] },
  { tier: 3, name: "Smallcase",   ctc: "10–16 LPA",    desc: "Thematic investment portfolios. Small tight eng team. React + Node stack. Great ownership.", tags: ["React · Node · Go", "Bangalore", "Fintech"] },
  { tier: 3, name: "Rocketlane",  ctc: "10–16 LPA",    desc: "Customer onboarding platform. YC-backed. React + Node. Fast-growing, great for early-career.", tags: ["React · Node · AWS", "Chennai", "SaaS"] },
  { tier: 3, name: "Hevo Data",   ctc: "10–15 LPA",    desc: "No-code data pipeline platform. Strong engineering problems around data at scale.", tags: ["React · Node · Java", "Bangalore", "Data/SaaS"] },
  { tier: 3, name: "Instamojo",   ctc: "8–14 LPA",     desc: "Payments + e-commerce for SMBs. Python + React stack matches your profile perfectly.", tags: ["React · Python · Django", "Bangalore", "Fintech"] },
  { tier: 3, name: "Mindtickle",  ctc: "10–15 LPA",    desc: "Sales readiness platform. SaaS with global clients. React + Node stack. Pune-based.", tags: ["React · Node · Python", "Pune", "SaaS"] },
  { tier: 3, name: "Innovaccer",  ctc: "12–18 LPA",    desc: "Healthcare data platform. Unicorn. React-heavy frontend, Python/Go backend.", tags: ["React · Python · Go", "Noida", "HealthTech SaaS"] },
  { tier: 3, name: "Darwinbox",   ctc: "10–16 LPA",    desc: "Enterprise HR SaaS. $307M funded. Full-stack roles with React frontend. Hyderabad-based.", tags: ["React · Node · Java", "Hyderabad", "HR SaaS"] },
  { tier: 3, name: "LeadSquared", ctc: "10–16 LPA",    desc: "CRM/Marketing SaaS. Rapidly scaling. Pragmatic hiring — less DSA-heavy than unicorns.", tags: ["React · Node · .NET", "Bangalore", "SaaS"] },
  { tier: 3, name: "Dukaan",      ctc: "8–14 LPA",     desc: "E-commerce enablement. React + Node. Fast-paced startup energy. Remote-friendly.", tags: ["React · Node · Python", "Bangalore", "E-commerce"] },
  { tier: 3, name: "Remote Global Startups", ctc: "$1500–3000/mo", desc: "Via Wellfound, Turing, Toptal, Arc.dev. US/EU startups hiring remotely. Often 15-25+ LPA equiv.", tags: ["React · Node · Next.js", "Fully Remote", "Global"] },
];

function generateDays() {
  const start = new Date(2026, 3, 1);
  const days: Date[] = [];
  for (let i = 0; i < 90; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

const allDays = generateDays();

function getPhase(dayIndex: number) {
  if (dayIndex < 14) return PHASES[0];
  if (dayIndex < 30) return PHASES[1];
  if (dayIndex < 50) return PHASES[2];
  if (dayIndex < 70) return PHASES[3];
  return PHASES[4];
}

function getDayPlan(dayIndex: number) {
  const d = allDays[dayIndex];
  const dow = d.getDay();
  const isWeekend = dow === 0 || dow === 6;
  const phase = getPhase(dayIndex);
  const questions = DAY_QUESTIONS[dayIndex] ?? [];
  
  let focus = "";
  if (dayIndex < 11) focus = "Doubly Linked List — " + (questions[0]?.name || "Concepts & Revision");
  else if (dayIndex < 13) focus = "Bit Manipulation — " + (questions[0]?.name || "Tricks & Patterns");
  else if (dayIndex < 17) focus = "Greedy Algorithms — " + (questions[0]?.name || "Optimization");
  else if (dayIndex < 20) focus = "Sliding Window — " + (questions[0]?.name || "Subarray Patterns");
  else if (dayIndex < 27) focus = "Stack & Queues — " + (questions[0]?.name || "LIFO/FIFO Patterns");
  else if (dayIndex < 38) focus = "Binary Trees — " + (questions[0]?.name || "Traversals & Views");
  else if (dayIndex < 42) focus = "Binary Search Trees — " + (questions[0]?.name || "BST Property");
  else if (dayIndex < 45) focus = "Heaps — " + (questions[0]?.name || "Priority & Sorting");
  else if (dayIndex < 60) focus = "Graphs — " + (questions[0]?.name || "Pathfinding & Cycles");
  else if (dayIndex < 75) focus = "Dynamic Programming — " + (questions[0]?.name || "State Transitions");
  else if (dayIndex < 77) focus = "Tries — " + (questions[0]?.name || "Prefix Management");
  else if (dayIndex < 80) focus = "Advanced Strings — " + (questions[0]?.name || "KMP & Rabin Karp");
  else if (dayIndex < 82) focus = "Interview Maths — " + (questions[0]?.name || "Prime Patterns");
  else focus = "Final Push — Revision, Mock Interviews & Portfolio Polish";

  // Dynamic schedule content based on phase
  let morning = "", afternoon = "", evening = "", officeGap = "";

  if (phase.num === 1) {
    morning = isWeekend ? "7:00–10:00 AM → DSA theory + Solve 3-4 problems" : "7:00–9:30 AM → Concept video + 2 targeted problems";
    evening = "10:30 PM–12:00 AM → JS: Basics (Closures, Scope, Hoisting).";
  } else if (phase.num === 2) {
    morning = isWeekend ? "7:00–10:30 AM → Patterns + 4 medium problems" : "7:00–9:30 AM → Focus on 2 algorithmic implementations";
    evening = "10:30 PM–12:00 AM → JS: Promises, Async/Await internals.";
  } else if (phase.num === 3) {
    morning = isWeekend ? "7:00–11:00 AM → Project build: Auth or System State" : "7:00–9:30 AM → Advanced DSA + React hook design";
    evening = "10:30 PM–1:00 AM → Continue building & debugging feature.";
  } else {
    morning = "7:00–10:30 AM → System Design (LLD/HLD) or Hard Problem.";
    evening = "10:30 PM–12:00 AM → Profile apply/Behavioral stories.";
  }

  afternoon = "Quick Gaps → Mentally trace solution logic.";
  officeGap = "Office Breaks → Solve one easy warm-up or review patterns.";

  return { focus, morning, afternoon, evening, officeGap, isWeekend, phase };
}

const BLOCKS = [
  { label: "Before Office",  sublabel: "7:00 – 9:30 AM",      key: "morning"   as const, color: C.emerald, icon: "🌅" },
  { label: "Office Breaks",  sublabel: "12 PM – 9 PM gaps",    key: "officeGap" as const, color: C.amber,   icon: "💻" },
  { label: "Quick Gaps",     sublabel: "Buffer time",           key: "afternoon" as const, color: C.sky,     icon: "⚡" },
  { label: "After Dinner",   sublabel: "10:30 PM – 12:00 AM",  key: "evening"   as const, color: C.violet,  icon: "🌙" },
];

// ─── SMALL COMPONENTS ───

function Tag({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span style={{
      fontSize: "0.65rem", fontWeight: 700, padding: "4px 12px", borderRadius: 100,
      background: `${color}10`, color, whiteSpace: "nowrap", border: `1px solid ${color}15`
    }}>{children}</span>
  );
}

function ProgressRing({ pct, color, size = 48 }: { pct: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={5} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={5}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color }}>
        {pct}%
      </div>
    </div>
  );
}

const DIFF_COLOR = { E: C.emerald, M: C.amber, H: C.rose } as const;
const DIFF_LABEL = { E: "Easy", M: "Medium", H: "Hard" } as const;

function DayRow({
  dayIndex, isExpanded, onToggle, checks, onCheck, qChecks, onQCheck, isToday
}: {
  dayIndex: number; isExpanded: boolean; onToggle: () => void;
  checks: boolean[]; onCheck: (i: number, v: boolean) => void;
  qChecks: boolean[]; onQCheck: (i: number, v: boolean) => void;
  isToday: boolean;
}) {
  const plan = getDayPlan(dayIndex);
  const { phase } = plan;
  const d = allDays[dayIndex];
  const dayStr = d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric" });
  const monthStr = d.toLocaleDateString("en-IN", { month: "short" });
  const done = checks.filter(Boolean).length;
  const total = 5;
  const allDone = done === total;
  const questions = DAY_QUESTIONS[dayIndex] ?? [];
  const qDone = qChecks.filter(Boolean).length;

  return (
    <div style={{
      borderRadius: 18,
      background: C.surface,
      boxShadow: isExpanded
        ? "0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05)"
        : "0 1px 3px rgba(0,0,0,0.02)",
      border: `1px solid ${isExpanded ? C.border : 'transparent'}`,
      overflow: "hidden",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      marginBottom: 12,
    }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", cursor: "pointer" }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 14, flexShrink: 0,
          background: allDone ? phase.color : `${phase.color}08`,
          display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center",
          color: allDone ? "#fff" : phase.color,
          transition: "all 0.3s",
          border: `1px solid ${allDone ? 'transparent' : phase.color + '20'}`
        }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 800, textTransform: 'uppercase', opacity: 0.8 }}>{dayIndex + 1 === 1 ? 'Start' : 'Day'}</span>
          <span style={{ fontSize: "1rem", fontWeight: 800, marginTop: -2 }}>{dayIndex + 1}</span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: C.text }}>{dayStr} {monthStr}</span>
            {isToday && <Tag color={C.orange}>Today</Tag>}
            {plan.isWeekend && <Tag color={C.sky}>Weekend</Tag>}
            {allDone && <Tag color={C.emerald}>Completed</Tag>}
          </div>
          <p style={{
            fontSize: "0.8rem", color: C.muted, marginTop: 4,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>{plan.focus}</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: 100,
                background: checks[i] ? phase.color : "#e2e8f0",
                transition: "all 0.3s",
              }} />
            ))}
          </div>
          
          {questions.length > 0 && (
            <div style={{
              fontSize: "0.65rem", fontWeight: 800,
              color: qDone === questions.length ? C.emerald : C.amber,
              background: qDone > 0 ? (qDone === questions.length ? `${C.emerald}10` : `${C.amber}10`) : C.bg,
              padding: "4px 10px", borderRadius: 100,
              border: `1px solid ${qDone > 0 ? 'transparent' : '#e2e8f0'}`,
            }}>
              {qDone}/{questions.length} Solved
            </div>
          )}
          
          <div style={{
            width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: C.bg, color: C.muted,
            transform: isExpanded ? "rotate(180deg)" : "none",
            transition: "transform 0.3s",
          }}>▾</div>
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: "0 20px 20px", animation: "slideIn 0.3s ease" }}
          onClick={e => e.stopPropagation()}>
          
          <div style={{ height: 1, background: C.border, marginBottom: 20 }} />

          <div style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            padding: "16px", marginBottom: 16, borderRadius: 16,
            background: `${phase.color}05`,
            border: `1px solid ${phase.color}15`,
          }}>
            <div style={{ fontSize: "1.2rem" }}>🎯</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: phase.color, marginBottom: 4 }}>Main Goal</div>
              <p style={{ fontSize: "0.85rem", color: C.text, lineHeight: 1.6, fontWeight: 500 }}>{plan.focus}</p>
            </div>
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={checks[0]} onChange={e => onCheck(0, e.target.checked)}
                style={{ accentColor: phase.color, width: 18, height: 18 }} />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginBottom: 20 }}>
            {BLOCKS.map((block, i) => {
              const idx = i + 1;
              const checked = checks[idx];
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "14px", borderRadius: 16,
                  background: checked ? `${block.color}05` : C.surface,
                  border: `1px solid ${checked ? block.color + '20' : C.border}`,
                  transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: "1.1rem" }}>{block.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                       <span style={{ fontSize: "0.75rem", fontWeight: 700, color: checked ? C.text : block.color }}>{block.label}</span>
                       <span style={{ fontSize: "0.6rem", color: C.muted, fontWeight: 500 }}>{block.sublabel}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.5 }}>{plan[block.key]}</p>
                  </div>
                  <input type="checkbox" checked={checked} onChange={e => onCheck(idx, e.target.checked)}
                    style={{ accentColor: block.color, width: 16, height: 16, cursor: "pointer" }} />
                </div>
              );
            })}
          </div>

          {questions.length > 0 && (
            <div style={{ background: C.bg, borderRadius: 16, padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: C.muted }}>Targeted Problems</span>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.text }}>{qDone} of {questions.length} complete</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
                {questions.map((q, i) => {
                  const solved = qChecks[i] ?? false;
                  return (
                    <label key={i} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 12px", borderRadius: 12, cursor: "pointer",
                      background: solved ? `${C.emerald}05` : C.surface,
                      border: `1px solid ${solved ? C.emerald + '20' : 'transparent'}`,
                    }}>
                      <input type="checkbox" checked={solved} onChange={e => onQCheck(i, e.target.checked)}
                        style={{ accentColor: C.emerald, width: 15, height: 15 }} />
                      <span style={{ fontSize: "0.8rem", color: solved ? C.muted : C.text, textDecoration: solved ? "line-through" : "none", flex: 1 }}>{q.name}</span>
                      {q.difficulty && (
                        <span style={{ fontSize: "0.55rem", fontWeight: 800, color: DIFF_COLOR[q.difficulty], background: `${DIFF_COLOR[q.difficulty]}10`, padding: "2px 6px", borderRadius: 4 }}>
                          {q.difficulty}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── MAIN ───
const EMPTY_BLOCKS = () => Array.from({ length: 90 }, () => Array(5).fill(false));
const EMPTY_QCHECKS = (): Record<string, boolean[]> => ({});

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function getCurrentDayIndex() {
  const start = new Date(2026, 3, 1).getTime();
  const diff = Math.floor((Date.now() - start) / 86400000);
  return Math.max(0, Math.min(89, diff));
}

export default function RoadmapApp() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [tab, setTab] = useState<"planner" | "companies" | "strategy">("planner");
  const [expandedDay, setExpandedDay] = useState<number>(-1);
  const [activePhase, setActivePhase] = useState<number>(0);
  const [tierFilter, setTierFilter] = useState(0);
  const [checks, setChecks] = useState<boolean[][]>(EMPTY_BLOCKS);
  const [qChecks, setQChecks] = useState<Record<string, boolean[]>>(EMPTY_QCHECKS);
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState("");
  const [saveTimeout, setSaveTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [currentDayIdx, setCurrentDayIdx] = useState(0);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(r => r.json())
      .then(d => {
        setIsLoggedIn(d.isLoggedIn);
        if (d.userId) setUsername(d.userId);
      })
      .catch(() => setIsLoggedIn(false));

    setCurrentDayIdx(getCurrentDayIndex());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    
    // Fetch profile
    fetch("/api/auth/me")
      .then(r => r.json())
      .then(d => { if (d.userId) setUsername(d.userId); });

    // Fetch progress
    fetch("/api/progress")
      .then(r => r.json())
      .then(d => {
        if (d.blocks) setChecks(d.blocks);
        if (d.questions) setQChecks(d.questions);
        if (d.notes) setNotes(d.notes);
      })
      .catch(() => {});
  }, [isLoggedIn]);

  const saveToDb = useCallback((nb = checks, nq = qChecks, nn = notes) => {
    if (saveTimeout) clearTimeout(saveTimeout);
    const t = setTimeout(() => {
      fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blocks: nb, questions: nq, notes: nn }),
      });
    }, 1200);
    setSaveTimeout(t);
  }, [saveTimeout, checks, qChecks, notes]);

  const saveToDbImmediate = (nb = checks, nq = qChecks, nn = notes) => {
    if (saveTimeout) clearTimeout(saveTimeout);
    fetch("/api/progress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blocks: nb, questions: nq, notes: nn }),
    });
  };

  const addNote = () => {
    if (newNote.trim() && notes.length < 3) {
      const next = [...notes, newNote.trim().slice(0, 25)];
      setNotes(next);
      setNewNote("");
      saveToDbImmediate(checks, qChecks, next);
    }
  };

  const removeNote = (idx: number) => {
    const next = notes.filter((_, i) => i !== idx);
    setNotes(next);
    saveToDbImmediate(checks, qChecks, next);
  };

  const filteredCompanies = useMemo(
    () => tierFilter === 0 ? companies : companies.filter(c => c.tier === tierFilter),
    [tierFilter]
  );

  const filteredDays = useMemo(() => {
    const all = allDays.map((_, i) => i);
    if (activePhase === 0) return all;
    const p = PHASES[activePhase - 1];
    return all.filter(i => i >= p.range[0] && i <= p.range[1]);
  }, [activePhase]);

  function handleCheck(dayIndex: number, blockIndex: number, val: boolean) {
    setChecks(prev => {
      const next = prev.map(row => [...row]);
      next[dayIndex][blockIndex] = val;
      saveToDb(next, qChecks);
      return next;
    });
  }

  function handleQCheck(dayIndex: number, qIndex: number, val: boolean) {
    setQChecks(prev => {
      const dayKey = String(dayIndex);
      const dayArr = [...(prev[dayKey] ?? [])];
      dayArr[qIndex] = val;
      const next = { ...prev, [dayKey]: dayArr };
      saveToDb(checks, next);
      return next;
    });
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setIsLoggedIn(false);
    setUsername("");
    setNotes([]);
    setChecks(EMPTY_BLOCKS());
    setQChecks(EMPTY_QCHECKS());
  }

  // Stats
  const totalDone = checks.filter(row => row.every(Boolean)).length;
  const totalBlocks = checks.flat().filter(Boolean).length;
  const overallPct = Math.round((totalDone / 90) * 100);

  const phaseDone = PHASES.map(p => {
    const days = allDays.map((_, i) => i).filter(i => i >= p.range[0] && i <= p.range[1]);
    const done = days.filter(i => checks[i].every(Boolean)).length;
    return { done, total: days.length, pct: Math.round((done / days.length) * 100) };
  });

  const currentPhase = getPhase(currentDayIdx);
  const displayName = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : "You";

  if (isLoggedIn === null) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 36, height: 36, border: `3px solid ${C.orange}`, borderTopColor: "transparent", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.8s linear infinite" }} />
          <p style={{ color: C.muted, fontFamily: "sans-serif", fontSize: "0.9rem" }}>Loading…</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .dashboard-container { max-width: 1440px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 340px; gap: 24px; padding: 24px; flex: 1; overflow: hidden; }
        .main-col { min-width: 0; overflow-y: auto; padding-right: 8px; scroll-behavior: smooth; }
        .sidebar-col { display: flex; flex-direction: column; gap: 24px; overflow-y: auto; }
        
        @media (max-width: 1100px) {
          .dashboard-container { grid-template-columns: 1fr; padding: 16px; gap: 16px; }
          .sidebar-col { display: none; }
          .search-wrapper { display: none !important; }
          .nav-label { display: none; }
          .user-details { display: none !important; }
          .banner-inner { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .banner-stats { width: 100% !important; max-width: 120px !important; margin: 0 auto !important; }
          .banner-title { font-size: 1.8rem !important; }
          .header-main { padding: 0 16px !important; }
          .phase-tabs { overflow-x: auto; white-space: nowrap; max-width: 100%; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
          .phase-tabs button { flex-shrink: 0; }
        }
      `}</style>

      {/* ── TOP NAVBAR ── */}
      <header className="header-main" style={{
        height: 72, background: C.surface, borderBottom: `1px solid ${C.border}`,
        display: "flex", alignItems: "center", padding: "0 32px", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: 40 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: `0 4px 12px ${C.orange}40` }}>
            <Icons.Rocket />
          </div>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, fontFamily: "Outfit", letterSpacing: "-0.02em" }}>PrepTrack</div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: 4 }}>
          {[
            { id: "planner", icon: <Icons.Home />, label: "Home" },
            { id: "strategy", icon: <Icons.Target />, label: "Strategy" },
            { id: "companies", icon: <Icons.Building />, label: "Tiers" },
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id as any)} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 12,
              background: tab === item.id ? C.orangeL : "transparent",
              color: tab === item.id ? C.orange : C.muted,
              border: "none", fontWeight: 700, fontSize: "0.85rem", transition: "all 0.2s", cursor: 'pointer'
            }}>
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="search-wrapper" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.faint, display: 'flex', alignItems: 'center' }}>
              <Icons.Search />
            </span>
            <input type="text" placeholder="Search topics, or companies..." style={{
              width: "100%", background: C.bg, padding: "10px 14px 10px 40px", borderRadius: 12,
              color: C.text, fontSize: "0.85rem", fontWeight: 500, outline: "none", border: `1px solid transparent`, transition: "all 0.2s",
            }} />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
             <div className="user-details" style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>{displayName}</div>
                <div style={{ fontSize: "0.7rem", color: C.muted, fontWeight: 500 }}>Software Engineer</div>
             </div>
             <div style={{ width: 40, height: 40, borderRadius: 12, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", border: `2px solid ${C.orangeL}` }}>
               {displayName.charAt(0)}
             </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <button onClick={handleLogout} style={{ 
              display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 12,
              background: "#fef2f2", border: "1px solid #fee2e2", 
              color: "#ef4444", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer", transition: "all 0.2s"
            }}>
              <Icons.Logout />
              <span className="nav-label">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        {/* ── LEFT COLUMN ── */}
        <div className="main-col">
          {tab === "planner" && (
            <div style={{ animation: "slideIn 0.4s ease forwards" }}>
              {/* BANNER */}
              <div style={{
                position: "relative", height: 280, borderRadius: 28, overflow: "hidden", marginBottom: 32,
                display: "flex", alignItems: "flex-end", padding: 32, boxShadow: "0 20px 50px -20px rgba(0,0,0,0.15)",
              }}>
                <img src="/minimalist_banner.png" alt="Banner" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.1) 60%)" }} />
                
                <div className="banner-inner" style={{ position: "relative", zIndex: 1, display: "flex", gap: 32, alignItems: "center", width: "100%" }}>
                  <div className="banner-stats" style={{ width: 140, background: "rgba(255,255,255,0.9)", padding: 18, borderRadius: 24, backdropFilter: "blur(12px)", boxShadow: "0 15px 35px rgba(0,0,0,0.2)", textAlign: 'center' }}>
                     <div style={{ fontSize: "0.6rem", fontWeight: 800, color: C.orange, textTransform: "uppercase", letterSpacing: '0.1em', marginBottom: 10 }}>Total Progress</div>
                     <ProgressRing pct={overallPct} color={C.orange} size={70} />
                  </div>
                  <div style={{ flex: 1 }}>
                     <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                       <Tag color={C.orange}>PHASE {currentPhase.num}</Tag>
                       <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", fontWeight: 600 }}>{currentPhase.label}</span>
                     </div>
                     <h1 className="banner-title" style={{ fontSize: "2.4rem", fontWeight: 800, color: "#fff", fontFamily: "Outfit", margin: 0, lineHeight: 1, letterSpacing: '-0.02em' }}>
                       {currentDayIdx + 1 === 1 ? "Let's Get Started!" : `Day ${currentDayIdx + 1} of 90`}
                     </h1>
                     <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", marginTop: 12, fontWeight: 500, maxWidth: 500 }}>
                        Current Focus: <span style={{ color: "#fff", fontWeight: 700 }}>{getDayPlan(currentDayIdx).focus}</span>. Stay consistent, you're doing great!
                     </p>
                  </div>
                </div>
              </div>

              {/* CONTROLS */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "Outfit" }}>Upcoming Journey</h2>
                <div className="phase-tabs" style={{ display: "flex", gap: 6, background: C.surface, padding: 4, borderRadius: 14, border: `1px solid ${C.border}`, boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                   <button onClick={() => setActivePhase(0)} style={{
                     padding: "8px 16px", borderRadius: 10, border: "none", fontSize: "0.8rem", fontWeight: 700,
                     background: activePhase === 0 ? C.bg : "transparent", color: activePhase === 0 ? C.text : C.muted, cursor: "pointer", transition: 'all 0.2s'
                   }}>All 90 Days</button>
                   {PHASES.map(p => (
                     <button key={p.num} onClick={() => setActivePhase(p.num)} style={{
                       padding: "8px 16px", borderRadius: 10, border: "none", fontSize: "0.8rem", fontWeight: 700,
                       background: activePhase === p.num ? C.bg : "transparent", color: activePhase === p.num ? C.text : C.muted, cursor: "pointer", transition: 'all 0.2s'
                     }}>Ph {p.num}</button>
                   ))}
                </div>
              </div>

              {/* LIST */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {filteredDays.map(i => (
                  <DayRow
                    key={i} dayIndex={i}
                    isToday={currentDayIdx === i}
                    isExpanded={expandedDay === i}
                    onToggle={() => setExpandedDay(expandedDay === i ? -1 : i)}
                    checks={checks[i]}
                    onCheck={(bi, v) => handleCheck(i, bi, v)}
                    qChecks={qChecks[String(i)] ?? []}
                    onQCheck={(qi, v) => handleQCheck(i, qi, v)}
                  />
                ))}
              </div>
            </div>
          )}

          {tab === "companies" && (
            <div style={{ animation: "slideIn 0.4s ease forwards" }}>
               <div style={{ background: C.surface, borderRadius: 24, padding: 32, border: `1px solid ${C.border}`, marginBottom: 24 }}>
                 <h2 style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "Outfit", color: C.text, marginBottom: 8 }}>Target Companies</h2>
                 <p style={{ color: C.muted, fontSize: "0.9rem" }}>A curated list of product-based companies filtered by growth potential and tech stack.</p>
               </div>
               <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
                 {[0, 1, 2, 3].map(t => (
                   <button key={t} onClick={() => setTierFilter(t)} style={{
                     padding: "10px 22px", borderRadius: 16, border: `1.5px solid ${tierFilter === t ? C.orange : C.border}`,
                     background: tierFilter === t ? C.orange : C.surface, color: tierFilter === t ? "#fff" : C.muted,
                     fontSize: "0.85rem", fontWeight: 700, transition: 'all 0.2s', cursor: 'pointer'
                   }}>{t === 0 ? "All Opportunity" : `Tier ${t} Companies`}</button>
                 ))}
               </div>
               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                 {filteredCompanies.map((c, i) => (
                   <div key={i} style={{ padding: 24, background: C.surface, borderRadius: 24, border: `1px solid ${C.border}`, display: "flex", flexDirection: 'column', gap: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.01)', transition: 'all 0.3s' }}>
                      <div style={{ display: "flex", gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 52, height: 52, borderRadius: 16, background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", border: `1px solid ${C.border}` }}>💼</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{c.name}</div>
                          <div style={{ fontSize: "0.8rem", color: C.emerald, fontWeight: 800, marginTop: 2 }}>{c.ctc}</div>
                        </div>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.5 }}>{c.desc.slice(0, 100)}...</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {c.tags.slice(0, 3).map(tag => <Tag key={tag} color={C.sky}>{tag}</Tag>)}
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {tab === "strategy" && (
            <div style={{ animation: "slideIn 0.4s ease forwards", background: C.surface, padding: 40, borderRadius: 28, border: `1px solid ${C.border}` }}>
              <div style={{ maxWidth: 700 }}>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, fontFamily: "Outfit", color: C.text, marginBottom: 8 }}>Preparation Masterclass</h2>
                <div style={{ width: 60, height: 4, background: C.orange, borderRadius: 2, marginBottom: 24 }} />
                
                <div style={{ display: "grid", gap: 32 }}>
                   <div style={{ display: "flex", gap: 20 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: C.orangeL, display: "flex", alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🧠</div>
                      <div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>The Consistency Mindset</h3>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: C.muted }}>Success in top-tier interviews isn't about IQ, it's about pattern recognition. Solving 2 problems daily for 90 days is exponentially better than solving 20 in one weekend.</p>
                      </div>
                   </div>
                   <div style={{ display: "flex", gap: 20 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.sky}10`, display: "flex", alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>📊</div>
                      <div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>Salary Anchoring</h3>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: C.muted }}>Always anchor your expectations 30% higher than your current target. Aim for 18 LPA, and you'll easily land 15. The product jump is a reset for your career.</p>
                      </div>
                   </div>
                   <div style={{ display: "flex", gap: 20 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.emerald}10`, display: "flex", alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>✨</div>
                      <div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>Your Hidden Edge</h3>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: C.muted }}>Your Azure and real-world system debugging experience is what makes you a "Senior" candidate compared to 400-LC-grinders. Talk about scale, not just code.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN (SIDEBAR) ── */}
        <div className="sidebar-col">
          {/* GREETING CARD */}
          <div style={{ background: C.surface, borderRadius: 28, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
             <div style={{ height: 130, position: "relative" }}>
                 <img src="/minimalist_profile.png" alt="Decoration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,1) 95%)" }} />
             </div>
             <div style={{ padding: "0 28px 28px", marginTop: -24, position: "relative", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: 22, background: C.orange, margin: "0 auto 16px", border: "5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", color: "#fff", fontWeight: 800, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  {displayName.charAt(0)}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "Outfit", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                   Hi, {displayName}!
                   <span style={{ color: C.orange, display: 'flex', animation: 'floating 3s ease-in-out infinite' }}><Icons.Rocket /></span>
                </h3>
                <p style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.5, marginTop: 10 }}>
                  Build the future you've always imagined. One commit at a time.
                </p>
                
                <div style={{ marginTop: 24, display: "flex", background: C.bg, borderRadius: 20, padding: 12, gap: 4 }}>
                   <div style={{ flex: 1, textAlign: 'center' }}>
                     <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{totalDone}</div>
                     <div style={{ fontSize: "0.6rem", color: C.faint, fontWeight: 800, textTransform: "uppercase" }}>Days</div>
                   </div>
                   <div style={{ width: 1, background: '#e2e8f0', margin: '4px 0' }} />
                   <div style={{ flex: 1, textAlign: 'center' }}>
                     <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{Object.values(qChecks).flat().filter(Boolean).length}</div>
                     <div style={{ fontSize: "0.6rem", color: C.faint, fontWeight: 800, textTransform: "uppercase" }}>Solves</div>
                   </div>
                   <div style={{ width: 1, background: '#e2e8f0', margin: '4px 0' }} />
                   <div style={{ flex: 1, textAlign: 'center' }}>
                     <div style={{ fontSize: "1.1rem", fontWeight: 800 }}>{currentPhase.num}</div>
                     <div style={{ fontSize: "0.6rem", color: C.faint, fontWeight: 800, textTransform: "uppercase" }}>Phase</div>
                   </div>
                </div>
             </div>
          </div>

          {/* PERSONAL STICKY NOTES */}
          <div style={{ background: C.surface, padding: 28, borderRadius: 28, border: `1px solid ${C.border}`, boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 800 }}>Personal Todos</label>
                <div style={{ fontSize: "0.7rem", color: C.muted, fontWeight: 700 }}>{notes.length}/3</div>
             </div>
             
             <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: notes.length > 0 ? 20 : 0 }}>
                {notes.map((note, i) => (
                  <div key={i} style={{ background: C.bg, padding: "12px 14px", borderRadius: 14, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", animation: 'slideIn 0.3s ease' }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: C.text }}>{note}</span>
                    <button onClick={() => removeNote(i)} style={{ background: 'none', border: 'none', color: C.rose, cursor: 'pointer', padding: 4, display: 'flex' }}>
                       <Icons.Trash />
                    </button>
                  </div>
                ))}
             </div>

             {notes.length < 3 ? (
               <div style={{ background: C.bg, borderRadius: 16, padding: 6, display: "flex", alignItems: "center", border: `1px solid ${C.border}` }}>
                  <input 
                    type="text" 
                    placeholder="New reminder (max 25)..." 
                    value={newNote}
                    onKeyDown={e => e.key === 'Enter' && addNote()}
                    onChange={e => setNewNote(e.target.value.slice(0, 25))}
                    style={{ flex: 1, background: "transparent", border: "none", padding: "10px 14px", fontSize: "0.85rem", fontWeight: 600, outline: "none", color: C.text }} 
                  />
                  <button onClick={addNote} style={{ width: 36, height: 36, borderRadius: 12, background: C.orange, color: "#fff", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 4px 10px ${C.orange}30` }}>
                    <Icons.Plus />
                  </button>
               </div>
             ) : (
                <div style={{ textAlign: 'center', fontSize: "0.75rem", color: C.muted, fontWeight: 500 }}>Focus on these 3 tasks first!</div>
             )}
          </div>

          {/* DAILY MISSIONS CARD */}
          <div style={{ background: C.surface, borderRadius: 28, border: `1px solid ${C.border}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
             <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: C.blueL }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: C.blue }}><Icons.Calendar /></span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: C.blue }}>Today's Mission</span>
                </div>
                <Icons.Pulse color={C.blue} />
             </div>
             
             <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {DAY_QUESTIONS[currentDayIdx]?.slice(0, 3).map((q, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, color: C.faint }}>
                      <Icons.Check />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: C.text, lineHeight: 1.4 }}>{q.name}</div>
                      {q.difficulty && (
                        <div style={{ fontSize: "0.65rem", fontWeight: 800, color: C.orange, marginTop: 4 }}>Goal: {q.difficulty === 'E' ? 'Intro' : q.difficulty === 'M' ? 'Deep Dive' : 'Advanced'}</div>
                      )}
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={() => setExpandedDay(currentDayIdx)}
                  style={{ 
                    marginTop: 10, background: C.bg, border: `1px solid ${C.border}`, padding: "12px", borderRadius: 12,
                    fontSize: "0.8rem", fontWeight: 700, color: C.text, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 
                  }}>
                  Go to Today's Tasks
                  <span style={{ fontSize: '1rem' }}>→</span>
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
