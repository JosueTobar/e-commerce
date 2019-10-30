import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    this.cargarPoduct();
  }

  /*List product */
  cargarPoduct = () => {
    fetch('http://192.168.100.47:8090/ecommerce/api/producto')
      .then(response => response.json())
      .then((products) => {
        this.setState({ products: products })
      })
      .catch(console.log)
  }

  detalleProducto = (pro) => {
    console.log(pro)
  }
  render() {
    return (
      <div className="container" >
        <div className="row title-product   text-center" >
          <div className="col-md-12 m-2  ">
            Productos
          </div>
        </div>
        <div className="row">
          {this.state.products.map((art, index) => {
            return (
              <div key={art.idProducts} className="col-md-6  col-lg-3 mt-3 ">
                <div class="card  color-g1">
                  <div className="product-grid">
                    <Link to={"/producto/" + art.idProducts + ""} className="product-image ">
                      <div className="product-grid">
                        <img className="card-img-top img-fluid  product-image " src={(art.proImageSet.length > 0) ? art.proImageSet[0].url : "http://www.sanisidrolonas.com.ar/wp-content/uploads/2014/05/sin-imagen.jpg"} alt="..." />
                      </div>
                    </Link>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">100%  <i className="fa fa-thumbs-up " style={{ "font-size": "1.7em" }}></i> </h5>
                    <h5 class="card-title">{art.nameProducts + " $" + art.price} </h5>
                    <p class="card-text"> {ContadorPlabras(art.description,8)}</p>
                    <i className="fa fa-shopping-cart pull-left link-p-l" ></i>
                    <i className="fa  fa-heart  pull-right link-p-r"></i>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  }

}
//Recive una cadena y retorna una cantida de palabras...
function ContadorPlabras(cadena, num) {
      var BreakException = {};
      var tex = " ";
      try {
        cadena.split(" ").forEach(function (element, i) {
          tex = tex + element + " ";
          if (i === num) throw BreakException;
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
      return tex +"..."
  }
