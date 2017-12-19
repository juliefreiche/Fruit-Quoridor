import React, { Component } from 'react';
import './contacts.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


class Contacts extends Component {
	

render(){
	return(

<div className="row-offcanvas row-offcanvas-right">
  <div id="sidebar-right" className="navbar navbar-fixed-top">
 <div className="col-md-12">
        <h3>Contacts</h3>
        <ul className="nav nav-pills nav-stacked">
          <li><a href="#">Contact1</a></li>
          <li><a href="#">Contact2</a></li>
          <li><a href="#">Contact3</a></li>

        </ul>
 </div>
  </div>		
</div>

		);
	}	
}

export default Contacts;