const Square = ({ id, player, newState }) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const xo = ["X", "O"];

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  
  React.useEffect(() => {
    console.log(`Render ${id}`)
    return () => console.log(`unmounting Square ${id}`);
  })
  
  return (
    <button onClick={(e) => {
      let col = getRandomColor();
      setColor(col);
      let nextPlayer = newState({id: id, color: col})
      setStatus(nextPlayer);
      e.target.style.background = col;
    }}> 
      <h1>{xo[status]}</h1> 
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState([]);
  
  let status = `Player ${player}`;
  
  const newState = (obj) => {
    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);
    setState([...state, obj]);    
    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextplayer}`;
    return nextplayer;
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <button>Show/HideRow</button>
        <button>Re-render</button>
        <h1>Player {player}'s Turn</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
