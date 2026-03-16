import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);
    
    const aumentar = () => setCount(count + 1)
    const diminuir = () => {
        if (count > 0) setCount(count - 1)
    }
    const zerar = () => setCount(0)
    const aumentarTriplo = () => setCount(count + 3)

    // useEffect(() => {
    //     setCount(prev => prev + 1)
    // }, [count])

    return(
        <div>
            <p>Você Clicou {count} vezes!</p>
            <button onClick={aumentar}>+1</button>
            <button onClick={diminuir}>-1</button>
            <button onClick={zerar}>Zerar</button>
            <button onClick={aumentarTriplo}>+3</button>
        </div>
    );
}

