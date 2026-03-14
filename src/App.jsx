import { useState } from 'react';

import Cabecalho from './Components/Cabecalho';
import Rodape from './Components/Footer';
import HabitList from './Components/HabitList';
import SecaoHabitos from './Components/SecaoHabitos';
import Contador from './Components/Contador';

import './App.css'

const BemVindo = ({nomeUsuario, totalHabitos}) => {
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem = totalHabitos > 0
    ? `Você tem ${totalHabitos} hábitos(s) cadastrado(s).` 
    : `nenhum hábito cadastrado ainda. Que tal começar?`

    return(
      <div>
        <h2>Olá, {nomeFormatado}!</h2>
        <p>{mensagem}</p>
        <p>Média diária: {(totalHabitos*30).toFixed(0)} atividades por mês</p>
      </div>
    )
}

function ContadorTeste() {
  let contagem = 0
  // const resultado = useState(0);
  // Desestruturação 
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1)
    console.log('Valor atual:', contagem)
  }

  return(
    <div>
      <p>Cliques: {contagem}</p>
      <button onClick={aumentar}>+1</button>
    </div>
  )
}

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
    <>
      <div>
        <Contador/>
        <Cabecalho titulo="Meu Hábitos Diários" descricao="Construindo uma rotina melhor, um hábito por vez."/>
        <BemVindo nomeUsuario="Rafael" totalHabitos={3}/>
        <SecaoHabitos titulo="Meus Hábitos">
          <HabitList habits={HabitList}/>
        </SecaoHabitos>
        <Rodape/>
      </div>
    </>
  )
}

export default App
