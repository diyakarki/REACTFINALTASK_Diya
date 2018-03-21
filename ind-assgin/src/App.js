import React, { Component } from 'react';
import Product from './components/product';
import ProductList from "./components/product-list";
import { Route, Switch } from "react-router-dom";

import { withRouter } from "react-router-dom";
import Cart from "./components/cart";
class App extends Component {

  render () {
    return (
        <div>
        
         <Route exact path="/"
            render={props =>
              this.props.isLoading ? ( "DATA lOADING...") : (
                 <ProductList {...props} 
                 /> )
            }
          />
           <Route path="/cart" component={Cart} />
        </div>
    );
  }
}
// function mapStateToProps(state){
//   return{
//     products:state.products,
//     addProduct:state.addProduct,
//     count:state.count
//   };
// }
// function mapDispatchToProps(dispatch){
//   return{
//     actions:bindActionCreators(productActions,dispatch)
//   };
// }
export default withRouter(App);
