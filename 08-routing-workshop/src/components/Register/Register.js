import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm";

import { Link } from "react-router-dom";


export function Register() {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmedPassword: ''
    }, onRegisterSubmit)


    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={changeHandler}
                        value={values.email}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={changeHandler}
                        value={values.password}

                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmedPassword"
                        id="confirm-password"
                        onChange={changeHandler}
                        value={values.confirmedPassword}

                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to={'/login'}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}