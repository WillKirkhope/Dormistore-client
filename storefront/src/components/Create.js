import React, { Component } from 'react';

class Create extends Component {
  render(){
    return (

      <form className="create-form" onSubmit={this.props.createProduct}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
        <label htmlFor="image">Image</label>
        <input type="text" name="imageUrl" />
        <label htmlFor="price">Price</label>
        <input type= "integer" name="price" />
        <label htmlFor="quantity">Quantity</label>
        <input type="integer" name="quantity" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    )
  }
}

export default Create;
