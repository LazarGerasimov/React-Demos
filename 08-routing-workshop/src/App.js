import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';
import * as authService from './services/authService';
import { GameDetails } from './components/GameDetails/GameDetails';

import { AuthContext } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';

function App() {

    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    const onCreateGameSubmit = async (data) => {
        console.log(data);
        const newGame = await gameService.create(data);

        //TODO: add to state
        setGames(state => [...state, newGame]);
        //TODO: redirect to catalog
        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');
            console.log(result);
        } catch (error) {
            console.log('Nope');
        }

    };

    const onRegisterSubmit = async (values) => {

        const { confirmedPassword, ...registerData } = values;

        if (confirmedPassword !== registerData.password) {
            throw alert('Passwords mismatch');
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onLogout = async () => {
        // await authService.logout();
        setAuth({});
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    }



    return (
        <AuthContext.Provider value={context}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path='/catalog' element={<Catalog games={games} />} />
                        <Route path='/catalog/:gameId' element={<GameDetails />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;


// start react hooks and authentication workshop