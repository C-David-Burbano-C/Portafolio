type SectionBandProps = {
  title: string;
  showBottomBar?: boolean;
};

export default function SectionBand({
  title,
  showBottomBar = true,
}: SectionBandProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_38%,#e9d5ff_100%)] px-5 py-5 shadow-[0_22px_56px_-34px_rgba(59,130,246,0.45)] dark:border-slate-700 dark:bg-none dark:bg-slate-900 sm:px-6 sm:py-7">
      <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-400 opacity-30 blur-3xl dark:bg-cyan-500 dark:opacity-20" />
      <div className="absolute -right-10 -top-8 h-24 w-24 rounded-full bg-blue-500 opacity-25 blur-3xl dark:opacity-20" />
      <div className="absolute bottom-0 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-violet-400 opacity-25 blur-3xl dark:bg-violet-500 dark:opacity-10" />

      <div className="relative flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {showBottomBar ? (
          <div className="bg-blue-500 h-1.5 w-20 rounded-full sm:w-24" />
        ) : null}
      </div>
    </div>
  );
}
