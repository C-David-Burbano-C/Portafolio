export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="rounded-3xl border border-slate-800 bg-slate-900 px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="grid gap-5 md:grid-cols-[0.9fr_0.5fr_1.6fr] md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
            About
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Sobre mi
          </h2>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="h-20 w-20 rounded-full border border-slate-700 bg-slate-950" />
        </div>

        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          Placeholder de la sección personal. El contenido real, la fotografía y
          la composición final quedan reservados para las etapas posteriores.
        </p>
      </div>
    </section>
  );
}
