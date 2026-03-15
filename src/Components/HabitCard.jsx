
function HabitCard({titulo, descricao= '', meta, ativo = true, diasFeitos = 0,onRemover}) {
    const metaAtingida = diasFeitos >= meta 
    // const destaque = categoria === 'Saúde'

    const mensagemMeta = metaAtingida
        ? '🏆 Meta da Semana atingida!'
        : `${diasFeitos} de  ${meta} dias concluídos`

    return(
        <div className="habit-card">
            <h3>{titulo}</h3>
            <p>{mensagemMeta}</p>
            {descricao && <p>{descricao}</p>}
            {/* <small>Categoria: {categoria} {destaque && ' ⭐'}- </small> */}

            <span>{ativo ? '✅ Ativo' : '⏸️ Pausado'}</span>

            {metaAtingida && <p>⭐ Parabéns! Você manteve a sequência essa semana!</p>}

            {onRemover && (
                <button type="button" onClick={onRemover}>Remover</button>
            )}
        </div>
    )
    
}

export default HabitCard