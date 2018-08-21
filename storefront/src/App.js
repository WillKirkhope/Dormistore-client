import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import ProductPage from "./components/ProductPage"
import Login from "./components/Login"
import About from "./components/About"
import Create from './components/Create'
import Error from "./components/Error"



class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/products/:id' component={ProductPage} />
              <Route path='/login' component={Login} />
              <Route path='/about' component={About} />
              <Route path='/create' component={Create} />
              <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
