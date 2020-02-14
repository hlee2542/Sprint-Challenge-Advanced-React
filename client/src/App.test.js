import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test('loading text is there', () => {
  const {getByText} = render(<App />);
  const loading = getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('dark mode button is there', () => {
  const {getByText} = render(<App />);
  const darkMode = getByText(/dark mode/i);
  expect(darkMode).toBeInTheDocument();
});