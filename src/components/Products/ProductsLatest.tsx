import React, {useEffect, useReducer} from 'react';
import classes from './ProductLatest.module.css';
import ButtonGroups from "../UI/utilities/ButtonGroups";
import CardProduct from "./CardProduct";
import Spinner from "../UI/Spinner";
import {Product} from "../../models/productModel";

const ProductsLatest = (props: { products: Product[]; loading:boolean; error:string | null }) => {
    const [catProducts, dispatchProduct] = useReducer((state: {value: Product[], active:any}, action: {value: Product[], active:any, type:string}) => {
        switch (action.type) {
            case 'FETCH_MENS':
                return { value: action.value, active: action.active }
            case 'FETCH_WOMENS':
                return { value: action.value, active: action.active }
            case 'FETCH_BOYS':
                return { value: action.value, active: action.active }
            case 'FETCH_GIRLS':
                return { value: action.value, active: action.active }

            default:
                return state;
        }
    }, {
       value: [],
       active: { clickMens:true, clickWomens:true, clickBoys:true, clickGirls:true }
    });

    useEffect(() => {
        dispatchProduct({ type: 'FETCH_MENS', active: {
                clickMens:true, clickWomens:false, clickBoys:false, clickGirls:false
            } , value: props.products.filter(product => product.supercategory_id === 1).splice(0, 4) });

    }, [props.products]);

    const clickMens = () => {
        dispatchProduct({ type: 'FETCH_MENS', active: {
                clickMens:true, clickWomens:false, clickBoys:false, clickGirls:false
            } , value: props.products.filter(product => product.supercategory_id === 1).splice(0, 4) });
    };
    const clickWomens = () => {
        dispatchProduct({ type: 'FETCH_WOMENS', active: {
                clickMens:false, clickWomens:true, clickBoys:false, clickGirls:false
            } , value: props.products.filter(product => product.supercategory_id === 2).splice(0, 4) });
    };
    const clickBoys = () => {
        dispatchProduct({ type: 'FETCH_BOYS', active: {
                clickMens:false, clickWomens:false, clickBoys:true, clickGirls:false
            } , value: props.products.filter(product => product.supercategory_id === 3).splice(0, 4) });
    };
    const clickGirls = () => {
        dispatchProduct({ type: 'FETCH_GIRLS', active: {
                clickMens:false, clickWomens:false, clickBoys:false, clickGirls:true
            } , value: props.products.filter(product => product.supercategory_id === 4).splice(0, 4) });
    };

    return (
        <section className={classes['section-latest-products']}>
            <div className="container text-center">
                <h2 className="heading-section">Latest products</h2>

                <div className="button-group-categories">
                    <ButtonGroups onClick={clickMens} className={catProducts.active.clickMens ? "button-categories active" : "button-categories"}>Mens</ButtonGroups>
                    <ButtonGroups onClick={clickWomens} className={catProducts.active.clickWomens ? "button-categories active" : "button-categories"}>Womens</ButtonGroups>
                    <ButtonGroups onClick={clickBoys} className={catProducts.active.clickBoys ? "button-categories active" : "button-categories"}>Boys</ButtonGroups>
                    <ButtonGroups onClick={clickGirls} className={catProducts.active.clickGirls ? "button-categories active" : "button-categories"}>Girls</ButtonGroups>
                </div>

                <div className="products">
                    <div className="row">
                        {!props.loading && catProducts.value.map(product => (
                                <CardProduct
                                    key={product.id}
                                    className="col-md-3 mt-4"
                                    title={product.product_name}
                                    image={product.product_image}
                                    price={product.product_price}
                                    brand={product.brand.name}
                                />
                        ))}
                        { props.loading &&
                        <div className="mt-4 mb-4">
                            <Spinner />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsLatest;