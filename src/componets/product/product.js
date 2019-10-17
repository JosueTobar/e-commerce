import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
export default class Product  extends React.Component{
  constructor(props) {
      super(props);
      this.state = { products: [ ]
              }
    }

    componentDidMount() {
      fetch('http://192.168.100.72:8090/ecommerce/api/producto')
        .then(response => response.json())
        .then((products) => {
          this.setState({ products: products })
        })
      .catch(console.log)
    }
    
 detalleProducto = (pro) =>{
     console.log(pro)
 }

  render(){
    return(
      <div className="container" >
        <div className="row " >
            <h2 className="title-product">Productos</h2>
        </div>
          <div className="row">
          {this.state.products.map((art, index)=> {
            return (
              <div  key={art.idProducts} className="col-md-3 col-sm-6 productItem">
                  <div className="product-grid6">
                      <div className="product-image6">
                          <a href="#">
                            <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/carousel1.jpg"} alt="Responsive image" />
                          </a>
                      </div>
                      <div className="product-content">
                          <h3 className="title"><a href="#">{art.nameProducts}</a></h3>
                          <div className="price">${art.price}
                          </div>
                      </div>
                      <ul className="social">
                          <Link to={"/producto/"+art.idProducts+"" }><li><a href="" data-tip="Agregar a Favoristos"><i className="fa fa-eye"></i></a></li></Link>
                          <li><a href="" data-tip="Agregar a Favoristos"><i className="fa fa-heart"></i></a></li>
                          <li><a href="" data-tip="Agregar a Carrito"><i className="fa fa-shopping-cart"></i></a></li>
                      </ul>
                  </div>
              </div>
          );
        })}

          </div>
      </div>
    );
  }
}
