export default function ExperienceSection() {
  return (
    <section id="experiencia" className="flex flex-col gap-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Experiencia & Contacto
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
          Experience
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
          Experiencia
        </h3>
        <p className="mt-1 text-sm text-slate-400 sm:text-base">
          Trayectoria profesional
        </p>

        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-4"
            >
              <p className="text-sm font-semibold text-slate-100">
                Registro base {item}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
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
