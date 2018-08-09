import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class Error extends Component {
  render() {
    return (
      <div className="Home">
      <Header />
      <main>
      <h1>Error...</h1>
      </main>
      <Footer />
      </div>
    );
  }
}

export default Error;
