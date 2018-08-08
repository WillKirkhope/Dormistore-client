import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
// import Nav from './components/Nav'
import './App.css';

class App extends Component {

state = {
  products: []
}

componentDidMount(){
  fetch('https://dormistore.herokuapp.com/products')
    .then(response => response.json())
    .then(productData => {
      this.setState({products: productData.product})
    })
    console.log('data', this.state.products)
}


  render() {
    return (
      <div className="App">
      <Header />
      <Store products={this.state.products} />
      <Footer />
      </div>
    );
  }
}

export default App;
