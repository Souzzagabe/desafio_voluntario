import Header from './components/header/Header';
import * as C from './App.Styles';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <C.Container>
        <Header data-testid="header" />
        <Main data-testid="main" />
        <Footer data-testid="footer" />
    </C.Container>
  );
}

export default App;
