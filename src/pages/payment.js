import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import $ from "jquery";
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer'
import { connect } from "react-redux";
import { validate, metaProperty } from '@babel/types';


const payment = ({ paymentMethod }) => (
  <div>
    <Nav />
    <body>
      <div className="container" >
        <div className="row mt-5 title-lg">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 text-center">
            <div className="row title-lg ">
              <p className="falign-self-start ml-5 mr-4"> ENVÍO </p>  <p className="align-self-start mr-4 pl-2 pr-2 br-10 color-g2" > PAGO</p>  <p className="align-self-centealign-self-start ">CONFIRMAR</p>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row mt-5 title-lg">
          <div className="col-lg-12 ml-5 br-15 color-g1 p-3">
            <div className="title-lg mb-2"> Forma de pago </div>
            <div className=" d-flex flex-row">
              {paymentMethod.map((pm, i, paymentMethod) => (
                <div id={pm.id + "icon"} className="p-3 br-15 mt-4">
                  <a onClick={(e) => ocultar(e, pm, paymentMethod)} key={i} data-toggle="collapse" href={"#" + pm.id} role="button" aria-expanded="false" aria-controls={pm.id}>
                    <img className="images-paymentMethod" src={pm.img} alt="Responsive image" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* payment Method 1*/}
        <div class="collapse" id="paymentMethod1">
          <div className="row mt-2 text-center">
            <div className="col-lg-12 mt-3">
              <form>
                <p className="title-lg">Ingresa los datos de tu tarjeta</p>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Número de la tarjeta: </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="INGRESA LOS 16 DIGITOS DE LA TARJETA" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Fecha de vencimiento: </label>
                  <div class="col-sm-5">
                    <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="MES" />
                  </div>
                  <div class="col-sm-5">
                    <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="AÑO" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Código de seguridad: </label>
                  <div class="col-sm-10">

                    <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="CÓDIGO" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Titular de la tarjeta: </label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control form-control-lg mb-3 text-center br-15 color-g1" placeholder="NOMBRES Y APELLIDOS" />
                  </div>
                </div>

              </form>
            </div>
          </div>
       
        </div>

        {/* payment Method 1*/}
        <div class="collapse" id="paymentMethod2">
          <div className="row mt-2 text-center">
            <div className="col-lg-6 mt-3">
              <p className="title-lg">Pago en tienda</p>
            </div>
          </div>
        </div>

        <div class="collapse" id="paymentMethod3">
          <div className="row mt-2 text-center">

            <div className="col-lg-12 mt-3 text-center title-lg">
              Numero de cuenta: 123456789
            </div>
            <div className="col-lg-12 mt-3 text-center title-lg">
              My banco
            </div>          
            </div>
        </div>
        <div class="collapse" id="paymentMethod4">
          <div className="row mt-2 text-center">
            <div className="col-lg-3 mt-2"></div>
            <div className="col-lg-6 mt-3">
              <p style={{ "font-size": "2em" }} >payment Method 4</p>
            </div>
            <div className="col-lg-3 mt-3"></div>
          </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
              <Link to={"/Payment"} className="btn btn-lg btn-block br-15 color-g2 btnNex"> Atras</Link>
            </div>
            <div class="col-sm-6 ">
              <Link to={"/Payment"} className="btn btn-lg btn-block br-15 color-g2 btnNex pull-right"> Siguiente</Link>
            </div>
          </div>

      </div>

    </body>
  </div>
)

function ocultar(e, paymentMethod, listPaymentMethod) {
  e = e || window.event;
  e.preventDefault();

  listPaymentMethod.forEach(function (element) {
    $('#' + element.id).collapse('hide');
    $('#' + element.id + "icon").removeClass("color-g2");
  });
  $('#' + paymentMethod.id + "icon").collapse('show');
  $('#' + paymentMethod.id + "icon").addClass("color-g2");
}

$(".paymentMethod").click(function () {
  alert("paymentMethod click");
});

//Redux connection
const mapStoreToProps = state => ({
  products: state.products,
  cart: state.cart,
  baseUri: state.baseUri,
  paymentMethod: state.paymentMethod
})
const mapDispatchToProps = diapatch => ({})

export default connect(mapStoreToProps, mapDispatchToProps)(payment);
