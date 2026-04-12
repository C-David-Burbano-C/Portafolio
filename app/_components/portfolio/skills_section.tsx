"use client";

import { useLanguageValue } from "../../language";

export default function SkillsSection() {
  const copy = useLanguageValue({
    es: {
      eyebrow: "Skills",
      title: "Habilidades",
      skills: [
        {
          title: "Frontend",
          detail: "Angular, TypeScript y Tailwind",
          tone: "bg-cyan-500",
        },
        {
          title: "Backend y Datos",
          detail: "Python, Django, SQL y PostgreSQL",
          tone: "bg-sky-500",
        },
        {
          title: "Herramientas",
          detail: "Java, XAMPP, soporte tecnico y redes",
          tone: "bg-violet-500",
        },
      ],
    },
    en: {
      eyebrow: "Skills",
      title: "Skills",
      skills: [
        {
          title: "Frontend",
          detail: "Angular, TypeScript, and Tailwind",
          tone: "bg-cyan-500",
        },
        {
          title: "Backend & Data",
          detail: "Python, Django, SQL, and PostgreSQL",
          tone: "bg-sky-500",
        },
        {
          title: "Tooling",
          detail: "Java, XAMPP, technical support, and networks",
          tone: "bg-violet-500",
        },
      ],
    },
  });

  return (
    <section id="habilidades" className="rounded-3xl">
      <div>
        <p className="text-cyan-700 dark:text-sky-300 text-sm font-medium uppercase tracking-[0.2em]">
          {copy.eyebrow}
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {copy.title}
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {copy.skills.map((skill) => (
          <article
            key={skill.title}
            className="relative flex min-h-24 flex-col justify-between overflow-hidden rounded-3xl border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.95)_0%,rgba(239,246,255,0.88)_100%)] p-3 shadow-[0_18px_40px_-30px_rgba(37,99,235,0.32)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950 sm:min-h-36 sm:p-5 lg:min-h-48 lg:p-6"
          >
            <div className={`${skill.tone} absolute right-0 top-0 h-16 w-16 rounded-full opacity-25 blur-2xl`} />
            <div className={`${skill.tone} mb-4 h-1.5 w-12 rounded-full`} />
            <h3 className="font-display text-xs font-semibold text-slate-900 dark:text-white sm:text-lg lg:text-2xl">
              {skill.title}
            </h3>
            <p className="mt-3 hidden text-sm leading-6 text-slate-600 dark:text-slate-300 sm:block">
              {skill.detail}
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:hidden">
              {skill.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
