import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CardProduct.module.css';

const CardProduct = (props: {image:string; title:string; price:number}) => {
    return (
        <Link to={"/"} className={classes['card-link']}>
            <div className={classes.card}>
                <div className={classes['card-header']}>
                    <img src={props.image} alt="" height="200"/>
                </div>

                <div className={classes['card-body']}>
                    <h5 className={classes['card-title']}>{props.title}</h5>
                    <p className={classes['card-price']}>${props.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardProduct;