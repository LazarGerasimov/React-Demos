import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css';
import { UserList } from "./components/UserList";

import * as userService from './services/userService';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        userService.getAll()
            .then(users => {
                console.log(users);
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList />
                </section>
            </main>
            <Footer />
        </>
    )

}

export default App;
