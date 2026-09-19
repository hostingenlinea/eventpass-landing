import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Entradas",
    slug: "entradapass",
    eyebrow: "Venta de tickets",
    description:
      "Publicá tus eventos, vendé entradas online y validá el acceso con tickets QR desde un solo lugar.",
    href: "https://entradas.eventpass.click",
    accent: "bg-violet-100 text-violet-700",
    icon: "🎟️",
  },
  {
    name: "Kids",
    slug: "kids",
    eyebrow: "Eventos para chicos",
    description:
      "Organizá celebraciones infantiles con una experiencia simple para las familias y control para tu equipo.",
    href: "https://kids.eventpass.click",
    accent: "bg-amber-100 text-amber-700",
    icon: "🎈",
  },
  {
    name: "GuardaPass",
    slug: "guardapass",
    eyebrow: "Guardarropa por QR",
    description:
      "Agilizá la recepción y devolución de prendas con registro QR, numeración automática y seguimiento en tiempo real.",
    href: "https://guardapass.eventpass.click",
    accent: "bg-emerald-100 text-emerald-700",
    icon: "🧥",
  },
];

function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Soluciones para eventos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Todo lo que necesitás para vender y gestionar tu evento
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Elegí la herramienta que necesitás y empezá a resolver cada parte de
            la experiencia: desde la venta de entradas hasta el guardarropa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.slug}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-gray-200 p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 ${product.accent}`}>
                {product.icon}
              </div>
              <p className="text-xs font-semibold text-gray-400 mb-2">{product.eyebrow}</p>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <span className="text-gray-300 group-hover:text-violet-600 transition-colors text-xl" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">
                {product.description}
              </p>
              <span className="mt-6 text-sm font-semibold text-violet-700">
                Conocé el producto
              </span>
            </a>
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
      <Products />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
