import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class About extends Component {
  render() {
    return (
      <div className="Home">
      <Header />
      <main>
      <h1>This is About...</h1>
      </main>
      <Footer />
      </div>
    );
  }
}

export default About;