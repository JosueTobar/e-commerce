import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import { validate } from '@babel/types';

const products = ({ products, cart, baseUri, addProducToStore, addToCart ,updateProductCart }, productListCart) => (
  <div className="container" >

    <div aria-live="polite" className="sticky-top  notification-container mt-5 " aria-atomic="true" >  
      <div  className="br-10 notification-p">
        <div className="toast br-10" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body notification br-10 ">
             <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>  
             Agredado al carrito... 
          </div>
        </div>
      </div>
    </div>
    <div className="row  text-center" >
      <div className="col-md-12 m-2 title-lg ">
        <p>LO MÁS VENDIDO</p>
      </div>
    </div>
    <div className="row">
      {loadProducts(products, baseUri, addProducToStore),
        productListCart = cart,
        products.map(art => (
          <div key={art.idProducts} className="col-md-6  col-lg-3 mt-3 ">
            <div class="card  color-g1 text-center">
              <div className="product-grid">
                <Link to={"/producto/" + art.idProducts + ""} className="product-image" >
                  <div className="product-grid">
                    <img className="card-img-top img-fluid  product-image " src={(art.proImageSet.length > 0) ? art.proImageSet[0].url : "http://www.sanisidrolonas.com.ar/wp-content/uploads/2014/05/sin-imagen.jpg"} alt="..." />
                  </div>
                </Link>
              </div>
              <div class="card-body card-product" >
                <h5 class="card-title text-center">100%  <i className="fa fa-thumbs-up title-lg"></i> </h5>
                <p class="title-md">{art.nameProducts + "$" + art.price} </p>
                <p class="card-text"> {ContadorPlabras(art.description, 75)}  <Link to={"/producto/" + art.idProducts + ""}>más..</Link></p>
              </div>
              <di className="align-items-end mb-3">
                <a onClick={(e) => validateAddingToCart(e, art, productListCart, addToCart, updateProductCart)} >  <i className="fa fa-shopping-cart pull-left link-p-l" ></i> </a> 
                 <a > <i className="fa  fa-heart  pull-right link-p-r"></i>  </a>
                
                
              </di>
            </div>
          </div>
        ))}
    </div>

    <div className="bs-example msjBox " id="msjBox" style={{'display':'none'}}> 
            <div className="alert alert-info alert-dismissible">
                <strong>Note!</strong> This is a simple example of dismissible alert.
                
            </div>
        </div>

  </div>
)
/** notificacion tiempo inicializacion y tiempo de duracion en milisegundos **/
$(document).ready(function(){
  $('.toast').toast({ delay: 3000 });
});

//validacion si hay datos en el estate glabal de redux
const loadProducts = (productsList, baseUri, addProducToStore) => {
  if (productsList.length <= 0) {
    var url = baseUri + "ecommerce/api/product"
    fetch(url)
      .then(response => response.json())
      .then((products) => {
        addProducToStore(products)
      })
      .catch(console.log)
  }
}
//funcion que resive un evento, un objeto producto y una lista de productos y dos funciones una para agregar al carrito de compras y la otra para actualizar un producto dentro del carrito..
const validateAddingToCart = (e, product, productList, addToCart, updateProductCart) => {
  var valdate = true;
  productList.map((p) => {
    if (p.idProducts === product.idProducts) {
      p.quantityCart = p.quantityCart + 1;
      $('.toast').toast('show');
      updateProductCart(e,p);
      valdate = false;
    }
  });
  if (valdate) {
       $('.toast').toast('show');
      addToCart(e, product);
  }
}

//Recive una cadena y retorna una cantida de palabras...
function ContadorPlabras(cadena, num) {
  var BreakException = {};
  var tex = " ";
  try {
    cadena.split("").forEach(function (element, i) {
      tex = tex + element + "";
      if (i === num) throw BreakException;
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }
  return tex
}
//Redux connection
const mapStoreToProps = state => ({
  products: state.products,
      cart: state.cart,
   baseUri: state.baseUri
})
const mapDispatchToProps = diapatch => ({
  addProducToStore(productList) {
    diapatch({
      type: "ADD_PRODUCT_LIST",
      productList
    })
  },
  addToCart(e, product) {
    e = e || window.event;
    e.preventDefault();
    diapatch({
      type: "ADD_TO_CART",
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

export default connect(mapStoreToProps, mapDispatchToProps)(products);

