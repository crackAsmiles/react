import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import Alert from 'react-s-alert';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';
class Homes extends Component {
	constructor(){
		super(...arguments);
		this.handleClick = this.handleClick.bind(this);
		this.handleClicks = this.handleClicks.bind(this);
		this.handleClickd = this.handleClickd.bind(this);
		this.state = {
			
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
	render(){
		return (
			<div>
				<Button onClick={this.handleClick}>点击弹窗</Button>
				<Button onClick={this.handleClicks}>点击弹窗2</Button>
				<Button onClick={this.handleClickd}>点击弹窗3</Button>
			</div>
		)
	}
}

export default Homes;
