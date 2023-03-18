import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css';
import { UserList } from "./components/UserList";

import * as userService from './services/userService';
import { useEffect, useState } from 'react';

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => {
                setUsers(users);
                console.log(users);
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }, []);

    const onUserCreateSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const firstName = formData.get('firstName');

        console.log(firstName);
    };

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} />
                </section>
            </main>
            <Footer />
        </>
    )

}

export default App;
