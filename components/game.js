import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          this works
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
