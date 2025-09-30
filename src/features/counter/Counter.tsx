import { useCounter } from '@/features/counter/useCounter';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section
      className="flex flex-col gap-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 text-center shadow-xl shadow-slate-950/40"
      aria-label="Counter example"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Sample component</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Interactive counter</h2>
      </div>
      <p
        className="rounded-2xl border border-slate-800/70 bg-slate-950/80 px-6 py-5 text-5xl font-bold text-white shadow-inner shadow-slate-950/60"
        data-testid="counter-value"
      >
        {count}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrease value"
          className="inline-flex items-center justify-center rounded-xl border border-transparent bg-rose-500/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-500"
        >
          -1
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Reset value"
          className="inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={increment}
          aria-label="Increase value"
          className="inline-flex items-center justify-center rounded-xl border border-transparent bg-emerald-500/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
        >
          +1
        </button>
      </div>
    </section>
  );
};
