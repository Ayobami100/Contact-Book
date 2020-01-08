import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class welcome extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }

    this.deleteContact = this.deleteContact.bind(this)
    this.loadApi = this.loadApi.bind(this)
    this.gotoEditPage = this.gotoEditPage.bind(this)
    this.gotoViewpage = this.gotoViewpage.bind(this)
    this.gotoHomepage = this.gotoHomepage.bind(this)
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    this.loadApi();
  }
  

  loadApi(){
    fetch('https://mfoncontact.herokuapp.com/contact')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(data);
    })
    .catch(console.log)
  }


  



  deleteContact(e) {
    const contactId = e.target.getAttribute('contact-id');
    this.forceUpdate()
    axios.delete('https://mfoncontact.herokuapp.com/contact/' + contactId)
    .then(function (response) {
      // handle success
      window.alert('Contact Deleted!')
     
      // console.log(response);
      //
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
     
    });
  
  }

  gotoHomepage(e){
    this.props.history.push('/welcome')
  }


  gotoEditPage (e) {
    let contactId = e.target.getAttribute('contact-id');
    this.props.history.push('/edit-page/'+contactId)
  }
  
  gotoViewpage(e){
    let contactId = e.target.getAttribute('contact-id');
    this.props.history.push('/single-view/'+contactId)
  }
  render(){
    const { contacts } = this.state;

    return(
    <div>
      <h1>Welcome</h1>

      <center><h1>Contact List</h1></center>
      {contacts.map((item, itemIndex) => (
        <div className="card" key={itemIndex}>
        
          <div className="card-body">
            <h5 className="card-title">{item.first_name} {item.last_name}</h5>   
            
            {/* <p className="card-text">{item.note}</p> */}
            {/* <p className="card-text">{item.company_name}</p> */}
            <p className="card-text">{item.telephone}</p>
            <Button variant="primary" contact-id={item.id} onClick={this.gotoEditPage}>Edit</Button>
            <Button variant="danger" contact-id={item.id} onClick={this.deleteContact}>Delete</Button>
            {/* <Button variant="warning">Update</Button> */}
            <Button variant="success" contact-id={item.id} onClick={this.gotoViewpage}>View</Button>
          </div>
        </div>
      ))}
    </div>
    )}

}

export default welcome