import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarLink {
  path: string;
  label: string;
  description?: string;
}

interface SidebarSection {
  id: string;
  label: string;
  description: string;
  items: SidebarLink[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections: SidebarSection[] = [
  {
    id: 'overview',
    label: 'Aplicaciones',
    description: 'High-level insights',
    items: [
      { path: '/', label: 'Inicio', description: 'Start with the project overview.' },
      { path: '/roadmap', label: 'Hoja de ruta', description: 'Review upcoming milestones.' }
    ]
  },
  {
    id: 'company',
    label: 'Organizaciones',
    description: 'Team & culture',
    items: [
      { path: '/about', label: 'Acerca de', description: 'Learn about the goals of this template.' },
      { path: '/team', label: 'Equipo', description: 'Meet the core contributors.' }
    ]
  }
];

const mobileBaseClasses =
  'fixed inset-y-0 left-0 z-40 w-full max-w-sm transform border-r border-slate-800 bg-slate-900/95 text-slate-200 shadow-lg transition-transform duration-200 ease-in-out md:static md:z-auto md:max-w-none md:w-[26rem] md:border-r md:bg-slate-900/80 md:shadow-none lg:w-[28rem]';

const getSectionBadge = (label: string) => {
  const words = label
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const matchingSection = sections.find((section) =>
      section.items.some((item) =>
        location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
      )
    );

    if (matchingSection && matchingSection.id !== activeSectionId) {
      setActiveSectionId(matchingSection.id);
    }
  }, [activeSectionId, location.pathname]);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? sections[0],
    [activeSectionId]
  );

  return (
    <aside
      className={`${mobileBaseClasses} ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      aria-label="Primary navigation"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4 md:border-b-0">
          <span className="text-lg font-semibold">React Template</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden"
          >
            Close
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <nav className="flex basis-40 flex-shrink-0 flex-col gap-2 overflow-y-auto border-r border-slate-800 p-3 sm:basis-48 lg:basis-56">
            {sections.map((section) => {
              const isActive = section.id === activeSectionId;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSectionId(section.id)}
                  className={`flex w-full flex-col items-start gap-1 rounded-xl border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:px-3 ${
                    isActive
                      ? 'border-slate-500/60 bg-slate-800/70 text-white shadow-md shadow-slate-900/40'
                      : 'border-transparent bg-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <span
                    className={`text-[0.6rem] font-semibold uppercase tracking-[0.35em] ${
                      isActive ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {getSectionBadge(section.label)}
                  </span>
                  <span className="text-sm font-medium leading-snug break-words">{section.label}</span>
                  <span className="text-[0.65rem] leading-snug text-slate-400 break-words">
                    {section.description}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="flex-1 overflow-y-auto p-4">
            <header className="mb-4">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Section</p>
              <h2 className="text-xl font-semibold text-white">{activeSection?.label}</h2>
              <p className="mt-1 text-sm text-slate-400">{activeSection?.description}</p>
            </header>

            <ul className="flex flex-col gap-3">
              {activeSection?.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group block rounded-xl border px-4 py-3 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                        isActive
                          ? 'border-slate-500/70 bg-slate-800/80 text-white shadow-md shadow-slate-900/50'
                          : 'border-slate-800/80 bg-slate-900/60 text-slate-300 hover:border-slate-600 hover:bg-slate-800/60 hover:text-white'
                      }`
                    }
                    onClick={onClose}
                  >
                    <span className="text-sm font-semibold leading-snug break-words">{item.label}</span>
                    {item.description ? (
                      <span className="mt-1 block text-xs leading-snug text-slate-400 break-words">
                        {item.description}
                      </span>
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
