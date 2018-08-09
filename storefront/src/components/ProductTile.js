import React from 'react';

const ProductTile = (props) => {
  return (
      <div className="product-tile" onClick={this.props}>
        <h3 className="product-name">{props.product.name}</h3>
        <img src={props.product.image} className="product-image" alt={props.title} />
        <button onClick={event => props.deleteProduct(event)} id={props.product.id}>Delete</button>
      </div>
  )
}

export default ProductTile;
