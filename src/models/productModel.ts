export interface Product {
    id:number;
    product_name:string;
    product_image:string;
    product_price:number;
    supercategory_id:number;
    category_id:number;
    subcategory_id:number;
    brand_id:number;
    brand:any;
    loading:boolean;
    error:null | string;
}