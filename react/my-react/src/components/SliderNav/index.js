import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
//import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import './index.css';
const   customHistory = createBrowserHistory();
class SliderNav extends Component {
	constructor(props){
		console.log(props);
		super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			activeItem: 'home'
		};
	}
	handleItemClick(event,{name}){
		console.log(customHistory)
		this.setState({
			activeItem:name
		})
	}
	render(){
		console.log('render')
		return (
			<Router history={customHistory}>
				<div className='sliderNav'>
					<Menu pointing secondary vertical>
				        <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
				        	<Link to="/Homes/">
	                            Homes
	                        </Link>
				        </Menu.Item>
				        <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick}>
				        	<Link to="/Messages/">
	                            Messages
	                        </Link>
				        </Menu.Item>
				        <Menu.Item name='friends' active={this.state.activeItem === 'friends'}onClick={this.handleItemClick}>
				        	<Link to="/Friends/">
	                            Friends
	                        </Link>
				        </Menu.Item>
				      </Menu>
				</div>
			</Router>
		)
	}
}

export default SliderNav;
