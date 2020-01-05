import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Col, Row } from 'react-bootstrap';
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
    <Row>
        <Col md={12}>
            <Navbar>
                <Navbar.Brand href="/">
                    Contact-Book
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="bio">
                        {/* <Nav.Item><Nav.Link to="/">Home</Nav.Link></Nav.Item> */}
                        <Nav.Item><Nav.Link href="/contact-book">Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/single-view">Single Contact View</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/edit-page">Edit Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    </Row>
</Styles>
)