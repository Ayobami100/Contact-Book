import React from 'react'

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
    document.getElementById('p1').innerText = data.telephone
    document.getElementById('p2').innerText = data.first_name+' '+data.last_name
    document.getElementById('p3').innerText = data.note
    document.getElementById('p4').innerText = data.company_name
    })
    .catch(console.log)

    }
  render() {
    
    return (
    <center> 
      <div>
        <h1> Single Contact View</h1><br/>
        <div className="card">
          
          <div className="card-body">
            <h2 id="p1">...</h2>
            <h2 id="p2">...</h2>
            <h3 id="p3">...</h3>
            <h4 id="p4">...</h4>
          </div>
        </div>
      </div>
    </center>
    )
  }
}
export default single