import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Entradas",
    slug: "entradapass",
    description:
      "Vendé entradas para fiestas, recitales y eventos públicos con checkout, pagos y tickets QR.",
    href: "https://github.com/hostingenlinea/entradapass",
    accent: "bg-violet-100 text-violet-700",
    icon: "🎟️",
  },
  {
    name: "Kids",
    slug: "kids",
    description:
      "Una experiencia pensada para organizar eventos familiares y celebraciones para chicos.",
    href: "https://github.com/hostingenlinea/kids",
    accent: "bg-amber-100 text-amber-700",
    icon: "🎈",
  },
  {
    name: "GuardaPass",
    slug: "guardapass",
    description:
      "Gestioná el guardarropa de tus eventos con registro por QR, números correlativos y operadores.",
    href: "https://github.com/hostingenlinea/guardapass",
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
            Ecosistema EventPass
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Más herramientas para cada momento del evento
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Soluciones especializadas que trabajan juntas para que tu equipo pueda
            vender, recibir y cuidar cada detalle.
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
                Conocer el proyecto
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
