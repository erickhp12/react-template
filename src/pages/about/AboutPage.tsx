import { Helmet } from '@/shared/components/Helmet';

import classes from './AboutPage.module.css';

export const AboutPage = () => (
  <div className={classes.container}>
    <Helmet title="About" description="Learn more about this starter template." />
    <h1>About this starter</h1>
    <p>
      This project demonstrates a recommended project structure with modern tooling and testing set
      up out of the box. It is intentionally simple so you can extend it with features that matter
      for your application.
    </p>
    <ul>
      <li>React 18 with TypeScript</li>
      <li>Vite for fast development builds</li>
      <li>Vitest and Testing Library for component testing</li>
      <li>Pre-configured ESLint and Prettier</li>
      <li>Modular architecture with alias support</li>
    </ul>
  </div>
);
