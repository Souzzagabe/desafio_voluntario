import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders Header component correctly', () => {
  const { getByTestId, getByAltText, getByText } = render(<Header />);
  
  const headerElement = getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const logoElement = getByAltText('Logo Lacrei Saúde');
  expect(logoElement).toBeInTheDocument();

  const navElement = getByTestId('nav');
  expect(navElement).not.toHaveClass('open');

  const hamburgerMenuElement = getByTestId('hamburger-menu');
  expect(hamburgerMenuElement).toBeInTheDocument();

  fireEvent.click(hamburgerMenuElement);

  expect(navElement).toHaveClass('open');

  expect(getByText('Quem Somos')).toBeInTheDocument();
  expect(getByText('Ajuda')).toBeInTheDocument();
  expect(getByText('Entrar')).toBeInTheDocument();
});
