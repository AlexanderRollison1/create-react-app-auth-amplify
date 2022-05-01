import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Home from './Components/Home'
import Encryption from './Components/Encryption'
import Steganography from './Components/Steganography'
import About from './Components/About'
import NavBar from './Components/NavBar'
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/encryption' exact component={Encryption} />
            <Route path='/steganography' exact component={Steganography} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);
