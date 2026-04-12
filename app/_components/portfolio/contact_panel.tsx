export default function ContactPanel() {
  return (
    <section
      id="contacto"
      className="bg-surface rounded-3xl border border-line px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            Contact
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Contacto
          </h2>
          <p className="text-muted text-sm leading-7 sm:text-base">
            Base del panel de contacto lista para recibir datos reales, enlaces
            y la variante responsive de las siguientes etapas.
          </p>
          <div className="bg-accent inline-flex rounded-full px-4 py-2 text-sm font-semibold text-slate-950">
            Enviar mensaje
          </div>
        </div>

        <div className="border-line text-muted rounded-2xl border border-dashed p-5 text-sm">
          Placeholder de formulario
        </div>
      </div>
    </section>
  );
}
