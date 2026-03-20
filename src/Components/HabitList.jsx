import { useRef, useState } from "react"

import { useHabits } from '../contexts/HabitsContext'
import HabitCard from "./HabitCard"
import { useNavigate } from "react-router-dom"
import './HabitList.css'

function HabitList() {
    const { habits, adicionarHabit, removerHabit, toggleAtivo} = useHabits()
    const navigate = useNavigate()
    // const [habits,setHabits] = useState(() => {
    //     const stored = localStorage.getItem('my-daily-habits')

    //     // if(!stored) return [
    //     //     { id: 1, titulo: 'Exercício',  descricao: 'Treino de força',    meta: 5, ativo: true,  diasFeitos: 5 },
    //     //     { id: 2, titulo: 'Leitura',    descricao: 'Livro ou artigo',    meta: 7, ativo: true,  diasFeitos: 3 },
    //     //     { id: 3, titulo: 'Meditação',  descricao: 'Respiração e foco',  meta: 7, ativo: false, diasFeitos: 0 },
    //     //     { id: 4, titulo: 'Hidratação', descricao: 'Beber 2L de água',   meta: 7, ativo: true,  diasFeitos: 6 },
    //     // ]

    //     try {
    //         const parsed = JSON.parse(stored)
    //         return Array.isArray(parsed) ? parsed : []
    //     } catch {
    //        return [] 
    //     }
    // })
    

    // const removeHabit = (id) => {
    //     setHabits(habits.filter(habit => habit.id !== id))
    // }

    // useEffect(() => {
    //     document.title = habits.length > 0
    //                     ? `My Daily Habits  - ${habits.length} hábitos(s)`
    //                     : "My Daily Habits"
    // }, [habits])


    // useEffect(() => {
    //     localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    //     // console.log('💾 Hábitos salvos:', habits.length)
    //     }, [habits])

    
    // const [novoTitulo, setNovoTitulo] = useState('')
    // const [novaDescricao, setNovaDescricao] = useState('')
    // const [novaCategoria, setNovaCategoria] = useState('')
    // const [novaMeta, setNovaMeta] = useState('')
    // const [diasFeitos, setDiasFeitos] = useState('')

    const [form, setForm] = useState({
        novoTitulo: '',
        novaDescricao: '',
        novaCategoria: '',
        novaMeta: '7',
        diasFeitos: '',
    })

    const [errorTitulo, setErrorTitulo] = useState('')
    const [errorMeta, setErrorMeta] = useState('')
    const tituloInputRef = useRef(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prev => ({ ...prev, [name]: value}))

        if( name === 'novoTitulo'){
            if(value.length > 0 && value.length < 3){
                setErrorTitulo('O título deve ter pelo menos 3 caracteres.')
            } else {
                setErrorTitulo('')
            }
        }

        if (name === 'novaMeta'){
            const num  = parseInt(value )

            if (value === "") {
                setErrorMeta('');
                return;
            }
            
            if (num < 1 || num > 7){
                setErrorMeta('Meta deve ser entre 1 e 7 dias')
            } else {
                setErrorMeta('')
            }
        }
    }

    
    


    // const handleChange = (e) => {
    //     const {name, value} = e.target

    //     if (name === 'novoTitulo')  setNovoTitulo(value)
    //     if (name === 'novaDescricao')  setNovaDescricao(value)
    //     if (name === 'novaMeta')  setNovaMeta(value)
    //     if (name === 'diasFeitos')  setDiasFeitos(value)
    //     if (name === 'novaCategoria')  setNovaCategoria(value)
    // }

    // const adicionarHabit = (event) => {
    //     event.preventDefault()

    //     if(!form.novoTitulo.trim()){
    //         alert('Informe um título para o hábito.')   
    //         return
    //     }

    //     if(errorTitulo) {
    //         tituloInputRef.current?.focus()
    //         return
    //     }
        
    //     const novohabit = {
    //         id: Date.now(),
    //         titulo: form.novoTitulo,
    //         descricao: form.novaDescricao,
    //         meta: form.novaMeta || 7,
    //         ativo: true,
    //         diasFeitos: form.diasFeitos|| 0,
    //         categoria: form.novaCategoria || 'Geral',
    //     };

    //     setHabits([...habits, novohabit]
    //     )
    //     setForm({ novoTitulo: '', novaDescricao: '', novaMeta:'', diasFeitos:'', novaCategoria: '' })
    //     tituloInputRef.current?.focus()  
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!form.novoTitulo.trim() || errorTitulo){
            tituloInputRef.current?.focus()
            return
        }

        const novohabit = {
            id: Date.now(),
            titulo: form.novoTitulo,
            descricao: form.novaDescricao,
            meta: form.novaMeta || 7,
            ativo: true,
            diasFeitos: form.diasFeitos|| 0,
            categoria: form.novaCategoria || 'Geral',
        }
        adicionarHabit(novohabit)
        setForm({ novoTitulo: '', novaDescricao: '', novaMeta:'', diasFeitos:'', novaCategoria: ''})
        setErrorTitulo('')
        setErrorMeta('')
        tituloInputRef.current?.focus()
        navigate('/habitos')
    }

    // const limparHistorico = () => {
    //     localStorage.removeItem('my-daily-habits')
    //     setHabits([
    //         { id: 1, titulo: 'Exercício',  descricao: 'Treino de força',    meta: 5, ativo: true,  diasFeitos: 5 },
    //         { id: 2, titulo: 'Leitura',    descricao: 'Livro ou artigo',    meta: 7, ativo: true,  diasFeitos: 3 },
    //         { id: 3, titulo: 'Meditação',  descricao: 'Respiração e foco',  meta: 7, ativo: false, diasFeitos: 0 },
    //         { id: 4, titulo: 'Hidratação', descricao: 'Beber 2L de água',   meta: 7, ativo: true,  diasFeitos: 6 },
    //     ])
    // }


    if(!habits) return null

    return(
        <section className="habit-list-container">
            <h2>Hábitos Cadastrados</h2>

            <form onSubmit={handleSubmit} className="habit-form">
                <div>
                    <label>
                        Título do Hábito*
                        <input type="text" 
                            name="novoTitulo"
                            value={form.novoTitulo} 
                            onChange={handleChange}
                            ref={tituloInputRef}
                        />
                    </label>
                    {errorTitulo && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorTitulo}</p>}
                </div>

                <div>
                    <label>
                        Descrição
                        <input type="text"
                        name="novaDescricao" 
                        value={form.novaDescricao} 
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Meta
                        <input type="number"
                        name="novaMeta"
                        value={form.novaMeta} 
                        onChange={handleChange}
                        />
                        {errorMeta && <p style={{ color: 'red', fontSize: '0.8rem'  }}>{errorMeta}</p>}
                    </label>
                </div>

                <div>
                    <label>
                        Dias Feitos
                        <input type="number"
                        name="diasFeitos"
                        value={form.diasFeitos} 
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Categoria
                        <input type="text" 
                        name="novaCategoria"    
                        value={form.novaCategoria} 
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <button type="submit">Adicionar Hábito</button>
                
                {/* <button onClick={limparHistorico}>Limpar Histórico</button> */}
            </form>

            {habits.length === 0 
                ?<p className="empty-message">Nenhum hábito cadastrado ainda. Que tal começar?</p>
                :<p>Você tem {habits.length} hábito(s) cadastrado(s).</p>}

                <ul className="habit-list">
                        {habits.map((habit) => (
                            <HabitCard 
                            key={habit.id}
                            id={habit.id}
                            titulo={habit.titulo}
                            descricao={habit.descricao}
                            meta={habit.meta}
                            ativo={habit.ativo}
                            diasFeitos={habit.diasFeitos}
                            onRemover={() => removerHabit(habit.id)}
                            onToggle={() => toggleAtivo(habit.id)}
                            />
                        ))}
                </ul>
        </section>
    ) 
}

export default HabitList

