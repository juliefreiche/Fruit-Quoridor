import React, { Component } from 'react';
import './menu.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


class Menu extends Component {

render(){
	return(

<div className="row-offcanvas row-offcanvas-left">
  <div id="sidebar" className="sidebar-offcanvas">
      <div class="col-md-12">
        <h3>Menu</h3>
        <ul className="nav nav-pills nav-stacked">
           <li><a href="#">Jouer</a></li>
          <li className="active"><a href="#">Mon profil</a></li>
          <li><a href="#">Mes Parties</a></li>
          <li><a href="#">Mes paramètre</a></li>

        </ul>
      </div>
  </div>		
</div>

		);
	}	
}

export default Menu;