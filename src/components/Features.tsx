const features = [
  { emoji: "📱", title: "Escaneo QR", body: "Cada comprador recibe su entrada con QR por email. Validá desde cualquier celular el día del evento, sin internet." },
  { emoji: "🎟️", title: "Tipos de entrada", body: "Early Bird, VIP, General, gratuitas — cada tipo con precio, cupo y descripción. Control total del inventario." },
  { emoji: "🏷️", title: "Cupones de descuento", body: "Códigos de descuento en ARS o USD para prensa, artistas o compradores especiales. Validación automática al checkout." },
  { emoji: "📊", title: "Stock en tiempo real", body: "Ves cuántas entradas quedan en vivo. Las reservas se bloquean durante la compra para evitar sobreventas." },
  { emoji: "⚡", title: "Preventa automática", body: "Precio de preventa con fecha de cierre. Sube solo al llegar la fecha, sin que tengas que hacer nada." },
  { emoji: "🌐", title: "Página pública del evento", body: "Cada evento tiene su URL. Cover, descripción, mapa, FAQs y checkout todo en una sola página lista para compartir." },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-5" style={{ padding: "100px 20px" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>Funcionalidades</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 52 }}>
        Todo lo que necesitás<br />para vender más.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="feat-grid">
        {features.map(f => (
          <div key={f.title} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }} className="feat-card">
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,46,136,.07)", border: "1px solid rgba(255,46,136,.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, marginBottom: 12 }}>{f.emoji}</div>
            <h3 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 17, fontWeight: 700, marginBottom: 6, color: "var(--snow)" }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{f.body}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:800px){ .feat-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:500px){ .feat-grid{ grid-template-columns:1fr !important; } }
        .feat-card:hover{ border-color: rgba(255,46,136,.2) !important; }
      `}</style>
    </section>
  );
}
