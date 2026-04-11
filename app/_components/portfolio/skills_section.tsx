const skillColumns = [
  "Frontend",
  "Backend y datos",
  "Herramientas",
];

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="rounded-3xl border border-slate-800 bg-slate-900 px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="space-y-5">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
            Skills
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Habilidades
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillColumns.map((skill) => (
            <article
              key={skill}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-4"
            >
              <h3 className="text-base font-semibold text-slate-100">{skill}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Bloque base listo para poblar con el contenido real del kit.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
