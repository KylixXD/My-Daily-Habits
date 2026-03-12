import HabitCard from "./HabitCard"

function HabitList({habits}) {

    if(!habits) return null


    if (habits.length === 0) {
        return <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
    }

    return(
        <ul>
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    titulo={habit.titulo}
                    meta={habit.meta}
                    ativo={habit.ativo}
                    diasFeitos={habit.diasFeitos}
                    categoria={habit.categoria}
                />
            ))}
        </ul>
    ) 
}

export default HabitList