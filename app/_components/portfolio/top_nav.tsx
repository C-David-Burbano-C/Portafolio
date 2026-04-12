const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function TopNav() {
  return (
    <header className="bg-surface rounded-2xl border border-line px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Carlos David Burbano Cuchala
            </p>
            <p className="text-muted text-sm">Base modular del portafolio</p>
          </div>
          <span className="border-line text-muted rounded-full border px-3 py-1 text-xs md:hidden">
            Menu
          </span>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-line text-muted rounded-full border px-3 py-2 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="bg-accent inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-950 md:w-auto"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
