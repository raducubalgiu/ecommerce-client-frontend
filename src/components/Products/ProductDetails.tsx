import React, {useState} from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props: {color:string; material:string; style:string; reviewNo:number}) => {
    const [activeReviews, setActiveReviews] = useState(false);
    const [activeDetails, setActiveDetails] = useState(true);
    const [activePayment, setActivePayment] = useState(false);

    const detailsHandler = () => {
        setActiveReviews(false);
        setActiveDetails(true);
        setActivePayment(false);
    }

    const paymentHandler = () => {
        setActiveReviews(false);
        setActiveDetails(false);
        setActivePayment(true);
    }

    const reviewsHandler = () => {
        setActiveReviews(true);
        setActiveDetails(false);
        setActivePayment(false);
    }

    let classesDetails = activeDetails ? `${classes['button-details']} ${classes.active}` : classes['button-details'];
    let classesPayment = activePayment ? `${classes['button-details']} ${classes.active}` : classes['button-details'];
    let classesReviews = activeReviews ? `${classes['button-details']} ${classes.active}` : classes['button-details'];

    return (
        <section className={classes['section-product-details']}>
            <div className={classes['buttons-group']}>
                <button onClick={detailsHandler} className={classesDetails}>Product Details</button>
                <button onClick={paymentHandler} className={classesPayment}>Payment</button>
                <button onClick={reviewsHandler} className={classesReviews}>Reviews <span
                    className="badge bg-info">{props.reviewNo}</span></button>
            </div>

            <div className={classes.body}>
                {activeDetails &&
                <div className={classes.details}>
                    <h3 className={classes['heading-details']}>Characteristics:</h3>
                    <ul className={classes['details-list']}>
                        <li>Color: {props.color}</li>
                        <li>Style: {props.style}</li>
                        <li>Material: {props.material}</li>
                    </ul>
                </div>}
                {activePayment &&
                <div className={classes.payment}>
                    Some details about payment
                </div>
                }
            </div>
        </section>
    );
};

export default ProductDetails;