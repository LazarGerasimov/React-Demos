import { useParams } from "react-router-dom"


export function Character() {

    const { characterId } = useParams(); // gets characterId from App.js -> Routes -> route with :characterId

    return (
        <h1>Character Page</h1>
    )
}