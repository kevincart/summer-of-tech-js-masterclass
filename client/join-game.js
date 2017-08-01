class JoinGame extends React.Component {
  constructor (props) {
      super();
      this.props = props;
      this.state = {
          name: '',
          symbol: ''
      };
  }
  render () {
  return (
      <form onSubmit={e => this.joinGame(e)}>
          <h2>Join game:</h2>
          <label>Name:</label>
          <br/>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={e => this.handleNameChange(e)}
          />
          <br/>
          <label>Symbol:</label>
          <br/>
          <input
            type="text"
            placeholder="X"
            value={this.state.symbol}
            onChange={e => this.handleSymbolChange(e)}
          />
          <br/>
          <input type="submit" value="Join"/>
      </form>
  );
  }
}
window.JoinGame = JoinGame;
onSubmit={e => this.joinGame(e)}
onChange={e => this.handleNameChange(e)}
onChange={e => this.handleSymbolChange(e)}

value={this.state.name}
value={this.state.symbol}
