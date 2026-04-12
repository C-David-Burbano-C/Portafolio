import Image from "next/image";

function HeroSignal() {
  return (
    <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
      <Image
        src="/images/hero_signal.svg"
        alt="Visual del hero"
        fill
        sizes="(min-width: 1024px) 256px, (min-width: 640px) 192px, 160px"
        className="object-contain"
        priority
      />
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
