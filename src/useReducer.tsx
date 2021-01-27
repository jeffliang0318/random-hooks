import { useReducer } from 'react';
interface Message {
    message: string
}

interface Action {
    type: string
}
const initialState: Message = {
    message: 'hi'
}

function reducer (state: Message, action: Action): Message {
    switch (action.type) {
        case 'YELL':
            return { message: `HEY! I said ${state.message}` };
        case 'whisper':
            return { message: `excuse me~ I said ${state.message}` };
        default:
            return { message: 'hi' };
    }
}

export default function CaseUseReducer () {
    const [count, setCount] = useReducer((count: number, newCount: number) => { return count + newCount}, 0)
    const [isCheck, toggle] = useReducer((isCheck: boolean) =>  !isCheck, false)
    const [state, dispatch] = useReducer(reducer, initialState);
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
            <div>
                {state.message}
                <button 
                    type='button' 
                    className="btn-primar mx-2"
                    onClick={() => dispatch({type: "YELL"})}
                >
                    YELL
                </button>
                <button 
                    type='button' 
                    className="btn-primar mx-2"
                    onClick={() => dispatch({type: "whisper"})}
                >
                    whisper
                </button>
                <button 
                    type='button' 
                    className="btn-primar mx-2"
                    onClick={() => dispatch({type: "hi"})}
                >
                    hi
                </button>
            </div>
        </div>
    )
}