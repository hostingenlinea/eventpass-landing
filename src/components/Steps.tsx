const APP_URL = "https://ticket.eventpass.click";

const steps = [
  {
    n: "01",
    title: "Creá tu cuenta y tu evento",
    body: "Registrate gratis. Completá fecha, lugar y tipos de entrada con el wizard guiado. Queda listo para publicar en minutos.",
  },
  {
    n: "02",
    title: "Conectá tu medio de cobro",
    body: "Vinculá MercadoPago con un click o ingresá tu clave de Stripe/PayPal para cobrar en USD. La plata llega directo a vos.",
  },
  {
    n: "03",
    title: "Compartí y vendé",
    body: "Tu evento tiene su propia URL pública. Compartila donde quieras. Cada comprador recibe su QR por email automáticamente.",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto px-5" style={{ padding: "100px 20px" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>Cómo funciona</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 16 }}>
        Empezá a vender<br />en minutos.
      </h2>
      <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, maxWidth: 540, marginBottom: 52 }}>
        Sin papelerío, sin costos fijos. Publicás tu evento y el primer pago llega directo a tu cuenta.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="steps-grid">
        {steps.map(s => (
          <div key={s.n} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }} className="step-card">
            <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 48, fontWeight: 700, color: "rgba(255,46,136,.15)", lineHeight: 1, marginBottom: 16 }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20, fontWeight: 700, marginBottom: 9, color: "var(--snow)" }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{s.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a href={`${APP_URL}/register`} style={{ background: "var(--pink)", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 15, padding: "13px 26px", borderRadius: 10, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }} className="hover:opacity-85 transition-opacity">
          Crear mi primer evento
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <style>{`
        @media(max-width:800px){ .steps-grid{ grid-template-columns:1fr !important; } }
        .step-card:hover{ border-color: rgba(255,46,136,.22); transform: translateY(-3px); transition: transform .25s, border-color .25s; }
      `}</style>
    </section>
  );
}
