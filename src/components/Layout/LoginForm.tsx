import React, {SyntheticEvent, useState} from 'react';
import classes from './LoginForm.module.css';
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const redirectLogin = () => setIsLogin(isLogin => !isLogin);
    const redirectRegister = () => setIsLogin(isLogin => !isLogin);

    const authHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <div className={classes['form-login']}>
            <div className={classes['card-header']}>
                <h5>{isLogin ? "Login with email" : "Register"}</h5>
            </div>

            <div className={classes['card-body']}>
                <form onSubmit={authHandler}>
                    {!isLogin && <div className="mb-3">
                        <input type="first_name" className="form-control" id="first_name" placeholder="First Name" />
                    </div>}

                    {!isLogin && <div className="mb-3">
                        <input type="last_name" className="form-control" id="last_name" placeholder="Last Name" />
                    </div>}

                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>

                    {!isLogin && <div className="mb-3">
                        <input type="password" className="form-control" id="password_confirm" placeholder="Password Confirm" />
                    </div>}

                    <button type="submit" className={classes['btn-auth-action']}>
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <div className="forgot-pass-register d-flex align-items-center justify-content-between mt-4 pb-4">
                    <div className={classes['forgot-password']}>
                        <Link to="/" className={classes['btn-auth']}>Forgot password?</Link>
                    </div>

                    <div className="go-register">
                        {isLogin && <button onClick={redirectLogin} className={classes['btn-auth']}>Register</button>}
                        {!isLogin && <button onClick={redirectRegister} className={classes['btn-auth']}>Already have an account? <span style={{fontWeight: 'bold'}}>Login</span></button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;