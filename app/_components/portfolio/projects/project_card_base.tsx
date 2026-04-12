import Image from "next/image";

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
  return (
    <article className="bg-slate-900 flex h-full flex-col rounded-3xl border border-slate-700 p-4 shadow-md sm:p-5">
      <div className="bg-slate-950 border-slate-700 relative h-48 overflow-hidden rounded-2xl border sm:h-44">
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
        <div className="bg-blue-500 absolute right-4 top-4 h-8 w-8 rounded-full opacity-80" />
        <div className="border-slate-700 bg-slate-900/90 text-slate-50 absolute bottom-3 left-3 rounded-full border px-3 py-2 text-xs font-semibold shadow-md sm:bottom-4 sm:left-4 sm:px-4 sm:text-sm">
          Preview del proyecto
        </div>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold text-white sm:mt-5 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">
        {summary}
      </p>
      <p className="text-cyan-300 mt-3 text-sm">{tools}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 rounded-full px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm"
        >
          Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="border-slate-700 rounded-full border px-4 py-2 text-sm font-semibold text-slate-50"
        >
          GitHub
        </a>
      </div>

      <div className="mt-4 bg-slate-700 h-px w-full" />
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
        Portfolio Card
      </p>
    </article>
  );
}
