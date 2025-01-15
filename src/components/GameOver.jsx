export default function GameOver({ winner }) {
    return (
      <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It's a Draw!</p>}
        <p>
          {/* <button onClick={onRestart}>Rematch!</button> */}
          <button>Rematch!</button>
        </p>
      </div>
    );
  }