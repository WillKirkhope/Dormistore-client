import React from 'react';
import { NavLink } from 'react-router-dom'


const ProductTile = (props) => {
  return (
    <NavLink to={"/products/"+ props.product.id}>
      <div className="product-tile" onClick={this.props}>
        <h3 className="product-name">{props.product.name}</h3>
        <img src={props.product.image} className="product-image" alt={props.title} />
      </div>
    </NavLink>
  )
}

export default ProductTile;
