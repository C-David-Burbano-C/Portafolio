type ProjectCardBaseProps = {
  title: string;
};

export default function ProjectCardBase({ title }: ProjectCardBaseProps) {
  return (
    <article className="bg-surface rounded-3xl border border-line p-5">
      <div className="border-line bg-base text-muted rounded-2xl border border-dashed px-4 py-10 text-center text-sm">
        Preview pendiente
      </div>
      <h3 className="font-display mt-4 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-muted mt-2 text-sm leading-6">
        Tarjeta base creada para mantener la estructura modular de proyectos.
      </p>
      <div className="mt-4 flex gap-3">
        <span className="border-line text-muted rounded-full border px-3 py-2 text-sm">
          Demo
        </span>
        <span className="border-line text-muted rounded-full border px-3 py-2 text-sm">
          GitHub
        </span>
      </div>
    </article>
  );
}
