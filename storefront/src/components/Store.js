import React, { Component } from 'react';
import ProductTile from './ProductTile';


class Store extends Component {
render() {
const products = this.props.products.map(product => {
  return <ProductTile product = {product} deleteProduct={this.props.deleteProduct} />
})
  return (
    <div>
    <div className="store-front">
      {products}
    </div>
  </div>
  )
}
}

export default Store
