import React, {SyntheticEvent} from 'react';
import classes from './Register.module.css';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import {useHttpPost} from "../api/use-http";

const Register = () => {

    const applyData = (data: any) => {

    }

    const {sendData, loading, error} = useHttpPost('register', {}, applyData);

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        sendData();

    }

    return (
        <Layout>
            <section className={classes['section-register']}>
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
                        <input type="text" className="form-control" id="first_name" placeholder="First Name" />
                        <label htmlFor="first_name">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="last_name" placeholder="Last Name" />
                        <label htmlFor="last_name">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password_confirm" placeholder="Password Confirm" />
                        <label htmlFor="password_confirm">Password Confirm</label>
                    </div>

                    <button className={classes['btn-register']} type="submit">Register</button>
                </form>
            </section>
        </Layout>
    );
};

export default Register;