import React, { Component } from 'react';
import './App.css';
import Contai from './components/Contai/index.js';
import Login from './components/login/index.jsx';
//import { Message, Grid, Image, Dropdown, Input} from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <div className="App">
       	{/**<Login />
       	**/}
        <Contai />  
      </div>
    );
  }
}

export default App;
