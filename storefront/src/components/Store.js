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
    <div>
    <div className="store-front">
      {products}
    </div>
    <div className="form-pop-up">
      <button onClick={this.toggle}>Create Product</button>
      <section id="create-form" className={this.state.isToggleOn ? "hidden" : ""}>
        <Create createProduct={this.props.createProduct} />
      </section>
    </div>
  </div>
  )
}
}

export default Store
