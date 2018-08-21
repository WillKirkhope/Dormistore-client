import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class ProductPage extends Component {
constructor(props){
  super(props)
  this.state = {
    product: []
  }
}

  componentDidMount(){
      this.getProducts()
  }

  getProducts = () => {
    fetch(`https://dormistore.herokuapp.com/products/${this.parseQueryString()}`)
      .then(response => response.json())
      .then(productData => {
        let stuff = productData.product[0]
        console.log(stuff);
        this.setState({product: stuff})
      })

  }

  parseQueryString = () => {
    let url = window.location.href
    return url.split('/')[4]
  }

  deleteProduct = (event) => {
    const productId = event.target.id
    fetch(`https://dormistore.herokuapp.com/products/${this.state.product.id}`, {
      method: 'DELETE'
    })
  }

  render() {
    return (
      <div className="Home">
      <Header />
      <main>
        <div className="full-product">
          <h1 className="full-product-name">{this.state.product.name}</h1>
          <img className="full-product-image" src={this.state.product.image} />
          <h3 className="full-product-description">{this.state.product.description}</h3>
          <h4 className="price">${this.state.product.price}</h4>
          <h4 className="quantity">Quantity: {this.state.product.quantity}</h4>
          <button onClick={event => this.deleteProduct(event)} id={this.state.product.id}>Delete</button>
          <button>Add To Order</button>
        </div>
      </main>
      <Footer />
      </div>
    );
  }
}

export default ProductPage;
