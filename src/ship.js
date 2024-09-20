export class Ship {
    constructor(length, hits = 0) {
        this.length = length;
        this.hits = hits;
    }

    hit(time = 1) {
        while (time > 0) {
            this.hits++;
            time--;
        }
        return this.hits;
    }

    isSunk() {
        return this.length <= this.hits;
    }
}

export const generateShips = ()=>{
    const patrolBoat = new Ship(2);
    const destroyer = new Ship(3);
    const subMarine = new Ship(3);
    const battleShip = new Ship(4);
    const carrier = new Ship(5);
    return [patrolBoat, destroyer, subMarine, battleShip, carrier];
}