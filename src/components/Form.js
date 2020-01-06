import React from 'react';
// import { render } from 'react-dom';
import { Col, Form, Button } from 'react-bootstrap';


export const Formy = () =>(
<Form>
    <Form.Row>    
        <Form.Group as={Col} controlId="formName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>


        <Form.Group as={Col} controlId="formNumber">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Number" />
        </Form.Group>
    </Form.Row>
    <Form.Group controlId="formGridAddress2">
        <Form.Label>Company Name</Form.Label>
        <Form.Control placeholder="Datacrest Technologies" />
    </Form.Group>

    <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Note</Form.Label>
        <Form.Control />
        </Form.Group>

    </Form.Row>

    <Button variant="primary" type="submit">
        Save
    </Button>
</Form>

)