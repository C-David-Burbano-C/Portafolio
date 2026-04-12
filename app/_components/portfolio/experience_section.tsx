"use client";

import { useLanguageValue } from "../../language";

function ExperienceItem({
  title,
  company,
  dates,
  description,
  contact,
}: {
  title: string;
  company: string;
  dates: string;
  description: string;
  contact?: {
    name: string;
    phone: string;
    email: string;
    location: string;
  };
}) {
  return (
    <article className="relative ml-4 rounded-3xl border border-white/70 bg-gradient-to-br from-white to-slate-100 p-4 shadow-[0_18px_46px_-34px_rgba(15,23,42,0.3)] dark:border-slate-800 dark:bg-none dark:bg-slate-950 sm:ml-6 sm:p-6">
      <div className="bg-cyan-500 absolute -left-4 top-7 h-3 w-3 rounded-full shadow-md sm:-left-6 sm:h-4 sm:w-4" />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
        <div>
          <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-white sm:text-2xl">
            {title}
          </h4>
          <p className="mt-2 text-sm text-cyan-700 dark:text-slate-400 sm:text-base">{company}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">{dates}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        {contact ? (
          <div className="rounded-2xl border border-sky-100/80 bg-white/80 p-4 text-sm text-slate-600 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-slate-50">{contact.name}</p>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="mt-2 block">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block break-all">
              {contact.email}
            </a>
            <p className="mt-1">{contact.location}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const copy = useLanguageValue({
    es: {
      bandTitle: "Experiencia & Contacto",
      eyebrow: "Experience",
      title: "Experiencia",
      subtitle: "Trayectoria profesional",
      items: [
        {
          title: "Proyectos Web Personales",
          company: "Portafolio y productos propios",
          dates: "Actualidad",
          description:
            "Construccion de soluciones como Multivariable Explorer, LumpyMed, LabWise y mas.",
          contact: {
            name: "Carlos Burbano",
            phone: "+57 3137507352",
            email: "carlos.burbano@simerelectronics.com",
            location: "Pasto, Colombia",
          },
        },
        {
          title: "Analista Junior de Software",
          company: "SIMERELECTRONIC SAS",
          dates: "2026",
          description:
            "Analisis de requerimientos, soporte de procesos y mejora continua de software interno.",
          contact: {
            name: "Francisco Ramirez",
            phone: "+57 3173526188",
            email: "francisco.ramirez@simerelectronics.com",
            location: "Pasto, Colombia",
          },
        },
        {
          title: "Desarrollador Frontend",
          company: "SIMERELECTRONIC SAS",
          dates: "2025",
          description:
            "Desarrollo de interfaces web modernas y optimizacion de experiencia de usuario.",
        },
      ],
    },
    en: {
      bandTitle: "Experience & Contact",
      eyebrow: "Experience",
      title: "Experience",
      subtitle: "Professional path",
      items: [
        {
          title: "Personal Web Projects",
          company: "Portfolio and own products",
          dates: "Present",
          description:
            "Creation of solutions such as Multivariable Explorer, LumpyMed, LabWise, and more.",
          contact: {
            name: "Carlos Burbano",
            phone: "+57 3137507352",
            email: "carlos.burbano@simerelectronics.com",
            location: "Pasto, Colombia",
          },
        },
        {
          title: "Junior Software Analyst",
          company: "SIMERELECTRONIC SAS",
          dates: "2026",
          description:
            "Requirements analysis, process support, and continuous improvement of internal software.",
          contact: {
            name: "Francisco Ramirez",
            phone: "+57 3173526188",
            email: "francisco.ramirez@simerelectronics.com",
            location: "Pasto, Colombia",
          },
        },
        {
          title: "Frontend Developer",
          company: "SIMERELECTRONIC SAS",
          dates: "2025",
          description:
            "Development of modern web interfaces and optimization of user experience.",
        },
      ],
    },
  });

  return (
    <section id="experiencia" className="scroll-mt-24 flex flex-col gap-5 sm:gap-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/65 bg-gradient-to-br from-white to-sky-100 px-5 py-5 shadow-[0_18px_50px_-34px_rgba(14,116,144,0.3)] dark:border-slate-800 dark:bg-none dark:bg-gradient-to-r dark:from-teal-950 dark:via-slate-900 dark:to-slate-800 sm:px-6 sm:py-7">
        <div className="bg-cyan-500 absolute -left-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl" />
        <div className="bg-sky-500 absolute -right-10 -top-8 h-24 w-24 rounded-full opacity-20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            {copy.bandTitle}
          </h2>
          <div className="bg-sky-500 h-1.5 w-20 rounded-full sm:w-24" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-cyan-700 dark:text-sky-300 text-sm font-medium uppercase tracking-[0.2em]">
          {copy.eyebrow}
        </p>
        <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {copy.title}
        </h3>
        <p className="text-base text-slate-600 dark:text-slate-400 sm:text-xl">{copy.subtitle}</p>
      </div>

      <div className="relative space-y-4">
        <div className="bg-cyan-500/30 absolute bottom-4 left-1.5 top-4 w-0.5 sm:left-2" />
        {copy.items.map((item) => (
          <ExperienceItem key={`${item.title}-${item.dates}`} {...item} />
        ))}
      </div>
    </section>
  );
}
