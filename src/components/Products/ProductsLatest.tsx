import React from 'react';
import classes from "./ProductsCategories.module.css";
import ButtonGroups from "../UI/utilities/ButtonGroups";

const ProductsLatest = () => {

    const fetchMens = () => {};
    const fetchWomens = () => {};
    const fetchBoys = () => {};
    const fetchGirls = () => {};
    const fetchClothes = () => {};
    const fetchFootwear = () => {};
    const fetchAccessories = () => {};

    return (
        <section className={classes['section-products']}>
            <div className="container text-center">
                <h2 className="heading-section">Latest products</h2>

                <div className="button-group-categories">
                    <ButtonGroups onClick={fetchMens} className="button-categories active">Mens</ButtonGroups>
                    <ButtonGroups onClick={fetchWomens} className="button-categories">Womens</ButtonGroups>
                    <ButtonGroups onClick={fetchBoys} className="button-categories">Boys</ButtonGroups>
                    <ButtonGroups onClick={fetchGirls} className="button-categories">Girls</ButtonGroups>
                </div>

                <div className="btn-group">
                    <ButtonGroups onClick={fetchClothes} className="button-subcategories active">Clothes</ButtonGroups>
                    <ButtonGroups onClick={fetchClothes} className="button-subcategories">Footwear</ButtonGroups>
                    <ButtonGroups onClick={fetchClothes} className="button-subcategories">Accesories</ButtonGroups>
                </div>

                <div className="products">
                    <div className="row">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsLatest;