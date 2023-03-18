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
                // console.log(users);
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }, []);

    const onUserCreateSubmit = async (e) => {
        // stop automatic form submit
        e.preventDefault();
        // take values from form
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // send ajax request to server
        const createdUser = await userService.create(data);
        
        // if successfull add new user to the state
        setUsers(state => [...state, createdUser]);
        //close dialog
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
