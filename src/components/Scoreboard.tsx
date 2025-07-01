import ScoreKeeper from "./ScoreKeeper";

interface Props {
    chickenScore: number;
    bananaScore: number;
}

function Scoreboard({chickenScore, bananaScore}: Props) {
  return (
    <div className="stat-board">
      <p className="stat-title">SCOREBOARD</p>
      <div className="score-row">
        <ScoreKeeper className="chicken" type="chicken">{chickenScore}</ScoreKeeper>
        <ScoreKeeper className="banana" type="banana">{bananaScore}</ScoreKeeper>
      </div>
    </div>
  );
}

export default Scoreboard;
