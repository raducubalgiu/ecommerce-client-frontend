import React, {Dispatch, SyntheticEvent, useState} from 'react';
import classes from './LoginForm.module.css';
import { Link, useHistory } from "react-router-dom";
import {useHttpPost} from "../../api/use-http";
import SpinnerButton from "../UI/SpinnerButton";
import {connect} from "react-redux";
import {User} from "../../models/userModel";
import { setUser } from '../../store/actions/setUserAction';

const LoginForm = (props: {user: User; setUser: (data:any) => void }) => {
    const [isLogin, setIsLogin] = useState(true);
    const redirectLogin = () => setIsLogin(isLogin => !isLogin);
    const redirectRegister = () => setIsLogin(isLogin => !isLogin);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const history = useHistory();

    const firstNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget?.value);
    };
    const lastNameHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget?.value);
    };
    const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget?.value);
    };
    const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget?.value);
    };
    const passwordConfirmHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.currentTarget?.value);
    };

    let url;
    url = isLogin ? 'login' : 'register';

    const applyData = (data:any) => {
        props.setUser(data);

        history.push('/');
    }

    const {sendData, error, loading} = useHttpPost(url, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirm: passwordConfirm
    }, applyData);


    const authHandler = async (e: SyntheticEvent) => {
        e.preventDefault();

        await sendData();
    }


    return (
        <div className={classes['form-login']}>
            <div className={classes['card-header']}>
                <h5>{isLogin ? "Login with email" : "Register"}</h5>
            </div>

            <div className={classes['card-body']}>
                <form onSubmit={authHandler}>
                    {!isLogin && <div className="mb-3">
                        <input onChange={firstNameHandler} type="first_name" className="form-control" id="first_name" placeholder="First Name" />
                    </div>}

                    {!isLogin && <div className="mb-3">
                        <input onChange={lastNameHandler} type="last_name" className="form-control" id="last_name" placeholder="Last Name" />
                    </div>}

                    <div className="mb-3">
                        <input onChange={emailHandler} type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>

                    <div className="mb-3">
                        <input onChange={passwordHandler} type="password" className="form-control" id="password" placeholder="Password" />
                    </div>

                    {!isLogin && <div className="mb-3">
                        <input onChange={passwordConfirmHandler} type="password" className="form-control" id="password_confirm" placeholder="Password Confirm" />
                    </div>}

                    <button type="submit" className={classes['btn-go']}>
                        {loading && <SpinnerButton className={classes['btn-go']} />}
                        {!loading && isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <div className="forgot-pass-register d-flex align-items-center justify-content-between mt-4 pb-4">
                    <div className={classes['forgot-password']}>
                        <Link to="/" className={classes['btn-auth']}>Forgot password?</Link>
                    </div>

                    <div className="go-register">
                        { isLogin &&  <button onClick={redirectLogin} className={classes['btn-auth']}>Register</button> }
                        {!isLogin && <button onClick={redirectRegister} className={classes['btn-auth']}>Already have an account? <span style={{fontWeight: 'bold'}}>Login</span></button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state: { user: User }) => ({
        user: state.user
    }),
    (dispatch: Dispatch<any>) => ({
        setUser: (user: User) => dispatch(setUser(user))
    })
)(LoginForm);