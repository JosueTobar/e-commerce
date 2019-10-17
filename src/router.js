import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Product from  './pages/product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute,
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
                  <Route exact path="/producto/:id" children={<Child />}>

                  </Route>
                  <Route exact path="/login">
                    <Login/>
                  </Route>
                  <Route exact path="/login/:home">
                    <Home/>
                  </Route>
            </Switch>
    </Router>
    );
  }

}
function Child() {
  let { id } = useParams();

  return (
    <Product id={id}/>

  );
}
