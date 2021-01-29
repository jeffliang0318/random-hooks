import { useState } from 'react'
interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CustomHooks () {
    const [colorProps, resetColor] = useInput('#000000')
    const [soundProps, resetSound] = useInput("")
    function formSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Sounds like ${soundProps.value}, looks like ${colorProps.value}`)
        resetColor()
        resetSound()
    }
    return (
        <form onSubmit={formSubmit}>
            <input
                {...soundProps}
                placeholder="Sounds like..."
            />
            <input 
                {...colorProps}
                type='color'
            />
            <button type='submit' className='btn-primary'>Submit</button>
        </form>
    )
}

function useInput (initialState: string): [InputProps, () => void] {
    const [value, setValue] = useState(initialState);

    return [
        {
        value,
        onChange: (e) => setValue(e.target.value)
        },
        () => setValue(initialState)
    ]
}