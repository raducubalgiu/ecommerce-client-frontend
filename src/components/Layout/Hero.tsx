import React from 'react';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes['hero-caption']}>
                <h3 className={classes['heading-primary']}>Fashion is everywhere</h3>
                <p className={classes['heading-secondary']}>Discover our products</p>
                <button className={classes['hero-button']}>See more</button>
            </div>
        </div>
    );
};

export default Hero;