import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './components/game';
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
      <div>
        <Game />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
