import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';


export const Formy = () =>(
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formNumber">
      <Form.Label>Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Number" />
    </Form.Group>
    <Form.Group as={Col} controlId="formName">
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>LastName</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> */}

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>

)