import React, { Component } from 'react';
class Test extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			isA:true
		};
	}
	render(){
		let isA = this.state.isA;
		return (
				<div>
				{
					(function(){
						if(isA){
							return (<p>条件成立的函数</p>)
						}else{
							return (<p>条件不成立的函数</p>)
						}
					})(isA)
				}
				</div>
		)
	}
}

export default Test;