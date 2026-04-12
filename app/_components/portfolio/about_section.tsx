export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-surface rounded-3xl border border-line px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="grid gap-5 md:grid-cols-[0.9fr_0.5fr_1.6fr] md:items-center">
        <div>
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            About
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Sobre mi
          </h2>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className="border-line bg-base h-20 w-20 rounded-full border" />
        </div>

        <p className="text-muted text-sm leading-7 sm:text-base">
          Placeholder de la sección personal. El contenido real, la fotografía y
          la composición final quedan reservados para las etapas posteriores.
        </p>
      </div>
    </section>
  );
}
