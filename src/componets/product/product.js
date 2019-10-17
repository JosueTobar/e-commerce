import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
export default class Product  extends React.Component{
  constructor(props) {
      super(props);
      this.state = { products: [
                      {
                      "idProducts": 1,
                      "productCode": "A",
                      "sku": "AA",
                      "nameProducts": "Nintendo",
                      "description": "Best Company ever",
                      "colour": "Red",
                      "updateDate": null,
                      "price": 1.0E8,
                      "quantity": 1,
                      "taxes": 0.0,
                      "additionalShippingCost": 0.0,
                      "wholeSalePrice": 1.0E8,
                      "productDeliveryDate": -2180109600000,
                      "width": 200.0,
                      "height": 200.0,
                      "depth": 900.0,
                      "weight": 500.0,
                      "idOrders": null,
                      "productsCategorySet": [],
                      "proImageSet": []
                      },

                      {
                        "idProducts": 2,
                        "productCode": "A",
                        "sku": "AA",
                        "nameProducts": "Nintendo",
                        "description": "Best Company ever",
                        "colour": "Red",
                        "updateDate": null,
                        "price": 1.0E8,
                        "quantity": 1,
                        "taxes": 0.0,
                        "additionalShippingCost": 0.0,
                        "wholeSalePrice": 1.0E8,
                        "productDeliveryDate": -2180109600000,
                        "width": 200.0,
                        "height": 200.0,
                        "depth": 900.0,
                        "weight": 500.0,
                        "idOrders": null,
                        "productsCategorySet": [],
                        "proImageSet": []
                    },
                    {
                      "idProducts": 3,
                      "productCode": "A",
                      "sku": "AA",
                      "nameProducts": "Nintendo",
                      "description": "Best Company ever",
                      "colour": "Red",
                      "updateDate": null,
                      "price": 1.0E8,
                      "quantity": 1,
                      "taxes": 0.0,
                      "additionalShippingCost": 0.0,
                      "wholeSalePrice": 1.0E8,
                      "productDeliveryDate": -2180109600000,
                      "width": 200.0,
                      "height": 200.0,
                      "depth": 900.0,
                      "weight": 500.0,
                      "idOrders": null,
                      "productsCategorySet": [],
                      "proImageSet": []
                      }
                   ]
              }
    }

    /*
    componentDidMount() {
      fetch('http://192.168.100.72:8090/ecommerce/api/producto')
        .then(response => response.json())
        .then((products) => {
          this.setState({ products: products })
        })
      .catch(console.log)
    }
    */


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


<div class="modal fade product "   tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">

  <div className="modal-dialog modal-lg" role="document">


    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="product-cuerpo">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-sm">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}
