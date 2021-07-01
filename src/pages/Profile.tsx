import React, {useReducer, useState} from 'react';
import classes from './Profile.module.css';
import Layout from "../components/Layout/Layout";
import Settings from "../components/User/Settings";
import Orders from "../components/User/Orders";
import Reviews from "../components/User/Reviews";

const Profile = () => {
    const [screen, dispatchScreen] = useReducer((state: { settings:boolean, orders:boolean, reviews:boolean }, action: { type:string }) => {
        switch (action.type) {
            case 'GO_SETTINGS':
                return { settings:true, orders: false, reviews: false }
            case 'GO_ORDERS':
                return { settings:false, orders: true, reviews: false }
            case 'GO_REVIEWS':
                return { settings:false, orders: false, reviews: true }

            default:
                return state;
        }
    },{
        settings:true,
        orders:false,
        reviews:false
    });

    const settingsHandler = () => {
        dispatchScreen({type: 'GO_SETTINGS'});
    }
    const ordersHandler = () => {
        dispatchScreen({type: 'GO_ORDERS'});
    }
    const reviewsHandler = () => {
        dispatchScreen({type: 'GO_REVIEWS'});
    }

    let screenComponent;
    if(screen.settings) {
        screenComponent = <Settings />
    }
    if(screen.orders) {
        screenComponent = <Orders />
    }
    if(screen.reviews) {
        screenComponent = <Reviews />
    }
    let settingsClasses = screen.settings ? `${classes['list-group-item']} ${classes['list-group-item-action']} ${classes.active}` : `${classes['list-group-item']} ${classes['list-group-item-action']}`;
    let ordersClasses = screen.orders ? `${classes['list-group-item']} ${classes['list-group-item-action']} ${classes.active}` : `${classes['list-group-item']} ${classes['list-group-item-action']}`;
    let reviewsClasses = screen.reviews ? `${classes['list-group-item']} ${classes['list-group-item-action']} ${classes.active}` : `${classes['list-group-item']} ${classes['list-group-item-action']}`;

    return (
        <Layout>
            <section className={classes['section-profile']}>
                <h5 className={classes['section-title']}>My Account:</h5>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            <button onClick={settingsHandler} className={settingsClasses}>Settings</button>
                            <button onClick={ordersHandler} className={ordersClasses}>Orders</button>
                            <button onClick={reviewsHandler} className={reviewsClasses}>Reviews</button>
                            <button  className={reviewsClasses}>Report a problem</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card p-3" >
                            { screenComponent }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Profile;