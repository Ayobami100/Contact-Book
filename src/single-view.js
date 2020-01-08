import React from 'react'
import axios from 'axios'

class single extends React.Component {
  constructor(props){
    super(props)
    this.state={
     contacts:[]
    }
  }
 
  componentDidMount(){
    const pathString = window.location.pathname
    let pathStringSplit = pathString.split('/')
    
    let contactId = pathStringSplit[pathStringSplit.length-1]
    console.log(contactId)

    fetch('https://mfoncontact.herokuapp.com/contact/'+ contactId +'/')
    .then(res => res.json())
    .then((data) => {
    this.setState({ contacts: data })
    console.log(data);
    let name = document.getElementsByTagName('h2').innerHTML
    name = data;
    })
    .catch(console.log)

    }
  render() {
    
    return (
    <div>
      <h1> Single Contact View</h1>
      <h2></h2>
      <h2></h2>
      <h3></h3>
      <h4></h4>
    </div>
    )
  }
}
export default single