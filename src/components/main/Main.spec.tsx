import { render } from '@testing-library/react';
import Main from './Main';

describe('renders Main component correctly', () => {
  const { getByTestId, getByText, getByAltText } = render(<Main />);
  
  const mainElement = getByTestId('main');
  expect(mainElement).toBeInTheDocument();

  expect(getByText('Junte-se à nossa comunidade')).toBeInTheDocument();
  expect(getByText(/Encontre atendimento clínico de qualidade/i)).toBeInTheDocument();
  expect(getByText(/Entre para o time de profissionais da Lacrei Saúde/i)).toBeInTheDocument();

  expect(getByText('Buscar atendimento')).toBeInTheDocument();
  expect(getByText('Oferecer atendimento')).toBeInTheDocument();

  const imgElement = getByAltText('Imagem de uma médica e uma enfermeira');
  expect(imgElement).toBeInTheDocument();
});
