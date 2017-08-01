class TicTacToe extends React.Component {
    constructor () {
        super();
        this.state = {
        gameState: {
          players: []
          },
        token: null
        };
    }
    render () {
      let { gameState, token } = this.state;
      let gameIsEmpty = gameState.players.length === 0;
      let waitingForPlayer = gameState.players.length === 1;
      let gameIsFull = gameState.players.length === 2;
      let gameIsUnderway = gameIsFull && gameState.whoseTurn;
      let gameIsWon = gameIsFull && !gameState.whoseTurn && gameState.winner;
      let gameIsDrawn = gameIsFull && !gameState.whoseTurn && !gameState.winner;

      if (!token && !gameIsFull) {
        return <JoinGame onJoinGame={token => this.setToken(token)}/>
      }
    }
    setToken (token) {
    this.state.token = token;
    }
    loadGameState () {
    fetch('/game-state')
    .then(response => response.json())
    .then(gameState => this.setState({ gameState }));
    }
    componentDidMount () {
    this.loadGameState();
    setInterval(() => this.loadGameState(), 1000);
    }
}
window.TicTacToe = TicTacToe;
