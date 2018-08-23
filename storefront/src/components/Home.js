import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Store from './Store'

class Home extends Component {

state = {
  products: []
}

componentDidMount(){
  this.getProducts()
}

getProducts = () => {
  fetch('https://dormistore.herokuapp.com/products')
    .then(response => response.json())
    .then(productData => {
      this.setState({products: productData.product})
    })
}

  render() {
    return (
      <div className="Home">
      <Header />
      <Store products={this.state.products} deleteProduct={this.deleteProduct}  createProduct={this.createProduct}/>
      <Footer />
      </div>
    );
  }
}

export default Home;
