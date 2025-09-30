import { useCallback, useState } from 'react';

const INITIAL_VALUE = 0;

export const useCounter = (initialValue = INITIAL_VALUE) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((value) => value + 1), []);
  const decrement = useCallback(() => setCount((value) => value - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset } as const;
};
