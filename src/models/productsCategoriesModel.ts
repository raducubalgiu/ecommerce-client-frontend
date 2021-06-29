import {Product} from "./productModel";

export interface ProductsCategoriesModel {
    type:string;
    value: Product[],
    active:any;
}