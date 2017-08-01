import express from 'express';
import GameState from './game-state';
import bodyParser from 'body-parser';

let app = express();
let gameState = new GameState();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const server = app.listen(5000, () => {
    console.log(`Server is running on port ${server.address().port}!`);
});

app.post('/join-game', (req, res) => {
  console.log(req.body);
  let { name, symbol } = req.body;
  gameState.addPlayer({ name, symbol });
  res.status(200).end();
});

app.get('/game-state', (req, res) => {
  res.json(gameState);
});

app.post('/take-turn', (req, res) => {
  console.log(req.body);
  let { move } = req.body;
  gameState.addMove({ move });
  res.status(200).end();
});
app.use(bodyParser.json());
