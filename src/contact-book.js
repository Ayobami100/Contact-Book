import React from 'react'

import  Formy  from './components/Formy';
import {Button} from 'react-bootstrap';

class home extends React.Component {
constructor(props){
  super(props)

}





  render() {
    return (
      <div>
        <h1>Contact</h1>
        <br/>
        <Formy name={'save'} />
      </div>
    )
  }
}





export default home
