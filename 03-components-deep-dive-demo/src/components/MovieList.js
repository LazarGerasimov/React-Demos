import { Movie } from "./Movie";
import {createElement} from 'react';



export function MovieList({movies}) { 

    // const firstMovie = movies[0];

    const movieElements = [];
    for (const movie of movies) {
        // movieElements.push(createElement(Movie, movie))
        movieElements.push(<Movie {...movie}/>)
    }

    // return [
    //     // <Movie 
    //     // title={firstMovie.title}
    //     // year={firstMovie.year}
    //     // plot={firstMovie.plot}
    //     // posterUrl={firstMovie.posterUrl}
    //     // director={firstMovie.director}
    //     // />

    //     // <Movie {...movies[0]} />,
    //     // <Movie {...movies[1]} />,
    //     // <Movie {...movies[2]} />
    // ]

    return movieElements;
}