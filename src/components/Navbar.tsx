const APP_URL = "https://ticket.eventpass.click";

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(12,12,15,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", color: "var(--snow)", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
          <div style={{ width: 32, height: 32, background: "var(--pink)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            </svg>
          </div>
          EventPass
        </a>

        <nav className="hidden md:flex items-center gap-7" style={{ fontSize: 14, fontWeight: 500 }}>
          <a href="#como-funciona" style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-white transition-colors">Cómo funciona</a>
          <a href="#cobros" style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-white transition-colors">Cobros</a>
          <a href="#precios" style={{ color: "var(--muted)", textDecoration: "none" }} className="hover:text-white transition-colors">Precios</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href={`${APP_URL}/login`} style={{ fontSize: 14, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }} className="hover:text-white transition-colors hidden sm:block">Ya tengo cuenta</a>
          <a href={`${APP_URL}/register`} style={{ background: "var(--pink)", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: 14, padding: "9px 20px", borderRadius: 8, textDecoration: "none" }} className="hover:opacity-85 transition-opacity">
            Empezar gratis
          </a>
        </div>
      </div>
    </header>
  );
}
