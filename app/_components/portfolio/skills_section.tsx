const skillColumns = [
  "Frontend",
  "Backend y datos",
  "Herramientas",
];

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="bg-surface rounded-3xl border border-line px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="space-y-5">
        <div>
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            Skills
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Habilidades
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillColumns.map((skill) => (
            <article
              key={skill}
              className="bg-base rounded-2xl border border-line p-4"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                {skill}
              </h3>
              <p className="text-muted mt-2 text-sm leading-6">
                Bloque base listo para poblar con el contenido real del kit.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
