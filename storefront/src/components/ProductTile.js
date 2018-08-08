import React from 'react';

const ProductTile = (props) => {
  return (
      <div className="product-tile">
        <h3 className="product-name">{props.product.name}</h3>
        <img src={props.product.image} className="product-image" alt={props.title} />
      </div>
  )
}

export default ProductTile;
