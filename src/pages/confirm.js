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
const cartShopping = ({ cart }) => (
    <div>
        <header>
            <Nav />
        </header>
        <div className="contanier mr-5 ml-5  mt-5 mb-5">
            <div className="row mt-5 title-lg">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="row title-lg ">
                        <p className="falign-self-start ml-5 mr-4"> ENVÍO </p>  <p className="align-self-start mr-4 " > PAGO</p>  <p className="align-self-centealign-self-start pl-2 pr-2 br-10 color-g2 ">CONFIRMAR</p>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    {table(cart)}
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-sm-6">
                    <Link to={"/Payment"} className="btn btn-lg btn-block br-15 color-g2 btnNex"> Atras</Link>
                </div>
                <div class="col-sm-6 ">
                    <button className="btn btn-lg btn-block br-15 color-g2 btnNex pull-right" > Confirmar </button>

                </div>
            </div>
        </div>
    </div>
);

const table = (cart, Total) => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Cantidad </th>
                <th scope="col">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            { cart.map((p) => (
                    <tr key={p.idProducts}>
                        <td>
                            <div className="product-image-cart" >  {p.nameProducts} </div>
                            <div>
                            </div>
                        </td>
                        <td>${p.price}</td>
                        <td >{p.quantityCart} </td>
                        <td>${p.subTotal = parseFloat(calculateSudTotal(p.price, p.quantityCart)).toFixed(2)}</td>

                        <div className="modal fade" id={"product" + p.idProducts} tabindex="-1" role="dialog" aria-labelledby={"product" + p.idProducts} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 md-5 text-center">
                                                Estas seguro que desa Eliminar es producto ?..
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

            </tr>
        </tfoot>
    </table>
)

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

