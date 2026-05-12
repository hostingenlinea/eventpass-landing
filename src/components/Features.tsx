const features = [
  {
    emoji: "👥",
    title: "Gestión de invitados",
    description:
      "Agregá, editá y organizá todos tus invitados. Registrá alérgias, necesidades especiales y mensajes al anfitrión.",
  },
  {
    emoji: "📱",
    title: "Check-in con QR",
    description:
      "Cada invitado recibe su código QR único. El check-in en la puerta es instantáneo desde cualquier dispositivo.",
  },
  {
    emoji: "🪑",
    title: "Mapa de mesas",
    description:
      "Asigná invitados a mesas redondas o rectangulares con un solo clic. Los invitados ven su mesa en la invitación.",
  },
  {
    emoji: "🎁",
    title: "Lista de deseos",
    description:
      "Publicá lo que querés recibir. Tus invitados ven la lista y pueden regalar exactamente lo que necesitás.",
  },
  {
    emoji: "💸",
    title: "Regalos y transferencias",
    description:
      "Registrá cada transferencia recibida con monto, método y remitente. El total siempre a la vista.",
  },
  {
    emoji: "🎵",
    title: "Playlist colaborativa",
    description:
      "Tus invitados sugieren canciones, vos aprobás las que querés. La playlist de tu fiesta armada entre todos.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Todo lo que necesitás para tu evento
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Desde la invitación hasta el check-in final, EventPass lo tiene todo cubierto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-violet-100 transition-colors">
                {feature.emoji}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            ¿Querés verlo en acción?{" "}
            <a
              href="https://app.eventpass.click/register"
              className="text-violet-700 font-medium hover:underline underline-offset-4"
            >
              Creá tu evento gratis →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
