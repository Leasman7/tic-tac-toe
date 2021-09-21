const Square = () => {
  return (
    <button></button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square></Square>;
  }
  return (
    <div
      className="game-board"
      onClick={(e) => {
        if (player === 1) {
        setPlayer(player + 1);
        };
        if (player === 2) {
          setPlayer(player - 1);
        };
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
