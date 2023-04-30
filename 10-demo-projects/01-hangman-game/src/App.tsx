import { useState } from "react"
import words from './resources/wordList.json'
import { HangmanDrawing } from "./components/HangmanDrawing/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord/HangmanWord";


function App() {

    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    console.log(wordToGuess);

    return (
        <div
            style={{
                maxWidth: "800px",
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                margin: '0 auto',
                alignItems: 'center'
            }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>
                Lose Win
            </div>
            <HangmanDrawing />
            <HangmanWord />
        </div>
    )
}

export default App
