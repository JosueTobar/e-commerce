import React from 'react';
import CategoryItemm from './categoryItem';
export default class Category extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset1.png"}  name="telefonos"/>
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset2.png"}  name="turkuing" />
                    <CategoryItemm img={process.env.PUBLIC_URL+"/images/Asset3.png"}  name="¿prueba?" />
                </div>
            </div>
        );
    }
} 