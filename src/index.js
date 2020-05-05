import React from 'react';
import ReactDOM from 'react-dom';


// import "bootstrap/dist/css/bootstrap.css";

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/font-awesome/css/font-awesome.css";

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate( < App /> , document.getElementById('root'));
registerServiceWorker();
