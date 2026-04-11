type SectionBandProps = {
  title: string;
};

export default function SectionBand({ title }: SectionBandProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-slate-700" />
      </div>
    </div>
  );
}
