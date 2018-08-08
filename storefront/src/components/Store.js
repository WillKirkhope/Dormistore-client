import React from 'react';
import ProductTile from './ProductTile'

const Store = (props) => {
const products = props.products.map(product => {
  return <ProductTile product = {product} />
})
  return (
    <div className="store-front">
      {products}
    </div>
  )
}

export default Store
