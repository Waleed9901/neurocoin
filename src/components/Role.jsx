import React, {Component} from 'react';
import './Role.css';
import Footer from '../components/Footer';
import dark from '../images/dark.jpg';
import { Button} from 'react-bootstrap';

export default class Catalogue extends Component{
    render(){
        return(
            <div>
                {/* <div className="headingDiv"><h1 className="mainheading">Who are you?</h1></div> */}
                <div className="entireCon">
                <span className="firstDiv">
                    <div className="secondDiv">
                        <p className="myText">
                           A Developer?
                        </p>
                        <div className="selection">
                            <Button bsStyle="primary">Select</ Button>
                        </div>
                    </div>
                </span>
                <span className="firstDiv">
                    <div className="secondDiv">
                        <p className="myText">
                        A Customer?
                        </p>
                        <div className="selection">
                            <Button bsStyle="primary">Select</ Button>
                        </div>
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