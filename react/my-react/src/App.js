import React, { Component } from 'react';
import './App.css';
import Ui from './components/ui/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>hello world</h1>
          <Ui />
      </div>
    );
  }
}

export default App;
