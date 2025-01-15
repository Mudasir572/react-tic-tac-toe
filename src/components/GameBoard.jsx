// import { useState } from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
// console.log(initialGameBoard);

export default function GameBoard({onSelectSquare,board}) {
  // let gameBoard = initialGameBoard;
//   for(const turn of turns){
//     const {square,player} = turn;
// // const square = turn.square;
// // const player = turn.player;
//     const {row,col} = square;
//     // const row = square.row;
//     // const col = square.col;

//     gameBoard[row][col] = player;
//   }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   // const updatedGameBoard = [...gameBoard.map((innerArray) => [...innerArray])]

  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();

  //   //    console.log(gameBoard)
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex) }
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
