import { useCallback, useEffect, useState } from "react"
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

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return;
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters]);
    // console.log(wordToGuess);


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {

            const key = e.key

            if (!key.match(/^[a-z]$/)) return;
            
            e.preventDefault();
            addGuessedLetter(key);
        }

        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [guessedLetters]);

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
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <div style={{ alignSelf: 'stretch' }}>
                <HangmanKeyboard />
            </div>
        </div>
    )
}

export default App
