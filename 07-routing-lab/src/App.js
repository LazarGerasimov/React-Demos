import './App.css';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path='/' element={<h1>Home Page</h1>}/>
                    <Route path='/about' element={<h2>About Page</h2>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
