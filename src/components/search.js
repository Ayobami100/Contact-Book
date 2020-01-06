import React from 'react';
import { Container } from 'react-bootstrap';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';


export const Search = () => 
(
    <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" placeholder="Search Number" />
        </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
            Search
        </Button>
    </Form>

)
