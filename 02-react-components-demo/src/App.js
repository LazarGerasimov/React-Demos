import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';

function App() {

    const movies = [
        { title: 'Man of Steel', year: '2015', cast: ['Henry Cavill', 'Diane Lane', 'Russell Crowe'] },
        { title: 'Harry Potter', year: '2004', cast: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'] },
        { title: 'Lord of the Rings', year: '2002', cast: ['Elijah Wood', 'Viggo Mortensen', 'Sean Astin'] },
    ]

    return (
        <div className="App">
            <h1>Movie List</h1>
            <Movie
                title={movies[0].title}
                year={movies[0].year}
                cast={movies[0].cast}
            />

            <Movie
                title={movies[1].title}
                year={movies[1].year}
                cast={movies[1].cast}
            />

            <Movie
                title={movies[2].title}
                year={movies[2].year}
                cast={movies[2].cast}
            />
        </div>
    )
}

export default App;
