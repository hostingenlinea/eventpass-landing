const APP_URL = "https://app.eventpass.click";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", minHeight: "88vh", padding: "90px 20px 80px" }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,46,136,0.08)", border: "1px solid rgba(255,46,136,0.22)", borderRadius: 100, padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "var(--pink)", marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pink)", animation: "blink 2s ease-in-out infinite", display: "inline-block" }} />
          Sin comisión de plataforma
        </div>

        <h1 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(42px, 5vw, 70px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 22 }}>
          Tu evento.<br />
          <span style={{ color: "var(--pink)" }}>Tu plata,</span><br />
          al instante.
        </h1>

        <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, maxWidth: 430, marginBottom: 38 }}>
          Publicá tu evento en minutos y conectá MercadoPago, Stripe o PayPal.{" "}
          <strong style={{ color: "var(--snow)" }}>Cada venta entra directo a tu cuenta</strong>{" "}
          — sin intermediarios, sin esperar la liquidación.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <a href={`${APP_URL}/register`} style={{ background: "var(--pink)", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, padding: "13px 26px", borderRadius: 10, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }} className="hover:opacity-85 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Crear mi primer evento
          </a>
          <a href="#como-funciona" style={{ border: "1.5px solid var(--border)", color: "var(--snow)", fontWeight: 500, fontSize: 15, padding: "12px 22px", borderRadius: 10, textDecoration: "none" }} className="hover:border-white/25 transition-colors">
            Cómo funciona
          </a>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div className="hidden lg:block">
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 40px 70px rgba(0,0,0,.5), 0 0 80px rgba(255,46,136,.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 14, color: "var(--snow)" }}>
              <div style={{ width: 24, height: 24, background: "var(--pink)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                </svg>
              </div>
              EventPass
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(34,211,238,.1)", border: "1px solid rgba(34,211,238,.22)", color: "var(--cyan)", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cyan)", animation: "blink 1.5s ease-in-out infinite", display: "inline-block" }} />
              En vivo
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
            {[
              { val: "3.421", lbl: "Entradas vendidas", cls: "pink" },
              { val: "18", lbl: "Eventos activos", cls: "" },
              { val: "$0", lbl: "Comisión nuestra", cls: "cyan" },
            ].map(({ val, lbl, cls }) => (
              <div key={lbl} style={{ background: "var(--card2)", borderRadius: 12, padding: "14px 12px", border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 22, fontWeight: 700, color: cls === "pink" ? "var(--pink)" : cls === "cyan" ? "var(--cyan)" : "var(--snow)", lineHeight: 1, marginBottom: 4 }}>{val}</div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>{lbl}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { name: "Festival de Verano 2025", date: "Sáb 25 Ene · Buenos Aires", sold: "418 vendidas", money: "$3.553.000" },
              { name: "Club Night Vol.12", date: "Vie 31 Ene · Rosario", sold: "201 vendidas", money: "$1.407.000" },
            ].map(ev => (
              <div key={ev.name} style={{ background: "var(--card2)", borderRadius: 10, padding: "12px 14px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--snow)", marginBottom: 2 }}>{ev.name}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>{ev.date}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--cyan)" }}>{ev.sold}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>{ev.money}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>Métodos de cobro activos</span>
            <div style={{ display: "flex", gap: 6 }}>
              {["MercadoPago", "Stripe", "PayPal"].map(m => (
                <span key={m} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 5, padding: "3px 8px", fontSize: 11, fontWeight: 600, color: "var(--muted)" }}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @media(max-width:900px){
          section.hero-grid { grid-template-columns:1fr !important; min-height:auto !important; }
        }
      `}</style>
    </section>
  );
}
