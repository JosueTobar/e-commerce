import React from 'react';
import Nav from '../componets/nav';
import Banner from '../componets/banner/banner';
import Category from '../componets/category/category';
import Product from '../componets/product/product';
import Footer from '../componets/footer/footer';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


export default class Home  extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
          <Banner/>
          <Product/>
          <Category/>
          <Footer/>
      </div>
    );
  }
}
