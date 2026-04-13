"use client";

import { useLanguageValue } from "../../language";

function HeroSignal({
  alt,
  labels,
}: {
  alt: string;
  labels: {
    ui: string;
    web: string;
    code: string;
  };
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="relative h-36 w-36 sm:h-48 sm:w-48 lg:h-64 lg:w-64"
    >
      <div className="absolute inset-[16%] rounded-full bg-sky-400/20 blur-2xl dark:bg-sky-400/10" />
      <div className="absolute inset-0 rounded-full border border-slate-400/35 dark:border-white/8" />
      <div className="absolute inset-[14%] rounded-full border border-sky-500/40 dark:border-sky-400/30" />
      <div className="absolute inset-[28%] rounded-full border border-sky-600/35 dark:border-sky-500/30" />

      <div className="absolute inset-[9%] motion-safe:animate-[spin_18s_linear_infinite]">
        <div className="absolute left-1/2 top-[3%] -translate-x-1/2">
          <div className="rounded-full border border-sky-400/40 bg-white/90 px-3 py-1 text-[9px] font-semibold text-slate-700 shadow-lg shadow-sky-500/10 motion-safe:animate-[spin_18s_linear_infinite] motion-safe:[animation-direction:reverse] dark:border-sky-300/30 dark:bg-slate-950/90 dark:text-slate-200 dark:shadow-slate-950/25 sm:text-[10px]">
            {labels.ui}
          </div>
        </div>

        <div className="absolute right-[1%] top-1/2 -translate-y-1/2">
          <div className="rounded-full border border-sky-400/40 bg-white/90 px-3 py-1 text-[9px] font-semibold text-slate-700 shadow-lg shadow-sky-500/10 motion-safe:animate-[spin_18s_linear_infinite] motion-safe:[animation-direction:reverse] dark:border-sky-300/30 dark:bg-slate-950/90 dark:text-slate-200 dark:shadow-slate-950/25 sm:text-[10px]">
            {labels.web}
          </div>
        </div>

        <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2">
          <div className="rounded-full border border-sky-400/40 bg-white/90 px-3 py-1 text-[9px] font-semibold text-slate-700 shadow-lg shadow-sky-500/10 motion-safe:animate-[spin_18s_linear_infinite] motion-safe:[animation-direction:reverse] dark:border-sky-300/30 dark:bg-slate-950/90 dark:text-slate-200 dark:shadow-slate-950/25 sm:text-[10px]">
            {labels.code}
          </div>
        </div>
      </div>

      <div className="absolute inset-[27%] motion-safe:animate-[spin_11s_linear_infinite] motion-safe:[animation-direction:reverse]">
        <div className="absolute bottom-[2%] right-[14%] h-3.5 w-3.5 rounded-full bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.55)] dark:bg-sky-400 dark:shadow-[0_0_18px_rgba(56,189,248,0.8)] sm:h-4 sm:w-4" />
      </div>

      <div className="absolute inset-0 motion-safe:animate-[spin_24s_linear_infinite]">
        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.45)] dark:bg-sky-200 dark:shadow-[0_0_14px_rgba(186,230,253,0.75)] sm:h-3 sm:w-3" />
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30%] border border-sky-500/35 bg-white/80 shadow-[0_18px_40px_-18px_rgba(14,116,144,0.35)] dark:border-sky-300/30 dark:bg-slate-900 dark:shadow-[0_18px_40px_-18px_rgba(8,15,29,0.9)]">
        <div className="absolute inset-[14%] rounded-[28%] bg-gradient-to-br from-sky-200 via-sky-300/80 to-sky-500/55 dark:from-sky-300/70 dark:via-sky-400/45 dark:to-sky-600/35" />
        <div className="absolute inset-0 rounded-[30%] bg-sky-300/15 blur-xl dark:bg-sky-200/10" />
        <span className="relative text-lg font-semibold text-sky-950 dark:text-white sm:text-2xl">CB</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const copy = useLanguageValue({
    es: {
      eyebrow: "Inicio",
      title: "Innovo sin limites: convierto ideas en productos reales.",
      role: "Fullstack Developer",
      description:
        "Fullstack Developer en formacion en la Universidad Cooperativa de Colombia (Pasto), con experiencia en desarrollo web y bases de datos con TypeScript, Angular, Python, Java, SQL, Django y PostgreSQL.",
      cta: "Contactame",
      heroAlt: "Visual del hero",
      orbitLabels: {
        ui: "UI",
        web: "Web",
        code: "Code",
      },
      highlights: [
        { label: "GitHub: C-David-Burbano-C", href: "https://github.com/C-David-Burbano-C" },
        { label: "UCC Pasto" },
        { label: "Innovacion constante" },
      ],
    },
    en: {
      eyebrow: "Home",
      title: "I build real products from bold ideas.",
      role: "Fullstack Developer",
      description:
        "Fullstack developer in training at Universidad Cooperativa de Colombia (Pasto), with experience in web development and databases using TypeScript, Angular, Python, Java, SQL, Django, and PostgreSQL.",
      cta: "Contact me",
      heroAlt: "Hero visual",
      orbitLabels: {
        ui: "UI",
        web: "Web",
        code: "Code",
      },
      highlights: [
        { label: "GitHub: C-David-Burbano-C", href: "https://github.com/C-David-Burbano-C" },
        { label: "UCC Pasto" },
        { label: "Constant innovation" },
      ],
    },
  });

  return (
    <section
      id="inicio"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-white/65 bg-gradient-to-br from-white via-sky-50 to-indigo-50 px-4 py-7 shadow-[0_22px_60px_-34px_rgba(37,99,235,0.35)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-gradient-to-r dark:from-teal-950/50 dark:via-slate-950 dark:to-slate-900 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-400 opacity-30 blur-3xl dark:bg-cyan-400 dark:opacity-10 sm:h-40 sm:w-40" />
      <div className="absolute -right-8 bottom-4 h-36 w-36 rounded-full bg-violet-400 opacity-25 blur-3xl dark:bg-sky-400 dark:opacity-10 sm:h-44 sm:w-44" />

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-6 lg:gap-10">
        <div className="space-y-4">
          <p className="text-cyan-700 dark:text-sky-300 text-sm font-medium uppercase tracking-[0.2em]">
            {copy.eyebrow}
          </p>
          <h1 className="font-display max-w-sm text-[2.3rem] font-semibold leading-none text-slate-900 dark:text-slate-50 sm:max-w-2xl sm:text-5xl sm:leading-tight lg:max-w-xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="text-sky-700 text-lg font-medium dark:text-slate-200 sm:text-2xl">
            {copy.role}
          </p>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300 sm:max-w-2xl sm:text-base">
            {copy.description}
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            {copy.cta}
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-[11px] text-slate-700 dark:text-slate-400 sm:gap-3 sm:pt-2 sm:text-sm">
            {copy.highlights.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-inherit transition-colors hover:text-slate-900 dark:hover:text-slate-200 sm:rounded-full sm:border sm:border-white/70 sm:bg-white/75 sm:px-3 sm:py-2 sm:shadow-sm sm:backdrop-blur-sm sm:dark:border-slate-800 sm:dark:bg-slate-950/80"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="sm:rounded-full sm:border sm:border-white/70 sm:bg-white/75 sm:px-3 sm:py-2 sm:shadow-sm sm:backdrop-blur-sm sm:dark:border-slate-800 sm:dark:bg-slate-950/80"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:self-center md:items-center">
          <HeroSignal alt={copy.heroAlt} labels={copy.orbitLabels} />
        </div>
      </div>
    </section>
  );
}
