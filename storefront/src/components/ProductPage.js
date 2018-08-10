import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class ProductPage extends Component {
  render() {
    return (
      <div className="Home">
      <Header />
      <main>
        <div className="full-product">
          <h1 className="full-product-name">Product Name</h1>
          <img className="full-product-image" />
          <h3 className="full-product-description"></h3>
          <h4 className="price"></h4>
          <h4 className="quantity"></h4>
          <button>Add To Order</button>
        </div>
      </main>
      <Footer />
      </div>
    );
  }
}

export default ProductPage;
