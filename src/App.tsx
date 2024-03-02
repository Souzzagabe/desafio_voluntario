import Header from './components/header/Header';
import * as C from './App.Styles';
import  Main  from './components/main/Main';

function App() {
  return (
    <C.Container>

        <Header />
        <Main/>

    </C.Container>
  );
}

export default App;
