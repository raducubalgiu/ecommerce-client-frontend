import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CardProduct.module.css';

const CardProduct = (props: {id:number; image:string; title:string; price:number; brand:any; className:string; review:number}) => {
    return (
        <div className={props.className}>
            <Link to={`/products/${props.id}/${props.title}`} className={classes['card-link']}>
                <div className={classes.card}>
                    <div className={classes['card-header']}>
                        <img src={props.image} alt="" height="200"/>
                    </div>

                    <div className={classes['card-body']}>
                        <h5 className={classes['card-brand']}>{props.brand}</h5>
                        <p className={classes['card-title']}>{props.title}</p>
                        <p className={classes['card-price']}>${props.price}</p>
                        <p>Review: {props.review}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardProduct;