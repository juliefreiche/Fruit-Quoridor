import React, { Component } from 'react';
import './top.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import logo from './logo.png';



class Top extends Component {

render(){
	return(
		<div >
		<img src={logo} className="App-logo" alt="Logo Fruit-Quorridor"/>

</div>
		);
	}	
}

export default Top;