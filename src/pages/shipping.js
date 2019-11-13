import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import $ from "jquery";
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer'
import { connect } from "react-redux";
import { validate } from '@babel/types';

const payment = () => (
  <div>
    <Nav />
    <body>
      <div className="container" >
        <div className="row mt-5 title-lg">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 text-center">
            <div className="row title-lg ">
                 <p className="falign-self-start ml-5 mr-4 pl-2 pr-2 br-10 color-g2 "> ENVÍO </p>  <p className="align-self-start mr-4" > PAGO</p>  <p className="align-self-centealign-self-start ">CONFIRMAR</p>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row mt-4 text-center">
          <div className="col-lg-3 mt-3"></div>
          <div className="col-lg-6 mt-3">
            <p style={{ "font-size": "2em" }} >Enviar a</p>
            <form className="text-center" action="#!">
              <div className="md-form">
                <input  type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="NOMBRE COMPLETO: " />
              </div>
              <div className="md-form">
                <input  type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="DIRECCIÓN:" />
              </div>
              <div className="md-form">
                <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="PAÍS:" />
              </div>
              <div className="md-form">
                <input  type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="CIUDAD:" />
              </div>
              <div className="md-form">
                <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="ESTADO O PROVINCIA:" />
              </div>

              <div className="md-form">
                <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1 " placeholder="CÓDIGO POSTAL:" />
              </div>
              <div className="md-form">
                <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1 " placeholder="NUMERO DE TELÉFONO: " />
              </div>

              <div className="d-flex justify-content-around">

                <div className="md-form mb-5" >
                    <Link to={"/Payment"} className="btn btn-lg btn-block br-15 color-g2"> Siguiente</Link>
                 
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 mt-3"></div>
        </div>
      </div>
    </body>
    <Footer />
  </div>
)
//Redux connection
const mapStoreToProps = state => ({
  products: state.products,
  cart: state.cart,
  baseUri: state.baseUri
})
const mapDispatchToProps = diapatch => ({})

export default connect(mapStoreToProps, mapDispatchToProps)(payment);
