import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

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

        </>
    )
}