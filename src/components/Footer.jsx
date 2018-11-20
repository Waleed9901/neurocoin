import React, {Component} from 'react';
import '../components/Footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
			<footer className="footer-distributed">
			<div className="footer-left">
				<h3>Neuro<span>Coin</span></h3>
				<p className="footer-company-name">Neurocoin © 2018 - 2019</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>FAST National University</span> Karachi, Pakistan</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>Cell no. 0349-2538978</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">comprehensivephrase@gmail.com</a></p>
				</div>
			</div>

			<div className="footer-right">
				<p className="footer-company-about">
					<span>About project</span>
					We've developed a platform where ML models can be sold and purchased by several devotee, freelancer and professionals.
				</p>
			</div>
		</footer>
        </div>
        );
    }
}