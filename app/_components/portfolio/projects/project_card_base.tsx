type ProjectCardBaseProps = {
  title: string;
};

export default function ProjectCardBase({ title }: ProjectCardBaseProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 px-4 py-10 text-center text-sm text-slate-500">
        Preview pendiente
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Tarjeta base creada para mantener la estructura modular de proyectos.
      </p>
      <div className="mt-4 flex gap-3">
        <span className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300">
          Demo
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300">
          GitHub
        </span>
      </div>
    </article>
  );
}
