import React, { Component } from "react";
import Product from "./product";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../action-creators/products";
class ProductList extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
  }
  productlist() {
    return this.props.products.map((e, index) => (
      <Product
        key={index}
        product={e}
        AddToCart={this.handleCart}
        index={index}
      />
    ));
  }
  handleCart = (product) => {
    this.props.actions.addProduct(product);
  };
  render() {
    console.log(this.props.successStatus.successmessage)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-7 col-xs-10">
            <h1>Dashboard</h1>
          </div>
          <div id="cartStatus" className="col-md-1 col-md-push-5 col-sm-2 col-sm-push-3 col-xs-2">
            <span id="cartCount">{this.props.count}</span>
            <i className="glyphicon glyphicon-shopping-cart"><Link to="/Cart">CART</Link></i>
          </div>
        </div>
        <div className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><Link to="/Cart">View Cart</Link></li>
                <li><a href="#CheckOut">Checkout</a></li>
              </ul>
              <div className="pull-right basic-search">
                <form>
                  <input type="text" name="search" placeholder="Search.." />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-left">
            <h1>Home</h1>
            <p className="lead">To search for products you can either select a product group or enter the product name.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select className="form-control" id="productSelect">
                <option>Please Select a Product Group</option>
                <option>Bar Soaps</option><option>Lotions</option>
                <option>Creams</option>
              </select>
            </div>
            <div className="row products-list">
              <table className="container table table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>productName</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Add to Cart</th>
                  </tr>
                </thead>
                <tbody>
                  {this.productlist()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    addProduct: state.addProduct,
    count: state.count,
    successStatus: state.successStatus
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default (connect(mapStateToProps, mapDispatchToProps)(ProductList));