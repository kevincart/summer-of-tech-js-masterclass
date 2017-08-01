import express from 'express';
import GameState from './game-state';
import bodyParser from 'body-parser';

let app = express();
let gameState = new GameState();
app.get('/', (req, res) => {
  app.use(express.static('client'));
});

const server = app.listen(5000, () => {
    console.log(`Server is running on port ${server.address().port}!`);
});

app.post('/join-game', (req, res) => {
    let { name, symbol } = req.body;

    try {
        let token = gameState.addPlayer({ name, symbol });
        res.status(200).json({ token });
    } catch (e) {
        let { message } = e;
        res.status(400).json({ message });
    }
});

app.get('/game-state', (req, res) => {
  res.json(gameState);
});

app.post('/take-turn', (req, res) => {
  let { move } = req.body;
  try {
      gameState.addMove({ move });
      res.status(200).end();
  } catch (e) {
      let { message } = e;
      res.status(400).json({ message });
  }
});
app.use(bodyParser.json());
