"use client";

import Image from "next/image";
import { useLanguageValue } from "../../language";

function HeroSignal({ alt }: { alt: string }) {
  return (
    <div className="relative h-36 w-36 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
      <Image
        src="/images/hero_signal.svg"
        alt={alt}
        fill
        sizes="(min-width: 1024px) 256px, (min-width: 640px) 192px, 144px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default function HeroSection() {
  const copy = useLanguageValue({
    es: {
      eyebrow: "Inicio",
      title: "Innovo sin limites: convierto ideas en productos reales.",
      role: "Frontend Developer",
      description:
        "Frontend Developer en formacion en la Universidad Cooperativa de Colombia (Pasto), con experiencia en desarrollo web y bases de datos con TypeScript, Angular, Python, Java, SQL, Django y PostgreSQL.",
      cta: "Contactame",
      heroAlt: "Visual del hero",
      highlights: [
        { label: "GitHub: C-David-Burbano-C", href: "https://github.com/C-David-Burbano-C" },
        { label: "UCC Pasto" },
        { label: "Innovacion constante" },
      ],
    },
    en: {
      eyebrow: "Home",
      title: "I build real products from bold ideas.",
      role: "Frontend Developer",
      description:
        "Frontend developer in training at Universidad Cooperativa de Colombia (Pasto), with experience in web development and databases using TypeScript, Angular, Python, Java, SQL, Django, and PostgreSQL.",
      cta: "Contact me",
      heroAlt: "Hero visual",
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
      className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(239,246,255,0.9)_52%,rgba(238,242,255,0.88)_100%)] px-4 py-7 shadow-[0_22px_60px_-34px_rgba(37,99,235,0.35)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-gradient-to-r dark:from-teal-950/50 dark:via-slate-950 dark:to-slate-900 sm:px-8 sm:py-10 lg:px-10"
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

        <div className="flex justify-center md:justify-end md:self-start md:items-center">
          <HeroSignal alt={copy.heroAlt} />
        </div>
      </div>
    </section>
  );
}
