import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Counter from './';

test('the initial value of the counter is 0', () => {
  const { getByText } = render(<Counter />);
  const counterValueElement = getByText(/0/i);
  expect(counterValueElement).toBeInTheDocument();
});

test('given the counter is 0, when the - button is clicked, then the counter turns to -1', () => {
  const { getByText } = render(<Counter />);

  fireEvent.click(getByText('-'));

  const counterValueElement = getByText(/-1/i);
  expect(counterValueElement).toBeInTheDocument();
});

test('given the counter is 0, when the + button is clicked four times, then the counter turns to 4', () => {
  const { getByText } = render(<Counter />);

  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('+'));

  const counterValueElement = getByText(/4/i);
  expect(counterValueElement).toBeInTheDocument();
});
