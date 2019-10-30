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
            var bolena = false;
            return{
             ...state,
                 cart: state.cart.concat(action.product)
                 //cart: state.cart.map((p) => !p.idProducts === action.product.idProducts? bolena = true: p
                // )
            }
        case "DELETE_PRODUCT_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(p => p.idProducts !== action.product.idProducts)
            }
         case "UPDATE_PRODUCT_FROM_CART":
             return{
                 ...state,
                 //state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
                 cart: state.cart.map((p) => p.idProducts === action.product.idProducts?action.product:p)
             }   
 
        default:
          // code block
      }
return state
}
export default createStore(reducerCart)