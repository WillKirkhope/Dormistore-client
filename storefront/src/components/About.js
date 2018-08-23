import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'

class About extends Component {
  render() {
    return (
      <div className="Home">
      <Header />
      <main>
      <div className="about-page">
      <h1>Dormistorë is a consignment store that specializes in products for your dorm and or apartment.</h1>
      <h3>Every product you see has been gently used and is available to you at steep discounts!</h3>
      <div className= "founders">
      <p>Josh Robbs - Co-Founder</p>
      <img className="about-image" src= "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
      <p>Will Kirkhope - Co-Founder</p>
      <img className="about-image" src= "https://i.imgur.com/Wj8Pinu.jpg" />
      </div>
      </div>
      </main>
      <Footer />
      </div>
    );
  }
}

export default About;
