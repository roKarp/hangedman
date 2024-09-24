import { useState } from "react"
import list from "./words.json"
import {HangmanDrawing} from "./components/HangmanDrawing.tsx"
import {HangmanWord} from "./components/HangmanWord.tsx"
import {Keyboard} from "./components/Keyboard.tsx"
function App() {
  const [Guess, Set] = useState(() => {
    return list[Math.floor(Math.random() * list.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(Guess)
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
    <HangmanDrawing />
    <HangmanWord  />
    <Keyboard />
  </div>
)
}
export default App
