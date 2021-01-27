import { useReducer } from 'react';

export default function CaseUseReducer () {
    const [count, setCount] = useReducer((count: number, newCount: number) => { return count + newCount}, 0)
    const [isCheck, toggle] = useReducer((isCheck: boolean) =>  !isCheck, false)
    return (
        <div>
            <div className="d-flex">
                <span>{count}</span>
                <button 
                    type="button" 
                    className="btn-primary mx-2"
                    onClick={() => setCount(1)}>
                        Count++
                </button>
            </div>
            <div key="check">
                <input
                    id="check" 
                    type='checkbox'
                    checked={isCheck}
                    onChange={toggle}
                >
                </input>
                <label htmlFor="check" className="mx-2">
                    {isCheck ? "Checked" : "Not Checked"}
                </label>
            </div>
        </div>
    )
}