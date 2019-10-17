import React from 'react';
export default class Banner  extends React.Component{
  render(){
    return(
        <div className="conteiner">
                 <img className="img-fluid" src={process.env.PUBLIC_URL+"/images/banner.png"} alt="Responsive image" />    
        </div>
    );
  }
}