import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import LOGO from '../shared/Logo';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  // Just keeping this one for when/if we need a login function.
  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        {/* Sale */}
        <div className="container px-0">
        <div className="text-center sale row">
          Free Shipping on Domestic Orders $75+ | Get 15% Off With Code Muva15
        </div>
        {/* Logo */}
          <div className="row justify-content-center">
            <div className="col"></div>
            <div className="col">
              <a href="/" className="col">
                <img
                  src={LOGO}
                  alt="B. Press'd By Muva Beauty Bar Logo"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col"></div>
          </div>
        </div>
        {/* Navbar */}
        <Navbar light sticky="top" expand="md" className="bg-light">
          <div className="container">
            <div className="row">
              <NavbarToggler onClick={this.toggleNav} className="col-3" />
              <div className="col" />
              <div className="d-block d-md-none col">
                <i className="fa fa-user"></i>
              </div>
              <div className="col" />
              <div className="d-block d-md-none col">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className="col" />
              <div className="d-block d-md-none col">
                <i className="fa fa-shopping-cart"></i>
              </div>
            </div>
            {/* Select */}
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="col-4 col-sm-3 col-md-2 mt-2">
                  <select
                    name="currency"
                    id="currency"
                    className="custom-select custom-select-sm"
                  >
                    <option defaultValue value="USD">
                      USD
                    </option>

                    <option value="CAD">CAD</option>

                    <option value="EUR">EUR</option>

                    <option value="GBP">GBP</option>
                  </select>
                </NavItem>
                {/* Links */}
                <NavItem className="col active">
                  <a href="/" className="nav-link">
                    {' '}
                    Home
                  </a>
                </NavItem>
                <NavItem className="col text-muted">
                  <a href="/shop" className="nav-link">
                    {' '}
                    Shop
                  </a>
                </NavItem>
                <NavItem className="col">
                  <a href="/aboutus" className="nav-link">
                    {' '}
                    About
                  </a>
                </NavItem>
                <NavItem className="col">
                  <a href="/faq" className="nav-link">
                    {' '}
                    FAQs
                  </a>
                </NavItem>
                <NavItem className="col">
                  <a href="/faq" className="nav-link">
                    {' '}
                    Subscribe
                  </a>
                </NavItem>
                {/* Icons */}
                <NavItem className="col d-none d-md-block mt-2">
                  <i className="fa fa-user"></i>
                </NavItem>
                <NavItem className="col d-none d-md-block mt-2">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </NavItem>
                <NavItem className="col d-none d-md-block mt-2">
                  <i className="fa fa-shopping-cart"></i>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
