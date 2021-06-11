import { useState } from 'react';

export const Contador = ({children}) => {
    const [count, setCount] = useState(0);
    
    const incrementar = () => {
        setCount((c) => c + 1)
    }
    
    const desencrementar = () => {
        setCount((c) => c - 1)
    }

    return <div>
            {children(count,incrementar,desencrementar)}
        </div>
}