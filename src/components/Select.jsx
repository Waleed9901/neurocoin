import React, {Component} from 'react';
import './Select.css';
import Footer from '../components/Footer';
import dark from '../images/dark.jpg';
import {Nav, NavItem, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Catalogue extends Component{
    render(){
        return(
            <div>
                {/* <div className="headingDiv"><h1 className="mainheading">Who are you?</h1></div> */}
                <div className="entireCon">
                <span className="myDiv">
                    <div className="secondDiv">
                        <p className="myText">
                            Art Generator
                        </p>
                          
                        {/*Navigates to PytorchModel.jsx*/}
                        <Link to="/PytorchModel">
                            <Button className="Myselection" bsStyle="primary">Select</ Button>
                        </Link>

                    </div>
                </span>
                <span className="anotherDiv">
                    <div className="anothersecondDiv">
                        <p className="myText">
                          Music Generator
                        </p>
                        
                        {/*Navigates to PytorchModel.jsx*/}
                        <Link to="/PytorchModel">
                            <Button className="Myselection" bsStyle="primary">Select</ Button>
                        </Link>
                        
                    </div>
                </span>
                </div>
                <div className="below">
                    <h2>Press the next button to continue</h2>
                </div>
                <Footer />
            </div>
        );
    }
}