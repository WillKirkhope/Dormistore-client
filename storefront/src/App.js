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
}

getProducts = () => {
  fetch('https://dormistore.herokuapp.com/products')
    .then(response => response.json())
    .then(productData => {
      this.setState({products: productData.product})
    })
}

createProduct = (event) => {
  event.preventDefault()
  fetch('https://dormistore.herokuapp.com/products/create',{
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify()
  })
    .then(response => response.json())
}

deleteProduct = (event) => {
  console.log('delete was clicked')
  console.log('target',event.target.id)

  const productId = event.target.id
  fetch(`https://dormistore.herokuapp.com/products/${productId}`, {
    method: 'DELETE'
  })
  .then(() => this.getProducts())
}


  render() {
    return (
      <div className="App">
      <Header />
      <Store products={this.state.products} deleteProduct={this.deleteProduct}  createProduct={this.createProduct}/>
      <Footer />
      </div>
    );
  }
}

export default App;
