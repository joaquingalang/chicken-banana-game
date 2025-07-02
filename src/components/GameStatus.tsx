
interface Props {
  turnTaker: string,
  chickenWins: boolean,
  bananaWins: boolean,
}

function GameStatus({turnTaker, chickenWins, bananaWins}: Props) {
  return <div className="stat-board">
    <p className="stat-title">GAME STATUS</p>
    <p className="player-desc">Two players: Chicken & Banana</p>
    <div className={"turn-taker " + turnTaker}>
      {(chickenWins || bananaWins) ? null : <p>{(turnTaker === "chicken" ? "Chicken" : "Banana") + "'s Turn"}</p>}
      {chickenWins && <p>🏆 Chicken Wins! 🎉</p>}
      {bananaWins && <p>🏆 Banana Wins! 🎉</p>}
    </div>
  </div>;
}

export default GameStatus;
