import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Product from  './pages/product';
import CartShopping from './pages/cart-shopping';
import Registration from './pages/userRegistration';
import Payment from './pages/payment';
import Shipping from './pages/shipping';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./store";

export default class Banner  extends React.Component{
  render(){
    return(
      <Provider store={Store}>
          <Router>
                <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route exact path="/producto/:id" children={<SetProduct/>}>
                      </Route>
                      <Route exact path="/login">
                        <Login/>
                      </Route>
                      <Route exact path="/CardShopping">
                        <CartShopping />
                      </Route> 
                      <Route exact path="/registration">
                        <Registration />
                      </Route>
                      <Route exact path="/Payment">
                        <Payment />
                      </Route>
                      <Route exact path="/Shipping">
                        <Shipping />
                      </Route>
                </Switch>
        </Router>
    </Provider>
    );
  }
}
function SetProduct() {
  let { id } = useParams();
  return (
    <Product id={id}/>
  );
}
