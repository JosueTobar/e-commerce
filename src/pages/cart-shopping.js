import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { connect } from "react-redux";
import { stat } from 'fs';

const cartShopping = ({ products }) => (
  <div>
    <header>
      <Nav />
    </header>
    <body>
      <div className="contenier mr-5 ml-5  mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <center><h2> Cesta <i className="fa fa-shopping-cart mb-4" /> </h2> </center>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Descripción</th>
                  <th scope="col">Precio Unitario</th>
                  <th scope="col">Cantidad </th>
                  <th scope="col">Envio</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.idProducts}>
                    {console.log(p)}
                    <td>
                      <div> <img width="40px" height="80px" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive" /> SmartPhone </div>
                      <div>
                      </div>
                    </td>
                    <td>{p.price}</td>
                    <td><input className="form-control " type="number" /> </td>
                    <td>{p.quantity}</td>
                    <td>$500</td>
                    <td>
                      <a style={{ "text-decoration": "none", "color": "black", "font-size": "2em" }} >  X </a>
                    </td>
                  </tr>
                ))
                }

              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"></td>
                  <td >Total </td>
                  <td >$500 </td>
                  <button className="btn  btn-block mt-1" style={{ "border-radius": " 15px  15px  15px  15px", "background": "#cccccc" }} > Efectuar pedido </button>

                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </body>

    <Footer />
  </div>
);

const mapStoreToProps = state => ({
  products: state.products

})
const mapDispatchToProps = descpatcht => ({})

export default connect(mapStoreToProps, mapDispatchToProps)(cartShopping);

