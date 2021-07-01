import React, {useState} from 'react';
import classes from './ProductItem.module.css';
import Layout from "../Layout/Layout";
import {Link, useParams} from "react-router-dom";
import Banner from "../UI/Banner";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faTruck, faStar } from '@fortawesome/free-solid-svg-icons';
import { far, faHeart } from '@fortawesome/free-regular-svg-icons';
import {useHttpGet} from "../../api/use-http";
import {Product} from "../../models/productModel";
import Spinner from "../UI/Spinner";
import ProductDetails from "./ProductDetails";
import SameCategory from "./SameCategory";

const ProductItem = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { productId } = useParams<{productId:string; productTitle:string}>();

    const applyProduct = (data: Product[]) => {
        const result = data.filter(item => item.id.toString() === productId);
        setProduct(result[0]);
    };
    const { loading, error } = useHttpGet(`products/${productId}`, applyProduct);

    return (
        <Layout>
            <Banner />

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li style={{fontFamily: 'Poppins'}} className="breadcrumb-item"><Link to="#">Home</Link></li>
                    <li style={{fontFamily: 'Poppins'}} className="breadcrumb-item"><Link to="#">Products</Link></li>
                    <li style={{fontFamily: 'Poppins'}} className="breadcrumb-item active" aria-current="page">{product?.product_name}</li>
                </ol>
            </nav>

            <div className="row">
                <div className="col-md-6">
                    {!loading && <img src={product?.product_image} alt={"/"} className={classes['product-image']} />}
                    {loading && <Spinner />}
                </div>

                <div className="col-md-6">
                    <div className={classes['product_details']}>
                        <h3 className={classes['product-title']}>{product?.product_name}</h3>
                        <p className={classes['product-brand']}>{product?.brand.name}</p>
                        <div className={classes.stars}>
                            <FontAwesomeIcon icon={faStar} className={classes['icon-star']}/>
                            <FontAwesomeIcon icon={faStar} className={classes['icon-star']}/>
                            <FontAwesomeIcon icon={faStar} className={classes['icon-star']}/>
                            <FontAwesomeIcon icon={faStar} className={classes['icon-star']}/>
                            <FontAwesomeIcon icon={faStar} className={classes['icon-star']}/>
                        </div>
                        <hr />
                        <p className={classes['product_price']}>${product?.product_price}</p>
                    </div>

                    <div className="product-order-button d-flex align-items-center">
                        <button className={classes['button-favorites']}><FontAwesomeIcon icon={faHeart} className={classes['icon-favorites']} /></button>
                        <button className={classes['button-cart']}>Add to cart</button>
                    </div>

                    <div className={classes['product-order-details']}>
                        <div className={classes['order-method-item']}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={classes['icon-order']}/>
                            </div>
                            <div className={classes['order-method']}>
                                <h3 className={classes['order-details-title']}>Showroom - FREE<span
                                    className="badge bg-warning">New</span></h3>
                                <p className={classes['order-details-description']}>Some details for this method</p>
                            </div>
                        </div>

                        <div className={classes['order-method-item']}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTruck} className={classes['icon-order']}/>
                            </div>
                            <div className={classes['order-method']}>
                                <h3 className={classes['order-details-title']}>Courier Delivery - FREE</h3>
                                <p className={classes['order-details-description']}>Some details about courier delivery</p>
                            </div>
                        </div>

                        <div className={classes['order-method-item']}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faTruck} className={classes['icon-order']}/>
                            </div>
                            <div className={classes['order-method']}>
                                <h3 className={classes['order-details-title']}>Express Delivery</h3>
                                <p className={classes['order-details-description']}>Some details about express delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductDetails
                color={product?.product_details.product_color}
                style={product?.product_details.product_style}
                material={product?.product_details.product_material}
                reviewNo={product?.reviews.length}
            />

            <SameCategory
                product={product}
            />
        </Layout>
    );
};

export default ProductItem;