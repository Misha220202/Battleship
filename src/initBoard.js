export const initBoard = (node, gameBoard) => {
    for (let i = 0; i < gameBoard.size; i++) {
        for (let j = 0; j < gameBoard.size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.obj = gameBoard.board[i][j];
            node.appendChild(cell);
        }
    }
}