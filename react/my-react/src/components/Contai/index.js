import React,{ Component } from 'react';
import TopNav from '../TopNav/index.js';
import SliderNav from '../SliderNav/index.js';
import Contents from '../Contents/index.js';
//import { Container } from 'semantic-ui-react';
class Contai extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			
		};
	}
	render(){
		return (
			<div>
				<TopNav />
				<div className='contenContai'>
					<SliderNav></SliderNav>
					<Contents></Contents>
				</div>
			</div>
		);
	}
}
export default Contai;
