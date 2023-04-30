import { useState } from "react"
import words from './resources/wordList.json'

import { HangmanDrawing } from "./components/HangmanDrawing/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord/HangmanWord";
import { HangmanKeyboard } from "./components/HangmanKeyboard/HangmanKeyboard";


function App() {

    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    // console.log(wordToGuess);

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
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord />
            <div style={{ alignSelf: 'stretch' }}>
                <HangmanKeyboard />
            </div>
        </div>
    )
}

export default App
