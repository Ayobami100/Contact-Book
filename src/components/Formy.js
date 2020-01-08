import React from 'react';
// import { render } from 'react-dom';
import { Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'

class Formy extends React.Component {
constructor(props){
    super(props)
    this.state = {
        firstName:'',
        lastName:'',
        telephone:'',
        company:'',
        note:'',
    }
    this.props = {
        name:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addContact = this.addContact.bind(this);
}
handleChange(e){
    let inputId = e.target.getAttribute('input-id');
    this.setState({ [inputId] : e.target.value });
    
    // alert(e.target.value)
}
addContact(e){
    e.preventDefault();
   
    if(this.props.name === 'save'){
       
        axios.post('https://mfoncontact.herokuapp.com/contact/', {
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
        "telephone":this.state.telephone,
        "company_name":this.state.company,
        "note":this.state.note
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    else{
        axios.put('https://mfoncontact.herokuapp.com/contact/', {
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
        "telephone":this.state.telephone,
        "company_name":this.state.company,
        "note":this.state.note
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

render(){
    return(
    <Form>
        <Form.Row>    
            <Form.Group as={Col} controlId="formName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" input-id={'firstName' } onChange={this.handleChange} placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" input-id={'lastName'} onChange={this.handleChange} placeholder="Enter Last Name" />
            </Form.Group>


            <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="text" input-id={'telephone'} onChange={this.handleChange} placeholder="Enter Number" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formCompany">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" input-id={'company'} onChange={this.handleChange} placeholder="Datacrest Technologies" />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formNote">
            <Form.Label>Note</Form.Label>
            <Form.Control type="text" input-id={'note'} onChange={this.handleChange} placeholder="IT Specialist"/>
            </Form.Group>

        </Form.Row>

        <Button variant="primary" onClick={this.addContact} type="submit">
        {this.props.name }
        </Button>
    </Form>
        )
    }
}



export default Formy;