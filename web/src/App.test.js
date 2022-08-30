import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has login button', () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Login");
});


tes('has username field', () => {
  render (<App />);
  let usernameField = screen.getByLabelText("username");
  expect(usernameField).toHaveAttribute("placeholder","indtast brugernavn")
});