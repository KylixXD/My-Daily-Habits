
  import Cabecalho from './Components/Cabecalho';
  import Rodape from './Components/Footer';

  import './Layout.css'
  import './App.css'
  import { Route,Routes } from 'react-router-dom';
  import PaginaInicio from './pages/PaginaInicio';
  import PaginaHabitos from './pages/PaginaHabitos';
  import PaginaDetalhes from './pages/PaginaDetalhes';
  import PaginaNaoEncontrada from './pages/PaginaNaoEcontrada';

  // function ContadorTeste() {
  //   let contagem = 0
  //   // const resultado = useState(0);
  //   // Desestruturação 
  //   const [contador, setContador] = useState(0);

  //   const aumentar = () => {
  //     setContador(contador + 1)
  //     console.log('Valor atual:', contagem)
  //   }

  //   return(
  //     <div>
  //       <p>Cliques: {contagem}</p>
  //       <button onClick={aumentar}>+1</button>
  //     </div>
  //   )
  // }

  function App() {
    // const habits = [
    //   { id: 1 , titulo: 'Exercício', meta: 5, ativo: true, diasFeitos: 4, categoria: 'Saúde'},
    //   { id: 2 , titulo: 'Mexer no TCC', meta: 30, ativo: true, diasFeitos: 3, categoria: 'Futuro profissional'},
    //   { id: 3 , titulo: 'Hidratação', meta: 12, ativo: false, diasFeitos: 2, categoria: 'Saúde'},
    //   { id: 4 , titulo: 'Dormi que nem gente', meta: 24, ativo: true, diasFeitos: 6, categoria: 'Saúde'},
    //   { id: 5 , titulo: 'Estudar Programação', meta: 30, ativo: true, diasFeitos: 6},
    //   { id: 6 , titulo: 'Fazer Atividade React', meta: 1, ativo: true, diasFeitos: 1, categoria: 'Exercicio Programação'},
    // ]

    return (
      <div>
        <Cabecalho/>
          <Routes>
            <Route path="/"            element={<PaginaInicio/>} />
            <Route path="/habitos"     element={<PaginaHabitos/>} />
            <Route path="/habito/:id"  element={<PaginaDetalhes/>} />
            <Route path="*"            element={<PaginaNaoEncontrada/>} />
          </Routes>
        <Rodape/>
      </div>
    )
  }

  export default App
