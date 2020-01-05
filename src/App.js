import React, {Component} from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

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
import { Jumbotron } from './components/Jumbotron'



class App extends Component{


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