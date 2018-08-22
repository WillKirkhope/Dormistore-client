import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class Create extends Component {

  createProduct = (event) => {
    event.preventDefault()
    let formData = new FormData(event.target)
    let newProduct = {}
    newProduct.name = formData.get("name")
    newProduct.description = formData.get("description")
    newProduct.image = formData.get("image")
    newProduct.price = formData.get("price")
    newProduct.quantity = formData.get("quantity")
    const body = JSON.stringify(newProduct)
    event.target.reset()

    fetch('https://dormistore.herokuapp.com/products/create',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: body
    })
  }

  onSubmit = (event) => {
    this.createProduct(event)
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
