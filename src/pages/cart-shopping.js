import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { booleanLiteral } from '@babel/types';
const cartShopping = ({ cart, deleteProductCart, updateProductCart }) => (
  <div>
    <header>
      <Nav />
    </header>
    <div className="contanier mr-5 ml-5  mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <center><h2> Cesta <i className="fa fa-shopping-cart mb-4" /> </h2> </center>
          {table(cart, deleteProductCart, updateProductCart)}
        </div>
      </div>
    </div>
  </div>
);

const table = (cart, deleteProductCart, updateProductCart, Total) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Descripción</th>
        <th scope="col">Precio Unitario</th>
        <th scope="col">Cantidad </th>
        <th scope="col">Subtotal</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((p) => (
          <tr key={p.idProducts}>
            <td>
              <div className="product-image-cart" > <img src={(p.proImageSet.length > 0) ? p.proImageSet[0].url : "http://www.sanisidrolonas.com.ar/wp-content/uploads/2014/05/sin-imagen.jpg"} class="img-responsive" /> {p.nameProducts} </div>
              <div>
              </div>
            </td>
            <td>{p.price}</td>
            <td>
              <div className="row">
                <di className="col-5">
                  <button onClick={(e) => p = moreProduct(e, p, updateProductCart)} className="pull-right">+</button>
                </di>
                <di className="col-2">
                  <input className="form-control form-control-sm" type="text" id={"canti" + p.idProducts} value={p.quantityCart} />
                </di>
                <di className="col-5">
                  <button onClick={(e) => lessProduct(e, p, updateProductCart)} className="pull-left" >-</button>
                </di>
              </div>
            </td>
            <td>${p.subTotal = parseFloat(calculateSudTotal(p.price, p.quantityCart)).toFixed(2)}</td>
            <td>
              <button onClick={(e) => showQuestion(e, p)} >X</button>
            </td>
            <div className="modal fade" id={"product" + p.idProducts} tabindex="-1" role="dialog" aria-labelledby={"product" + p.idProducts} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12 md-5 text-center">
                        Estas seguro que desa Eliminar es producto ?..
                         </div>
                    </div>
                    <div className="row mt-5 text-center">
                      <div class="col-md-6 ">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                      <div class="col-md-6">
                        <button type="button" onClick={(e) => closeQuestion(deleteProductCart, e, p)} className="btn btn-danger">Ok</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </tr>
        ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="2"></td>
        <td >Total </td>
        <td >${parseFloat(calculateTotal(cart)).toFixed(2)} </td>
        <td>    <button className="btn  btn-primary mt-1"  > Efectuar pedido </button></td>
      </tr>
    </tfoot>
  </table>
)

/*Cart operation */
function lessProduct(e, p, updateProductCart) {
  if (p.quantityCart > 1) {
    p.quantityCart = p.quantityCart - 1;
    updateProductCart(e, p)
  }
}
//funcion que muestra el modal 
function showQuestion(e, p) {
  e = e || window.event;
  e.preventDefault();
  $("#product" + p.idProducts).modal("show");

}
//funcion que oculta el modal y elimina el producto del carrito 
function closeQuestion(deleteProductCart, e, p) {
  e = e || window.event;
  e.preventDefault();
  $("#product" + p.idProducts).modal("hide");
  deleteProductCart(e, p);
}

// funcion que aunmenta la cantidad de productos de un detalle 
function moreProduct(e, p, updateProductCart) {
  p.quantityCart = p.quantityCart + 1;
  updateProductCart(e, p)
}

//funcion que calcula el sudtotal de un priducto multiplicando el precio por la cantidad 
const calculateSudTotal = (pice, quantityCart) => (pice * quantityCart)

//funcion que calcula el total 
function calculateTotal(productList) {
  var price = 0;
  console.log(productList);
  productList.forEach(function (p) {
    price = price + parseFloat(p.subTotal)
  });
  return price;
}
/******** React Redux secction ********/
const mapStoreToProps = state => ({
  cart: state.cart
})
const mapDispatchToProps = diapatch => ({
  deleteProductCart(e, product) {
    e = e || window.event;
    e.preventDefault();
    diapatch({
      type: "DELETE_PRODUCT_FROM_CART",
      product
    })
  },
  updateProductCart(e, product) {
    e = e || window.event;
    e.preventDefault();
    diapatch({
      type: "UPDATE_PRODUCT_FROM_CART",
      product
    })
  }
})
/************************************/
export default connect(mapStoreToProps, mapDispatchToProps)(cartShopping);

