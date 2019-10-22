import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './includes/bootstrap';
import './includes/constants';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './resourses/css/myStyles.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
