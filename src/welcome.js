    import React, { Component } from 'react';
    import {Button} from 'react-bootstrap';

    class welcome extends Component {
      // Initialize the state
      constructor(props){
        super(props);
        this.state = {
          contacts: []
        }
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
          console.log(data);
        })
        .catch(console.log)
      }

    render(){
      const { contacts } = this.state;
      return(
      <div>
        <h1>Welcome</h1>

        <center><h1>Contact List</h1></center>
        {contacts.map((item) => (
          <div className="card">
          
            <div className="card-body">
              <h5 class="card-title">{item.name}</h5>              
              <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
              <p className="card-text">{item.company.catchPhrase}</p>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
              <Button variant="warning">Update</Button>
            </div>
          </div>
        ))}
      </div>
      )}
    
  }

export default welcome