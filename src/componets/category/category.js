import React from 'react';
import CategoryItemm from './categoryItem';
export default class Category extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 text-center title-lg">
                    <div className="col">  <p>CATEGORÍAS</p></div>
                </div>
                <div className="row mt-5">
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset1.png"}  name="Celulares"/>
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset2.png"}  name="Herramientas" />
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset3.png"}  name="Computadoras" />
                </div>
            </div>
        );
    }
} 