function HabitCard({titulo, meta, ativo = true, diasFeitos = 0, categoria = 'Geral' }) {
    const metaAtingida = diasFeitos >= meta 

    const mensagemMeta = metaAtingida
        ? 'Meta da Semana atingida!'
        : `${diasFeitos} de  ${meta} dias concluídos`

    return(
        <div className="habit-card">
            <h3>{titulo}</h3>
            <p>{mensagemMeta}</p>
            <small>Categoria: {categoria} - </small>

            <span>{ativo ? 'Ativo' : 'Pausado'}</span>

            {metaAtingida && (
                <p>Parabéns! Você manteve a sequência essa semana!</p>
            )}
        </div>
    )
    
}

export default HabitCard