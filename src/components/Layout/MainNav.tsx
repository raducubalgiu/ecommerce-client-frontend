import React, {useReducer, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import classes from './MainNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {User} from "../../models/userModel";
import SecondNav from "./SecondNav";

const MainNav = (props: { user: User; }) => {
    const location = useLocation();

    // User reducer for displaying or hiding the cart, favorites, login
    const [show, dispatchShow] = useReducer((state: any, action:any) => {
        switch (action.type) {
            case 'SHOW_LOGIN':
                return { ...state, showLogin: true }
            case 'HIDE_LOGIN':
                return { ...state, showLogin: false }
            case 'SHOW_FAVORITES':
                return { ...state, showFavorites: true }
            case 'HIDE_FAVORITES':
                return { ...state, showFavorites: false }
            case 'SHOW_CART':
                return {...state, showCart: true}
            case 'HIDE_CART':
                return {...state, showCart: false}
            default:
                return state

        }}, {
            showLogin: false,
            showFavorites: false,
            showCart: false
        });

    const showLoginHandler = () => { dispatchShow({type: 'SHOW_LOGIN'}) }
    const hideLoginHandler = () => { dispatchShow({type: 'HIDE_LOGIN'}) }
    const showFavoritesHandler = () => { dispatchShow({type: 'SHOW_FAVORITES'}) }
    const hideFavoritesHandler = () => { dispatchShow({type: 'HIDE_FAVORITES'}) }
    const showCartHandler = () => { dispatchShow({type: 'SHOW_CART'}) }
    const hideCartHandler = () => { dispatchShow({ type: 'HIDE_CART'}) }

    const logoutHandler = async () => {
        const response = await fetch('http://localhost:8000/api/subscriber/logout', {
            method: 'POST',
            credentials: 'include'
        });
        await response.json();
    }

    // Checking the path  - login or register
    let isLogin;
    if(location.pathname === '/login' || location.pathname === '/register') {
        isLogin = true;
    }

    let favorites = (
        <div className="not-logged-in text-center">
            <p className={classes['login-text']}>You must be logged in.</p>
            <Link className="btn btn-sm btn-warning" to="/login">Login</Link>
        </div>
    );

    if(props.user?.id) {
        favorites = (
            <>
                <ul className={classes.scrollbar}>
                    <li><Link className="dropdown-item" to="#">New project...</Link></li>
                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                </ul>
                <button className={classes['btn-go']}>Go to favorites</button>
            </>
        )
    }

    let cart = (
        <div className="not-logged-in text-center">
            <p className={classes['login-text']}>Your must be logged in.</p>
            <Link className="btn btn-sm btn-warning" to="/login">Login</Link>
        </div>
    );

    if(props.user?.id) {
        cart = (
            <>
                <ul className={classes.scrollbar}>
                    <li><Link className="dropdown-item" to="#">New project...</Link></li>
                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                </ul>
                <button className={classes['btn-go']}>Go to cart</button>
            </>
        );
    }

    let userInfo = <LoginForm />;
    if(props.user?.id) {
        userInfo = (
            <ul className={classes['user-information']}>
                <li><Link to="/profile" className="dropdown-item">My Account</Link></li>
                <li><Link onClick={logoutHandler} to={"/login"} className="dropdown-item"><strong>Sign out</strong></Link></li>
            </ul>
        );
    }

    return (
        <header>
            <div className="container" style={{zIndex: 1000}}>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" style={{width: '100%'}}>
                    <Link to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        FashionStore
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{marginLeft: '2rem'}}>
                        <li><NavLink exact to={"/"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Home</NavLink></li>
                        <li><NavLink to={`/1/Mens`} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Mens</NavLink></li>
                        <li><NavLink to={`/2/Womens`} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Womens</NavLink></li>
                        <li><NavLink to={`/3/Boys`} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Boys</NavLink></li>
                        <li><NavLink to={`/4/Girls`} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Girls</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className={classes['form-control']} placeholder="Search products..." aria-label="Search" />
                    </form>

                    <div onMouseLeave={hideFavoritesHandler} className="text-end me-3">
                        <button onMouseEnter={showFavoritesHandler} type="button" className="btn d-block link-dark text-decoration-none position-relative">
                            <FontAwesomeIcon className={classes['icon-header']} icon={faHeart}/>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                            0
                          </span>
                        </button>

                        {show.showFavorites &&
                            <div onMouseLeave={hideFavoritesHandler} className={classes['dropdown-menu']}>
                                { favorites }
                            </div>
                        }
                    </div>

                    <div onMouseLeave={hideCartHandler} className="text-end me-3">
                        <button onMouseEnter={showCartHandler} type="button" className="btn d-block link-dark text-decoration-none position-relative">
                            <FontAwesomeIcon icon={faShoppingCart} className={classes['icon-header']} />
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                            0
                          </span>
                        </button>

                        {show.showCart &&
                            <div onMouseLeave={hideCartHandler} className={classes['dropdown-menu']}>
                                { cart }
                            </div>
                        }
                    </div>

                    {!isLogin && <div onMouseLeave={hideLoginHandler} className="text-end me-3">
                        <Link to={"/login"} onMouseEnter={showLoginHandler} className="btn d-block link-dark text-decoration-none">
                            <FontAwesomeIcon className={classes['icon-header']} icon={faUser}/>
                        </Link>

                        {show.showLogin && <ul onMouseLeave={hideLoginHandler} className={classes['dropdown-menu']}>
                            { userInfo }
                        </ul>}
                    </div>}
                </div>
            </div>

            <SecondNav />
        </header>
    );
};

export default connect((state: {user: User}) => ({
    user: state.user
}))(MainNav);