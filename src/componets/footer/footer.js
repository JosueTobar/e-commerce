
import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
               
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" style={{'lign-self':'auto'}}>
                    <h5 style={{'text-align':'left'}}>ACERCA DE</h5>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-top':'8px'}}>Informacion de la empresa</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Inversionistas</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Noticias</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-top':'8px'}}>Relaciones gubernamentales</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Trabajos</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Anunciate con nosotros</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Pol&iacute;tica</a></span>
                    <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>ǀ</a></span>
                    </div>
                    <div className="col-md-6" style={{'text-align':'left'}}>
                        <h5 style={{'text-align':'left'}}>COMUNIDAD</h5>
                        <span className="copyright"> <a href="" className="text-muted" style={{'margin-top':'8px'}}>Avisos</a></span>
                        <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Foro de preguntas y respuestas</a></span>
                        <span className="copyright"> <a href="" className="text-muted" style={{'margin-left': '5px' ,'margin-top':'5px'}}>Foro de discusi&oacute;n</a></span>
                        <span className="copyright"> <a href="" className="text-muted" style={{'margin-top':'8px'}}>Grupos</a></span>
                    </div>
                </div>
                </div>
        </footer>
        );
    }
} 