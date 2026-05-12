const APP_URL = "https://app.eventpass.click";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" />
                </svg>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">EventPass</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              La plataforma todo-en-uno para organizar eventos memorables.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
            <div className="space-y-2">
              <p className="text-white font-medium mb-3">Producto</p>
              <a href="#features" className="block hover:text-white transition-colors">Funcionalidades</a>
              <a href="#pricing" className="block hover:text-white transition-colors">Precios</a>
              <a href={`${APP_URL}/register`} className="block hover:text-white transition-colors">Registro</a>
            </div>
            <div className="space-y-2">
              <p className="text-white font-medium mb-3">App</p>
              <a href={`${APP_URL}/login`} className="block hover:text-white transition-colors">Iniciar sesión</a>
              <a href={`${APP_URL}/register`} className="block hover:text-white transition-colors">Crear cuenta</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} EventPass. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
