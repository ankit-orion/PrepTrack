"use client";

import { useState, useEffect } from "react";

const C = {
  bg:       "var(--bg)",
  surface:  "var(--surface)",
  surface2: "var(--border)",
  border:   "var(--border)",
  text:     "var(--text)",
  muted:    "var(--muted)",
  orange:   "var(--orange)",
  blue:     "var(--blue)",
  sky:      "var(--sky)",
};

/** Professional Minimalist SVG Icons */
const Icons = {
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Curriculum: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  Rocket: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
    </svg>
  ),
  React: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 1a26.8 26.8 0 0 1 7.4 12c-2.4 8.2-10 10.4-14.8 10.4C5.2 23.4 12.8 19.2 12 1z"></path>
      <path d="M12 1a26.8 26.8 0 0 0-7.4 12c2.4 8.2 10 10.4 14.8 10.4 4.8 0-2.8-4.2-2-22.4z"></path>
    </svg>
  ),
  Database: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Cloud: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5 0-2.97-2.353-5.385-5.3-5.494.316-5.07-4.104-9.352-9.2-8.91C4.305-1.127.174 3.013.02 7.214-.14 11.455 2.5 15.5 6.5 16h-.5"></path>
      <path d="M17.5 19h-11"></path>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  Code: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Monitor: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  Server: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Edit: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  ),
  Chat: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  Pulse: ({ color }: { color: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, animation: 'pulse 2s infinite' }} />
      <style>{`@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 ${color}70; } 70% { transform: scale(1); box-shadow: 0 0 0 10px ${color}00; } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 ${color}00; } }`}</style>
    </div>
  )
};

/** Theme Toggle Hook/Component */
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
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
  
  if (!mounted) return <div style={{width: 36}} />;
  
  return (
    <button onClick={toggle} style={{
      background: "transparent", border: `1px solid ${C.border}`, width: 36, height: 36, borderRadius: 10,
      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: theme === "light" ? C.muted : C.text,
      transition: 'all 0.2s'
    }} onMouseEnter={e => e.currentTarget.style.background = C.surface2} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
      {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
    </button>
  );
}

