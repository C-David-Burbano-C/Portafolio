type SectionBandProps = {
  title: string;
  showBottomBar?: boolean;
};

export default function SectionBand({
  title,
  showBottomBar = true,
}: SectionBandProps) {
  return (
    <div className="bg-surface relative overflow-hidden rounded-3xl border border-line px-5 py-6 sm:px-6 sm:py-7">
      <div className="bg-cyan absolute -left-10 -top-10 h-28 w-28 rounded-full opacity-10 blur-3xl" />
      <div className="bg-accent absolute -right-10 -top-8 h-24 w-24 rounded-full opacity-10 blur-3xl" />

      <div className="relative flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        {showBottomBar ? (
          <div className="bg-accent h-1 w-16 rounded-full sm:w-20" />
        ) : null}
      </div>
    </div>
  );
}
