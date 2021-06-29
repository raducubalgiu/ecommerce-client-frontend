import React from 'react';
import classes from './ShippingSection.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruckLoading, faTruckMoving} from "@fortawesome/free-solid-svg-icons";

const ShippingSection = () => {
    return (
        <div className={classes['shipping-overview']}>
            <div className="row">
                <div className="col-md">
                    <div className="card-overview">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faTruckMoving} />
                            </div>
                            <div className={classes.description}>
                                <p>Free shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-overview">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faTruckLoading} />
                            </div>
                            <div className={classes.description}>
                                <p>Free return 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-overview">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faTruckLoading} />
                            </div>
                            <div className={classes.description}>
                                <p>Free return 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-overview">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={classes.icon}>
                                <FontAwesomeIcon icon={faTruckLoading} />
                            </div>
                            <div className={classes.description}>
                                <p>Free return 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingSection;