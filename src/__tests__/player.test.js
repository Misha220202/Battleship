import { Player, Bot } from '../player';

describe('test player/bot functions', () => {
  const player = new Player();
  player.gameBoard.placeShipRandomly();
  const bot = new Bot();
  bot.gameBoard.placeShipRandomly();

  test('player attack functions', () => {
    for (let i = 1; i <= 15; i++) {
      let x, y;
      do {
        x = Math.floor(Math.random() * bot.gameBoard.size);
        y = Math.floor(Math.random() * bot.gameBoard.size);
      } while (player.attacks.has(`${x},${y}`));
      if (bot.gameBoard.board[x][y]) {
        expect(player.attack(bot.gameBoard, x, y)).toBe(
          bot.gameBoard.board[x][y].hits
        );
      } else {
        expect(player.attack(bot.gameBoard, x, y)).toBe(false);
      }
    }
  });
});
