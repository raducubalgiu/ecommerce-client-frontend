import React, {useReducer, useState} from 'react';
import { Link, useParams} from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import {Product} from "../models/productModel";
import {useHttpGet} from "../api/use-http";
import CardProduct from "../components/Products/CardProduct";
import Spinner from "../components/UI/Spinner";
import ShippingSection from "../components/Home/ShippingSection";
import classes from "../components/Layout/MainNav.module.css";

const Supercategory = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { id, supercategory } = useParams<{id:string; supercategory:string}>();

    // Fetching products
    const applyProducts = (data: any) => {
        setProducts(data);
    }
    const { loading } = useHttpGet('products', applyProducts);

    return (
        <Layout>
            <div className="row">
                <ShippingSection />
            </div>

            <div className="row">
                <div className="col-md-3">
                    Filters
                </div>

                <div className="col-md-9">
                    {!loading && <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" style={{fontFamily: 'Poppins'}}><Link to={"/"}>Home</Link></li>
                                <li className="breadcrumb-item active" style={{color: '#0dcaf0', fontFamily: 'Poppins'}} aria-current="page">{supercategory}</li>
                            </ol>
                        </nav>

                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label className="input-group-text bg-light" htmlFor="Sort" style={{fontFamily: 'Poppins', color: 'rgba(0,0,0,.6)', fontSize: '.9rem'}}>Sort by</label>
                                </div>
                                <select className={classes['custom-select']} style={{fontFamily: 'Poppins', border: '1px solid #ced4da', color: 'rgba(0,0,0,.6)', fontSize: '.9rem'}}>
                                    <option value="1">Latest</option>
                                    <option value="2">Popularity</option>
                                    <option value="3">Smallest Price</option>
                                    <option value="4">Biggest Price</option>
                                </select>
                            </div>

                            <div className="input-search">
                                <input type="search" className={classes['form-control']} placeholder="Search product..." aria-label="Search" />
                            </div>
                        </div>

                        <hr />

                        {products.filter(filterProduct => filterProduct.supercategory_id.toString() === id).map(product => (
                            <CardProduct
                                key={product.id}
                                className="col-md-4"
                                title={product.product_name}
                                image={product.product_image}
                                price={product.product_price}
                                brand={product.brand.name}
                            />
                        ))}
                    </div>}
                    {loading && <Spinner />}
                </div>
            </div>
        </Layout>
    );
};

export default Supercategory;