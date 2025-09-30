import { Counter } from '@/features/counter/Counter';
import { useBoolean } from '@/hooks/useBoolean';
import { Helmet } from '@/shared/components/Helmet';

import classes from './HomePage.module.css';

export const HomePage = () => {
  const { value: showCounter, toggle } = useBoolean(true);

  return (
    <div className={classes.container}>
      <Helmet title="Welcome" description="A batteries-included React starter" />
      <section className={classes.hero}>
        <h1>React + TypeScript template</h1>
        <p>
          A modern, opinionated starting point for scalable React applications built with Vite,
          TypeScript, and sensible defaults.
        </p>
        <div className={classes.ctaGroup}>
          <a
            className={classes.cta}
            href="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
          >
            Vite Docs
          </a>
          <a
            className={classes.cta}
            href="https://react.dev/learn"
            target="_blank"
            rel="noreferrer"
          >
            React Docs
          </a>
        </div>
      </section>

      <section className={classes.section}>
        <header className={classes.sectionHeader}>
          <h2>Included example</h2>
          <button type="button" onClick={toggle}>
            {showCounter ? 'Hide' : 'Show'} counter
          </button>
        </header>
        {showCounter ? <Counter /> : <p>The counter component is hidden.</p>}
      </section>
    </div>
  );
};
