import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prev => prev += 1)
    }

    return (
        <>
            <div>{count}</div>
            <button className={classes.button} onClick={increment}>Click +</button>
        </>
    )
}