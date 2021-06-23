import React, {useReducer, useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import LoginForm from "./LoginForm";

const MainNav = () => {
    const [scrolled, setScrolled] = useState(false);

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
        }
    );

    const showLoginHandler = () => { dispatchShow({type: 'SHOW_LOGIN'}) }
    const hideLoginHandler = () => { dispatchShow({type: 'HIDE_LOGIN'}) }
    const showFavoritesHandler = () => { dispatchShow({type: 'SHOW_FAVORITES'}) }
    const hideFavoritesHandler = () => { dispatchShow({type: 'HIDE_FAVORITES'}) }
    const showCartHandler = () => { dispatchShow({type: 'SHOW_CART'}) }
    const hideCartHandler = () => { dispatchShow({ type: 'HIDE_CART'}) }

    const handleScroll = () => {
        const offset = window.scrollY;

        if(offset > 200 ){
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let navBarClasses = scrolled ? "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" : "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start";
    let container = scrolled ? 'container-fluid position-fixed bg-white shadow' : 'container';

    return (
        <header>
            <div className={container} style={{zIndex: 1000}}>
                <div className={navBarClasses} style={{width: '100%'}}>
                    <Link to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src={"/images/logo.svg"} width={100} alt="logo" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{marginLeft: '2rem'}}>
                        <li><NavLink exact to={"/"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Home</NavLink></li>
                        <li><NavLink to={"/mens"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Mens</NavLink></li>
                        <li><NavLink to={"/womens"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Womens</NavLink></li>
                        <li><NavLink to={"/boys"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Boys</NavLink></li>
                        <li><NavLink to={"/girls"} className={classes['nav-link']} activeClassName={classes['nav-link-active']}>Girls</NavLink></li>
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
                                <span className="visually-hidden">unread messages</span>
                              </span>
                        </button>

                        {show.showFavorites && <ul onMouseLeave={hideFavoritesHandler} className={classes['dropdown-menu']}>
                            <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                        </ul>}
                    </div>

                    <div onMouseLeave={hideCartHandler} className="text-end me-3">
                        <button onMouseEnter={showCartHandler} type="button" className="btn d-block link-dark text-decoration-none position-relative">
                            <FontAwesomeIcon icon={faShoppingCart} className={classes['icon-header']} />
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                0
                                <span className="visually-hidden">unread messages</span>
                              </span>
                        </button>

                        {show.showCart && <ul onMouseLeave={hideCartHandler} className={classes['dropdown-menu']}>
                            {/* <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
                        </ul>}
                    </div>

                    <div onMouseLeave={hideLoginHandler} className="text-end me-3">
                        <Link to={"/login"} onMouseEnter={showLoginHandler} className="btn d-block link-dark text-decoration-none">
                            <FontAwesomeIcon className={classes['icon-header']} icon={faUser}/>
                        </Link>

                        {show.showLogin && <ul onMouseLeave={hideLoginHandler} className={classes['dropdown-menu']}>
                            <LoginForm />
                        </ul>}
                    </div>
                </div>
            </div>

            <div className={classes['second-nav']}>
                <div className="container">
                    Something
                </div>
            </div>
        </header>
    );
};

export default MainNav;