function PortraitPlaceholder() {
  return (
    <div className="bg-base border-line flex h-24 w-24 items-center justify-center rounded-full border text-lg font-semibold text-foreground sm:h-28 sm:w-28 lg:h-32 lg:w-32">
      CB
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-surface rounded-3xl border border-line px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:items-center">
        <div>
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            About
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Sobre Mi
          </h2>
        </div>

        <div className="flex justify-end lg:justify-center">
          <PortraitPlaceholder />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-sm leading-7 text-muted sm:text-base lg:text-lg">
            Inicie en soporte y mantenimiento, fortaleciendo mi pensamiento
            analitico en hardware, redes y resolucion de problemas.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base lg:text-lg">
            Hoy desarrollo productos web, combinando programacion, diseno y
            electronica, con enfoque en soluciones reales y mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
}
