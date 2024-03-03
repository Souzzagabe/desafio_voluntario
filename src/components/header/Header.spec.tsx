import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders header component', () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId('header');
    expect(headerElement).toBeTruthy();
  });

  it('toggles menu when hamburger menu is clicked', () => {
    const { getByTestId } = render(<Header />);
    const hamburgerMenu = getByTestId('hamburger-menu');
    fireEvent.click(hamburgerMenu);
    const navElement = getByTestId('nav');
    expect(navElement.className).toContain('open');
  });
});
