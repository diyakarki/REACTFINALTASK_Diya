import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE
} from "../action-types/products.js";
export function getProducts() {
    return {
        type: GET_PRODUCTS
    };
}
export function getProductSuccess(items) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        items
    };
}
export function getProductFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    };
}
export function addProduct(addProductItem) {
    return {
        type: ADD_PRODUCT,
        addProductItem
    };
}
export function addProductSuccess(successmessage) {
    return {
        type: ADD_PRODUCT_SUCCESS,
        successmessage
    };
}
export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    };
}