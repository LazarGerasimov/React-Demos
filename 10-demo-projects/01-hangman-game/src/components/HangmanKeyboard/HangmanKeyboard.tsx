import styles from './HangmanKeyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type HangmanKeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export function HangmanKeyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled = false
}: HangmanKeyboardProps) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem'
        }}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        className={`${styles["btn"]} ${isActive ? styles["active"] : null} ${isInactive ? styles["inactive"] : null}`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                        onClick={() => addGuessedLetter}
                    >{key}</button>
                )
            })}
        </div>
    )
}