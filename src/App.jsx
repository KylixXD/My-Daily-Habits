

import './App.css'
import Footer from './Footer'
import logo from './assets/react.svg'

function App() {

  return (
    <>
      <div>
        <h1>My Daily Habits</h1>
        <p>Gerencie seus hábitos diários de forma simples e visual.</p>
        <image src={logo} alt='logo React'/>
        <Footer/>
      </div>
    </>
  )
}

export default App
