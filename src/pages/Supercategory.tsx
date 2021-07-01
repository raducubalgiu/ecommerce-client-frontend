import React, {useEffect, useState} from 'react';
import { Link, useParams} from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import {Product} from "../models/productModel";
import {useHttpGet} from "../api/use-http";
import CardProduct from "../components/Products/CardProduct";
import Spinner from "../components/UI/Spinner";
import ShippingSection from "../components/Home/ShippingSection";
import SortSearch from "../components/Filters/SortSearch";

const Supercategory = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState({
        s: '',
        sort: ''
    });
    const { id, supercategory } = useParams<{id:string; supercategory:string}>();

    // Fetching products
    const applyProducts = (data: any) => {
        setAllProducts(data);
        setAllProducts(data);
    }
    const { loading } = useHttpGet('products', applyProducts);

    useEffect(() => {
        let products = allProducts.filter(product => product.supercategory_id.toString() === id);

        let searchProducts = products.filter(p =>
            p.product_name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
            p.brand.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
        );

        if(filters.sort === 'biggest') {
            searchProducts.sort((a, b) => {
                if(a.product_price > b.product_price) {
                    return -1;
                }
                if(a.product_price < b.product_price) {
                    return 1;
                }
                return 0;
            });
        } else if(filters.sort === 'smallest') {
            searchProducts.sort((a, b) => {
                if(a.product_price > b.product_price) {
                    return 1;
                }
                if(a.product_price < b.product_price) {
                    return -1;
                }
                return 0;
            });
        } else if(filters.sort === 'popularity') {
            searchProducts.sort((a, b) => {
                if(a.average_review > b.average_review) {
                    return -1;
                }
                if(a.average_review < b.average_review) {
                    return 1;
                }
                return 0;
            });
        }

        setFilteredProducts(searchProducts);

    }, [filters, allProducts, id]);

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

                        <SortSearch
                            filters={filters}
                            setFilters={setFilters}
                        />

                        <hr />

                        {filteredProducts.map(product => (
                            <CardProduct
                                id={product.id}
                                key={product.id}
                                className="col-md-4"
                                title={product.product_name}
                                image={product.product_image}
                                price={product.product_price}
                                brand={product.brand.name}
                                review={product.average_review}
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