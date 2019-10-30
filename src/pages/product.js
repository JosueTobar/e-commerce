import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';

export default class LoginPage extends React.Component {

  constructor(props) {
    var estado = false;
    super(props);
    this.state = {
      product: {},
      images: [],
      image: {}
    }
  }
  showCheckBok = () => {
    this.estado = !this.estado;
    console.log(this.estado);
  }
  reloadImage = (img) => {
    this.setState({ image: img })
  }
  componentWillMount() {
    var url = 'http://192.168.100.47:8090/ecommerce/api/product/' + this.props.id;
    fetch(url)
      .then(response => response.json())
      .then((products) => {
        this.setState({ product: products })
        this.setState({ images: products.proImageSet })
        this.setState({ image: products.proImageSet[0] })
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
            <div class="col-md-12 text-center title-lg">
              <p>{this.state.product.nameProducts}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 d-none d-lg-block ">
              <table>
                {this.state.images.map((img, i) => {
                  return (
                    <tr>
                      <td className="conteiner-img">
                        <a onClick={() => { this.reloadImage(img) }}  >
                          <img key={i} className="img-item" src={img.url}/>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="col-md-5">
              <td>
                <img className="img-show-item "  src={this.state.image.url}  />
              </td>
            </div>
            <div className="col-md-5 ">
              <h3 className=" text-center"  >100%  <i className="fa fa-thumbs-up " style={{ "font-size": "1.2em" }} ></i> </h3>
              <p className=" text-center mb-5" >{this.state.product.description} </p>
              <form>
                <div class="form-row mb-3 text-center">
                  <div class="col title-lg">
                    ${this.state.product.price}
                   </div>
                </div>
              </form>
              <center>
                <i className="fa fa-heart mr-4  align-middle" style={{ "font-size": "2.6em" }} > </i>  <a className="btn color-g2 br-10"> Añadir a la Cesta</a>
              </center>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mt-5 mb-5">
            <div className="col-md-10 m-5 ">
              <h1>Descripción</h1>
                <p>{this.state.product.description}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
