import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Product from  './pages/product';
import CartShopping from './pages/cart-shopping';
import Registration from './pages/userRegistration';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

export default class Banner  extends React.Component{
  render(){
    return(
      <Router>
            <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/producto/:id" children={<SetProduct />}>
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
            </Switch>
    </Router>
    );
  }
}
function SetProduct() {
  let { id } = useParams();
  return (
    <Product id={id}/>
  );
}
