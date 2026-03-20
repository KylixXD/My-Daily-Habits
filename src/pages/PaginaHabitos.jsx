import HabitList from "../Components/HabitList"
import './PaginaHabitos.css'

function PaginaHabitos() {
    return(
        <main className="paginas-habitos">
            <h1>Meus hábitos</h1>
            <HabitList/>
        </main>
    )
}

export default PaginaHabitos