import { Helmet } from '@/shared/components/Helmet';

const roadmapMilestones = [
  {
    quarter: 'Q3 2024',
    title: 'Launch demo dashboard',
    description: 'Showcase the two-layer sidebar navigation with curated content blocks.',
    status: 'In progress'
  },
  {
    quarter: 'Q4 2024',
    title: 'Integrations hub',
    description: 'Connect external APIs and present them through grouped navigation layers.',
    status: 'Planned'
  },
  {
    quarter: 'Q1 2025',
    title: 'Collaboration suite',
    description: 'Enable comments, assignments, and notifications throughout the workspace.',
    status: 'Future'
  }
];

export const RoadmapPage = () => (
  <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
    <Helmet title="Roadmap" description="Preview upcoming milestones for the product." />

    <header>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Planning</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Product roadmap</h1>
      <p className="mt-3 text-base text-slate-300">
        Keep your roadmap visible to the team by highlighting the initiatives captured in the first
        and second navigation layers. This is a simple example you can extend with live data.
      </p>
    </header>

    <section className="space-y-4">
      {roadmapMilestones.map((milestone) => (
        <article
          key={milestone.title}
          className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 shadow-md shadow-slate-950/30"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{milestone.quarter}</p>
              <h2 className="text-xl font-semibold text-white">{milestone.title}</h2>
            </div>
            <span className="inline-flex items-center rounded-full border border-slate-700/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
              {milestone.status}
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-300">{milestone.description}</p>
        </article>
      ))}
    </section>
  </div>
);
