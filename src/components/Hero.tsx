const APP_URL = "https://app.eventpass.click";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-50 opacity-80 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Plataforma todo-en-uno para eventos
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
          Organizá eventos{" "}
          <span className="text-violet-700">memorables</span>{" "}
          desde un solo lugar
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Gestioná invitados, confirmaciones, check-in con QR, mesas, regalos y playlist
          colaborativa — todo en una sola plataforma.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${APP_URL}/register`}
            className="px-8 py-3.5 rounded-xl bg-violet-700 text-white font-semibold text-base hover:bg-violet-800 transition-colors shadow-lg shadow-violet-200"
          >
            Comenzá gratis →
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Ver funcionalidades
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-gray-400">
          Sin tarjeta de crédito · Configuración en minutos
        </p>

        {/* Hero image / mockup */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/80">
            {/* Browser bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-left">
                app.eventpass.click/dashboard
              </div>
            </div>
            {/* Dashboard preview */}
            <div className="bg-gray-50 p-6 grid grid-cols-3 gap-4 min-h-[280px]">
              {/* Sidebar mock */}
              <div className="col-span-1 bg-violet-900 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-md bg-violet-600" />
                  <div className="h-3 w-20 bg-violet-700 rounded" />
                </div>
                {["Dashboard", "Invitados", "Mesas", "Check-in", "Regalos"].map((item) => (
                  <div key={item} className="h-8 rounded-lg bg-violet-800/60 flex items-center px-3">
                    <div className="h-2 w-16 bg-violet-600/60 rounded" />
                  </div>
                ))}
              </div>
              {/* Content mock */}
              <div className="col-span-2 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {["124 invitados", "89 confirmados", "12 mesas"].map((stat) => (
                    <div key={stat} className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="h-6 w-8 bg-violet-100 rounded mb-2" />
                      <div className="h-3 w-full bg-gray-100 rounded mb-1" />
                      <div className="h-2 w-2/3 bg-gray-50 rounded" />
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="h-3 w-24 bg-gray-200 rounded mb-3" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                      <div className="w-7 h-7 rounded-full bg-violet-100 flex-shrink-0" />
                      <div className="flex-1 h-2 bg-gray-100 rounded" />
                      <div className="w-16 h-5 rounded-full bg-emerald-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
