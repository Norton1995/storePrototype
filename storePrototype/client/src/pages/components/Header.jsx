import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';

//Header component consists of a navbar that loads the varies routes declared in main App
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <div>
            <div>
                <Navbar color="danger" dark expand="md">
                    <NavbarBrand href="/">Golden Shoe Store Prototype</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="/">Home</NavLink>
                          </NavItem>
                            <NavItem>
                                <NavLink href="/products/">Example Product Page</NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="/about/">Help</NavLink>
                          </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
              </div>
            </div>
          );
        }
      }

export default Header;
