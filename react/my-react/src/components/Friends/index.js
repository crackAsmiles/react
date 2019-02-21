import React, { Component } from 'react';
import { Grid, Image, Item } from 'semantic-ui-react';
class Friends extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			list:[
				{
					url:'http://localhost:3000/image/01.jpg',
					content:'图片一介绍'
				},
				{
					url:'http://localhost:3000/image/02.jpg',
					content:'图片二介绍'
				},
				{
					url:'http://localhost:3000/image/03.jpg',
					content:'图片三介绍'
				}
			]
		};
	}
	render(){
		let list = this.state.list;
		return (
				<div>
					<Grid columns={3} divided>
						<Grid.Row>
						{
							list.map((res,key) => {
								return (
							      	<Grid.Column>
							        	<Item.Group>
										    <Item>
										      	<Item.Image size='tiny' src={res.url} />
										      	<Item.Content>
											        <Item.Header>{res.content}</Item.Header>
											        <Item.Meta>
											          	<span className='price'>$1200</span>
											          	<span className='stay'>1 Month</span>
											        </Item.Meta>
											        <Item.Description>一些介绍大手大脚</Item.Description>
										      	</Item.Content>
										    </Item>
									    </Item.Group>
							      	</Grid.Column>
							    )
							})
						}
					    </Grid.Row>
							
				  </Grid>
			</div>
		)
	}
}

export default Friends;