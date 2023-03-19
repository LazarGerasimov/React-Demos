import { useEffect, useState } from "react";
import { useNavigate, useParams, Link, Route, Routes } from "react-router-dom";
import { CharacterFilms } from "./CharacterFilms";
import styles from './Navigation.module.css';
import { Navigation } from './Navigation';

const baseUrl = 'https://swapi.dev/api';

export function Character() {

    const { characterId } = useParams(); // gets characterId from App.js -> Routes -> route with :characterId

    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/people/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data)
            })

    }, [characterId])

    const onBackButtonClick = () => {
        // navigate(-1); // go back to the previous page
        navigate('/characters');
    }

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
            <button onClick={onBackButtonClick}>Back</button>

            <Navigation>
                <li><Link to="films">Films</Link></li>
                <li><Link to="vehicles">Vehicles</Link></li>
                <li><Link to="starships">Starships</Link></li>
                {/* use without '/' to nest the route */}
            </Navigation>



            <Routes>
                <Route path="/films" element={<CharacterFilms />} />
                <Route path="/vehicles" element={<h5>Vehicles</h5>} />
                <Route path="/starships" element={<h5>Starships</h5>} />
            </Routes>
        </>
    )
}