import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//
// 
import home from './contact-book';
import edits from './edit-page';
import single from './single-view';
import about from './about';
import welcome from './welcome';
import Notfound from './notfound';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


class App extends Component{
  componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    fetch('https://mfoncontact.herokuapp.com/contact')
    .then(res => res.json())
    .then((dati) => {this.setState({ list:dati })
    console.log(dati)})
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ contacts: data })
    //   console.log(data);
    // })
    // .catch(console.log)
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={welcome}/>
              <Route path="/contact-book" component={home}/>
              <Route path="/single-view" component={single}/>
              <Route path="/edit-page" component={edits}/>
              <Route path="/about" component={about}/>
              <Route component={Notfound}/>
            </Switch>     
          </Layout>
        </Router>
      </React.Fragment>
    );
}

}
 export default App;