import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {

    return (
        <div className="App">
            <Timer start={5} />
            <MovieList />
        </div>
    )
}

export default App;
