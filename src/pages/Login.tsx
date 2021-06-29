import React, {SyntheticEvent, useState} from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import {useHistory} from "react-router-dom";
import {User} from "../models/userModel";
import {useHttpPost} from "../api/use-http";
import SpinnerButton from "../components/UI/SpinnerButton";

const Login = (props: { user: User }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget?.value);
    }

    const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget?.value);
    }

    const applyData = (data:any) => {
        history.push('/');
    }

    const {sendData, loading, error} = useHttpPost('login', {
        email,
        password
    }, applyData);

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();

        await sendData();
    }

    return (
        <Layout>
            <section className={classes['login-section']}>
                <form onSubmit={submitHandler} className={classes['form-signin']}>
                    <div className="d-flex align-items-center justify-content-around">
                        <div className={classes.login}>
                            <Link to={"/login"}>
                                Login
                            </Link>
                        </div>

                        <div className={classes.register}>
                            <Link to={"/register"}>
                                Register
                            </Link>
                        </div>
                    </div>

                    <div className="form-floating">
                        <input onChange={emailHandler} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={passwordHandler} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {!loading && <button className={classes['btn-login']} type="submit">Login</button>}
                    {loading && <SpinnerButton className={classes['btn-login']} />}
                </form>
            </section>
        </Layout>
    );
};

export default Login;