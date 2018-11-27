import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import '../components/SupSin.css';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import myimg from '../images/p1.jpg';

class Reg extends Component{
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
                           <h2 className="heading11">Connect To MetaMask</h2>
                           <p className="metamaskDes">
                          The perfect place is in a secure wallet
                          like MetaMask. This will also act as your
                          login to our website (no extra password needed).</p>
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