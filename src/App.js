import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import News from './components/News';
import Home from './components/Home';
import Reg from './components/Reg';
import Catalogue from './components/Catalogue';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <CustomNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/News" component={News} />
            <Route path="/Catalogue" component={Catalogue}/>
            <Route path="/Reg" component={Reg} />
        </div>
      </Router>
    );
  }
}
export default App;