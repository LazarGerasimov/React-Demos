import { useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";

const baseUrl = 'https://swapi.dev/api';

export function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results);
                setCharacters(data.results);
            })
    }, []);

    return (
        <>
            <h1>Star Wars Characters</h1>
            <ul className="character-list">
                {characters.map(c => <CharacterListItem key={c.url} {...c}/>)}
            </ul>
        </>

    )
}