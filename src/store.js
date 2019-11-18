import {combineReducers, createStore} from "redux"
const initialState = {
  products:[], 
  product: {},
    cart: [],
    paymentMethod: [
        {
          id:"paymentMethod1",
          name: "Tarjeta de crédito  o débito ",
          state: false,
          img: process.env.PUBLIC_URL + "/images/credit-card.png",
        },
        { 
          id:"paymentMethod2",
          name: "Efectivo",
          state: false,
          img: process.env.PUBLIC_URL + "/images/money.png"
        },
        {
          id:"paymentMethod3",
          name: "Transferencia bancaria",
          state: false,
          img: process.env.PUBLIC_URL + "/images/transfer.png"
        },
        { 
          id:"paymentMethod4",
          name: "Paypal",
          state: false,
          img: process.env.PUBLIC_URL + "/images/paypal.png"
        }
      
      ],
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
        case "DELETE_PRODUCT_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(p => p.idProducts !== action.product.idProducts)
            }
         case "UPDATE_PRODUCT_FROM_CART":
             return{
                 ...state,
                 cart: state.cart.map((p) => p.idProducts === action.product.idProducts?action.product:p)
             }  
        case "UPDATE_PAYMENT_METHOD":
            console.log(action.paymentMethod);
            return{
                ...state,
                paymentMethod: state.paymentMethod.map((m) => m.id === action.paymentMethod.id?action.paymentMethod:paymentMethodFalse(m))
            }
 
        default:
          // code block
      }
      function paymentMethodFalse  (m) {
        m.state = false;
        return m;   
      }
return state
}
export default createStore(reducerCart)