import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer  className="footer">
                <div className="row align-items-center">
                    <div className="col-md-8" >
                    <h5 className="pull-left">ACERCA DE</h5>
                    <span className="copyright"> <a href="" className="text-foter-ft">Informacion de la empresa</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">Inversionistas</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">Noticias</a></span>
                    <span className="copyright"> <a href="" className="text-foter-ft">Relaciones gubernamentales</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">Trabajos</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">Anunciate con nosotros</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">Pol&iacute;tica</a></span>
                    <span className="copyright"> <a href="" className="text-foter-t">ǀ</a></span>
                    </div>
                    <div className="col-md-4 pull-left">
                        <h5 className="pull-left" >COMUNIDAD</h5>
                        <span className="copyright"> <a href="" className="text-foter-ft">Avisos</a></span>
                        <span className="copyright"> <a href="" className="text-foter-t">Foro de preguntas y respuestas</a></span>
                        <span className="copyright"> <a href="" className="text-foter-t">Foro de discusi&oacute;n</a></span>
                        <span className="copyright"> <a href="" className="text-foter-t">Grupos</a></span>
                    </div>
                </div> 
        </footer>
        );
    }
} 