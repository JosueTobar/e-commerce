import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
export default class Product  extends React.Component{
  constructor(props) {
      super(props);
      this.state = { products: []
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

            <div className="row title-product   text-center" >
         <div className="col-md-12    m-2  ">
         Productos
           </ div>
         
         
        </div>
          <div className="row">
          {this.state.products.map((art, index)=> {
                return (
                  <div  key={art.idProducts} className="col-md-6  col-lg-3   mt-3  ">
                      <div class="card" >
                          <div className="product-grid6">
                                <div className="product-image6">
                                <Link to={"/producto/"+art.idProducts+"" }>
                                        <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/carousel1.jpg"} alt="Responsive image" />
                                </Link>    
                                </div>
                          </div>
                      <div class="card-body">
                          <h5 class="card-title text-center">100%  <i className="fa fa-thumbs-up " style={{"font-size": "1.7em"}}></i> </h5>
                          <h5 class="card-title">{art.nameProducts} </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <i className="fa fa-shopping-cart pull-left" style={{"font-size": "1.7em", "padding-left":"20%"}}></i>
                              <i className="fa  fa-heart  pull-right" style={{"font-size": "1.7em", "padding-right":"20%"}}></i>
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