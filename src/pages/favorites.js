
import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default class favorites  extends React.Component{
  render(){
    return(
      <div>
          <header>
          <Nav/>
          </header>
          <div className="mr-5 ml-5  mt-5 mb-5">
             
           </div>
          <Footer/>
      </div>
    );
  }
}
