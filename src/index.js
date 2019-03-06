import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context.js'
import * as serviceWorker from './serviceWorker';
import FormContainer from "./containers/FormContainer";

ReactDOM.render(
	<ProductProvider>
	<Router>
	<React.Fragment>
		{/*Here we put the App.js component into the router, 
		as this Router is the parent component of the App */}
		<App />
	</React.Fragment>
	</Router>
	</ProductProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
