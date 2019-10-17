import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";


export default class Login extends React.Component {
    render() {
        return (
            <div className="container ">
            <Link to="/" >home</Link>
                <div className="row justify-content-center">
                <form className="form-signin">
                     <h1 class="h3 mb-3 font-weight-normal"> <i className="fa fa-user  icon-login "/> Inicio de Sesion</h1>
                    <div className="form-group">
                         <label for="inputEmail" className="sr-only">Email address</label>
                         <input type="email" style={{'background-color':'#f2f2f2'}} id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                    </div>
                    <div className="form-group">
                         <label for="inputPassword" className="sr-only">Password</label>
                         <input type="password" id="inputPassword" style={{'background-color':'#f2f2f2'}} className="form-control" placeholder="Password" required=""/>
                    </div>

                    <div className="form-group">
                        <i className="fa fa-facebook-square  icon-login-log "/>
                        <i className="fa fa-twitter  icon-login-log "/>
                        <i className="fa fa-google-plus-square  icon-login-log "/>
                    </div>

                    <div className="checkbox mb-3">
                        <label> <input type="checkbox" value="remember-me" /> Remember me </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                
                    </form>
                </div>
            </div>
        );
    }
}
