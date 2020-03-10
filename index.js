import React, { Component } from 'react';
import { render } from 'react-dom';

import Board from './components/board';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Board />
    );
  }
}

render(<App />, document.getElementById('root'));
