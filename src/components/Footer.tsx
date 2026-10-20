const APP_URL = "https://app.eventpass.click";

export default function Footer() {
  return (
    <>
      {/* CTA final */}
      <section style={{ padding: "120px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>Empezá hoy</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 16 }}>
            Publicá tu próximo<br />evento en minutos.
          </h2>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, marginBottom: 0 }}>
            Sin costo fijo, sin contrato, sin comisión nuestra. Conectá tu MercadoPago y cobrás desde la primera venta.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 40 }}>
            <a href={`${APP_URL}/register`} style={{ background: "var(--pink)", color: "#fff", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 16, padding: "15px 32px", borderRadius: 11, textDecoration: "none" }} className="hover:opacity-85 transition-opacity">
              Crear mi cuenta gratis
            </a>
            <a href="#como-funciona" style={{ border: "1.5px solid var(--border)", color: "var(--snow)", fontWeight: 500, fontSize: 16, padding: "14px 28px", borderRadius: 11, textDecoration: "none" }} className="hover:border-white/25 transition-colors">
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 20px" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", color: "var(--snow)", fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: 16 }}>
            <div style={{ width: 32, height: 32, background: "var(--pink)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
              </svg>
            </div>
            EventPass
          </a>
          <ul style={{ display: "flex", gap: 20, listStyle: "none", margin: 0, padding: 0 }}>
            {[["#precios","Precios"],["#como-funciona","Cómo funciona"],["#","Privacidad"],["#","Términos"]].map(([href, label]) => (
              <li key={label}><a href={href} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }} className="hover:text-white transition-colors">{label}</a></li>
            ))}
          </ul>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>© {new Date().getFullYear()} EventPass</span>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/5491155682720"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,.45)", textDecoration: "none" }}
        className="wa-btn"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L.057 23.882a.5.5 0 0 0 .611.612l6.083-1.456A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.875 9.875 0 0 1-5.032-1.378l-.36-.214-3.733.894.921-3.62-.235-.373A9.836 9.836 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z"/>
        </svg>
      </a>
      <style>{`.wa-btn:hover{ transform:scale(1.1); box-shadow:0 6px 28px rgba(37,211,102,.6) !important; transition: transform .2s, box-shadow .2s; }`}</style>
    </>
  );
}
