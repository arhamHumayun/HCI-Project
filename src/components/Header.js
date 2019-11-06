import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Button from 'react-bootstrap/Button';

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand href="/#/">Tabletop Group Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/#/find-group">Find Group</Nav.Link>
                    <Nav.Link href="/#/create-group">Create Group</Nav.Link>
                    <Nav.Link href="/#/profile">My Profile</Nav.Link>
                    <Nav.Link href="/#/settings" inline>Settings</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
