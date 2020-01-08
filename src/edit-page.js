import React from 'react';
import Formy  from './components/Formy';

class edits extends React.Component {
  constructor(props){
    super(props)
    this.state={
     contacts:[],
     forFirstName:'',
     forLastName:'',
     forTelephone:'',
     forCompany:'',
     forNote:''
    }
    

   
  }
  render() {
    return (
      <div>
        <h1>Edit Contact</h1>
        <br/>
        <Formy name={'Update'}/>
      </div>
    )
  }
}
export default edits