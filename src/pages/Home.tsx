import React, {useState} from 'react';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import ProductsCategories from "../components/Products/ProductsCategories";
import ProductsLatest from "../components/Products/ProductsLatest";
import {useHttpGet} from "../api/use-http";

const Home = () => {
    const [products, setProducts] = useState([]);

    const applyProducts = (data:any) => setProducts(data);
    useHttpGet('products', applyProducts);

    return (
        <Layout>
            <Hero />
            <ProductsCategories products={products} />
            <ProductsLatest />
        </Layout>
    );
};

export default Home;