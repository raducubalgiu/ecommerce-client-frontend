export class Product {
    id!:number;
    product_name!:string;
    product_image!:string;
    product_price!:number;
    supercategory_id!:number;
    category_id!:number;
    product_details!:any;
    subcategory_id!:number;
    brand_id!:number;
    brand!:any;
    loading!:boolean;
    error!:null | string;
    average_review!:number;
    reviews:any;
}