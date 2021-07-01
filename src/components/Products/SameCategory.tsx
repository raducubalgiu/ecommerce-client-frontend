import React, {useState} from 'react';
import classes from './SameCategory.module.css';
import CardProduct from "./CardProduct";
import {useHttpGet} from "../../api/use-http";
import {Product} from "../../models/productModel";
import Spinner from "../UI/Spinner";

const SameCategory = (props: { product: Product | null }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const applyProducts = (data: Product[]) => {
        setProducts(data);
    }

    const { loading, error } = useHttpGet('products', applyProducts);

    return (
        <section className={classes['section-same-category']}>
            <h5 className={classes['heading-same-category']}>You might be also interested</h5>
            <div className="row">
                {!loading && products.filter(product =>
                    product.supercategory_id === props.product?.supercategory_id &&
                    product.category_id === props.product?.category_id &&
                    product.id !== props.product?.id
                ).map(product => (
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
                )).splice(1, 4)}
                {loading && <Spinner />}
            </div>
        </section>
    );
};

export default SameCategory;