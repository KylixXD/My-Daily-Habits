import { useState } from "react"

import HabitCard from "./HabitCard"

function HabitList() {
    const [habits,setHabits] = useState([
        { id: 1, titulo: 'Exercício',  descricao: 'Treino de força',    meta: 5, ativo: true,  diasFeitos: 5 },
        { id: 2, titulo: 'Leitura',    descricao: 'Livro ou artigo',    meta: 7, ativo: true,  diasFeitos: 3 },
        { id: 3, titulo: 'Meditação',  descricao: 'Respiração e foco',  meta: 7, ativo: false, diasFeitos: 0 },
        { id: 4, titulo: 'Hidratação', descricao: 'Beber 2L de água',   meta: 7, ativo: true,  diasFeitos: 6 },
    ])

    const removeHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id))
    }

    const [novoTitulo, setNovoTitulo] = useState('')
    const [novaDescricao, setNovaDescricao] = useState('')
    const [novaCategoria, setNovaCategoria] = useState('')
    const [novaMeta, setNovaMeta] = useState('')
    const [diasFeitos, setDiasFeitos] = useState('')


    const adicionarHabit = (event) => {
        event.preventDefault()

        if(!novoTitulo.trim()){
            alert('Informe um título para o hábito.')
            return
        }
        
        const novohabit = {
            id: Date.now(),
            titulo: novoTitulo,
            descricao: novaDescricao,
            meta: novaMeta || 7,
            ativo: true,
            diasFeitos: diasFeitos|| 0,
            categoria: novaCategoria || 'Geral',
        }

        setHabits([...habits, novohabit]
        )

        setNovoTitulo('')
        setNovaDescricao('')
        setNovaMeta('')
        setDiasFeitos('')
        setNovaCategoria('')    
    }

    if(!habits) return null


    if (habits.length === 0) {
        return <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
    }

    return(
        <section>
            <h2>Hábitos Cadastrados</h2>

            <form onSubmit={adicionarHabit} className="habit-form">
                <div>
                    <label>
                        Título do Hábito*
                        <input type="text" 
                        value={novoTitulo} 
                        onChange={(e) => setNovoTitulo(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição
                        <input type="text" 
                        value={novaDescricao} 
                        onChange={(e) => setNovaDescricao(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Meta
                        <input type="number" 
                        value={novaMeta} 
                        onChange={(e) => setNovaMeta(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Dias Feitos
                        <input type="number" 
                        value={diasFeitos} 
                        onChange={(e) => setDiasFeitos(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Categoria
                        <input type="text" 
                        value={novaCategoria} 
                        onChange={(e) => setNovaCategoria(e.target.value)}
                        />
                    </label>
                </div>

                <button type="submit">Adicionar Hábito</button>
            </form>

            {habits.length === 0 
                ?<p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
                :<p>Você tem {habits.length} hábito(s) cadastrado(s).</p>}

                <ul>
                        {habits.map((habit) => (
                            <HabitCard 
                            key={habit.id}
                            titulo={habit.titulo}
                            descricao={habit.descricao}
                            meta={habit.meta}
                            ativo={habit.ativo}
                            diasFeitos={habit.diasFeitos}
                            onRemover={() => removeHabit(habit.id)}
                            />
                        ))}
                </ul>
        </section>
    ) 
}

export default HabitList