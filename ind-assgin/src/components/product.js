import React, { Component } from "react";
import { addProduct } from '../action-creators/products';
const Product = ({ product, AddToCart, index }) => (
  <tr>
    <td>
      <img src="https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__340.jpg" alt="Animals, Charming, Cat, Mammals, Nature" title="Animals, Charming, Cat, Mammals" />
    </td>
    <td>{product.productName}</td>
    <td>{product.price}</td>
    <td>
      <button className="btn btn-primary" href="prd-desc.html">Description</button>
    </td>
    <td>
      <button type="button" className="cart-add-button" onClick={() => { AddToCart(product) }}>ADD TO CART</button>
    </td>
  </tr>
);
export default Product;