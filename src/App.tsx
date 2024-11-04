import { useCallback, useEffect, useState } from "react"
import list from "./words.json"
import {HangmanDrawing} from "./components/HangmanDrawing.tsx"
import {HangmanWord} from "./components/HangmanWord.tsx"
import {Keyboard} from "./components/Keyboard.tsx"
function getWord() {
  return list[Math.floor(Math.random() * list.length)]
}
function App() {
  const [Guess, Set] = useState(getWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongLetters = guessedLetters.filter( letter => !Guess.includes(letter))
  const Loser = wrongLetters.length >= 6
  const Winner = Guess.split("").every(letter => guessedLetters.includes(letter))
  const addGuessedLetters = useCallback(
    (letter: string) => {
    if (guessedLetters.includes(letter) || Loser || Winner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, 
    [guessedLetters, Loser, Winner]
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

  useEffect(() => {
    const hand = (e: KeyboardEvent) => {
      const k = e.key
      if (k !== "Enter") return
      setGuessedLetters([])
      Set(getWord())
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
    <div style={{ fontSize: "2rem", textAlign: "center"}}>
      {Winner && "Winner! :D"}
      {Loser && "Better luck next time :P"}
      </div>
    <div style={{ fontSize: "2rem", textAlign: "center"}}>
      {(Winner || Loser) && "Press Enter to play again"}
    </div>
    <HangmanDrawing numberOfGuesses={wrongLetters.length}/>
    <HangmanWord reveal={Loser} guessedLetters={guessedLetters} Guess={Guess}/>
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard 
      disabled = {Winner || Loser}
      activeLetters={guessedLetters.filter(letter => 
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
