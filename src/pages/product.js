import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [] }
  }

  componentDidMount() {
    var url = 'http://192.168.100.72:8090/ecommerce/api/producto/' + this.props.id;
    fetch(url)
      .then(response => response.json())
      .then((products) => {
        this.setState({ product: products })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <div className="container mt-5" >
          <div className="row">
            <div class="col-md-12 tex-center">
              <p>  {this.state.product.nameProducts} </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 d-none d-lg-block ">
              <table>
                <tr>
                  <td><img className=" " width="60px" height="80px" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive" /></td>
                </tr>
                <tr>
                  <td> <img width="60px" height="80px" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive" /></td>
                </tr>
                <tr>
                  <td><img width="60px" height="80px" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive" /></td>
                </tr>
              </table>

            </div>
            <div className="col-md-5">
              <center>
              <img width="250px" height="400" src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" class="img-responsive" />
              </center>
              
            </div>
            <div className="col-md-5 ">
              <h3 className=" text-center"  >100%  <i className="fa fa-thumbs-up " style={{ "font-size": "1.2em" }} ></i> </h3>
              <p className=" text-center mb-5" >es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las. </p>
                  <form>
                      <div class="form-row mb-3">
                          <div class="col">
                            <input className="form-control " type="text" placeholder="cantidad" ></input> 
                          </div>
                          <div class="col ">
                                  $$$$$
                          </div>
                      </div>
                </form>
                <center> 
                <i className="fa fa-heart mr-4 " style={{ "font-size": "2.6em" }} > </i>  <a className="btn btn-secondary"> Añadir a la Cesta</a>
                </center>
                
                 
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="row mt-5 mb-5">

            <div className="col-md-10 m-5 ">
              <h1>Descripción</h1>
              <p >Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
