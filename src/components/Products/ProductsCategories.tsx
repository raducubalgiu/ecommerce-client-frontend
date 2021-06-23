import React, {useReducer} from 'react';
import classes from './ProductsCategories.module.css';
import '../../cssGlobals/Buttons.css';
import '../../cssGlobals/Headings.css';
import ButtonGroups from "../UI/utilities/ButtonGroups";
import {Product} from "../../models/productModel";
import CardProduct from "./CardProduct";

const ProductsCategories = (props: { products: Product[] }) => {
    const fetchMens = () =>  {};
    const fetchWomens = () => { };
    const fetchBoys = () => { };
    const fetchGirls = () => { };
    const fetchClothes = () => { };
    const fetchFootwear = () => {};
    const fetchAccessories = () => {};

    return (
        <section className={classes['section-products']}>
            <div className="container text-center">
                <h2 className="heading-section">Our products</h2>

                <div className="button-group-categories">
                    <ButtonGroups onClick={fetchMens} className="button-categories">Mens</ButtonGroups>
                    <ButtonGroups onClick={fetchWomens} className="button-categories">Womens</ButtonGroups>
                    <ButtonGroups onClick={fetchBoys} className="button-categories">Boys</ButtonGroups>
                    <ButtonGroups onClick={fetchGirls} className="button-categories">Girls</ButtonGroups>
                </div>

                <div className="btn-group">
                    <ButtonGroups onClick={fetchClothes} className="button-subcategories">Clothes</ButtonGroups>
                    <ButtonGroups onClick={fetchFootwear} className="button-subcategories">Footwear</ButtonGroups>
                    <ButtonGroups onClick={fetchAccessories} className="button-subcategories">Accesories</ButtonGroups>
                </div>

                <div className="products">
                    <div className="row">
                        {props.products.map(product => (
                            <div className="col-sm-3">
                                <CardProduct
                                    title={product.product_name}
                                    image={product.product_image}
                                    price={product.product_price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsCategories;