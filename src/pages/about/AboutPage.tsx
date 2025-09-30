import { Helmet } from '@/shared/components/Helmet';

export const AboutPage = () => (
  <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
    <Helmet title="About" description="Learn more about this starter template." />

    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-8 shadow-xl shadow-slate-950/40">
      <h1 className="text-3xl font-semibold text-white">About this starter</h1>
      <p className="mt-4 text-base leading-relaxed text-slate-300">
        This starter delivers a modern React + TypeScript foundation with Tailwind styling baked in.
        Its structure is intentionally lightweight so you can focus on your product features while
        still benefiting from strong defaults.
      </p>
    </section>

    <section className="grid gap-6 md:grid-cols-2">
      {[ 
        {
          title: 'Modern tooling',
          description:
            'Vite, TypeScript, and SWC provide a fast feedback loop and rich type-safety.'
        },
        {
          title: 'Testing ready',
          description: 'Vitest with Testing Library keeps components covered from day one.'
        },
        {
          title: 'Linting & formatting',
          description: 'ESLint + Prettier guardrails maintain consistent code quality.'
        },
        {
          title: 'Scalable structure',
          description: 'Feature-based folders and path aliases keep modules organized.'
        }
      ].map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 shadow-md shadow-slate-950/30"
        >
          <h2 className="text-xl font-semibold text-white">{item.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        </article>
      ))}
    </section>
  </div>
);
