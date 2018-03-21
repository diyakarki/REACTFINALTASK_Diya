import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS
} from "../action-types/products.js";
export default(
    prevState ={
        products:[],
        addProduct:{},
        count:0,
        successStatus:{}
    },
    action
) => {
    switch(action.type){
        case GET_PRODUCTS:
        return{
            ...prevState,
            isLoading:true
        };
        case  GET_PRODUCTS_SUCCESS:
              return{
            ...prevState,
            products:action.items,
            isLoading:false
        };
        case ADD_PRODUCT:
        return{
            ...prevState,
            addProduct:{...prevState.addProduct,...action.addProductItem },
            count: prevState.count+1
        }
        case ADD_PRODUCT_SUCCESS:
        return{
            ...prevState,
            successStatus:action.successmessage,  
        }
        default:
        return prevState;
    }
};