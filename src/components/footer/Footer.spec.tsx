import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders footer component', () => {
    const { getByTestId } = render(<Footer />);
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeTruthy();
  });
});
