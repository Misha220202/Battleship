import { generateShips } from './ship';

export class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.init();
    }

    init() {
        this.board = Array(this.size).fill().map(() => Array(this.size).fill(null));
        this.missedAttacks = [];
        this.ships = [];
    }

    getAdjacent(x, y) {
        return [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y - 1], [x, y + 1],
            [x + 1, y - 1], [x + 1, y], [x + 1, y + 1],
        ];
    }

    isValidCoordinate(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }

    getAllAdjacentCoordinates() {
        const adjacentSet = new Set();
        for (let ship of this.ships) {
            for (let [adjX, adjY] of ship.adjacentCoordinates) {
                adjacentSet.add(`${adjX},${adjY}`);
            }
        }
        return Array.from(adjacentSet).map(coord => coord.split(',').map(Number));
    }

    canPlaceShip(shipCoordinates) {
        const allAdjacentCoordinates = this.getAllAdjacentCoordinates();
        const allAdjacentSet = new Set(allAdjacentCoordinates.map(coord => coord.join(',')));
        for (let [x, y] of shipCoordinates) {
            if (!this.isValidCoordinate(x, y) || this.board[x][y] !== null || allAdjacentSet.has(`${x},${y}`)) {
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
                    if (this.isValidCoordinate(adjX, adjY)) {
                        adjacentCoordinates.add(`${adjX},${adjY}`);
                    }
                }
            }
            this.ships.push({
                ship: ship,
                coordinates: shipCoordinates,
                adjacentCoordinates: Array.from(adjacentCoordinates).map(coord => coord.split(',').map(Number))
            });
        }
    }

    placeShipRandomly() {
        const botShips = generateShips();
        botShips.forEach(ship => {
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
        })
    }

    receiveAttack(x, y) {
        for (let shipObj of this.ships) {
            const { ship, coordinates } = shipObj;
            for (let [shipX, shipY] of coordinates) {
                if (shipX == x && shipY == y) {
                    ship.hit([x, y]);
                    return true;
                }
            }
        }
        this.missedAttacks.push([x, y]);
        return false;
    }

    allShipsSunk() {
        return this.ships.every(shipObj => shipObj.ship.isSunk());
    }
}