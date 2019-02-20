import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
import Homes from '../Homes/index.js';
import Messages from '../Messages/index.js';
import Friends from '../Friends/index.js';
import './index.css';
const customHistory = createBrowserHistory();
class Contents extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			
		};
	}
	render(){
		console.log('binahua')
		return (
			<Router history={customHistory}>
				<div className='contents'>
			    	<Route path='/' component={Homes} />
			    	<Route path='/Messages' component={Messages} />
			    	<Route path='/Friends' component={Friends} />
		    	</div>
    		</Router>
		)
	}
	
}
export default Contents;