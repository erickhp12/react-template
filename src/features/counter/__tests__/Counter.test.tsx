import { fireEvent, render, screen } from '@testing-library/react';

import { Counter } from '@/features/counter/Counter';

describe('Counter', () => {
  it('increments, decrements, and resets the value', () => {
    render(<Counter />);

    const value = screen.getByTestId('counter-value');
    const incrementButton = screen.getByRole('button', { name: /increase value/i });
    const decrementButton = screen.getByRole('button', { name: /decrease value/i });
    const resetButton = screen.getByRole('button', { name: /reset value/i });

    expect(value).toHaveTextContent('0');

    fireEvent.click(incrementButton);
    expect(value).toHaveTextContent('1');

    fireEvent.click(decrementButton);
    expect(value).toHaveTextContent('0');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(value).toHaveTextContent('0');
  });
});
