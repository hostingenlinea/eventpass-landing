import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Entradas",
    eyebrow: "Venta de entradas para eventos",
    description:
      "Convertí tu evento en una experiencia de compra simple y profesional. Publicá la página del evento, ofrecé entradas por tipo y cobralas online.",
    bullets: ["Checkout online con Mercado Pago", "Entradas digitales con QR", "Panel de ventas para organizadores", "Validación de acceso en puerta"],
    href: "https://entradas.eventpass.click",
    icon: "🎟️",
    tone: "bg-violet-50",
    iconTone: "bg-violet-100 text-violet-700",
  },
  {
    name: "Kids",
    eyebrow: "Eventos y celebraciones infantiles",
    description:
      "Una solución pensada para que las familias puedan organizar celebraciones y para que cada evento sea fácil de administrar, desde la inscripción hasta el ingreso.",
    bullets: ["Registro simple para las familias", "Control de asistentes y datos importantes", "Check-in con código QR", "Gestión centralizada para tu equipo"],
    href: "https://kids.eventpass.click",
    icon: "🎈",
    tone: "bg-amber-50",
    iconTone: "bg-amber-100 text-amber-700",
  },
  {
    name: "GuardaPass",
    eyebrow: "Guardarropa digital por QR",
    description:
      "Dejá atrás los papelitos y las búsquedas interminables. Tus invitados registran sus pertenencias y reciben un número; tu equipo administra todo desde un panel.",
    bullets: ["Registro desde un QR en el mostrador", "Numeración automática sin duplicados", "Búsqueda y entrega rápida", "Perfiles separados para cada local o evento"],
    href: "https://guardapass.eventpass.click",
    icon: "🧥",
    tone: "bg-emerald-50",
    iconTone: "bg-emerald-100 text-emerald-700",
  },
];

function ProductSolutions() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            El ecosistema EventPass
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Una solución para cada desafío de tu evento
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            No importa si vendés entradas, organizás una celebración o necesitás
            ordenar el guardarropa: elegí la herramienta adecuada y trabajá con
            menos tareas manuales.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`overflow-hidden rounded-3xl border border-gray-200 ${product.tone}`}
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 md:p-12">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 ${product.iconTone}`}>
                    {product.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{product.eyebrow}</p>
                  <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
                    {product.description}
                  </p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-8 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Conocé {product.name}
                  </a>
                </div>
                <div className="bg-white/70 p-8 md:p-12 flex items-center">
                  <div className="w-full">
                    <p className="text-sm font-semibold text-gray-500 mb-5">
                      ¿Qué podés hacer?
                    </p>
                    <ul className="space-y-4">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-gray-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs text-white">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductSolutions />
      <Features />
      <Footer />
    </main>
  );
}
