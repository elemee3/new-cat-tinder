import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="App-Header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Cat Tinder</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/about">
              About
            </NavItem>
            <NavDropdown eventKey={3} title="Browse Cats" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Long Hair</MenuItem>
              <MenuItem eventKey={3.2}>Short Hair</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} href="/cats">All Cats</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="/cats/new">
              Add a Profile
            </NavItem>
          </Nav>
          <Navbar.Collapse>
            <Navbar.Text pullRight>Meeeow!</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Header;
