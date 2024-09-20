import { GameBoard } from "./gameBoard";

export class Player {
    constructor() {
        this.gameBoard = new GameBoard();
        this.attacks = new Set();
        this.name = 'player';
    }

    attack(opponentGameBoard, x, y) {
        const attackKey = `${x},${y}`;
        if (this.attacks.has(attackKey)) {
            return false;
        }
        this.attacks.add(attackKey);
        return opponentGameBoard.receiveAttack(x, y);
    }
}

export class Bot extends Player {
    constructor() {
        super();
        this.name = 'bot';
        this.hitTargets = [];
        this.currentTarget = null;
        this.lastHitDirection = null;
    }

    attack(opponentGameBoard, x, y) {
        const hit = super.attack(opponentGameBoard, x, y);
        if (hit) {
            this.hitTargets.push([x, y]);
            if (this.currentTarget) {
                const [targetX, targetY] = this.currentTarget;
                this.lastHitDirection = x == targetX ? 'horizontal' : y === targetY ? 'vertical' : null;
            }
            this.currentTarget = [x, y];
        } else {
            this.currentTarget = null;
            this.lastHitDirection = null;
        }
        return hit;
    }

    botAttack(opponentGameBoard) {
        let x, y;
        if (this.currentTarget) {
            const [targetX, targetY] = this.currentTarget;
            let nextMove;
            if (this.lastHitDirection) {
                nextMove = this.lastHitDirection == 'horizontal' ? [[targetX, targetY - 1], [targetX, targetY + 1]] : [[targetX - 1, targetY], [targetX + 1, targetY]];
            } else {
                nextMove = [
                    [targetX - 1, targetY],
                    [targetX + 1, targetY],
                    [targetX, targetY - 1],
                    [targetX, targetY + 1]];
            }
            for (let [nextX, nextY] of nextMove) {
                if (opponentGameBoard.isValidCoordinate(nextX, nextY) && !this.attacks.has(`${nextX},${nextY}`)) {
                    const hit = this.attack(opponentGameBoard, nextX, nextY);
                    if (hit > 1) {
                        this.lastHitDirection = null;
                        this.currentTarget = null;
                    }
                    return hit;
                }
            }
            this.lastHitDirection = null;
            this.currentTarget = null;
        }

        do {
            x = Math.floor(Math.random() * opponentGameBoard.size);
            y = Math.floor(Math.random() * opponentGameBoard.size);
        } while (this.attacks.has(`${x},${y}`));

        return this.attack(opponentGameBoard, x, y);
    }
}