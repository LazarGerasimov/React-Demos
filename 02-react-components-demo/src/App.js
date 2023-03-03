import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Timer from './components/Timer';
import Counter from './components/Counter';

function App() {

    return (
        <div className="App">
            <Timer start={5} />
            <Counter />
            <MovieList />
        </div>
    )
}

export default App;
