import { Counter } from '@/features/counter/Counter';
import { useBoolean } from '@/hooks/useBoolean';
import { Helmet } from '@/shared/components/Helmet';

export const HomePage = () => {
  const { value: showCounter, toggle } = useBoolean(true);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
      <Helmet title="Welcome" description="A batteries-included React starter" />

      <section className="overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900/70 to-slate-900/40 px-6 py-12 text-center shadow-2xl shadow-slate-950/60 sm:px-10">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tailwind powered</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          React + TypeScript starter with a two-layer navigation
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Use the new sidebar to explore how you can organize your product information across two
          focused navigation layers. The entire experience is styled with the latest Tailwind CSS.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800/70 hover:text-white"
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind Docs
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-sky-500/90 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-400/90"
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Vite
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 shadow-xl shadow-slate-950/40 sm:p-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Interactive demo</p>
            <h2 className="text-2xl font-semibold text-white">Included example component</h2>
          </div>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/70 hover:text-white"
          >
            {showCounter ? 'Hide counter' : 'Show counter'}
          </button>
        </header>
        <div className="mt-6">
          {showCounter ? (
            <Counter />
          ) : (
            <p className="rounded-xl border border-dashed border-slate-700/60 bg-slate-900/50 px-4 py-6 text-center text-sm text-slate-400">
              The counter component is hidden. Toggle it back on to explore the interactions.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
