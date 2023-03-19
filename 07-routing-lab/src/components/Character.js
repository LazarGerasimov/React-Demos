import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const baseUrl = 'https://swapi.dev/api';

export function Character() {

    const { characterId } = useParams(); // gets characterId from App.js -> Routes -> route with :characterId
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/people/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data)
            })

    }, [characterId])

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
        </>
    )
}