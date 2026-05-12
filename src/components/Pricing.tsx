const APP_URL = "https://app.eventpass.click";

const plans = [
  {
    id: "esencial",
    name: "Esencial",
    price: 40000,
    description: "Para organizadores que quieren digitalizar sus eventos",
    features: [
      "Invitados ilimitados",
      "RSVP con link personalizado por invitado",
      "Lista de deseos",
      "Registro de regalos",
      "Playlist colaborativa",
      "Cronograma del evento",
      "Página web del evento",
    ],
    notIncluded: ["Check-in con QR", "Mapa de mesas", "Entradas pagas con MercadoPago"],
    highlight: false,
    cta: "Elegir Esencial",
  },
  {
    id: "completo",
    name: "Completo",
    price: 65000,
    description: "El más elegido — todo lo que necesitás el día del evento",
    features: [
      "Todo lo del plan Esencial",
      "Check-in con QR en la puerta",
      "Mapa de mesas interactivo",
      "Recordatorios automáticos por email",
      "Exportación de lista de invitados",
      "Botón Agendar en calendario",
      "Info de alojamiento y transporte",
    ],
    notIncluded: ["Entradas pagas con MercadoPago"],
    highlight: true,
    cta: "Elegir Completo",
  },
  {
    id: "pro",
    name: "Pro",
    price: 90000,
    description: "Para eventos con venta de entradas y máximo control",
    features: [
      "Todo lo del plan Completo",
      "Tipos de entrada con precios diferenciados",
      "Cobro online con MercadoPago",
      "Confirmación automática al pagar",
      "Soporte prioritario",
    ],
    notIncluded: [],
    highlight: false,
    cta: "Elegir Pro",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Elegí el plan que mejor se adapta
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Pago único por evento. Sin suscripciones, sin sorpresas.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-violet-700 text-white shadow-2xl shadow-violet-300/40 scale-[1.02]"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Más elegido
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-violet-200" : "text-violet-600"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    ${plan.price.toLocaleString("es-AR")}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>
                    ARS / evento
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-violet-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-violet-200" : "text-violet-600"}`}>✓</span>
                    <span className={plan.highlight ? "text-violet-50" : "text-gray-700"}>{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                    <span className="mt-0.5 flex-shrink-0">✕</span>
                    <span className={plan.highlight ? "text-violet-200" : "text-gray-500"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/register?plan=${plan.id}`}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-700 text-white hover:bg-violet-800"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          ¿Tenés dudas? Escribinos a{" "}
          <a href="mailto:hola@eventpass.click" className="text-violet-600 hover:underline">
            hola@eventpass.click
          </a>
        </p>
      </div>
    </section>
  );
}
