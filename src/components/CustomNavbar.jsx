import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Image, Nav, NavItem,Modal, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import './CustomNavbar.css';
import NavModal from '../components/NavModal';
import imgone from '../images/imgone.png';
import bitcoin from '../images/bitcoin.png';
import Catalogue from '../components/Catalogue';

 class CustomNavbar extends Component{
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleHide() {
        this.setState({ show: false });
      }
      
     render(){
         return(
             <div className="intro1">
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <Link to="/">
                                <img src={imgone} className="myicon" />
                            </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {/*Home*/}
                        <NavItem style={{paddingTop: 10}} eventKey={1} componentClass={Link} to="/">
                        <Link to="/">
                           Home
                         </Link>
                        </NavItem>

                        {/*News*/}
                        <NavItem style={{paddingTop: 10}} eventKey={2} componentClass={Link} to="/News">
                         <Link to="/News">
                            News
                         </Link>
                        </NavItem>

                        {/*Catalogue*/}
                        <NavItem style={{paddingTop: 10}} eventKey={3} componentClass={Link} to="/Catalogue">
                         <Link to="/Catalogue">
                           Catalogue
                         </Link>
                        </NavItem>
                        
                        {/*Register/SignIn*/}
                        <NavItem eventKey={4} componentClass={Link} to="/">
                        <Link to="/Reg">
                            <Button bsStyle="primary">Registration/Sign-In</ Button>
                        </Link>
                        </NavItem>

                        <NavItem eventKey={5} componentClass={Link} to="/">
                        <div className="modal-container">
                            <Button
                            bsStyle="primary"
                            onClick={() => this.setState({ show: true })}
                            >
                            Connect Account
                            </Button>
                            <Modal
                            className="mymodal"
                            show={this.state.show}
                            onHide={this.handleHide}
                            container={this}
                            aria-labelledby="contained-modal-title"
                            >
                            <Modal.Body>
                                <div style={{paddingLeft: 170}}>
                                    <img style={{ borderRadius:30, width: 200, height: 250}}src={bitcoin}/>
                                </div>
                                <div style={{paddingLeft: 130}}>
                                <Button bsSize="large" style={{margin:20}}>MetaMask</Button>
                                <Button bsSize="large">PayPal</Button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button bsStyle="primary" onClick={this.handleHide}>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        </div>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
         );
     }
 }
 export default CustomNavbar;