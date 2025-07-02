
interface Props {
  turnTaker: string,
}

function GameStatus({turnTaker}: Props) {
  return <div className="stat-board">
    <p className="stat-title">GAME STATUS</p>
    <p className="player-desc">Two players: Chicken & Banana</p>
    <div className={"turn-taker " + turnTaker}>
        <p>{(turnTaker === "chicken" ? "Chicken" : "Banana") + "'s Turn"}</p>
    </div>
  </div>;
}

export default GameStatus;
