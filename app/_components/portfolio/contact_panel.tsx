"use client";

import { useState, type FormEvent } from "react";
import { useLanguageValue } from "../../language";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPanel() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<"idle" | "success" | "error">("idle");
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
      formNamePlaceholder: "Tu nombre",
      formEmailPlaceholder: "tu@correo.com",
      formMessagePlaceholder: "Cuentame sobre tu proyecto",
      sending: "Enviando...",
      success: "Mensaje enviado. Te respondere pronto.",
      error: "Completa todos los campos para enviar el mensaje.",
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
      formNamePlaceholder: "Your name",
      formEmailPlaceholder: "you@email.com",
      formMessagePlaceholder: "Tell me about your project",
      sending: "Sending...",
      success: "Message sent. I will get back to you soon.",
      error: "Fill in all fields to send the message.",
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback("error");
      return;
    }

    setFeedback("idle");
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFeedback("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 900);
  };

  const feedbackMessage =
    feedback === "success" ? copy.success : feedback === "error" ? copy.error : null;

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

          <button
            type="submit"
            form="contact-form"
            disabled={isSubmitting}
            className="inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            {isSubmitting ? copy.sending : copy.cta}
          </button>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {copy.formName}
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder={copy.formNamePlaceholder}
              className="h-14 w-full rounded-2xl border border-white/70 bg-white/80 px-4 text-sm text-slate-700 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-sky-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {copy.formEmail}
            </span>
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              placeholder={copy.formEmailPlaceholder}
              className="h-14 w-full rounded-2xl border border-white/70 bg-white/80 px-4 text-sm text-slate-700 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-sky-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {copy.formMessage}
            </span>
            <textarea
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              placeholder={copy.formMessagePlaceholder}
              rows={5}
              className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-sm text-slate-700 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-sky-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-500"
            />
          </label>

          {feedbackMessage ? (
            <p
              className={
                feedback === "success"
                  ? "text-sm text-emerald-600 dark:text-emerald-400"
                  : "text-sm text-rose-600 dark:text-rose-400"
              }
            >
              {feedbackMessage}
            </p>
          ) : null}
        </form>
      </div>

      <p className="relative mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        {copy.footer}
      </p>
      <div className="bg-sky-500 relative mx-auto mt-5 h-1 w-16 rounded-full sm:w-20" />
    </section>
  );
}
