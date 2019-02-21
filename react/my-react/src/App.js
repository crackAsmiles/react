import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Main from './commons/Alert/index.js';
import Contai from './components/Contai/index.js';
import Login from './components/login/index.jsx';
//import { Message, Grid, Image, Dropdown, Input} from 'semantic-ui-react';
class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
    	<div>
    	<Router>
    		<Switch>
					 <Route exact path='/' component={Login} />
					 <Route path='/app' component={Contai} />
				</Switch>
    	</Router>
    	
      <Main />
    </div>
    );
  }
}
export default App;
