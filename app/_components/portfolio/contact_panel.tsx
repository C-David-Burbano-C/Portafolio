const contactPeople = [
  {
    name: "Carlos Burbano",
    phone: "+57 3137507352",
    email: "carlos.burbano@simerelectronics.com",
    location: "Pasto, Colombia",
  },
  {
    name: "Francisco Ramirez",
    phone: "+57 3173526188",
    email: "francisco.ramirez@simerelectronics.com",
    location: "Pasto, Colombia",
  },
];

function ContactField({
  label,
  tall = false,
}: {
  label: string;
  tall?: boolean;
}) {
  return (
    <div
      className={
        tall
          ? "border-line bg-base text-muted rounded-2xl border px-4 py-4 text-sm"
          : "border-line bg-base text-muted flex h-14 items-center rounded-2xl border px-4 text-sm"
      }
    >
      {label}
    </div>
  );
}

export default function ContactPanel() {
  return (
    <section
      id="contacto"
      className="bg-surface relative overflow-hidden rounded-3xl border border-line px-5 py-6 shadow-md sm:px-8 sm:py-8"
    >
      <div className="bg-cyan absolute -left-10 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl" />
      <div className="bg-accent absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl" />
      <div className="bg-violet absolute bottom-0 right-1/3 h-24 w-24 rounded-full opacity-20 blur-3xl" />

      <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="text-cyan text-sm font-medium uppercase tracking-[0.2em]">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Contacto
          </h2>
          <p className="text-sm leading-7 text-muted sm:text-lg">
            Disponible para colaborar en proyectos web y frontend.
          </p>
          <p className="text-sm leading-7 text-muted sm:text-lg">
            Si tienes una idea, la convertimos en una solucion funcional.
          </p>

          <a
            href="mailto:carlos.burbano@simerelectronics.com"
            className="bg-accent inline-flex rounded-full px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg"
          >
            Enviar Mensaje
          </a>

          <div className="space-y-4 pt-2">
            {contactPeople.map((person) => (
              <div
                key={person.email}
                className="border-line bg-base/80 rounded-2xl border p-4 text-sm text-muted"
              >
                <p className="font-semibold text-foreground">{person.name}</p>
                <a href={`tel:${person.phone.replace(/\s+/g, "")}`} className="block">
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className="block">
                  {person.email}
                </a>
                <p>{person.location}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="hidden sm:block">
            <ContactField label="Nombre" />
          </div>
          <div className="hidden sm:block">
            <ContactField label="Correo" />
          </div>
          <div className="hidden sm:block">
            <ContactField label="Mensaje" tall />
          </div>
          <div className="border-line rounded-2xl border border-dashed p-4 text-center text-xs uppercase tracking-[0.2em] text-muted sm:hidden">
            Formulario compacto
          </div>
        </div>
      </div>

      <p className="relative mt-8 text-center text-sm text-muted">
        Hecho por Carlos David Burbano Cuchala
      </p>
      <div className="bg-accent relative mx-auto mt-5 h-1 w-16 rounded-full sm:w-20" />
    </section>
  );
}
