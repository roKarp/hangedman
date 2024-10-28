type HangmanDrawingProps = {
    gLetters: string[]
    Guess: string
}

export function HangmanWord({gLetters, Guess}: HangmanDrawingProps) {
    return (
        <div 
            style={{ 
                display: "flex", 
                gap: ".25em", 
                fontSize: "6rem", 
                fontWeight: "bold", 
                textTransform: "uppercase", 
                fontFamily: "monospace"
            }}
        > 
            {Guess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black"}} key={index}>
                <span style={{
                    visibility: gLetters.includes(letter) 
                    ? "visible"
                    : "hidden",
                }}
            > 

                {letter}
                </span>
            </span>
            ))}
        </div>
    )
}