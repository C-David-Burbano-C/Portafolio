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
      className="bg-slate-900 relative overflow-hidden rounded-3xl border border-slate-700 px-4 py-7 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="bg-cyan-500 absolute -left-10 top-0 h-32 w-32 rounded-full opacity-20 blur-3xl sm:h-40 sm:w-40" />
      <div className="bg-violet-500 absolute -right-8 bottom-4 h-36 w-36 rounded-full opacity-20 blur-3xl sm:h-44 sm:w-44" />

      <div className="relative grid grid-cols-[1.4fr_0.8fr] gap-4 sm:gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-10">
        <div className="space-y-4">
          <p className="text-cyan-200 text-sm font-medium uppercase tracking-[0.2em]">
            Inicio
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:max-w-xl lg:text-6xl">
            Innovo sin miedo: convierto ideas en productos reales.
          </h1>
          <p className="text-blue-200 text-base font-medium sm:text-2xl">
            Frontend Developer
          </p>
          <p className="max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            Frontend Developer en formacion en la Universidad Cooperativa de
            Colombia (Pasto), con experiencia en desarrollo web y bases de datos
            con TypeScript, Angular, Python, Java, SQL, Django y PostgreSQL.
          </p>

          <a
            href="#contacto"
            className="bg-blue-500 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg"
          >
            Contactame
          </a>

          <div className="flex flex-wrap gap-2 pt-1 sm:gap-3 sm:pt-2">
            {highlights.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-950/70 border-slate-700 text-slate-200 rounded-full border px-3 py-2 text-[11px] sm:text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="bg-slate-950/70 border-slate-700 text-slate-200 rounded-full border px-3 py-2 text-[11px] sm:text-sm"
                >
                  {item.label}
                </span>
              )
            ))}
          </div>
        </div>

        <div className="flex items-start justify-end self-start md:items-center">
          <HeroSignal />
        </div>
      </div>
    </section>
  );
}
