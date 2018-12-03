import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import PytorchModel from './components/PytorchModel';
import Home from './components/Home';
import Reg from './components/Reg';
import Role from './components/Role';
import Select from './components/Select';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <CustomNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/PytorchModel" component={PytorchModel} />
            <Route path="/Role" component={Role}/>
            <Route path="/Reg" component={Reg} />
            <Route path="/Select" component={Select} />
        </div>
      </Router>
    );
  }
}
export default App;