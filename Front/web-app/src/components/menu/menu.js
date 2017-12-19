import React, { Component } from 'react';
import './menu.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Menu extends Component {
	constructor(props) {

    super(props);
	this.state = {
		selected:'Jeu'
	};

    this.handleClick = this.handleClick.bind(this);

  }
  
  
  handleClick(event,id) {

    this.state.selected=id;
	console.log(this.state);

  }

render(){
	return(

<div className="row-offcanvas row-offcanvas-left">
  <div id="sidebar" className="sidebar-offcanvas">
      <div className="col-md-12">
        <h3>Menu</h3>
        <ul className="nav nav-pills nav-stacked" >
		  <li id="jeu"><NavLink to="/">Jouer</NavLink></li>
          <li id="profil"><NavLink to="/profil">Mon profil</NavLink></li>
          <li id="parties"><NavLink to="/parties">Mes Parties</NavLink></li>
          <li id="params"><NavLink to="/parametres">Mes Paramètres</NavLink></li>

        </ul>
      </div>
  </div>		
</div>

		);
	}	
}

export default Menu;