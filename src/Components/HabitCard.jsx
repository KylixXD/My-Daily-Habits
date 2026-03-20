import { Link } from "react-router-dom"
import './HabitCard.css'

function HabitCard({id,titulo, descricao= '', meta, ativo = true, diasFeitos = 0, categoria = 'Geral',onRemover, onToggle}) {
    const metaAtingida = diasFeitos >= meta 
    // const destaque = categoria === 'Saúde'

    const mensagemMeta = metaAtingida
        ? '🏆 Meta da Semana atingida!'
        : `${diasFeitos} de  ${meta} dias concluídos`

    console.log(id)

    return(
        <div className="habit-card">
            <h3>{titulo}</h3>
            <p>{mensagemMeta}</p>
            <small>Categoria:{categoria}</small>
            {descricao && <p>{descricao}</p>}
            {/* <small>Categoria: {categoria} {destaque && ' ⭐'}- </small> */}
            
            {/* <span>{categoria}</span> */}
            <span>{ativo ? '✅ Ativo' : '⏸️ Pausado'}</span>
            

            {metaAtingida && <p>⭐ Parabéns! Você manteve a sequência essa semana!</p>}
            
            <Link to={`/habito/${id}`} className="btn-detalhes">Ver detalhes</Link>
            {onRemover && (
                <button type="button" onClick={onRemover}>Remover</button>
            )}

            {onToggle && (
                <button type="button" onClick={onToggle}>
                    {ativo ? 'Pausar' : 'Ativar'}
                </button>
            )}
        </div>
    )
    
}

export default HabitCard