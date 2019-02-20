import React,{ Component } from 'react';
import { Segment, Button, Image} from 'semantic-ui-react';
import './index.css';

class TopNav extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			
		};
	}
	render(){
		return (
			<Segment>
				<Image className='logo' src='./image/01.jpg' size='medium' circular/>
				<Button className='singOut' inverted color='violet'>退出登陆</Button>
			</Segment>
		)
	}
}
export default TopNav;
