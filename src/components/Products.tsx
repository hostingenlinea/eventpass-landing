const products = [
  {
    id: "kids",
    name: "Kids",
    eyebrow: "Celebraciones infantiles",
    description:
      "Organizá cumpleaños y eventos infantiles con una experiencia simple para las familias y control total para quien organiza.",
    benefits: [
      "Registro de familias y asistentes",
      "Confirmaciones y gestión de invitados",
      "Check-in ágil con código QR",
    ],
    href: "https://kids.eventpass.click",
    cta: "Ver cómo funciona",
    icon: "🎈",
    accent: "bg-amber-50 text-amber-700",
    detailTitle: "Una fiesta infantil más simple para todos",
    detailDescription:
      "Familias, invitados y organizadores tienen siempre la información a mano: quién viene, quién ya ingresó y qué falta resolver.",
    workflow: ["Creá la celebración", "Invitá a las familias", "Recibí y validá en la entrada"],
    previewTitle: "Cumple de Martina",
    previewItems: ["48 familias registradas", "36 confirmadas", "12 por llegar"],
  },
  {
    id: "entradapass",
    name: "EntradaPass",
    eyebrow: "Venta y acceso a eventos",
    description:
      "Publicá tu evento, vendé entradas online y llevá el control de la recaudación y los accesos desde un solo lugar.",
    benefits: [
      "Publicación de eventos y tipos de entrada",
      "Cobros online y confirmación automática",
      "Validación de accesos mediante QR",
    ],
    href: "https://entradapass.eventpass.click",
    cta: "Ver cómo funciona",
    icon: "🎟️",
    accent: "bg-violet-50 text-violet-700",
    detailTitle: "De la publicación al acceso, sin planillas",
    detailDescription:
      "Armá tu evento, definí las entradas y seguí las ventas en tiempo real. En la puerta, cada QR se valida en segundos.",
    workflow: ["Publicá tu evento", "Vendé online", "Validá cada entrada"],
    previewTitle: "Festival de Invierno",
    previewItems: ["1.240 entradas vendidas", "$18.600.000 recaudados", "Acceso habilitado"],
  },
  {
    id: "guardapass",
    name: "GuardaPass",
    eyebrow: "Guardarropa digital",
    description:
      "Digitalizá el guardarropa de tu evento para registrar cada pertenencia, asignar su número y agilizar la devolución.",
    benefits: [
      "Registro rápido de pertenencias",
      "Numeración y seguimiento con QR",
      "Entrega ordenada y sin demoras",
    ],
    href: "https://guardapass.eventpass.click",
    cta: "Ver cómo funciona",
    icon: "🧥",
    accent: "bg-cyan-50 text-cyan-700",
    detailTitle: "Un guardarropa que se mueve al ritmo del evento",
    detailDescription:
      "Registrá una pertenencia, entregá un QR y encontrá todo rápido cuando llega el momento de volver a casa.",
    workflow: ["Registrá la pertenencia", "Asigná un número", "Entregá con QR"],
    previewTitle: "Noche de Gala",
    previewItems: ["278 prendas registradas", "234 retiradas", "44 pendientes"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Soluciones de EventPass
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Una solución para cada momento del evento
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Elegí la herramienta que necesitás y sumá una experiencia más ordenada para tus invitados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-7 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-200"
            >
              <div className={`w-14 h-14 rounded-2xl ${product.accent} flex items-center justify-center text-3xl mb-6`}>
                {product.icon}
              </div>
              <p className="text-violet-700 font-semibold text-xs uppercase tracking-widest mb-2">
                {product.eyebrow}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 text-violet-600 font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`#${product.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-800 transition-colors"
              >
                {product.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-24 space-y-20">
          {products.map((product, index) => (
            <article
              id={product.id}
              key={product.id}
              className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-10 h-10 rounded-xl ${product.accent} flex items-center justify-center text-xl`}>
                    {product.icon}
                  </span>
                  <span className="text-violet-700 font-semibold text-sm uppercase tracking-widest">
                    {product.name}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{product.detailTitle}</h3>
                <p className="mt-4 text-gray-500 text-lg leading-relaxed">{product.detailDescription}</p>

                <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.workflow.map((step, stepIndex) => (
                    <li key={step} className="flex sm:block items-center gap-3">
                      <span className="flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                        {stepIndex + 1}
                      </span>
                      <span className="mt-2 block text-sm font-medium text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>

                <a
                  href={product.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
                >
                  Ir a {product.name} <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl shadow-violet-100">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-xs text-gray-500">{product.name.toLowerCase()}.eventpass.click</span>
                  </div>
                  <div className="grid grid-cols-[96px_1fr] gap-5 p-5 sm:grid-cols-[128px_1fr] sm:p-7">
                    <div className="space-y-3 rounded-xl bg-violet-900/80 p-3">
                      <div className="h-3 w-12 rounded bg-violet-500/70" />
                      <div className="h-7 rounded-lg bg-violet-700" />
                      <div className="h-7 rounded-lg bg-white/10" />
                      <div className="h-7 rounded-lg bg-white/10" />
                    </div>
                    <div className="min-w-0 space-y-4">
                      <div>
                        <p className="text-xs text-gray-500">Resumen de hoy</p>
                        <p className="mt-1 truncate text-lg font-semibold text-white">{product.previewTitle}</p>
                      </div>
                      <div className="space-y-2">
                        {product.previewItems.map((item, itemIndex) => (
                          <div key={item} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 text-xs text-gray-300">
                            <span className="truncate">{item}</span>
                            <span className={`ml-2 h-2 w-2 shrink-0 rounded-full ${itemIndex === 2 ? "bg-amber-300" : "bg-emerald-400"}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}