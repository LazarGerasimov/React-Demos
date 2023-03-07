import { Movie } from "./Movie";



export function MovieList({movies}) { 

    // const firstMovie = movies[0];

    return [
        // <Movie 
        // title={firstMovie.title}
        // year={firstMovie.year}
        // plot={firstMovie.plot}
        // posterUrl={firstMovie.posterUrl}
        // director={firstMovie.director}
        // />
        <Movie {...movies[0]} />,
        <Movie {...movies[1]} />,
        <Movie {...movies[2]} />
    ]
}