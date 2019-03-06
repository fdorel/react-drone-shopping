import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = "/" component = { ProductList } />
          <Route path = "/About" component = { About } />
          <Route path = "/Contact" component = { Contact } />
          <Route path = "/details" component = { Details } />
          <Route path = "/cart" component = { Cart } />
          <Route component = { Default } />
        </Switch>
          <Modal />
      </React.Fragment>
    );
  }
}

export default App;
