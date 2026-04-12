"use client";

import Image from "next/image";
import { useLanguageValue } from "../../language";

function HeroSignal({ alt }: { alt: string }) {
  return (
    <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
      <Image
        src="/images/hero_signal.svg"
        alt={alt}
        fill
        sizes="(min-width: 1024px) 256px, (min-width: 640px) 192px, 160px"
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
      title: "Innovo sin miedo: convierto ideas en productos reales.",
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
      className="relative overflow-hidden rounded-3xl border border-white/65 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(239,246,255,0.9)_52%,rgba(238,242,255,0.88)_100%)] px-4 py-7 shadow-[0_22px_60px_-34px_rgba(37,99,235,0.35)] backdrop-blur-sm dark:border-slate-700 dark:bg-none dark:bg-slate-900 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-400 opacity-30 blur-3xl dark:bg-cyan-500 dark:opacity-20 sm:h-40 sm:w-40" />
      <div className="absolute -right-8 bottom-4 h-36 w-36 rounded-full bg-violet-400 opacity-25 blur-3xl dark:bg-violet-500 dark:opacity-20 sm:h-44 sm:w-44" />

      <div className="relative grid grid-cols-[1.4fr_0.8fr] gap-4 sm:gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-10">
        <div className="space-y-4">
          <p className="text-cyan-700 dark:text-cyan-200 text-sm font-medium uppercase tracking-[0.2em]">
            {copy.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:max-w-xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="text-blue-700 dark:text-blue-200 text-base font-medium sm:text-2xl">
            {copy.role}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-200 sm:text-base sm:leading-7">
            {copy.description}
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:text-slate-950 dark:hover:bg-blue-700"
          >
            {copy.cta}
          </a>

          <div className="flex flex-wrap gap-2 pt-1 sm:gap-3 sm:pt-2">
            {copy.highlights.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[11px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 sm:text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[11px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 sm:text-sm"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex items-start justify-end self-start md:items-center">
          <HeroSignal alt={copy.heroAlt} />
        </div>
      </div>
    </section>
  );
}
