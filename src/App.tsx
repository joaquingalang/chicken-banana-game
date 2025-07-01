import Scoreboard from "./components/Scoreboard";
import GameStatus from "./components/GameStatus";
import Cell from "./components/Cell";

function App() {
  return (
    <>
      <div className="container">
        <div className="stat-section">
          <Scoreboard chickenScore={0} bananaScore={0}></Scoreboard>
          <GameStatus></GameStatus>
          <div className="game-status"></div>
        </div>
        <div className="game-grid">
          {[...Array(36).keys()].map((index) => (
            <Cell index={index + 1}></Cell>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
