"use client";

import { useState } from "react";

// Themes matches RoadmapApp.tsx
const C = {
  bg:       "#f8fafc",
  surface:  "#ffffff",
  border:   "#f1f5f9",
  text:     "#1e293b",
  muted:    "#64748b",
  orange:   "#ff7a5c",
  orangeL:  "#fff5f2",
};

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      if (res.ok) {
        onLogin();
      } else {
        setError("Invalid username or password.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: C.bg, color: C.text, minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      position: 'relative', overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .login-card { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>

      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,122,92,0.05) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 70%)' }} />

      <div className="login-card" style={{
        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 32,
        padding: "48px 40px", width: "100%", maxWidth: 420,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.04), 0 0 1px rgba(0,0,0,0.1)",
        position: 'relative', zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
           <div style={{ width: 56, height: 56, borderRadius: 16, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", color: "#fff", margin: '0 auto 20px', boxShadow: `0 8px 16px ${C.orange}30` }}>
             🚀
           </div>
           <h1 style={{ fontSize: "2rem", fontWeight: 800, fontFamily: 'Outfit', letterSpacing: -1, marginBottom: 8 }}>
             Welcome Back
           </h1>
           <p style={{ color: C.muted, fontSize: "0.95rem", fontWeight: 500 }}>Resync your progress and keep the momentum</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
          <div>
            <label style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: '0.05em', color: C.muted, display: "block", marginBottom: 8, paddingLeft: 4 }}>
              User ID
            </label>
            <input
              type="text"
              value={username}
              placeholder="e.g. orion"
              onChange={e => setUsername(e.target.value)}
              required
              autoComplete="username"
              style={{
                width: "100%", padding: "14px 18px", borderRadius: 16,
                background: C.bg, border: `1px solid ${C.border}`,
                color: C.text, fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 500,
                outline: "none", transition: 'all 0.2s',
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: '0.05em', color: C.muted, display: "block", marginBottom: 8, paddingLeft: 4 }}>
              Security Key
            </label>
            <input
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{
                width: "100%", padding: "14px 18px", borderRadius: 16,
                background: C.bg, border: `1px solid ${C.border}`,
                color: C.text, fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 500,
                outline: "none", transition: 'all 0.2s',
              }}
            />
          </div>

          {error && (
            <div style={{ padding: "12px 16px", borderRadius: 12, background: '#fef2f2', border: '1px solid #fee2e2', color: "#ef4444", fontSize: "0.85rem", fontWeight: 600 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "16px", borderRadius: 16, border: "none",
              background: loading ? C.muted : C.orange,
              color: "#fff", fontFamily: "'Inter', sans-serif",
              fontSize: "1rem", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              marginTop: 10, transition: 'all 0.3s',
              boxShadow: `0 8px 20px ${C.orange}40`
            }}
          >
            {loading ? "Verifying Credentials…" : "Enter Your Plan →"}
          </button>
        </form>

        <div style={{ marginTop: 32, textAlign: 'center', fontSize: "0.85rem", color: C.muted, fontWeight: 500 }}>
          Need assistance? <span style={{ color: C.orange, fontWeight: 700, cursor: 'pointer' }}>Contact Mentor</span>
        </div>
      </div>
    </div>
  );
}
