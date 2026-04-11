export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="rounded-3xl border border-slate-800 bg-slate-900 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
            Hero
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Base del portafolio modular en Next.js
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Esta etapa deja el esqueleto del kit de Figma dentro de App Router,
            con secciones separadas y listas para implementar en los commits
            siguientes.
          </p>
          <div className="inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
            Estructura lista
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm uppercase tracking-wide text-slate-400 sm:h-48 sm:w-48">
            Visual base
          </div>
        </div>
      </div>
    </section>
  );
}
