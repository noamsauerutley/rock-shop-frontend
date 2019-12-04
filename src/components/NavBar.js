import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export class NavBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      // <div>
      //   <h2 as={Link} to="/">We Sell Rocks</h2>
      //   <Link to="/rocks">Browse Rocks</Link>
      //   <Link to="/login">Log In</Link>
      //   <Link to="/cart">Cart</Link>
      // </div>
      <Menu>
        <Menu.Item as={Link} to="/" header>We Sell Rocks</Menu.Item>
        <Menu.Item as={Link} to="/rocks"
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to="/login"
          name='logIn'
          active={activeItem === 'logIn'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to="/cart"
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default NavBar;

