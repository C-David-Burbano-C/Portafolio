const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function TopNav() {
  return (
    <header className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-100">
              Carlos David Burbano Cuchala
            </p>
            <p className="text-sm text-slate-400">Base modular del portafolio</p>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 md:hidden">
            Menu
          </span>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-300 px-4 py-2 text-sm font-semibold text-slate-950 md:w-auto"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