const CATEGORIES = [
  { title: "DSA Fundamentals", icon: <Icons.Code />, color: "#3b82f6", desc: "Arrays, Strings, Linked Lists & Trees" },
  { title: "Advanced SQL", icon: <Icons.Database />, color: "#f59e0b", desc: "Window Functions, Joins & Optimization" },
  { title: "Python & JS", icon: <Icons.Edit />, color: "#8b5cf6", desc: "Core concepts & ES6+ Mastery" },
  { title: "Frontend Architecture", icon: <Icons.Monitor />, color: "#06b6d4", desc: "React, State Management & Performance" },
  { title: "System Design", icon: <Icons.Server />, color: "#ec4899", desc: "Scalability, HLD & Load Balancing" },
  { title: "Cloud & Infra", icon: <Icons.Cloud />, color: "#10b981", desc: "AWS, Azure & Docker Essentials" },
  { title: "Networking & Security", icon: <Icons.Shield />, color: "#6366f1", desc: "TCP/IP, SSL & Security Headers" },
  { title: "LLD & Mock Prep", icon: <Icons.Curriculum />, color: "#f97316", desc: "Design Patterns & Object Oriented Coding" },
  { title: "Behavioral Mastery", icon: <Icons.Chat />, color: "#a855f7", desc: "STAR method & Cultural Fit prep" },
];

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) onLogin();
      else setError("Invalid credentials.");
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif", background: C.bg, color: C.text,
      minHeight: "100vh", display: "flex", flexDirection: "column", opacity: mounted ? 1 : 0, transition: 'opacity 0.2s'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .floating-icon { animation: floating 4s ease-in-out infinite; }
        .modal-content { animation: slideUp 0.4s ease-out forwards; }
        
        @media (max-width: 1100px) {
          .hero-title { font-size: 3rem !important; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .floating-icon { display: none; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* --- CURRICULUM MODAL --- */}
      {showCurriculum && (
        <div style={{ 
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, backdropFilter: 'blur(4px)' 
        }} onClick={() => setShowCurriculum(false)}>
          <div className="modal-content" style={{ 
            background: C.surface, width: '100%', maxWidth: 800, maxHeight: '85vh', borderRadius: 32, overflow: 'hidden',
            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.45)', border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column'
          }} onClick={e => e.stopPropagation()}>
             <div style={{ padding: '32px 40px', borderBottom: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <h2 style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'Outfit', margin: 0 }}>Battle Plan Curriculum</h2>
                   <p style={{ color: C.muted, margin: '4px 0 0', fontWeight: 500 }}>90 Days of structured learning & practice</p>
                </div>
                <button style={{ background: C.bg, color: C.text, border: 'none', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowCurriculum(false)}>✕</button>
             </div>
             
             <div style={{ padding: '40px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {CATEGORIES.map((cat, i) => (
                  <div key={i} style={{ border: `1px solid ${C.border}`, padding: 20, borderRadius: 20, background: C.bg }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                       <div style={{ width: 40, height: 40, borderRadius: 10, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color }}>{cat.icon}</div>
                       <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{cat.title}</div>
                    </div>
                    <div style={{ color: C.muted, fontSize: '0.85rem', lineHeight: 1.5, fontWeight: 500 }}>{cat.desc}</div>
                  </div>
                ))}
             </div>
             
             <div style={{ padding: '24px 40px', background: C.bg, textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
                <button onClick={() => setShowCurriculum(false)} style={{ background: C.blue, color: '#fff', border: 'none', padding: '12px 32px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Cool, I'm ready →</button>
             </div>
          </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <nav style={{
        height: 72, padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `1px solid ${C.border}`, position: 'sticky', top: 0, background: C.surface, zIndex: 100
      }}>
        <div style={{ fontSize: "1.4rem", fontWeight: 900, fontFamily: "Outfit", color: C.text, letterSpacing: "-0.03em" }}>
          Prep<span style={{ color: C.blue }}>Track</span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 32, fontSize: "0.9rem", fontWeight: 600, color: C.muted }}>
          <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }} onClick={() => setShowCurriculum(true)}>
            <Icons.Curriculum />
            Curriculum
          </span>
          <span style={{ cursor: 'pointer' }}>Practice</span>
          <span style={{ cursor: 'pointer' }}>Resources</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ThemeToggle />
          <button style={{ 
            background: C.blue, color: "#fff", padding: "8px 24px", borderRadius: 8, border: "none", 
            fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" 
          }} onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Sign In
          </button>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section style={{ 
        padding: "100px 5% 60px", textAlign: "center", position: "relative",
        background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 60%)"
      }}>
        {/* Floating Icons Mockup */}
        <div className="floating-icon" style={{ position: "absolute", top: 100, left: "15%", background: C.surface, border: `1px solid ${C.border}`, padding: 16, borderRadius: 18, boxShadow: "0 10px 20px rgba(0,0,0,0.05)", color: C.blue }}>
          <Icons.React />
        </div>
        <div className="floating-icon" style={{ position: "absolute", top: 250, left: "5%", background: C.surface, border: `1px solid ${C.border}`, padding: 14, borderRadius: 18, boxShadow: "0 10px 20px rgba(0,0,0,0.05)", animationDelay: "1s", color: "#10b981" }}>
          <Icons.Cloud />
        </div>
        <div className="floating-icon" style={{ position: "absolute", top: 120, right: "15%", background: C.surface, border: `1px solid ${C.border}`, padding: 16, borderRadius: 18, boxShadow: "0 10px 20px rgba(0,0,0,0.05)", animationDelay: "2s", color: "#f59e0b" }}>
          <Icons.Database />
        </div>
        <div className="floating-icon" style={{ position: "absolute", top: 280, right: "5%", background: C.surface, border: `1px solid ${C.border}`, padding: 14, borderRadius: 18, boxShadow: "0 10px 20px rgba(0,0,0,0.05)", animationDelay: "1.5s", color: "#6366f1" }}>
          <Icons.Shield />
        </div>

        <div style={{ 
          background: C.bg, color: "#16a34a", padding: "6px 16px", borderRadius: 100, fontSize: "0.75rem", 
          fontWeight: 700, border: "1px solid #dcfce7", display: 'flex', alignItems: 'center', 
          justifyContent: 'center', gap: 8, maxWidth: 300, margin: '0 auto 24px' 
        }}>
          <Icons.Pulse color="#16a34a" /> Live: 25,000+ engineers preparing today
        </div>
        <h1 className="hero-title" style={{ fontSize: "3.8rem", fontWeight: 800, fontFamily: "Outfit", color: C.text, lineHeight: 1.1, letterSpacing: "-0.04em", maxWidth: 800, margin: "0 auto 20px" }}>
          How top engineers prepare for <span style={{ color: C.blue }}>interviews</span>
        </h1>
        <p style={{ color: C.muted, fontSize: "1.2rem", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Practical 90-day roadmap trusted by top software engineers. Start free, go deep when you're ready.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: C.blue, color: "#fff", padding: "16px 36px", borderRadius: 12, border: "none", fontSize: "1.05rem", fontWeight: 700, cursor: "pointer", boxShadow: `0 10px 25px ${C.blue}40` }} onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Roadmap
          </button>
          <button style={{ background: C.surface, color: C.text, padding: "16px 36px", borderRadius: 12, border: `1px solid ${C.border}`, fontSize: "1.05rem", fontWeight: 700, cursor: "pointer" }} onClick={() => setShowCurriculum(true)}>
            View Curriculum
          </button>
        </div>
      </section>

      {/* --- LOGIN SECTION --- */}
      <section id="login-section" style={{ padding: "100px 5% 150px", display: "flex", justifyContent: "center" }}>
        <div style={{
          background: C.surface, border: `1px solid ${C.border}`, borderRadius: 32,
          padding: "48px 40px", width: "100%", maxWidth: 420,
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
        }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
             <div style={{ width: 56, height: 56, borderRadius: 16, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", margin: '0 auto 20px', boxShadow: `0 8px 16px ${C.orange}30` }}>
                <Icons.Rocket />
             </div>
             <h3 style={{ fontSize: "1.8rem", fontWeight: 800, fontFamily: "Outfit", marginBottom: 8 }}>Ready to start?</h3>
             <p style={{ color: C.muted, fontSize: "0.95rem" }}>Sign in to access your custom 90-day plan</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: C.muted, display: "block", marginBottom: 8 }}>User ID</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Your ID"
                style={{ width: "100%", padding: "14px 18px", borderRadius: 12, background: C.bg, border: `1px solid ${C.border}`, color: C.text, outline: "none", fontSize: "0.95rem" }} />
            </div>
            <div>
              <label style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: C.muted, display: "block", marginBottom: 8 }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password"
                style={{ width: "100%", padding: "14px 18px", borderRadius: 12, background: C.bg, border: `1px solid ${C.border}`, color: C.text, outline: "none", fontSize: "0.95rem" }} />
            </div>
            {error && <div style={{ color: "#ef4444", fontSize: "0.85rem", fontWeight: 600 }}>{error}</div>}
            <button type="submit" disabled={loading} style={{
                padding: "16px", borderRadius: 12, border: "none", background: loading ? C.muted : C.blue, color: "#fff",
                fontSize: "1rem", fontWeight: 700, cursor: "pointer", marginTop: 10, boxShadow: `0 8px 16px ${C.blue}30`
            }}>{loading ? "Authenticating..." : "Enter Your Roadmap →"}</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "60px 5%", background: C.surface }}>
         <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 30 }}>
            <div>
               <div style={{ fontSize: "1.4rem", fontWeight: 900, fontFamily: "Outfit", color: C.text, marginBottom: 16 }}>PrepTrack</div>
               <p style={{ color: C.muted, fontSize: "0.85rem", maxWidth: 300 }}>Master coding interviews with our curated 90-day curriculum.</p>
            </div>
            <div style={{ display: "flex", gap: 60 }}>
               <div>
                  <div style={{ fontWeight: 700, marginBottom: 15 }}>Product</div>
                  <div style={{ color: C.muted, fontSize: "0.85rem", display: "grid", gap: 10 }}>
                     <span>Features</span>
                     <span>Roadmap</span>
                     <span>Mocks</span>
                  </div>
               </div>
               <div>
                  <div style={{ fontWeight: 700, marginBottom: 15 }}>Company</div>
                  <div style={{ color: C.muted, fontSize: "0.85rem", display: "grid", gap: 10 }}>
                     <span>About</span>
                     <span>Contact</span>
                     <span>Privacy</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}
