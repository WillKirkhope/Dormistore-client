import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right={this.props.right}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/create'>Create Product</NavLink>
      </Menu>
    );
  }
}

export default Nav
