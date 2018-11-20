import React, {Component} from 'react';
import './News.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';

class News extends Component{
    render(){
        return(
            <p>hello there, this is the News page!</p>
        )
    }
}
export default News;