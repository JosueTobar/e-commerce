import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link to="../" className="nav-link navbar-brand">
          TU MARCA/TULOGO
             </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item  active title-nav">
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">NOSOTROS</a>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PRODUCTOS
                      </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Tecnología</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Salud Belleza</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Colecciones</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Hogar y jardín</a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="#">Ofertas</a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">SERVICIOS</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">CONTACTANOS</a>
            </li>
            <li className="pull-right">
              <Link to="../CardShopping"  >  <i className="fa fa-shopping-cart pull-right icon-nav link " />  </Link>
              <i className="fa fa-heart fa-pull-right icon-nav" />
              <Link to="../login" ><i className="fa fa-user fa-pull-right icon-nav link" /></Link>
              <i className="fa fa-search fa-pull-right icon-nav" />
            </li>
          </ul>

        </div>
      </nav>

    );
  }
}
