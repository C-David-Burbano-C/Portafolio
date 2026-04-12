"use client";

import { useLanguageValue } from "../../language";

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
          ? "rounded-2xl border border-white/70 bg-white/75 px-4 py-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
          : "flex h-14 items-center rounded-2xl border border-white/70 bg-white/75 px-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
      }
    >
      {label}
    </div>
  );
}

export default function ContactPanel() {
  const copy = useLanguageValue({
    es: {
      eyebrow: "Contact",
      title: "Contacto",
      firstParagraph: "Disponible para colaborar en proyectos web y frontend.",
      secondParagraph: "Si tienes una idea, la convertimos en una solucion funcional.",
      cta: "Enviar Mensaje",
      footer: "Hecho por Carlos David Burbano Cuchala",
      formName: "Nombre",
      formEmail: "Correo",
      formMessage: "Mensaje",
      compactForm: "Formulario compacto",
      people: [
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
      ],
    },
    en: {
      eyebrow: "Contact",
      title: "Contact",
      firstParagraph: "Available to collaborate on web and frontend projects.",
      secondParagraph: "If you have an idea, we can turn it into a functional solution.",
      cta: "Send Message",
      footer: "Made by Carlos David Burbano Cuchala",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      compactForm: "Compact form",
      people: [
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
      ],
    },
  });

  return (
    <section
      id="contacto"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl border border-white/65 bg-gradient-to-br from-white via-sky-50 to-indigo-50 px-5 py-6 shadow-[0_22px_60px_-36px_rgba(37,99,235,0.3)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950 sm:px-8 sm:py-8"
    >
      <div className="bg-cyan-500 absolute -left-10 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl" />
      <div className="bg-sky-500 absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl" />
      <div className="bg-violet-500 absolute bottom-0 right-1/3 h-24 w-24 rounded-full opacity-20 blur-3xl" />

      <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="text-cyan-700 dark:text-sky-300 text-sm font-medium uppercase tracking-[0.2em]">
            {copy.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {copy.firstParagraph}
          </p>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {copy.secondParagraph}
          </p>

          <a
            href="mailto:carlos.burbano@simerelectronics.com"
            className="inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            {copy.cta}
          </a>

          <div className="space-y-4 pt-2">
            {copy.people.map((person) => (
              <div
                key={person.email}
                className="rounded-2xl border border-white/70 bg-white/75 p-4 text-sm text-slate-600 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
              >
                <p className="font-semibold text-slate-900 dark:text-slate-50">{person.name}</p>
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
            <ContactField label={copy.formName} />
          </div>
          <div className="hidden sm:block">
            <ContactField label={copy.formEmail} />
          </div>
          <div className="hidden sm:block">
            <ContactField label={copy.formMessage} tall />
          </div>
          <div className="rounded-2xl border border-dashed border-sky-200 p-4 text-center text-xs uppercase tracking-[0.2em] text-slate-600 dark:border-slate-800 dark:text-slate-400 sm:hidden">
            {copy.compactForm}
          </div>
        </div>
      </div>

      <p className="relative mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        {copy.footer}
      </p>
      <div className="bg-sky-500 relative mx-auto mt-5 h-1 w-16 rounded-full sm:w-20" />
    </section>
  );
}
