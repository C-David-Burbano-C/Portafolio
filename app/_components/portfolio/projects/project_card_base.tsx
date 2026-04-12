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
    <article className="bg-surface flex h-full flex-col rounded-3xl border border-line p-4 shadow-md sm:p-5">
      <div className="bg-base border-line relative h-48 overflow-hidden rounded-2xl border sm:h-44">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/8" />
        <div className="bg-cyan absolute left-4 top-4 h-16 w-16 rounded-full opacity-20 blur-2xl" />
        <div className="bg-violet absolute bottom-4 right-4 h-20 w-20 rounded-full opacity-20 blur-2xl" />
        <div className="bg-accent absolute right-4 top-4 h-8 w-8 rounded-full opacity-80" />
        <div className="border-line bg-surface/90 text-foreground absolute bottom-3 left-3 rounded-full border px-3 py-2 text-xs font-semibold shadow-md sm:bottom-4 sm:left-4 sm:px-4 sm:text-sm">
          Preview del proyecto
        </div>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold text-foreground sm:mt-5 sm:text-2xl">
        {title}
      </h3>
      <p className="text-muted mt-2 text-sm leading-6 sm:text-base">
        {summary}
      </p>
      <p className="text-cyan mt-3 text-sm">{tools}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-accent rounded-full px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm"
        >
          Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="border-line text-foreground rounded-full border px-4 py-2 text-sm font-semibold"
        >
          GitHub
        </a>
      </div>

      <div className="mt-4 bg-line h-px w-full" />
      <p className="text-muted mt-4 text-[11px] uppercase tracking-[0.2em] sm:text-xs">
        Portfolio Card
      </p>
    </article>
  );
}
