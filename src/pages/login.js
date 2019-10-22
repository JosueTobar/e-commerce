import React from 'react';
import Login from '../componets/form/login/login';
import Nav from '../componets/nav';
export default class LoginPage  extends React.Component{
  render(){
    return(
      <div>
          <header>
          <Nav/>
          </header>
        <Login/>
      </div>
    );
  }
}
