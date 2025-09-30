import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/navigation/Sidebar';

export const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeSidebar, isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {isSidebarOpen ? (
        <div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      ) : null}

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="flex flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/70 px-4 py-4 backdrop-blur md:hidden">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-slate-600 hover:text-white"
            aria-label="Toggle navigation"
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Dashboard</p>
            <h1 className="text-lg font-semibold text-white">React Template</h1>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
