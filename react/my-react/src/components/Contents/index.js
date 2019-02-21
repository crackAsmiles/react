import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Homes from '../Homes/index.js';
import Messages from '../Messages/index.js';
import Friends from '../Friends/index.js';
import './index.css';
class Contents extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			
		};
	}
	render(){
		return (
			<div className='contents'>
		    	<Route exact path='/app' component={Homes} />
		    	<Route path='/app/Messages' component={Messages} />
		    	<Route path='/app/Friends' component={Friends} />
	    	</div>
		)
	}
	
}
export default Contents;