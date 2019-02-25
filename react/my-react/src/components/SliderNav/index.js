import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import './index.css';
class SliderNav extends Component {
	constructor(){
		super(...arguments);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.state = {
			activeItem: 'home'
		};
	}
	handleItemClick(event,{name}){
		this.setState({
			activeItem:name
		})
	}
	render(){
		return (
			<div className='sliderNav'>
				<Menu pointing secondary vertical>
			        <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
			        	<Link to='/app'>
                            Homes
                        </Link>
			        </Menu.Item>
			        <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick}>
			        	<Link to='/app/Messages'>
                            Messages
                        </Link>
			        </Menu.Item>
			        <Menu.Item name='friends' active={this.state.activeItem === 'friends'} onClick={this.handleItemClick}>
			        	<Link to='/app/Friends'>
                            Friends
                        </Link>
			        </Menu.Item>
			        <Menu.Item name='test' active={this.state.activeItem === 'test'} onClick={this.handleItemClick}>
			        	<Link to='/app/Test'>
                            测试
                        </Link>
			        </Menu.Item>
			      </Menu>
			</div>
		)
	}
}

export default SliderNav;
