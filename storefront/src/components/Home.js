import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Store from './Store'
// import Nav from './components/Nav'




class Home extends Component {

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
  let formData = new FormData(event.target)
  let newProduct = {}
  newProduct.name = formData.get("name")
  newProduct.description = formData.get("description")
  newProduct.image = formData.get("image")
  newProduct.price = formData.get("price")
  newProduct.quantity = formData.get("quantity")
  const body = JSON.stringify(newProduct)
  event.target.reset()

  fetch('https://dormistore.herokuapp.com/products/create',{
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: body
  })
    .then(() => this.getProducts())
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
      <div className="Home">
      <Header />
      <Store products={this.state.products} deleteProduct={this.deleteProduct}  createProduct={this.createProduct}/>
      <Footer />
      </div>
    );
  }
}

export default Home;
