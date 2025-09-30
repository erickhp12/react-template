import { Outlet } from 'react-router-dom';

import { NavigationBar } from '@/components/navigation/NavigationBar';

export const AppLayout = () => (
  <>
    <NavigationBar />
    <main>
      <Outlet />
    </main>
  </>
);
