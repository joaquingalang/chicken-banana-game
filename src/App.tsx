import Scoreboard from "./components/Scoreboard";
import GameStatus from "./components/GameStatus";
import Cell from "./components/Cell";
import { useState } from "react";

function shuffle<T>(array: T[]): T[] {
  const result = [...array]; // Create a shallow copy to avoid mutating the original
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements
  }
  return result;
}

function App() {
  // State Variables
  const chickens = Array(18).fill("chicken");
  const banana = Array(18).fill("banana");
  const [gameCells] = useState(() => shuffle([...chickens, ...banana]));
  let [turnTaker, setTurnTaker] = useState("chicken");
  let [chickenScore, setChickenScore] = useState(0);
  let [bananaScore, setBananaScore] = useState(0);
  let [chickenWins, setChickenWins] = useState(false);
  let [bananaWins, setBananaWins] = useState(false);
  let [isGameOver, setIsGameOver] = useState(false);

  // Functions
  const switchTurns = (turnTaker: string) => {
    const newTurnTaker = turnTaker === "chicken" ? "banana" : "chicken";
    setTurnTaker(newTurnTaker);
  };

  const checkAnswer = (turnTaker: string, value: string) => {
    if (turnTaker === value) {
      switchTurns(turnTaker);
      if (value === "chicken") {
        setChickenScore(chickenScore + 1);
      } else {
        setBananaScore(chickenScore + 1);
      }
    } else {
      setIsGameOver(true);
      switchTurns(turnTaker);
      if (turnTaker === "chicken") {
        setBananaWins(true);
      } else {
        setChickenWins(true);
      }
    }
  };

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <div className="stat-section">
          <Scoreboard
            chickenScore={chickenScore}
            bananaScore={bananaScore}
          ></Scoreboard>
          <GameStatus
            turnTaker={turnTaker}
            chickenWins={chickenWins}
            bananaWins={bananaWins}
          ></GameStatus>
          <div className="game-status"></div>
        </div>
        <div className="game-grid">
          {gameCells.map((value, index) => (
            <Cell
              index={index + 1}
              type={value}
              isClickable={!isGameOver}
              onClick={() => {
                checkAnswer(turnTaker, value);
                console.log("TEST");
              }}
            ></Cell>
          ))}
        </div>
        {isGameOver && <button className="reset-button active" onClick={resetGame}>🔄 Reset</button>}
      </div>
    </>
  );
}

export default App;
