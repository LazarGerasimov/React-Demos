import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = 'https://swapi.dev/api';


export const CharacterFilms = () => {

    const { characterId } = useParams();
    const [charMovies, setCharMovies] = useState([]);

    // fetch /people/${charactedID}/films from swapi

    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then(res => res.json())
            .then(data => {
                setCharMovies(data.results);
            })
    }, [characterId])

    return (
        <>
            <h1>Character Films</h1>
            {charMovies.map(m => <li key={m.title}>{m.title}</li>)}
        </>

    )
}