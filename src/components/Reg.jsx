import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import '../components/SupSin.css';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import myimg from '../images/p1.jpg';

class Reg extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      name:'',
      hasAgreed: false
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  /*method to manage provided data by user*/
  handleChange(e){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //console.log("the form was submitted successfully!");
  }
  render() {
    return (
      <div>
      <Router>
      <div className="App">
            <div className="App__Aside">
               <img src={myimg} className="myimg"/>
            </div>
            <div className="App__Form">
              <div className="maindiv">
                     <span className="subdivone">
                           <h2 className="heading11">Provide details</h2>
                          {/*fullname*/}  
                          <div className="FormField">
                              <label className="FormField__Label" htmlFor="name">Full Name</label>
                              <input type="text" id="name" className="FormField__Input" placeholder="Enter full-name" name="name"
                              value={this.state.name} onChange={this.handleChange} />
                          </div>

                          {/*password*/}
                          <div className="FormField">
                              <label className="FormField__Label" htmlFor="password">Password</label>
                              <input type="PASSWORD" id="password" className="FormField__Input" placeholder="Enter password" name="password"
                              value={this.state.password} onChange={this.handleChange} />
                          </div>

                           {/*email*/}
                          <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Enter Email</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter email" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                          </div>

                          {/*button*/}
                          <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button>
                          </div>

                          {/*MetaMask connect button*/}
                          <button type="button" className="MyButton"><a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Get MetaMask</a></button>
                     </span> 
              </div>
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