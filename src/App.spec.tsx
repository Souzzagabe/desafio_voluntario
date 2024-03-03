import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App component correctly', () => {

    const { getByTestId } = render(<App />);
    
    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('main')).toBeTruthy();
    expect(getByTestId('footer')).toBeTruthy();
  });
});

