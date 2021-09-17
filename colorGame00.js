const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  return (
    <div
      className="game-board"
      onClick={(e) => {
        if (player === 1) {
        setPlayer(player - 1);
        };
        if (player === 0) {
          setPlayer(player + 1);
        };
        status = `Player ${player}`;
      }}
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
