type SectionBandProps = {
  title: string;
  showBottomBar?: boolean;
};

export default function SectionBand({
  title,
  showBottomBar = true,
}: SectionBandProps) {
  return (
    <div className="bg-surface relative overflow-hidden rounded-3xl border border-line px-5 py-5 shadow-md sm:px-6 sm:py-7">
      <div className="bg-cyan absolute -left-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl" />
      <div className="bg-accent absolute -right-10 -top-8 h-24 w-24 rounded-full opacity-20 blur-3xl" />
      <div className="bg-violet absolute bottom-0 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full opacity-10 blur-3xl" />

      <div className="relative flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        {showBottomBar ? (
          <div className="bg-accent h-1.5 w-20 rounded-full sm:w-24" />
        ) : null}
      </div>
    </div>
  );
}
