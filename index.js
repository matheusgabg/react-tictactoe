import React, { Component } from 'react';
import { render } from 'react-dom';

import Game from './components/game';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Game />
    );
  }
}

render(<App />, document.getElementById('root'));
