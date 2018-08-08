import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <img src='https://pre00.deviantart.net/14ca/th/pre/f/2015/334/9/c/rammy_goat_vector___castle_crashers_by_mordefic-d9il0qf.png' className="App-logo" alt="logo" />
        <h1 className='App-header-title'>Dormistorë</h1>
        <Nav right />
      </header>
    )
  }
}

export default Header;
