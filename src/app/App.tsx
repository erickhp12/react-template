import { AppProvider } from './providers/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
