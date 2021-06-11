import { useState } from 'react';

export const Contador = ({children}) => {
    const [count, setCount] = useState(0);
    
    const inicial = () => {
        setCount((c) => c = 0)
    }
    
    const stock = () => {
        setCount((c) => c + 1)
    }

    return <div>
            {children(count,inicial,stock)}
        </div>
}