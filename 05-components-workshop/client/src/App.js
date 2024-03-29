import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css';
import { UserList } from "./components/UserList";

import * as userService from './services/userService';
import { useEffect, useState } from 'react';

function App() {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
    })

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

    const onUserDelete = async (userId) => {
        // delete from server
        await userService.remove(userId);
        // delete from state
        setUsers(state => state.filter(x => x._id !== userId));
    };

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const updatedUser = await userService.update(userId, data);

        setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
    };

    const formChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const validateForm = (e) => {
        const value = e.target.value;
        const errors = {};

        if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters';
        };

        if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters';
        };

        setFormErrors(errors);
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        onUserDelete={onUserDelete}
                        formValues={formValues}
                        formChangeHandler={formChangeHandler}
                        formErrors={formErrors}
                        validateForm={validateForm}
                    />
                </section>
            </main>
            <Footer />
        </>
    )

}

export default App;
