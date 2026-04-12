export default function ExperienceSection() {
  return (
    <section id="experiencia" className="flex flex-col gap-6">
      <div className="bg-surface rounded-2xl border border-line px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Experiencia & Contacto
          </h2>
          <div className="bg-line h-px flex-1" />
        </div>
      </div>

      <div className="bg-surface rounded-3xl border border-line px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
          Experience
        </p>
        <h3 className="font-display mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          Experiencia
        </h3>
        <p className="text-muted mt-1 text-sm sm:text-base">
          Trayectoria profesional
        </p>

        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="bg-base rounded-2xl border border-line p-4"
            >
              <p className="font-display text-sm font-semibold text-foreground">
                Registro base {item}
              </p>
              <p className="text-muted mt-2 text-sm leading-6">
                Placeholder para la línea de tiempo que se implementará en una
                etapa posterior.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
