import React, { Component } from 'react';

class Board extends Component {
  render() {
    const status = 'Next player: X';
    return (
      <div className="status">{status}</div>
    );
  }
}

export default Board;