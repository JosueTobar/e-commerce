import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';

export default class LoginPage extends React.Component {
  
  constructor(props) {
    var estado = false;
    super(props);
    this.state = { 
      product: {},
      images:[],
      image:{}
    }
  }

  showCheckBok =() =>{
    this.estado = !this.estado;
      console.log(this.estado);
  }
  reloadImage =(img) =>{
    this.setState({image: img })
  }

  componentWillMount() {
    var url = 'http://192.168.100.47:8090/ecommerce/api/producto/' + this.props.id;
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
            <div class="col-md-12 tex-center">
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={(e)=>this.showCheckBok()} />
                    <label className="form-check-label" for="exampleCheck1" >Check me out</label>
                  </div>
              <p>  {this.state.product.nameProducts } </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 d-none d-lg-block ">
              <table>
                {this.state.images.map((img,i)=>{
                  return(
                    <tr>
                      <td>
                        <a onClick={()=>{this.reloadImage(img)}}  > 
                           <img  className="" width="60px" height="80px" src={img.url} class="img-responsive" />
                        </a>
                        </td>
                   </tr>
                  );
                }) }
                
              </table>
              
            </div>
            <div className="col-md-5">
            <td>
              
              <img className=" " width="350px" height="600px" src={this.state.image.url} class="img-responsive" />
              
              </td>
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
