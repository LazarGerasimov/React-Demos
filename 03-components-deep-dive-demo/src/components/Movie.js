import { useEffect } from "react"
import styles from './Movie.module.css';


export function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    onMovieSelect,
    selected
}) {

    useEffect(() => {
        console.log(`Movie ${title} - mounted`);
    }, []);     // empty array prevents from re-mounting

    useEffect(() => {
        console.log(`Movie ${title} - updated`);
    }, [selected]);

    useEffect(() => {
        return () => {
            console.log(`Movie ${title} - unmounted`);
        }
    }, [])

    return (
        <article className={styles['movie-article']}>
            <h3>{title}, {year}</h3>
            {selected && <h3>Selected</h3>}
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
        </article>
    )
}