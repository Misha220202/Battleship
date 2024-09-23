import { Ship, generateShips } from './ship';

export class GameBoard {
  constructor(size = 10) {
    this.size = size;
    this.init();
  }

  init() {
    this.board = Array(this.size)
      .fill()
      .map(() => Array(this.size).fill(null));
    this.missedAttacks = new Set();
    this.shipsToPlace = generateShips();
    this.ships = [];
    this.shipBeingAttacked = null;
  }

  getAdjacent(x, y) {
    return [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ];
  }

  isValidCoordinate(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  getAllAdjacentCoordinates() {
    const allAdjacents = new Set();
    for (let shipObj of this.ships) {
      for (let [adjX, adjY] of shipObj.adjacentCoordinates) {
        allAdjacents.add(`${adjX},${adjY}`);
      }
    }
    return allAdjacents;
  }

  getSunkAdjacentCoordinates() {
    const sunkAdjacents = new Set();
    for (let shipObj of this.ships.filter((shipObj) => shipObj.ship.isSunk())) {
      for (let [adjX, adjY] of shipObj.adjacentCoordinates) {
        sunkAdjacents.add(`${adjX},${adjY}`);
      }
    }
    return sunkAdjacents;
  }

  canPlaceShip(shipCoordinates) {
    const allAdjacents = this.getAllAdjacentCoordinates();
    for (let [x, y] of shipCoordinates) {
      if (
        !this.isValidCoordinate(x, y) ||
        this.board[x][y] !== null ||
        allAdjacents.has(`${x},${y}`)
      ) {
        return false;
      }
    }
    return true;
  }

  getShipCoordinates(ship, x, y, direction) {
    const shipCoordinates = [];
    if (direction == 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        shipCoordinates.push([x, y + i]);
      }
    } else if (direction == 'vertical') {
      for (let j = 0; j < ship.length; j++) {
        shipCoordinates.push([x + j, y]);
      }
    }
    return shipCoordinates;
  }

  placeShip(ship, x, y, direction = 'horizontal') {
    const shipCoordinates = this.getShipCoordinates(ship, x, y, direction);
    if (this.canPlaceShip(shipCoordinates)) {
      const adjacentCoordinates = new Set();
      for (let [shipX, shipY] of shipCoordinates) {
        this.board[shipX][shipY] = ship;

        const adjacents = this.getAdjacent(shipX, shipY);
        for (let [adjX, adjY] of adjacents) {
          const adjCoordinate = `${adjX},${adjY}`;
          if (
            this.isValidCoordinate(adjX, adjY) &&
            !shipCoordinates.some(([sX, sY]) => sX == adjX && sY == adjY)
          ) {
            adjacentCoordinates.add(adjCoordinate);
          }
        }
      }

      this.shipsToPlace.splice(this.shipsToPlace.indexOf(ship), 1);

      this.ships.push({
        ship: ship,
        coordinates: shipCoordinates,
        adjacentCoordinates: Array.from(adjacentCoordinates).map((coord) =>
          coord.split(',').map(Number)
        ),
      });
    }
  }

  placeShipRandomly() {
    while (this.shipsToPlace[0]) {
      const ship = this.shipsToPlace[0];
      let placed = false;
      while (!placed) {
        const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const x = Math.floor(Math.random() * this.size);
        const y = Math.floor(Math.random() * this.size);
        const shipCoordinates = this.getShipCoordinates(ship, x, y, direction);
        if (this.canPlaceShip(shipCoordinates)) {
          this.placeShip(ship, x, y, direction);
          placed = true;
        }
      }
    }
  }

  receiveAttack(x, y) {
    for (let shipObj of this.ships) {
      const { ship, coordinates, adjacentCoordinates } = shipObj;
      for (let [shipX, shipY] of coordinates) {
        if (shipX == x && shipY == y) {
          ship.hit();
          this.shipBeingAttacked = ship;
          if (ship.isSunk()) {
            this.shipBeingAttacked = null;
            return ship.length;
          }
          return ship.hits;
        }
      }
    }
    this.missedAttacks.add(`${x},${y}`);
    return false;
  }

  quantityShipsSunk() {
    return this.ships.filter((shipObj) => !shipObj.ship.isSunk()).length;
  }

  allShipsSunk() {
    return this.ships.every((shipObj) => shipObj.ship.isSunk());
  }
}
