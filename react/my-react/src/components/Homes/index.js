import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Table } from 'semantic-ui-react';
import Alert from 'react-s-alert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';
class Homes extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleClicks = this.handleClicks.bind(this);
		this.handleClickd = this.handleClickd.bind(this);
		this.getDetail = this.getDetail.bind(this);
		this.state = {
			peopleList:[]
		};
	}
	handleClick(e){
		confirmAlert({
	      title: '你确定点击了吗？',
	      message: 'Are you sure to do this.',
	      buttons: [
	        {
	          label: '确定',
	          onClick: () => {
	          	console.log('confirm');
	          }
	        },
	        {
	          label: '取消',
	          onClick: () => {
	          	console.log('cancle');
	          }
	        }
	      ]
		    })
	}
	handleClicks(){
		Alert.warning(`<h1>Test message 1</h1>`, {
            position: 'top-right',
            onShow: function () {
                console.log('aye!')
            },
            beep: false,
            timeout: 3000,
            offset: 100,
            effect: 'genie'
        });
	}
	handleClickd(){
		swal({
		  title: "Are you sure?",
		  text: "Once deleted, you will not be able to recover this imaginary file!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((willDelete) => {
		  if (willDelete) {
		    swal("Poof! Your imaginary file has been deleted!", {
		      icon: "success",
		    });
		  } else {
		    swal("Your imaginary file is safe!");
		  }
		});
	}
	getDetail(){
		fetch('/getList',{
			method:"GET"
		}).then(res => res.json()).then(data => {
			console.log(data);
			this.setState({
				peopleList: data
			})
		})
	}
	render(){
		let peopleList = this.state.peopleList;
		return (
			<div>
				<Button onClick={this.handleClick}>点击弹窗</Button>
				<Button onClick={this.handleClicks}>点击弹窗2</Button>
				<Button onClick={this.handleClickd}>点击弹窗3</Button>
				<div>
					<p>数据请求</p>
					<p>
						<Button content='点击获取数据' primary onClick={this.getDetail}></Button>
					</p>
					<div>
									<Table celled striped>
									    <Table.Header>
									      <Table.Row>
									        <Table.HeaderCell>编号</Table.HeaderCell>
									        <Table.HeaderCell>姓名</Table.HeaderCell>
									        <Table.HeaderCell>年龄</Table.HeaderCell>
									        <Table.HeaderCell>地址</Table.HeaderCell>
									      </Table.Row>
									    </Table.Header>
									    <Table.Body>
									    {
										peopleList.map(function(value,key){
											return (
									      		<Table.Row key={key}>
									        		<Table.Cell collapsing>
									          			{value._id}
									        		</Table.Cell>
									        		<Table.Cell collapsing>
									          			{value.name}
									        		</Table.Cell>
									        		<Table.Cell collapsing>
									          			{value.age}
									        		</Table.Cell>
									        		<Table.Cell collapsing>
									          			{value.address}
									        		</Table.Cell>
									        	</Table.Row>
							      			)
										})
										}
									    </Table.Body>
									 </Table>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Homes;
