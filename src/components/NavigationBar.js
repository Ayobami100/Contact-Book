import React from 'react';
import {
    Nav, 
    Navbar, 
    // Col, 
    // Row 
} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
background-color:#222;
}

a,.navbar-brand, .navbar-nav .nav-link{
color:#bbb;

    &:hover{
        color:white;
    }
}
.bio{
    
}

`;

export const NavigationBar = () => (
<Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/">
            Contact-Book
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact-book">Add Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/single-view">Single Contact View</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/edit-page">Edit Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</Styles>
)