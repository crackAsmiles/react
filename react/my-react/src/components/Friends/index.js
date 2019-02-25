import React, { Component } from 'react';
import { Grid, Image, Item, Segment, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
class Friends extends Component {
	constructor(){
		super(...arguments);
		this.getName = this.getName.bind(this);
		this.getAge = this.getAge.bind(this);
		this.getAddress = this.getAddress.bind(this);
		this.isAgree = this.isAgree.bind(this);
		this.sureSub = this.sureSub.bind(this);
		this.state = {
			list:[
				{
					url:'/image/01.jpg',
					content:'图片一介绍'
				},
				{
					url:'/image/02.jpg',
					content:'图片二介绍'
				},
				{
					url:'/image/03.jpg',
					content:'图片三介绍'
				}
			],
			isA:false
		};
	}
	getName(e){
		this.setState({
			name:e.target.value
		})
	}
	getAge(e){
		this.setState({
			age:e.target.value*1
		})
	}
	getAddress(e){
		this.setState({
			address:e.target.value
		})
	}
	isAgree(e){
		this.setState({
			isA:!this.state.isA
		})
	}
	sureSub(){
		if(!this.state.isA){
			swal({
			  title: "你需要同意才可以进行哦！！",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			});
			return;
		}
		var params = {};
		params['name'] = this.state.name;
		params['age'] = this.state.age;
		params['address'] = this.state.address;
		console.log(params);
		fetch('/addItem',{
			method:"POST",
			body:JSON.stringify(params),
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json"
			}
		}).then(res => res.json()).then(data => {
			if(data.code === 1){
				swal({
				  title: data.message,
				  icon: "success",
				  buttons: true,
				  dangerMode: true,
				});
			}
		})
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
							      	<Grid.Column key={key}>
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
				  <Segment inverted>
				    <Form inverted>
				      <Form.Group widths='equal'>
				        <Form.Input fluid label='姓名' placeholder='姓名' onChange={this.getName}/>
				        <Form.Input fluid label='年龄' placeholder='年龄' onChange={this.getAge}/>
				        <Form.Input fluid label='地址' placeholder='地址' onChange={this.getAddress}/>
				      </Form.Group>
				      <Form.Checkbox label='I agree to the Terms and Conditions' onClick={this.isAgree} checked={this.state.isA}/>
				      <Button type='submit' onClick={this.sureSub}>提交</Button>
				    </Form>
				  </Segment>
			</div>
		)
	}
}

export default Friends;