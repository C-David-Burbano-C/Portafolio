const skills = [
  {
    title: "Frontend",
    detail: "Angular, TypeScript y Tailwind",
  },
  {
    title: "Backend y Datos",
    detail: "Python, Django, SQL y PostgreSQL",
  },
  {
    title: "Herramientas",
    detail: "Java, XAMPP, soporte tecnico y redes",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="rounded-3xl"
    >
      <div>
        <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
          Skills
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Habilidades
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="bg-surface border-line flex min-h-28 flex-col justify-between rounded-3xl border p-4 sm:min-h-36 sm:p-5 lg:min-h-48 lg:p-6"
          >
            <h3 className="font-display text-sm font-semibold text-foreground sm:text-lg lg:text-2xl">
              {skill.title}
            </h3>
            <p className="mt-3 hidden text-sm leading-6 text-muted sm:block">
              {skill.detail}
            </p>
            <p className="mt-3 text-xs leading-5 text-muted sm:hidden">
              {skill.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
