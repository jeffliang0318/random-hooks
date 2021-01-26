import { useReducer } from 'react';

export default function CaseUseReducer () {
    const [count, setCount] = useReducer((count: number, newCount: number) => { return count + newCount}, 0)

    return (
        <div className="d-flex">
            <p>{count}</p>
            <button onClick={() => setCount(1)}>Count++</button>
        </div>
    )
}