import { useNavigate, useParams } from "react-router-dom";
import { useHabits } from "../contexts/HabitsContext";
import './PaginaDetalhes.css'

function PaginaDetalhes() {
    const {id} = useParams()
    const { habits, removerHabit} = useHabits()
    const navigate = useNavigate()



    const habit = habits.find(h => h.id === Number(id))
    console.log("Hábito encontrado:", habit);

    if(!habit){
        return(
            <main className="pagina-detalhes">
                <h1>Hábito não encontrado</h1>
                <button onClick={() => navigate('/habitos')}>
                    Voltar
                </button>
            </main>
        )
    }

    const metaAtingida = habit.diasFeitos >= habit.meta

    const handleRemover = () => {
        removerHabit(habit.id)
        navigate('/habitos')
    }

    return(
        <main className="pagina-detalhes">
            <button onClick={() => navigate(-1)} className="btn-voltar">
                  ← Voltar
            </button>

            <div className="detalhe-card">
                <h1>{habit.titulo}</h1>
                <p>{habit.descricao}</p>

                <ul className="detalhe-info">
                    <li><strong>Categoria:</strong> {habit.categoria || 'Geral'}</li>
                    <li><strong>Meta Semanal:</strong> {habit.meta} dias</li>
                    <li><strong>Dias Feitos:</strong> {habit.diasFeitos}</li>
                    <li>
                        <strong>Status:</strong>{''}
                        <span style={{ color: habit.ativo ? '#16a34a' : '#9ca3af' }}>
                            {habit.ativo ?'✅ Ativo' : '⏸️ Pausado'}
                        </span>
                    </li>
                    <li>
                        {metaAtingida &&(
                            <li>🏆 Meta da semana atingida!</li>
                        )}
                    </li>
                </ul>

                <button onClick={handleRemover} className="btn-remover">Remover Hábito</button>
            </div>

        </main>
    )
}

export default PaginaDetalhes