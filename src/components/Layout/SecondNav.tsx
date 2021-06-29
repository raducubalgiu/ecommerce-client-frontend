import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classes from "./SecondNav.module.css";
import {useHttpGet} from "../../api/use-http";

const SecondNav = () => {
    const [categories, setCategories] = useState([]);
    const [showCard, setShowCard] = useState(false);

    const applyCategories = (data: any) => {
        setCategories(data);
    }

    useHttpGet('categories', applyCategories);

    const showCardHandler = () => {
        setShowCard(true);
    }

    const hideCardHandler = () => {
        setShowCard(false);
    }

    return (
        <>
            <div className={classes['second-nav']}>
                <div className="container">
                    <ul className={classes['categories-list']}>
                        <li onMouseEnter={showCardHandler}>Clothes</li>
                        <li onMouseEnter={showCardHandler}>Footwear</li>
                        <li onMouseEnter={showCardHandler}>Accessories</li>
                        <li><Link to={"/brands"}>Brands</Link></li>
                        <li><Link to={"/latest-products"} className="position-relative">
                                Latest Products
                                <span style={{marginLeft: '.2rem', top: '-.3rem'}}
                                    className="position-absolute badge bg-warning ">
                                New
                              </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {showCard && <div onMouseLeave={hideCardHandler} className="container" style={{ marginBottom: '0', position: 'relative' }}>
                <div className={classes['card-subcategories']}>
                    <div className="d-flex">
                        <div className={classes.subcategories}>
                            <h5 className={classes['subcategories-title']}>Categories</h5>
                            <ul className={classes['subcategories-list']}>
                                <li><Link to={"/"}>Shirts</Link></li>
                                <li><Link to={"/"}>Jackets</Link></li>
                                <li><Link to={"/"}>T-Shirts</Link></li>
                                <li><Link to={"/"}>Watches</Link></li>
                                <li><Link to={"/"}>Pants</Link></li>
                                <li><Link to={"/"}>Socks</Link></li>
                                <li><Link to={"/"}>Underwear</Link></li>
                            </ul>
                        </div>

                        <div className={classes.brands}>
                            <h5 className={classes['subcategories-title']}>Brands</h5>
                            <ul className={classes['brands-list']}>
                                <li><Link to={"/"}>Zara</Link></li>
                                <li><Link to={"/"}>Bershka</Link></li>
                                <li><Link to={"/"}>Mango</Link></li>
                                <li><Link to={"/"}>T-Shirts</Link></li>
                                <li><Link to={"/"}>Socks</Link></li>
                                <li><Link to={"/"}>Underwear</Link></li>
                                <li><Link to={"/"}>Watches</Link></li>
                                <li><Link to={"/brands"}>See all brands...</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default SecondNav;