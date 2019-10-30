import {createStore} from "redux"
const initialState = {
    products:[],
    product: {},
    cart: [],
    baseUri:"http://192.168.100.33:8090/"
}
const reducerCart = (state = initialState,action)=>{
    console.log(action)
    switch(action.type) {
        case "ADD_PRODUCT_LIST":
            return{
                ...state,
                products: action.productList
            }
        case "ADD_TO_CART":
           return{
            ...state,
              cart: state.cart.concat(action.product)
           }
 
        default:
          // code block
      }
return state
}


export default createStore(reducerCart)