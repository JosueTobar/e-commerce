import React from 'react';
import Login from '../componets/form/login/login';

import {
  useParams
} from "react-router-dom";

export default class LoginPage  extends React.Component{

  render(){
    return(
      <div>
        <h1> Desde componente detalle producto id {this.props.id}</h1>
      </div>
    );
  }
}
