import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }

//     render() {
//       return (
//         <button 
//             className="square" 
//             onClick={() => this.props.onClick({value: 'X'})   /*{function() {alert('click');} making an interactive component using an arrow function (=>)*/   }
//         >
//             {this.props.value  /*this.props.value <--passing data through props (from Board to Square)*/} 
//         </button>
//       );
//     }
//   }

//Function below replaces the Class above (for simplicity)

function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
      return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
      );
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  let myName = "Auston";
  var name = myName.toUpperCase();
  console.log(name)
  //Left off tutorial on 'Why Immutability Is Important" https://reactjs.org/tutorial/tutorial.html#setup