import { GameBoard } from '../gameBoard';

describe('test gameBoard functions', () => {
  const gameBoard = new GameBoard();
  const [patrolBoat, destroyer, subMarine, battleShip, carrier] =
    gameBoard.shipsToPlace;

  test('placeShip function', () => {
    expect(gameBoard.placeShip(patrolBoat, 3, 2)).toEqual({
      ship: patrolBoat,
      coordinates: [
        [3, 2],
        [3, 3],
      ],
      adjacentCoordinates: [
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 1],
        [4, 1],
        [4, 2],
        [4, 3],
        [2, 4],
        [3, 4],
        [4, 4],
      ],
    });
    expect(gameBoard.placeShip(destroyer, 5, 2, 'vertical')).toEqual({
      ship: destroyer,
      coordinates: [
        [5, 2],
        [6, 2],
        [7, 2],
      ],
      adjacentCoordinates: [
        [4, 1],
        [4, 2],
        [4, 3],
        [5, 1],
        [5, 3],
        [6, 1],
        [6, 3],
        [7, 1],
        [7, 3],
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    });
    expect(gameBoard.placeShip(subMarine, 3, 2)).toEqual(undefined); //coord already occupied by patrolBoat
    expect(gameBoard.placeShip(battleShip, 8, 2)).toEqual(undefined); //too close to destroyer
    expect(gameBoard.placeShip(carrier, 7, 7)).toEqual(undefined); //out of board
  });

  test('receiveAttack function', () => {
    expect(gameBoard.receiveAttack(3, 2)).toBe(1);
    expect(gameBoard.receiveAttack(3, 3)).toBe(2);
    expect(gameBoard.receiveAttack(1, 1)).toBe(false);
    expect(gameBoard.receiveAttack(9, 2)).toBe(false);
  });

  test('missedAttacks tracking records', () => {
    expect(Array.from(gameBoard.missedAttacks)).toEqual(['1,1', '9,2']);
  });

  test('allShipsSunk function', () => {
    expect(gameBoard.allShipsSunk()).toBe(false);
    gameBoard.receiveAttack(5, 2);
    gameBoard.receiveAttack(6, 2);
    gameBoard.receiveAttack(7, 2);
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});
