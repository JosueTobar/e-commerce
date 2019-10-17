import React from 'react';
import Nav from '../componets/nav';
import Category from '../componets/category/category';
import Footer from '../componets/footer/footer';

export default class LoginPage  extends React.Component{
  constructor(props) {
    super(props);
    this.state = { product: [] }
  }
  
  componentDidMount() {
    var url = 'http://192.168.100.72:8090/ecommerce/api/producto/'+this.props.id;
    fetch(url)
      .then(response => response.json())
      .then((products) => {
        this.setState({ product: products })
      })
    .catch(console.log)
  }

  render(){
    return(
      <div>
      <header>
      <Nav/>
     </header>
              <div className="container mt-5" >

              <div class="row">
                    <div class="col-md-6 product_img">
                        <img width="200px" height="400" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive"/>
                    </div>
                    <div class="col-md-6 product_content">
                        <h4><span>{this.state.product.nameProducts} </span></h4>
                        <div class="rating">
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                           
                        </div>
                        <p> {this.state.product.description}   </p>
                        <h3 class="cost"><span class="glyphicon glyphicon-usd"></span> 75.00 <small class="pre-cost"><span class="glyphicon glyphicon-usd"></span> 60.00</small></h3>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <select class="form-control" name="select">
                                    <option value="" selected="">Color</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                    <option value="gold">Gold</option>
                                    <option value="rose gold">Rose Gold</option>
                                </select>
                            </div>
                        
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <select class="form-control" name="select">
                                    <option value="">Capacity</option>
                                    <option value="">16GB</option>
                                    <option value="">32GB</option>
                                    <option value="">64GB</option>
                                    <option value="">128GB</option>
                                </select>
                            </div>
                            
                            <div class="col-md-4 col-sm-12">
                                <select class="form-control" name="select">
                                    <option value="" selected="">QTY</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                          
                        </div>
                        <div class="space-ten"></div>
                        <div class="btn-ground">
                            <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                            <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-heart"></span> Add To Wishlist</button>
                        </div>
                    </div>
                </div>
              </div>
      <Category/>
      <Footer/>
  </div>
    );
  }
}
