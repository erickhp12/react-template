import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/components/layout/AppLayout';
import { AboutPage } from '@/pages/about/AboutPage';
import { HomePage } from '@/pages/home/HomePage';

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);
