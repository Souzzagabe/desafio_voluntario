import { render } from '@testing-library/react';
import Main from './Main';

it('renders main component', () => {
  const { getByText, queryByAltText } = render(<Main />);
  
  expect(getByText('Junte-se à nossa comunidade')).toBeTruthy();
  expect(getByText('Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.')).toBeTruthy();
  
  const imgElement = queryByAltText('Imagem de uma médica e uma enfermeira');
  expect(imgElement).toBeTruthy();
});
