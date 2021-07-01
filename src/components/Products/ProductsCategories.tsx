import React, { useEffect, useReducer } from 'react';
import classes from './ProductsCategories.module.css';
import '../../cssGlobals/Buttons.css';
import '../../cssGlobals/Headings.css';
import ButtonGroups from "../UI/utilities/ButtonGroups";
import {Product} from "../../models/productModel";
import CardProduct from "./CardProduct";
import Spinner from "../UI/Spinner";

const ProductsCategories = (props: { products: Product[]; loading:boolean; error:string | null }) => {

    const [productsCat, dispatchProducts] = useReducer(( state: {
        value: Product[]; active:any
    }, action: {
        value: Product[]; active:any; type:string
    }) => {
        switch (action.type) {
            case 'FETCH_CLOTHES':
                return {
                    value: action.value,
                    active: action.active
                };
            case 'FETCH_FOOTWEAR':
                return {
                    value: action.value ,
                    active: action.active
                };
            case 'FETCH_ACCESSORIES':
                return {
                    value: action.value,
                    active: action.active
                };

            default:
                return state;
        }
    }, {
        value: [],
        active: {
            activeMens: true,
            activeWomens: false,
            activeBoys: false,
            activeGirls: false,
            activeClothes: true,
            activeFootwear: false,
            activeAccessories: false
        }
    });

    useEffect(() => {
        dispatchProducts({type: 'FETCH_CLOTHES', active: productsCat.active , value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 1).splice(0, 4)});

    }, [props.products]);

    const clickMens = () => {
        dispatchProducts({
            type: 'FETCH_ACCESSORIES',
            value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 3).splice(0, 4),
            active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
        });
        dispatchProducts({
            type: 'FETCH_FOOTWEAR',
            value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 2).splice(0, 4),
            active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
        });
        dispatchProducts({
            type: 'FETCH_CLOTHES',
            value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 1).splice(0, 4),
            active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
        });
    };
    const clickWomens = () => {
        dispatchProducts({
            type: 'FETCH_ACCESSORIES',
            value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 3).splice(0, 4),
            active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
        });
        dispatchProducts({
            type: 'FETCH_FOOTWEAR',
            value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 2).splice(0, 4),
            active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
        });
        dispatchProducts({
            type: 'FETCH_CLOTHES',
            value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 1).splice(0, 4),
            active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
        });
    };
    const clickBoys = () => {
        dispatchProducts({
            type: 'FETCH_ACCESSORIES',
            value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 3).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
        });
        dispatchProducts({
            type: 'FETCH_FOOTWEAR',
            value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 2).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
        });
        dispatchProducts({
            type: 'FETCH_CLOTHES',
            value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 1).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
        });
    };
    const clickGirls = () => {
        dispatchProducts({
            type: 'FETCH_ACCESSORIES',
            value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 3).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: false, activeFootwear: false, activeAccessories: true }
        });
        dispatchProducts({
            type: 'FETCH_FOOTWEAR',
            value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 2).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: false, activeFootwear: true, activeAccessories: false }
        });
        dispatchProducts({
            type: 'FETCH_CLOTHES',
            value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 1).splice(0, 4),
            active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: true, activeFootwear: false, activeAccessories: false }
        });
    };
    const clickClothes = () => {
        if(productsCat.active.activeMens) {
            dispatchProducts({
                type: 'FETCH_CLOTHES',
                value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 1).splice(0, 4),
                active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
            });
        }
        if(productsCat.active.activeWomens) {
            dispatchProducts({
                type: 'FETCH_CLOTHES',
                value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 1).splice(0, 4),
                active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
            });
        }
        if(productsCat.active.activeBoys) {
            dispatchProducts({
                type: 'FETCH_CLOTHES',
                value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 1).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: true, activeFootwear: false, activeAccessories: false }
            });
        }
        if(productsCat.active.activeGirls) {
            dispatchProducts({
                type: 'FETCH_CLOTHES',
                value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 1).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: true, activeFootwear: false, activeAccessories: false }
            });
        }
    };
    const clickFootwear = () => {
        if(productsCat.active.activeMens) {
            dispatchProducts({
                type: 'FETCH_FOOTWEAR',
                value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 2).splice(0, 4),
                active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
            });
        }
        if(productsCat.active.activeWomens) {
            dispatchProducts({
                type: 'FETCH_FOOTWEAR',
                value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 2).splice(0, 4),
                active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
            });
        }
        if(productsCat.active.activeBoys) {
            dispatchProducts({
                type: 'FETCH_FOOTWEAR',
                value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 2).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: false, activeFootwear: true, activeAccessories: false }
            });
        }
        if(productsCat.active.activeGirls) {
            dispatchProducts({
                type: 'FETCH_FOOTWEAR',
                value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 2).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: false, activeFootwear: true, activeAccessories: false }
            });
        }
    };
    const clickAccessories = () => {
        if(productsCat.active.activeMens) {
            dispatchProducts({
                type: 'FETCH_ACCESSORIES',
                value: props.products.filter(product => product.supercategory_id === 1 && product.category_id === 3).splice(0, 4),
                active: { activeMens: true, activeWomens: false, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
            });
        }
        if(productsCat.active.activeWomens) {
            dispatchProducts({
                type: 'FETCH_ACCESSORIES',
                value: props.products.filter(product => product.supercategory_id === 2 && product.category_id === 3).splice(0, 4),
                active: { activeMens: false, activeWomens: true, activeBoys: false, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
            });
        }
        if(productsCat.active.activeBoys) {
            dispatchProducts({
                type: 'FETCH_ACCESSORIES',
                value: props.products.filter(product => product.supercategory_id === 3 && product.category_id === 3).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: true, activeGirls: false, activeClothes: false, activeFootwear: false, activeAccessories: true }
            });
        }
        if(productsCat.active.activeGirls) {
            dispatchProducts({
                type: 'FETCH_ACCESSORIES',
                value: props.products.filter(product => product.supercategory_id === 4 && product.category_id === 3).splice(0, 4),
                active: { activeMens: false, activeWomens: false, activeBoys: false, activeGirls: true, activeClothes: false, activeFootwear: false, activeAccessories: true }
            });
        }
    };

    return (
        <section className={classes['section-products']}>
            <div className="container text-center">
                <h2 className="heading-section">Our products</h2>

                <div className="button-group-categories">
                    <ButtonGroups onClick={clickMens} className={productsCat.active.activeMens ? "button-categories active" : "button-categories"}>Mens</ButtonGroups>
                    <ButtonGroups onClick={clickWomens} className={productsCat.active.activeWomens ? "button-categories active" : "button-categories"}>Womens</ButtonGroups>
                    <ButtonGroups onClick={clickBoys} className={productsCat.active.activeBoys ? "button-categories active" : "button-categories"}>Boys</ButtonGroups>
                    <ButtonGroups onClick={clickGirls} className={productsCat.active.activeGirls ? "button-categories active" : "button-categories"}>Girls</ButtonGroups>
                </div>

                <div className="btn-group">
                    <ButtonGroups onClick={clickClothes} className={productsCat.active.activeClothes ? "button-subcategories active" : "button-subcategories"}>Clothes</ButtonGroups>
                    <ButtonGroups onClick={clickFootwear} className={productsCat.active.activeFootwear ? "button-subcategories active" : "button-subcategories"}>Footwear</ButtonGroups>
                    <ButtonGroups onClick={clickAccessories} className={productsCat.active.activeAccessories ? "button-subcategories active" : "button-subcategories"}>Accesories</ButtonGroups>
                </div>

                <div className="products">
                    <div className="row">
                        {!props.loading && productsCat.value.map(product => (
                            <CardProduct
                                key={product.id}
                                id={product.id}
                                className="col-md-3 mt-4"
                                title={product.product_name}
                                image={product.product_image}
                                price={product.product_price}
                                brand={product.brand.name}
                                review={product.average_review}
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

export default ProductsCategories;