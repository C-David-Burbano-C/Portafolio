type ProjectCardBaseProps = {
  title: string;
  summary: string;
  tools: string;
};

export default function ProjectCardBase({
  title,
  summary,
  tools,
}: ProjectCardBaseProps) {
  return (
    <article className="bg-surface flex h-full flex-col rounded-3xl border border-line p-5">
      <div className="bg-base border-line relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border">
        <div className="bg-cyan absolute left-4 top-4 h-16 w-16 rounded-full opacity-10 blur-2xl" />
        <div className="bg-violet absolute bottom-4 right-4 h-20 w-20 rounded-full opacity-10 blur-2xl" />
        <div className="border-line text-muted relative rounded-full border px-4 py-2 text-sm">
          Preview del proyecto
        </div>
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h3>
      <p className="text-muted mt-2 text-sm leading-6 sm:text-base">
        {summary}
      </p>
      <p className="text-cyan mt-3 text-sm">{tools}</p>

      <div className="mt-5 flex gap-3">
        <span className="border-line text-foreground rounded-full border px-4 py-2 text-sm font-semibold">
          Demo
        </span>
        <span className="border-line text-foreground rounded-full border px-4 py-2 text-sm font-semibold">
          GitHub
        </span>
      </div>

      <div className="mt-4 bg-line h-px w-full" />
      <p className="text-muted mt-4 text-xs uppercase tracking-[0.2em]">
        Portfolio Card
      </p>
    </article>
  );
}
