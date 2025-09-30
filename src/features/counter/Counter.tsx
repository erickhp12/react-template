import { useCounter } from '@/features/counter/useCounter';

import classes from './Counter.module.css';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className={classes.container} aria-label="Counter example">
      <h2 className={classes.title}>Interactive counter</h2>
      <p className={classes.value} data-testid="counter-value">
        {count}
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={decrement} aria-label="Decrease value">
          -1
        </button>
        <button type="button" onClick={reset} aria-label="Reset value">
          Reset
        </button>
        <button type="button" onClick={increment} aria-label="Increase value">
          +1
        </button>
      </div>
    </section>
  );
};
