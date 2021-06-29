import React, {useState} from 'react';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import ProductsCategories from "../components/Products/ProductsCategories";
import ProductsLatest from "../components/Products/ProductsLatest";
import {useHttpGet} from "../api/use-http";
import ShippingSection from "../components/Home/ShippingSection";

const Home = () => {
    const [products, setProducts] = useState([]);

    const applyProducts = (data:any) => setProducts(data);
    const { loading, error } = useHttpGet('products', applyProducts);

    console.log(products);

    return (
        <Layout>
            <Hero />

            <ShippingSection />

            <ProductsCategories
                products={products}
                loading={loading}
                error={error}
            />
            <ProductsLatest
                products={products}
                loading={loading}
                error={error}
            />
        </Layout>
    );
};

export default Home;