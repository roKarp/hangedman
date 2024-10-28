import { useCallback, useEffect, useState } from "react"
import list from "./words.json"
import {HangmanDrawing} from "./components/HangmanDrawing.tsx"
import {HangmanWord} from "./components/HangmanWord.tsx"
import {Keyboard} from "./components/Keyboard.tsx"
function App() {
  const [Guess, Set] = useState(() => {
    return list[Math.floor(Math.random() * list.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongLetters = guessedLetters.filter( letter => !Guess.includes(letter))

  const addGuessedLetters = useCallback(
    (letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, 
    [guessedLetters]
)




  useEffect(() => {
    const hand = (e: KeyboardEvent) => {
      const k = e.key
      if (!k.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(k)
    }

    document.addEventListener("keypress", hand)
    return () => {
      document.removeEventListener("keypress", hand)
    }
  }, [guessedLetters])

  return (
  <div 
    style= {{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
  }}
  >
    <div style={{ fontSize: "2rem", textAlign: "center"}}>Lose Win</div>
    <HangmanDrawing numberOfGuesses={wrongLetters.length}/>
    <HangmanWord  guessedLetters={guessedLetters} Guess={Guess}/>
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard activeLetters={guessedLetters.filter(letter => 
        Guess.includes(letter)
      )}
      inactive={wrongLetters}
      addGuessedLetters={addGuessedLetters}  
    />
    </div>
  </div>
)
}
export default App
