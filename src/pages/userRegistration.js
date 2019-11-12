

import React from 'react';
import Nav from '../componets/nav';
import Footer from '../componets/footer/footer';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default class userRegistration extends React.Component {
  render() {
    return (
      <div>   
        <Nav />
        <body>
          <div className="conteiner" >
            <div className="row mt-4">
              <div className="col"> </div>
              <div className="col mt-3"> 
                   <i style={{ "font-size": "3em" }} className="fa fa-user fa-pull-left icon-nav" /> <p style={{ "font-size": "2em" }} > Crea tú cuenta</p>
                    <form class="text-center" action="#!">
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px", "background" :"#f2f2f2" }} type="text" class="form-control form-control-lg mb-3 text-center " placeholder="NOMBRE" />
                            </div>
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px", "background" :"#f2f2f2" }} type="text"  class="form-control form-control-lg mb-3 text-center " placeholder="APELLIDO" />
                            </div>
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px", "background" :"#f2f2f2" }} type="email" class="form-control form-control-lg mb-3 text-center " placeholder="CORREO" />
                            </div>
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px", "background" :"#f2f2f2" }} type="email" class="form-control form-control-lg mb-3 text-center " placeholder="CONTRASEÑA" />
                            </div>
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px" , "background" :"#f2f2f2"}} type="password"  class="form-control form-control-lg mb-3 text-center " placeholder=" CONFIRMAR CONTRASEÑA" />
                            </div>
                            <div class="md-form">
                              <input style={{ "border-radius": "15px 15px 15px 15px", "background" :"#f2f2f2" }} type="password" class="form-control form-control-lg mb-3 text-center" placeholder="FECHA DE NACIMIENTO" />
                            </div>
                            <div class="d-flex justify-content-around">
                              <div>
                            <div class="form-check mb-2">
                              <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" />
                              <label class="form-check-label" for="materialLoginFormRemember">Deseo recibir newsletter con novedades</label>
                            </div>
                            <div class="md-form">
                                <button className="btn btn-lg btn-block" style={{"border-radius": " 15px  15px  15px  15px","background":"#cccccc"}} > Enviar </button>
                              </div>
                          </div>
                      </div>
                    </form>
              </div>
              <div className="col"> </div>
            </div>
          </div>
        </body>
        <Footer/>
      </div>
    );
  }
}
