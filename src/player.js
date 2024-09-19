import { Gameboard } from "./gameboard";

export class Player {
    constructor(isBot = false) {
        this.isBot = isBot;
        this.name = isBot == false ? 'player' : 'bot';
        this.gameboard = new Gameboard();
        this.attacks = new Set();
    }

    attack(opponentGameboard, x, y) {
        const attackKey = `${x},${y}`;
        if (this.attacks.has(attackKey)) {
            return false;
        }
        this.attacks.add(attackKey);
        return opponentGameboard.receiveAttack(x, y);
    }

    randomAttack(opponentGameboard) {
        let x, y;
        do {
            x = Math.floor(Math.random() * opponentGameboard.size);
            y = Math.floor(Math.random() * opponentGameboard.size);
        } while (this.attacks.has(`${x},${y}`));
        return this.attack(opponentGameboard, x, y);
    }
}