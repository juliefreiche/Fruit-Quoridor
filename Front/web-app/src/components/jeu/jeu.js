import React, { Component } from 'react';
import './jeu.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';



class Jeu extends Component {

render(){
	return(
	<div className="center-block"> 
		<button type="button" className="btn btn-primary">JOUER EN LIGNE</button>
		<button type="button" className="btn btn-primary" >JOUER CONTRE UN AMI</button>
		<button type="button" className="btn btn-primary" >JOUER CONTRE L'IA</button>
	</div>
		);
	}	
}

export default Jeu;