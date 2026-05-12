export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Planes para cada evento
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Estamos definiendo los planes para ofrecerte el mejor precio. Mientras tanto, podés usar EventPass gratis.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl border-2 border-dashed border-violet-200 bg-violet-50 p-12 text-center overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-violet-200/40 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-violet-200/40 blur-2xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-200 text-violet-800 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                Próximamente
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Los planes están en camino
              </h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                Estamos diseñando opciones flexibles para organizadores de todo tipo de eventos.
                Por ahora, disfrutá de todas las funcionalidades sin costo.
              </p>

              <a
                href="https://app.eventpass.click/register"
                className="inline-block px-8 py-3.5 rounded-xl bg-violet-700 text-white font-semibold hover:bg-violet-800 transition-colors shadow-lg shadow-violet-200"
              >
                Comenzá gratis mientras tanto →
              </a>

              <p className="mt-4 text-xs text-gray-400">
                Sin tarjeta de crédito requerida
              </p>
            </div>
          </div>

          {/* Features included */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "✓ Invitados ilimitados",
              "✓ QR de check-in",
              "✓ Mapa de mesas",
              "✓ Lista de deseos",
              "✓ Registro de regalos",
              "✓ Playlist colaborativa",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-2.5"
              >
                <span className="text-violet-600 font-semibold">{item.split(" ")[0]}</span>
                <span>{item.slice(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
