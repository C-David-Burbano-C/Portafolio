const experienceItems = [
  {
    title: "Analista Junior de Software",
    company: "SIMERELECTRONIC SAS",
    dates: "2026",
    description:
      "Analisis de requerimientos, soporte de procesos y mejora continua de software interno.",
  },
  {
    title: "Desarrollador Frontend",
    company: "SIMERELECTRONIC SAS",
    dates: "2025",
    description:
      "Desarrollo de interfaces web modernas y optimizacion de experiencia de usuario.",
  },
  {
    title: "Proyectos Web Personales",
    company: "Portafolio y productos propios",
    dates: "Actualidad",
    description:
      "Construccion de soluciones como Multivariable Explorer, LumpyMed, LabWise y mas.",
  },
];

function ExperienceItem({
  title,
  company,
  dates,
  description,
}: (typeof experienceItems)[number]) {
  return (
    <article className="relative ml-5 rounded-3xl border border-line bg-surface p-5 sm:ml-6 sm:p-6">
      <div className="bg-cyan absolute -left-5 top-7 h-3 w-3 rounded-full shadow-md sm:-left-6 sm:h-4 sm:w-4" />
      <h4 className="font-display text-lg font-semibold text-foreground sm:text-2xl">
        {title}
      </h4>
      <p className="mt-2 text-sm text-cyan sm:text-base">{company}</p>
      <p className="mt-1 text-sm text-muted sm:text-base">{dates}</p>
      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="flex flex-col gap-6">
      <div className="bg-surface relative overflow-hidden rounded-3xl border border-line px-5 py-6 sm:px-6 sm:py-7">
        <div className="bg-cyan absolute -left-10 -top-10 h-28 w-28 rounded-full opacity-10 blur-3xl" />
        <div className="bg-accent absolute -right-10 -top-8 h-24 w-24 rounded-full opacity-10 blur-3xl" />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Experiencia & Contacto
          </h2>
          <div className="bg-accent h-1 w-16 rounded-full sm:w-20" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
          Experience
        </p>
        <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Experiencia
        </h3>
        <p className="text-base text-muted sm:text-xl">Trayectoria profesional</p>
      </div>

      <div className="relative space-y-4">
        <div className="bg-cyan/30 absolute bottom-4 left-1.5 top-4 w-0.5 sm:left-2" />
        {experienceItems.map((item) => (
          <ExperienceItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
