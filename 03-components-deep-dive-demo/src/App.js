import { useEffect, useState } from 'react';
import { MovieList } from './components/MovieList';
// import { movies as movieData } from './movies'



function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/movies2.json`)
            .then(res => res.json())
            .then(moviesData => {
                console.log(moviesData);
                setMovies(moviesData.movies);
            })
    })

    const onMovieDelete = (id) => {
        setMovies(oldMovies => oldMovies.filter(x => x.id !== id));
    }

    const onMovieSelect = (id) => {
        setMovies(allMovies => allMovies.map(m => ({ ...m, selected: m.id === id })));
    }


    return (
        <div className="App">
            <h1>Movie Collection</h1>
            <MovieList
                movies={movies}
                onMovieDelete={onMovieDelete}
                onMovieSelect={onMovieSelect}
            />
        </div>
    );
}

export default App;
