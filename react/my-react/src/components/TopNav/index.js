import React,{ Component } from 'react';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';
import { Segment, Button, Image} from 'semantic-ui-react';
import './index.css';

class TopNav extends Component {
	static contextTypes = {
	    router: PropTypes.object
	}
	constructor(props){
		super(props);
		this.logOut = this.logOut.bind(this);
		this.state = {
			
		};
	}
	logOut(){
		cookie.remove('user');
		this.context.router.history.push('/');
	}
	render(){
		return (
			<Segment>
				<Image className='logo' src='http://localhost:3000/image/01.jpg' size='medium' circular/>
				<Button className='singOut' inverted color='violet' onClick={this.logOut}>退出登陆</Button>
			</Segment>
		)
	}
};
export default TopNav;
