import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class Create extends Component {

  onSubmit = (event) => {
    this.props.createProduct(event)
  }

  render(){
    return (
      <div className="Home">
      <Header />
      <main>
        <form className="create-form" onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" />
          <label htmlFor="price">Price</label>
          <input type= "integer" name="price" />
          <label htmlFor="quantity">Quantity</label>
          <input type="integer" name="quantity" />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </main>
      <Footer />
      </div>
    )
  }
}

export default Create;
