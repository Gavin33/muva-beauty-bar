import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-forms';
import Logo from "../img/Press On Line Logo 1 copy.png"

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                {/* Sale */}
                <div className="text-center sale">
                    Free Shipping on Domestic Orders $75+ | Get 15% Off With Code Muva15
                </div>
                {/* Logo */}
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <a href="/"><img src={Logo}
                                alt="B. Press'd By Muva Beauty Bar Logo" />
                            </a>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

                <Nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-block d-md-none">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="d-block d-md-none">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="d-block d-md-none">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav flex-row align-items-center sticky-top">
                                <li className="nav-item col-4 col-sm-3 col-md-2">
                                    <select name="currency" id="currency" className="custom-select custom-select-sm">

                                        <option selected value="USD">USD</option>

                                        <option value="CAD">CAD</option>

                                        <option value="EUR">EUR</option>

                                        <option value="GBP">GBP</option>

                                    </select>
                                </li>
                                <li className="nav-item col active">
                                    <a href="#" className="nav-link"> Home</a>
                                </li>
                                <li className="nav-item col text-muted">
                                    <a href="shop.html" className="nav-link"> Shop</a>
                                </li>
                                <li className="nav-item col">
                                    <a href="aboutus.html" className="nav-link"> About</a>
                                </li>
                                <li className="nav-item col">
                                    <a href="faq.html" className="nav-link"> FAQs</a>
                                </li>
                                <li className="nav-item col">
                                    <a href="faq.html" className="nav-link"> Subscribe</a>
                                </li>
                                <li className="nav-item col d-none d-md-block">
                                    <i className="fa fa-user"></i>
                                </li>
                                <li className="nav-item col d-none d-md-block">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </li>
                                <li className="nav-item col d-none d-md-block">
                                    <i className="fa fa-shopping-cart"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Nav>
            </React.Fragment >
        );
    }
}

export default Header;