import { Player, Bot } from './player';

export const updateBoard = (node, friend, enemy) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  for (let i = 0; i < friend.gameBoard.size; i++) {
    for (let j = 0; j < friend.gameBoard.size; j++) {
      const cell = document.createElement('div');
      cell.innerHTML = `
            <div class="hitOrMiss"></div>`;
      cell.classList.add('cell');
      cell.dataset.info = `${i},${j}`;
      cell.obj = friend.gameBoard.board[i][j];
      const hitOrMiss = cell.firstElementChild;
      if (cell.obj) {
        cell.classList.add('placed');
        if (enemy.attacks.has(`${i},${j}`)) {
          hitOrMiss.classList.remove('placed');
          hitOrMiss.classList.add('hit');
        }
      }
      if (friend.gameBoard.getAllAdjacentCoordinates().has(`${i},${j}`)) {
        cell.classList.add('adjacent');
      }
      if (friend.gameBoard.getSunkAdjacentCoordinates().has(`${i},${j}`)) {
        cell.classList.add('sunkAdjacent');
      }
      if (friend.gameBoard.missedAttacks.has(`${i},${j}`)) {
        hitOrMiss.classList.add('missed');
      }
      node.appendChild(cell);
    }
  }
};
