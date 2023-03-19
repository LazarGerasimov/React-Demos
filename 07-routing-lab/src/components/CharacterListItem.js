import {Link} from 'react-router-dom';


export function CharacterListItem({
    name,
    url
}) {

    const id = url.split('/').filter(x => x).pop();
    console.log(id);
    return (
        <li>
            <Link to={`/characters/${id}`}>{name}</Link>
        </li>
    )
}