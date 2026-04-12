"use client";

import Image from "next/image";
import { useLanguageValue } from "../../../language";

type ProjectCardBaseProps = {
  title: string;
  summary: string;
  tools: string;
  demoUrl: string;
  repoUrl: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectCardBase({
  title,
  summary,
  tools,
  demoUrl,
  repoUrl,
  imageSrc,
  imageAlt,
}: ProjectCardBaseProps) {
  const copy = useLanguageValue({
    es: {
      preview: "Preview del proyecto",
      demo: "Demo",
      github: "GitHub",
      footer: "Portfolio Card",
    },
    en: {
      preview: "Project preview",
      demo: "Demo",
      github: "GitHub",
      footer: "Project Card",
    },
  });

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/70 bg-gradient-to-br from-white to-sky-50 p-4 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.3)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950 sm:p-5">
      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/75 bg-white/75 dark:border-slate-800 dark:bg-slate-950 sm:h-44">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/8" />
        <div className="bg-cyan-500 absolute left-4 top-4 h-16 w-16 rounded-full opacity-20 blur-2xl" />
        <div className="bg-violet-500 absolute bottom-4 right-4 h-20 w-20 rounded-full opacity-20 blur-2xl" />
        <div className="bg-sky-500 absolute right-4 top-4 h-8 w-8 rounded-full opacity-80" />
        <div className="absolute bottom-3 left-3 rounded-full border border-white/75 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 sm:bottom-4 sm:left-4 sm:px-4 sm:text-sm">
          {copy.preview}
        </div>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold text-slate-900 dark:text-white sm:mt-5 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
        {summary}
      </p>
      <p className="mt-3 text-sm text-cyan-700 dark:text-slate-400">{tools}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-500/20 transition-colors hover:bg-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
        >
          {copy.demo}
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-white dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
        >
          {copy.github}
        </a>
      </div>

      <div className="mt-4 h-px w-full bg-sky-100 dark:bg-slate-800" />
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 sm:text-xs">
        {copy.footer}
      </p>
    </article>
  );
}
