import React, {Component} from 'react';
import './Catalogue.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Footer from '../components/Footer';

export default class Catalogue extends Component{
    render(){
        return(
            <div>
                <h1>heading1</h1>
                <h1>heading1</h1>
                <h1>heading1</h1>
                <h1>heading1</h1>
                <h1>heading1</h1>
                <h1>heading1</h1>
                <div className="box">
                    <select className="hello">
                        <option>Customer</option>
                        <option>Developer/Contributor</option>
                    </select>
                </div>
                <Footer />
            </div>
        );
    }
}