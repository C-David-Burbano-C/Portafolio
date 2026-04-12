export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-surface rounded-3xl border border-line px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            Hero
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Base del portafolio modular en Next.js
          </h1>
          <p className="text-muted max-w-2xl text-base sm:text-lg">
            Esta etapa deja el esqueleto del kit de Figma dentro de App Router,
            con secciones separadas y listas para implementar en los commits
            siguientes.
          </p>
          <div className="border-line text-foreground inline-flex rounded-full border px-4 py-2 text-sm">
            Estructura lista
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="border-line bg-base text-muted flex h-40 w-40 items-center justify-center rounded-full border text-sm uppercase tracking-[0.2em] sm:h-48 sm:w-48">
            Visual base
          </div>
        </div>
      </div>
    </section>
  );
}
