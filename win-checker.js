export default class WinChecker {
    checkWin (gameState) {
        return false;
    }
    checkWinScenario (winMoves, currentPlayerMoves) {
    return winMoves.every(move => currentPlayerMoves.indexOf(move) !== -1);
    }
    checkPlayerWin (currentPlayerMoves) {
    return WIN_SCENARIOS.some(winMoves => this.checkWinScenario(winMoves, currentPlayerMoves));
    }
}

const WIN_SCENARIOS = [
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 4, 8], // Left-top to right-bottom diagonal
    [2, 4, 6]  // Right-top to left-bottom diagonal
];
