import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { MainNavigation } from './components/MainNavigation';
import { CharacterList } from './components/CharacterList';
// import { CharacterListItem } from './components/CharacterListItem';
import { Character } from './components/Character';


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <MainNavigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/about/*' element={<About />} />    
                    {/* The above will always open about page regardless of what's after it */}
                    <Route path='*' element={<h1>404</h1>} />
                    <Route path='/characters' element={<CharacterList />}/>
                    <Route path='/characters/:characterId/*' element={<Character />}/>
                    {/* add /* in the end to allow additional sub-routes */}
                </Routes>
            </header>
        </div>
    );
}

export default App;
