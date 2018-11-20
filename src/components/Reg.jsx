import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import '../components/SupSin.css';
import SignUpForm from '../components/Signup';
import SignInForm from '../components/Signin';
import Footer from '../components/Footer';
import myimg from '../images/p1.jpg';

class Reg extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="App">
            <div className="App__Aside">
            <img src={myimg} className="myimg"/>
            </div>
            <div className="App__Form">
            {/*Switcher for Signin and Signup*/}
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
              
              {/*for SignUp*/}
              <Route path="/sign-up" component={SignUpForm}> 
              </Route> 

              {/*for SignIn*/}
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
        </div>
      </Router>
      <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default Reg;