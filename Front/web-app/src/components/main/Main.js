import React, { Component } from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import Menu from '../menu/menu.js';


class Main extends Component {

render(){
	return(
		<div>
			<h1>Test Application</h1>
			<Menu/>

</div>
		);
	}	
}

export default Main;