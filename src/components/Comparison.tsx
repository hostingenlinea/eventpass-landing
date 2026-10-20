export default function Comparison() {
  const bad = [
    { title: "Cargo por servicio del 10–15%", sub: "En cada venta. Se lo quedan ellas." },
    { title: "Te pagan después del evento", sub: "Esperás semanas para ver tu plata." },
    { title: "Contratos y exclusividad", sub: "Mínimos garantizados y cláusulas que te atan." },
    { title: "Solo una moneda", sub: "Sin posibilidad de cobrar en dólares." },
  ];
  const good = [
    { title: "Sin comisión de plataforma", sub: "$0. Punto. Vos fijás el precio, vos te quedás todo." },
    { title: "Cobro al instante", sub: "Cada venta va directo a tu cuenta de MP, Stripe o PayPal." },
    { title: "Sin contratos", sub: "Nada que te ate. Empezás y parás cuando querés." },
    { title: "Pesos y dólares", sub: "MercadoPago (ARS) + Stripe y PayPal (USD)." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5" style={{ padding: "100px 20px" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>El problema</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 16 }}>
        Basta de ceder el 10–15%<br />a la ticketera.
      </h2>
      <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, maxWidth: 540, marginBottom: 52 }}>
        Las plataformas tradicionales cobran comisión en cada venta y te transfieren la plata después del evento. Con EventPass, eso no existe.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="cmp-grid">
        {/* Bad */}
        <div style={{ borderRadius: 18, padding: 30, background: "rgba(239,68,68,.04)", border: "1px solid rgba(239,68,68,.13)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--bad)", display: "block", marginBottom: 10 }}>✕ Las ticketeras tradicionales</span>
          <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 24, fontWeight: 700, lineHeight: 1.25, marginBottom: 22, color: "var(--snow)" }}>Con intermediarios<br />en el medio</h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
            {bad.map(i => (
              <li key={i.title} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 14, color: "var(--snow)" }}>
                <span style={{ color: "var(--bad)", flexShrink: 0, marginTop: 2 }}>✕</span>
                <div><strong>{i.title}</strong><span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginTop: 2 }}>{i.sub}</span></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Good */}
        <div style={{ borderRadius: 18, padding: 30, background: "rgba(255,46,136,.04)", border: "1px solid rgba(255,46,136,.15)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--pink)", display: "block", marginBottom: 10 }}>✓ EventPass</span>
          <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 24, fontWeight: 700, lineHeight: 1.25, marginBottom: 22, color: "var(--snow)" }}>El dinero es tuyo,<br />desde la primera venta.</h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
            {good.map(i => (
              <li key={i.title} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 14, color: "var(--snow)" }}>
                <span style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 2 }}>✓</span>
                <div><strong>{i.title}</strong><span style={{ fontSize: 12, color: "var(--muted)", display: "block", marginTop: 2 }}>{i.sub}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media(max-width:700px){ .cmp-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
