import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App component correctly', () => {

    const { getByTestId } = render(<App />);
    
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('main')).toBeInTheDocument(); 
    expect(getByTestId('footer')).toBeInTheDocument(); 
  });
});