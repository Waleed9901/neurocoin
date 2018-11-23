import React, {Component} from 'react';
import './Catalogue.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Footer from '../components/Footer';

export default class Catalogue extends Component{
    render(){
        return(
            <div>
                <div className="banner">
                    <p className="bannerText">Catalogue</p>
                </div>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <h2>Heading2</h2>
                <Footer />
            </div>
        );
    }
}