import { GameBoard } from "./gameBoard";

export const updateBoard = (node, friend,enemy) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    for (let i = 0; i < friend.gameBoard.size; i++) {
        const adjacents = friend.gameBoard.getAllAdjacentCoordinates().map(coord => coord.join(','));
        const missedAttacks = friend.gameBoard.missedAttacks.map(coord => coord.join(','));
        for (let j = 0; j < friend.gameBoard.size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.info = `${i},${j}`;
            cell.obj = friend.gameBoard.board[i][j];
            if (cell.obj) {
                cell.classList.add('placed');
                if(enemy.attacks.has(`${i},${j}`)){
                    cell.classList.remove('placed');
                    cell.classList.add('hit');
                }
            }
            if (adjacents.includes(`${i},${j}`)) {
                cell.classList.add('adjacent');
            }
            if(missedAttacks.includes(`${i},${j}`)) {
                cell.classList.add('missed');
            }
            node.appendChild(cell);
        }
    }
}