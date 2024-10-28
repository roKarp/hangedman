import st from "../style/Keyb.module.css"
const alph = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

type KeyboardProps = {
    activeLetters: string[]
    inactive: string[]
    addGuessedLetters: (letter: string) => void
}

export function Keyboard({
    activeLetters, 
    inactive, 
    addGuessedLetters,
}: KeyboardProps) {
    return (
        <div 
            style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', 
            gap:'.5rem',
        }}>
            {alph.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactive.includes(key)
                return (
                    <button 
                    onClick={() => addGuessedLetters(key)} 
                    className={`${st.bt} ${isInactive ? st.inactive: ""} ${isActive ? st.active: ""}`} 
                    disabled={isInactive || isActive}
                    key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}