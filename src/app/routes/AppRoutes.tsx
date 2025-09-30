import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/components/layout/AppLayout';
import { AboutPage } from '@/pages/about/AboutPage';
import { HomePage } from '@/pages/home/HomePage';
import { RoadmapPage } from '@/pages/roadmap/RoadmapPage';
import { TeamPage } from '@/pages/team/TeamPage';

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="roadmap" element={<RoadmapPage />} />
      <Route path="team" element={<TeamPage />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);
