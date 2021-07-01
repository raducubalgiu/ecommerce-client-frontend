import React from 'react';
import classes from './Banner.module.css';

const Banner = () => {
    return (
        <section className={classes['section-banner']}>
            <img src="/images/banner.jpg" alt="" className={classes.banner}/>
        </section>
    );
};

export default Banner;