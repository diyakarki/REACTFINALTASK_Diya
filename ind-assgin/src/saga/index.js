import {
    getProductSuccess,
    getProductFailure,
    addProductSuccess,
    addProductFailure
} from "../action-creators/products.js";
import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, ADD_PRODUCT } from "../action-types/products";

function* getProducts() {
    let url = "http://172.16.105.84:3000/api/ProducList";
    try {
        let items = yield fetch(url).then(r => r.json());
        yield put(getProductSuccess(items));
    } catch (error) {
        yield put(getProductFailure(error));
    }
}
function* addProduct(action) {
    console.log(action.addProductItem)
    let url = "http://172.16.105.84:3000/api/addToCart";
    try {
        let successMsg = yield fetch("http://172.16.105.84:3000/api/addToCart", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.addProductItem)
        }).then(result => result.json());
        yield put(addProductSuccess(successMsg));
    } catch (error) {
        yield put(addProductFailure(error));
    }
}
export function* getProductWatcher() {
    yield [
        takeLatest(GET_PRODUCTS, getProducts),
        takeLatest(ADD_PRODUCT, addProduct)
    ];
}


