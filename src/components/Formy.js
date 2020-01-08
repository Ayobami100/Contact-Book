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
        // forFirstName:'',
        // forLastName:'',
        // forTelephone:'',
        // forCompany:'',
        // forNote:'',
        contacts:[],
        contactIden:''
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.addContact = this.addContact.bind(this);
    this.fetchWithId = this.fetchWithId.bind(this)
    this.gotoHomePage = this.gotoHomePage.bind(this)
}
handleChange(e){
    let inputId = e.target.getAttribute('input-id');
    this.setState({ [inputId] : e.target.value });
    
}
gotoHomePage(){
    window.parent.location = window.parent.location.href;
  }
// handleValueChange(e){
//    console.log(e)
//     this.setState({
//         forTelephone : e.currenttarget.value,
//         forCompany :  e.target.value,
//         forFirstName : e.target.value,
//         forLastName :  e.target.value,
//         forNote : e.target.value,
//         // contactIden: contactId
//       })
    
// }
handedChanged(data){
    const pathString = window.location.pathname
    let pathStringSplit = pathString.split('/')
    var contactId = pathStringSplit[pathStringSplit.length-1]
    this.setState({

        telephone : data.telephone,
        company : data.company_name,
        firstName : data.first_name,
        lastName : data.last_name,
        note : data.note,
        contactIden: contactId
        })
}

componentDidMount(){
    if(this.props.name === 'Update'){
        const pathString = window.location.pathname
        let pathStringSplit = pathString.split('/')
        var contactId = pathStringSplit[pathStringSplit.length-1]
        this.fetchWithId(contactId)
       
}}
fetchWithId(id){
    fetch('https://mfoncontact.herokuapp.com/contact/'+ id +'/')
    .then(res => res.json())
    .then((data) => {
    this.setState({ contacts: data })
    // console.log(data);
    this.handedChanged(data);
    
    })
    .catch(console.log)
  
    }




addContact(e){
    e.preventDefault();
   
    if(this.props.name === 'Save'){
       
        axios.post('https://mfoncontact.herokuapp.com/contact/', {
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
        "telephone":this.state.telephone,
        "company_name":this.state.company,
        "note":this.state.note
        })
        .then(function (response) {
        // console.log(response);
        window.alert('Contact Saved!')
        this.props.history.push('/welcome')
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    else{
        axios.put('https://mfoncontact.herokuapp.com/contact/'+this.state.contactIden+'/', {
       
            "first_name":this.state.firstName,
            "last_name":this.state.lastName,
            "telephone":this.state.telephone,
            "company_name":this.state.company,
            "note":this.state.note
        })
        .then(function (response) {
            console.log(response);
            window.alert('Contact Updated!')
            this.props.history.push('/welcome')
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
            <Form.Control type="text" input-id={'firstName' } onChange={this.handleChange}  placeholder="Enter First Name" value={this.state.firstName}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" input-id={'lastName'} onChange={this.handleChange} placeholder="Enter Last Name" value={this.state.lastName}/>
            </Form.Group>


            <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="text" input-id={'telephone'} onChange={this.handleChange}   placeholder="Enter Number" value={this.state.telephone}/>
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formCompany">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" input-id={'company'} onChange={this.handleChange}    placeholder="Datacrest Technologies" value={this.state.company}/>
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formNote">
            <Form.Label>Note</Form.Label>
            <Form.Control type="text" input-id={'note'} onChange={this.handleChange}    placeholder="IT Specialist" value={this.state.note}/>
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