"use client";

import Image from "next/image";
import { useLanguageValue } from "../../language";

function Portrait({ alt }: { alt: string }) {
  return (
    <div className="rounded-full bg-[linear-gradient(135deg,#38bdf8_0%,#2563eb_55%,#8b5cf6_100%)] p-1 shadow-lg shadow-sky-500/20 dark:bg-none dark:bg-sky-500">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/80 bg-white/80 dark:border-slate-800 dark:bg-slate-950 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
        <Image
          src="/images/FOTO_PERFIL.jpg"
          alt={alt}
          fill
          sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const copy = useLanguageValue({
    es: {
      eyebrow: "About",
      title: "Sobre Mi",
      imageAlt: "Foto de perfil de Carlos David Burbano Cuchala",
      firstParagraph:
        "Inicie en soporte y mantenimiento, fortaleciendo mi pensamiento analitico en hardware, redes y resolucion de problemas.",
      secondParagraph:
        "Hoy desarrollo productos web, combinando programacion, diseno y electronica, con enfoque en soluciones reales y mejora continua.",
    },
    en: {
      eyebrow: "About",
      title: "About Me",
      imageAlt: "Profile picture of Carlos David Burbano Cuchala",
      firstParagraph:
        "I started in support and maintenance, strengthening my analytical thinking in hardware, networks, and problem solving.",
      secondParagraph:
        "Today I build web products by combining programming, design, and electronics with a focus on real solutions and continuous improvement.",
    },
  });

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.92)_0%,rgba(240,249,255,0.88)_100%)] px-5 py-6 shadow-[0_18px_50px_-34px_rgba(14,116,144,0.35)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950 sm:px-8 sm:py-8"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400 opacity-20 blur-3xl dark:bg-cyan-500 dark:opacity-10" />

      <div className="relative grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:items-center">
        <div>
          <p className="text-cyan-700 dark:text-sky-300 text-sm font-medium uppercase tracking-[0.2em]">
            {copy.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
        </div>

        <div className="flex justify-end lg:justify-center">
          <Portrait alt={copy.imageAlt} />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7 lg:text-lg">
            {copy.firstParagraph}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7 lg:text-lg">
            {copy.secondParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
