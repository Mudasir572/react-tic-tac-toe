import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          
        <Player playerName="player 1" symbol="X" />
        <Player playerName="player 2" symbol="O" />

        

          
          

        </ol>

      </div>
    </main>
  )
}

export default App
