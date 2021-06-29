import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes['footer-categories']}>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <h3 className={classes['footer-section-title']}>Support and assistance</h3>
                            <ul className={classes['footer-support']}>
                                <li><Link to={"/"}>Frequent questions</Link></li>
                                <li><Link to={"/"}>Terms and conditions</Link></li>
                                <li><Link to={"/"}>About us</Link></li>
                                <li><Link to={"/"}>Contact</Link></li>
                                <li><Link to={"/"}>Payment methods</Link></li>
                                <li><Link to={"/"}>ANPC</Link></li>
                            </ul>
                        </div>

                        <div className="col-md">
                            <h3 className={classes['footer-section-title']}>Customer Service</h3>
                            <ul className={classes['footer-support']}>
                                <li><Link to={"/"}>Email: hello@gmail.com</Link></li>
                                <li><Link to={"/"}>Phone: (+40) 70.000.000</Link></li>
                                <li><Link to={"/"}>Monday - Saturday: 09:00 - 17:30</Link></li>
                            </ul>
                        </div>

                        <div className="col-md">
                            <h3 className={classes['footer-section-title']}>Mobile App</h3>
                            <ul className={classes['footer-support']}>
                                <li><Link to={"/"}>iPhone</Link></li>
                                <li><Link to={"/"}>iPad</Link></li>
                                <li><Link to={"/"}>Android</Link></li>
                            </ul>
                        </div>

                        <div className="col-md">
                            <h3 className={classes['footer-section-title']}>Social Media</h3>
                            <div className="d-flex align-items-center mt-4">
                                <Link to="#"><FontAwesomeIcon className={classes['icon-brand']} icon={faFacebookSquare} /></Link>
                                <Link to="#"><FontAwesomeIcon className={classes['icon-brand']} icon={faTwitter} /></Link>
                                <Link to="#"><FontAwesomeIcon className={classes['icon-brand']} icon={faInstagram} /></Link>
                                <Link to="#"><FontAwesomeIcon className={classes['icon-brand']} icon={faFacebookMessenger} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="d-flex align-items-center justify-content-center p-5">
                            <div className={classes.newsletter}>
                                <p className={classes['newsletter-title']}>Subscribe to our newsletter</p>
                                <p className={classes['newsletter-description']}>And stay informed about our news and events</p>
                            </div>

                            <div className="newsletter-form">
                                <form>
                                    <div className="input-group">
                                        <input className="form-control" type="email" placeholder="email" />
                                        <button className="btn btn-dark border-left" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <p className={classes.copyright}>Developed by Raducu Balgiu</p>
            </div>
        </footer>
    );
};

export default Footer;