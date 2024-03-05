import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component correctly', () => {
  const { getByTestId } = render(<Footer />);
  
  const footerElement = getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  const listFooterElement = getByTestId('list-footer');
  expect(listFooterElement).toBeInTheDocument();

  const infoFooterElement = getByTestId('info-footer');
  expect(infoFooterElement).toBeInTheDocument();
});
