const skills = [
  {
    title: "Frontend",
    detail: "Angular, TypeScript y Tailwind",
    tone: "bg-cyan",
  },
  {
    title: "Backend y Datos",
    detail: "Python, Django, SQL y PostgreSQL",
    tone: "bg-accent",
  },
  {
    title: "Herramientas",
    detail: "Java, XAMPP, soporte tecnico y redes",
    tone: "bg-violet",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="rounded-3xl"
    >
      <div>
        <p className="text-cyan-200 text-sm font-medium uppercase tracking-[0.2em]">
          Skills
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-slate-50 sm:text-4xl lg:text-5xl">
          Habilidades
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="bg-surface border-line relative flex min-h-24 flex-col justify-between overflow-hidden rounded-3xl border p-3 shadow-md sm:min-h-36 sm:p-5 lg:min-h-48 lg:p-6"
          >
            <div className={`${skill.tone} absolute right-0 top-0 h-16 w-16 rounded-full opacity-20 blur-2xl`} />
            <div className={`${skill.tone} mb-4 h-1.5 w-12 rounded-full`} />
            <h3 className="font-display text-xs font-semibold text-slate-50 sm:text-lg lg:text-2xl">
              {skill.title}
            </h3>
            <p className="mt-3 hidden text-sm leading-6 text-slate-200 sm:block">
              {skill.detail}
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-200 sm:hidden">
              {skill.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
