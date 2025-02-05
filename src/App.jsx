import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = {X: 'Player1',O: 'Player2'};


function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      return currentPlayer;
}


function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map((array)=>[...array])];
  for(const turn of gameTurns){
    const {square,player} = turn;

    const {row,col} = square;
  
    gameBoard[row][col] = player;
  }
  return gameBoard;
}


function deriveWinner(gameBoard,gamePlayers){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol  = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
          winner = gamePlayers[firstSquareSymbol];
    }
  }
  return winner;
}



function App() {
 const [gameTurns,setGameTurns] = useState([]);
  // const [activePlayer,setActivePlayer] = useState('X');
  const [gamePlayers,setGamePlayers] = useState(players);


  
  let activePlayer = deriveActivePlayer(gameTurns);



  // let gameBoard = [...initialGameBoard.map((array)=>[...array])];
  // for(const turn of gameTurns){
  //   const {square,player} = turn;

  //   const {row,col} = square;
  
  //   gameBoard[row][col] = player;
  // }

  const gameBoard = deriveGameBoard(gameTurns);
  // let winner;
  // for(const combination of WINNING_COMBINATIONS){
  //   const firstSquareSymbol  = gameBoard[combination[0].row][combination[0].column]
  //   const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
  //   const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].column]

  //   if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
  //         winner = gamePlayers[firstSquareSymbol];
  //   }
  // }

const winner = deriveWinner(gameBoard,gamePlayers)

 let isDraw = !winner && gameTurns.length === 9;



function handleSelectSquare(rowIndex,colIndex){
  // setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");

  setGameTurns((prevTurns)=>{
    
   let currentPlayer = deriveActivePlayer(prevTurns)

    const updatedTurns = [
      {square: {row: rowIndex,col: colIndex},player: currentPlayer },
      ...prevTurns
    ]

    return updatedTurns;

  })

}

function handleRestartGame(){
  setGameTurns([]);

}



function handlePlayerNameChange(symbol,NewName){
  setGamePlayers(prevPlayers => {
    return{
      ...prevPlayers,
      [symbol]: NewName
    }
  })}




  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName={gamePlayers.X} symbol="X" isActive={activePlayer === "X"} onPlayerNameChange={handlePlayerNameChange} />
          <Player playerName={gamePlayers.O} symbol="O"  isActive={activePlayer === "O"} onPlayerNameChange={handlePlayerNameChange}  />
        </ol>
       {(winner || isDraw) &&  <GameOver winner={winner} onRestart={handleRestartGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Logs gameTurns={gameTurns} />
{/*      remote commit */}
    </main>
  );
}

export default App;
