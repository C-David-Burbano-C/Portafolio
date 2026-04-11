export default function ContactPanel() {
  return (
    <section
      id="contacto"
      className="rounded-3xl border border-slate-800 bg-slate-900 px-5 py-6 sm:px-8 sm:py-8"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Contacto
          </h2>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            Base del panel de contacto lista para recibir datos reales, enlaces
            y la variante responsive de las siguientes etapas.
          </p>
          <div className="inline-flex rounded-full bg-blue-300 px-4 py-2 text-sm font-semibold text-slate-950">
            Enviar mensaje
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-slate-700 p-5 text-sm text-slate-400">
          Placeholder de formulario
        </div>
      </div>
    </section>
  );
}
