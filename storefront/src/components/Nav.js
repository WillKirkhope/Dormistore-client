import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right={this.props.right}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/create">Create New</a>
        <a id="contact" className="menu-item" href="/login">Login/Signup</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Nav
