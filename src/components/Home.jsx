import React, {Component} from 'react';
import './Home.css';
import Footer from '../components/Footer.jsx';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import eth1 from '../images/eth1.png';
import erc from '../images/erc.jpg';


export default class Home extends Component{
    render(){
        return(
            <div className="MainContainer">
                <div className="first">
                    <div className="section1">
                       <p className="heading">What’s the big deal?<br /></p>
                       <div className="sample1">
                       <p className="text1">
                        A Market place for machine learning models, 
                        own/develop yours now!
                        </p> </div>
                    </div>
                </div>
                
                {/*second div*/}
                <div className="textpiece2">
                   {/* <img src={pic4} className="rainbowPicture"/> */}
                      {/* <img src={bitcoin} className="refpic"/> */}
                      <div className="fancy">
                     <p className="x1">Purchases made over the Ethereum Blockchain</p></div>                 
                </div>

                <div className="secondlast">
                     {/* Card 1*/}
                     <span className="firstInfo">
                        <img src={pic1} className="pic1"/>
                           <p className="x2">Code your own models and become one of us!</p>
                     </span>

                     {/* Card 2*/}
                     <span className="firstInfo">
                     <img src={pic2} className="pic2"/>
                           <p className="x2">Non-fungible tokens used to make sure they are irreplaceable</p>
                     </span>

                     {/* Card 3*/}
                     <span className="firstInfo">
                     <img src={pic3} className="pic3"/>
                        <p className="x2">Data stored is recorded into the blockchain and it keeps track of all the changes</p>
                     </span>

                     {/*Card 4*/}
                            <span className="wideCard1">
                            <img src={eth1} className="eth1"/>
                                <div className="TextContainer">
                                 <p className="ethText">
                                    ERC-721 defines a minimum interface a
                                    smart contract must implement to allow unique
                                    tokens to be managed, owned, and traded.
                                    It does not mandate a standard for token
                                    metadata or restrict adding supplemental
                                    functions.</p>
                                </div>
                            </span>

                            <span className="wideCard2">
                            <div className="section2image"><img src={erc} className="eth2"/></div>
                            <div className="TextContainer2">
                                 <p className="ethText2">
                                Ethereum uses a smart contract system.
                                Smart contracts are peer-to-peer
                                contracts,
                                that run on the Ethereum network,
                                and can do just about anything
                                by paying a transaction fee.</p>
                                </div>
                            </span>
                </div>
                <div className="gen2"></div>

                {/*footer section*/}
                <Footer/>
            </div>
        );
    }
}