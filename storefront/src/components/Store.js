import React, { Component } from 'react';
import ProductTile from './ProductTile';
import Create from './Create'


class Store extends Component {

  state = {
      isToggleOn: true
  }

  toggle = () => {
      this.setState({
          isToggleOn: !this.state.isToggleOn
      })
  }
render() {
const products = this.props.products.map(product => {
  return <ProductTile product = {product} deleteProduct={this.props.deleteProduct} />
})
  return (
    <div className="store-front">
      {products}
        <button onClick={this.createProduct}>Create Product</button>
        <section id="application-preview" className={this.state.isToggleOn ? "hidden" : ""}>{this.props.applicationText}</section>
    </div>
  )
}
}

export default Store
