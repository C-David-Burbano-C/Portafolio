function HeroSignal() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-line bg-base sm:h-48 sm:w-48 lg:h-64 lg:w-64">
      <div className="border-line absolute inset-3 rounded-full border sm:inset-4 lg:inset-6" />
      <div className="border-accent absolute inset-8 rounded-full border sm:inset-10 lg:inset-14" />
      <div className="bg-cyan absolute h-10 w-10 rounded-full opacity-20 blur-xl sm:h-12 sm:w-12 lg:h-16 lg:w-16" />

      <div className="border-line bg-surface relative flex h-14 w-14 items-center justify-center rounded-3xl border text-base font-semibold text-foreground shadow-md sm:h-16 sm:w-16 lg:h-24 lg:w-24 lg:text-2xl">
        CB
      </div>

      <span className="bg-surface border-line text-muted absolute left-1/2 top-4 -translate-x-1/2 rounded-full border px-3 py-1 text-xs font-semibold">
        UI
      </span>
      <span className="bg-surface border-line text-muted absolute right-2 top-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs font-semibold">
        Web
      </span>
      <span className="bg-surface border-line text-muted absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-xs font-semibold">
        Code
      </span>
    </div>
  );
}

const highlights = [
  {
    label: "GitHub: C-David-Burbano-C",
    href: "https://github.com/C-David-Burbano-C",
  },
  { label: "UCC Pasto" },
  { label: "Innovacion constante" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-surface rounded-3xl border border-line px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            Inicio
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:max-w-xl lg:text-6xl">
            Innovo sin miedo: convierto ideas en productos reales.
          </h1>
          <p className="text-lg text-muted sm:text-2xl">Frontend Developer</p>
          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Frontend Developer en formacion en la Universidad Cooperativa de
            Colombia (Pasto), con experiencia en desarrollo web y bases de datos
            con TypeScript, Angular, Python, Java, SQL, Django y PostgreSQL.
          </p>

          <a
            href="#contacto"
            className="bg-accent inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950 shadow-md"
          >
            Contactame
          </a>

          <div className="flex flex-wrap gap-3 pt-2">
            {highlights.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-line text-muted rounded-full border px-3 py-2 text-xs sm:text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="border-line text-muted rounded-full border px-3 py-2 text-xs sm:text-sm"
                >
                  {item.label}
                </span>
              )
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <HeroSignal />
        </div>
      </div>
    </section>
  );
}
