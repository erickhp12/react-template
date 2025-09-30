import { Helmet } from '@/shared/components/Helmet';

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Product Lead',
    focus: 'Guides product strategy and ensures outcomes stay aligned to user needs.'
  },
  {
    name: 'Jordan Kim',
    role: 'Design Systems',
    focus: 'Maintains the Tailwind-driven component library and accessibility patterns.'
  },
  {
    name: 'Taylor Brooks',
    role: 'Frontend Engineering',
    focus: 'Implements the layered navigation and keeps the DX snappy with Vite.'
  }
];

export const TeamPage = () => (
  <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
    <Helmet title="Team" description="Meet the builders behind this demo." />

    <header>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">People</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Meet the team</h1>
      <p className="mt-3 text-base text-slate-300">
        The sidebar highlights how cross-functional groups can co-exist. Populate each tier with the
        squads that matter to your organization.
      </p>
    </header>

    <section className="grid gap-6 md:grid-cols-3">
      {teamMembers.map((member) => (
        <article
          key={member.name}
          className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6 text-center shadow-md shadow-slate-950/30"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 text-lg font-semibold text-white">
            {member.name
              .split(' ')
              .map((part) => part.charAt(0))
              .join('')}
          </div>
          <h2 className="mt-4 text-lg font-semibold text-white">{member.name}</h2>
          <p className="text-sm font-medium text-slate-300">{member.role}</p>
          <p className="mt-3 text-sm text-slate-400">{member.focus}</p>
        </article>
      ))}
    </section>
  </div>
);
