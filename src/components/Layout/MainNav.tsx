import React, { useReducer } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'

const MainNav = () => {
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

    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        Logo
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink exact to={"/"} className="nav-link px-2 link-secondary">Home</NavLink></li>
                        <li><NavLink to={"/mens"} className="nav-link px-2 link-secondary">Mens</NavLink></li>
                        <li><NavLink to={"/womens"} className="nav-link px-2 link-secondary">Womens</NavLink></li>
                        <li><NavLink to={"/boys"} className="nav-link px-2 link-secondary">Boys</NavLink></li>
                        <li><NavLink to={"/girls"} className="nav-link px-2 link-secondary">Girls</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div onMouseLeave={hideFavoritesHandler} className="text-end me-3">
                        <button onMouseEnter={showFavoritesHandler} className="btn d-block link-dark text-decoration-none">
                            <FontAwesomeIcon icon={faHeart}/>
                        </button>

                        {show.showFavorites && <ul onMouseLeave={hideFavoritesHandler} className={classes['dropdown-menu']}>
                            <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                        </ul>}
                    </div>

                    <div onMouseLeave={hideCartHandler} className="text-end me-3">
                        <button onMouseEnter={showCartHandler} className="btn d-block link-dark text-decoration-none">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </button>

                        {show.showCart && <ul onMouseLeave={hideCartHandler} className={classes['dropdown-menu']}>
                            <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                        </ul>}
                    </div>

                    <div onMouseLeave={hideLoginHandler} className="text-end me-3">
                        <button onMouseEnter={showLoginHandler} className="btn d-block link-dark text-decoration-none">
                            <FontAwesomeIcon icon={faUser}/>
                        </button>

                        {show.showLogin && <ul onMouseLeave={hideLoginHandler} className={classes['dropdown-menu']}>
                            <li><Link className="dropdown-item" to="#">New project...</Link></li>
                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#">Profile</Link></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainNav;