import React,{ Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import cookie from 'react-cookies';
class Login extends Component {
	static contextTypes = {
	    router: PropTypes.object
	}
	constructor(props){
		super(props);
		this.changeuser = this.changeuser.bind(this);
		this.changepws = this.changepws.bind(this);
		this.signIn = this.signIn.bind(this);
		this.state = {
			userName:'',
			password:''
		};
		
	}
	signIn(){
		if(!this.state.userName){
			window.alert('用户名不能为空！');
			return;
		}
		if(!this.state.password){
			window.alert('密码不能为空！');
			return;
		}
		let params = {};
		params.userName = this.state.userName;
		params.password = this.state.password;
		let expireDate = new Date();
		expireDate.setDate(expireDate.getDate() + 7);
		console.log(expireDate);
		cookie.save('user',params,{expires:expireDate});
		console.log(params);
		this.context.router.history.push('/app');
	}
	changeuser(event){
		this.setState({
			userName: event.target.value
		})
	}
	changepws(event){
		this.setState({
			password: event.target.value
		})
	}
	render(){
		console.log(cookie.select(/user/).user)
		if(cookie.select(/user/).user){
			return (<Redirect to="/app" />)
		}else{
			let userName = this.state.userName;
			let pws = this.state.password;
			return (
				<div className='login-form'>
			    <style>{`
			      body > div,
			      body > div > div,
			      body > div > div > div.login-form {
			        height: 100%;
			      }
			    `}</style>
			    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
			      <Grid.Column style={{ maxWidth: 450 }}>
			        <Header as='h2' color='teal' textAlign='center'>
			          <Image src='image/logo.jpg' /> Log-in to your account
			        </Header>
			        <Form size='large'>
			          <Segment stacked>
			            <Form.Input fluid icon='user' iconPosition='left' placeholder='手机号' value={userName} onChange={this.changeuser}/>
			            <Form.Input
			              fluid
			              icon='lock'
			              iconPosition='left'
			              placeholder='密码'
			              type='password'
			              value={pws}
			              onChange={this.changepws}
			            />
			
			            <Button color='teal' fluid size='large' onClick={this.signIn}>
			              Login
			            </Button>
			          </Segment>
			        </Form>
			        <Message>
			          New to us? <a href='/app'>Sign Up</a>
			        </Message>
			      </Grid.Column>
			    </Grid>
			  </div>
			)
		}
	}
}
export default Login;
