import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Image, Nav, NavItem,Modal, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import './CustomNavbar.css';
import NavModal from '../components/NavModal';
import imgone from '../images/imgone.png';
import bitcoin from '../images/bitcoin.png';
import Role from '../components/Role';

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

                        {/*Catalogue*/}
                        <NavItem style={{paddingTop: 10}} eventKey={2} componentClass={Link} to="/Role">
                         <Link to="/Role">
                           Role
                         </Link>
                        </NavItem>

                        
                        {/*Select(Art OR Music)*/}
                        <NavItem style={{paddingTop: 10}} eventKey={3} componentClass={Link} to="/Select">
                        <Link to="/Select">
                            Select
                        </Link>
                        </NavItem>
                        
                        {/*Register/SignIn*/}
                        <NavItem eventKey={4} componentClass={Link} to="/">
                        <Link to="/Reg">
                            <Button bsStyle="primary">Registration/Sign-In</ Button>
                        </Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
         );
     }
 }
 export default CustomNavbar;