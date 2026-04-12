type SectionBandProps = {
  title: string;
};

export default function SectionBand({ title }: SectionBandProps) {
  return (
    <div className="bg-surface rounded-2xl border border-line px-5 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
        <div className="bg-line h-px flex-1" />
      </div>
    </div>
  );
}
