const APP_URL = "https://ticket.eventpass.click";

const methods = [
  { emoji: "💳", name: "MercadoPago", desc: "Tarjetas, débito y cuotas — todo lo que ya usan tus compradores en Argentina.", tag: "ARS", tagColor: "#60a5fa", tagBg: "rgba(0,117,255,.1)" },
  { emoji: "💰", name: "Stripe", desc: "Tarjetas internacionales. Ideal para shows con artistas o público del exterior.", tag: "USD", tagColor: "var(--cyan)", tagBg: "rgba(34,211,238,.08)" },
  { emoji: "🌐", name: "PayPal", desc: "Cobros en USD con confirmación automática vía webhook al instante.", tag: "USD", tagColor: "var(--cyan)", tagBg: "rgba(34,211,238,.08)" },
];

export default function Payments() {
  return (
    <section id="cobros" style={{ background: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "100px 20px" }}>
      <div className="max-w-6xl mx-auto px-5" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} >
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>Cobros</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 16 }}>
            Pesos y dólares.<br />Los dos.
          </h2>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, marginBottom: 28 }}>
            Conectá MercadoPago para cobrar en ARS y Stripe o PayPal para cobrar en USD. Cada pago llega al instante a tu cuenta — sin que nosotros toquemos el dinero.
          </p>
          <a href="#registro" style={{ background: "var(--pink)", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, padding: "13px 26px", borderRadius: 10, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }} className="hover:opacity-85 transition-opacity">
            Conectar mi cuenta
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {methods.map(m => (
            <div key={m.name} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 14, padding: 20, display: "flex", alignItems: "center", gap: 16 }} className="pm-card">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: m.tagBg, border: `1px solid ${m.tagColor}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{m.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--snow)", marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{m.desc}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 11px", borderRadius: 100, background: m.tagBg, color: m.tagColor, whiteSpace: "nowrap" }}>{m.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:800px){
          #cobros > div { grid-template-columns:1fr !important; }
        }
        .pm-card:hover{ border-color: rgba(255,46,136,.25) !important; }
      `}</style>
    </section>
  );
}
