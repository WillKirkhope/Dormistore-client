import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
// import Nav from './components/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Store />
      <Footer />
      </div>
    );
  }
}

export default App;
