import React, { Component } from 'react';
import './content.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import Parties from '../parties/parties.js';
import Parametres from '../parametres/parametres.js';
import Jeu from '../jeu/jeu.js';
import Profil from '../profil/profil.js';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Content extends Component {

render(){
	return(
	      <div className="content">
            <Route exact path="/" component={Jeu}/>
            <Route path="/parties" component={Parties}/>
			<Route path="/profil" component={Profil}/>
            <Route path="/parametres" component={Parametres}/>
          </div>
		);
	}	
}

export default Content;