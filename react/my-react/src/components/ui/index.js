import React,{ Component } from 'react';
class Ui extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			
		};
	}
	render(){
		return (
			<div className="ui divider">
				<div><div className="ui right labeled button" role="button" tabIndex="0"><button className="ui icon button"><i aria-hidden="true" className="heart icon"></i>Like</button><a className="ui left pointing basic label">2,048</a></div><div className="ui left labeled button" role="button" tabIndex="0"><a className="ui right pointing basic label">2,048</a><button className="ui icon button"><i aria-hidden="true" className="heart icon"></i>Like</button></div><div className="ui left labeled button" role="button" tabIndex="0"><a className="ui basic label">2,048</a><button className="ui icon button"><i aria-hidden="true" className="fork icon"></i></button></div></div>
				<div>
					<div><i aria-hidden="true" className="spinner loading icon"></i><i aria-hidden="true" className="certificate loading icon"></i><i aria-hidden="true" className="asterisk loading icon"></i></div>
				</div>
			</div>
		);
	}
}
export default Ui;
