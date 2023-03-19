import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}