import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer color-g1 ">
                <div className="conteiner ">
                    <div className="row align-items-center">
                        <div className="col-md-7" >
                            <div className="conteiner">
                                <div className="row">
                                    <div className="col pull-left"> ACERCA DE </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className="copyright"> <a href="" className="text-foter-ft link">Informacion de la empresa</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Inversionistas</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Noticias</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-ft link">Relaciones gubernamentales</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Trabajos</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Anunciate con nosotros</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Pol&iacute;tica</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">ǀ</a></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 pull-left">
                            <div className="conteiner">
                                <div className="row">
                                    <div className="col pull-left"> COMUNIDAD</div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span className="copyright"> <a href="" className="text-foter-ft link">Avisos</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Foro de preguntas y respuestas</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Foro de discusi&oacute;n</a></span>
                                        <span className="copyright"> <a href="" className="text-foter-t link">Grupos</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        );
    }
} 