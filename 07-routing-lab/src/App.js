import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation';


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Navigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/about/*' element={<About />} />    
                    {/* The above will always open about page regardless of what's after it */}
                    <Route path='*' element={<h1>404</h1>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
