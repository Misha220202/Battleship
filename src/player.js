import { GameBoard } from './gameBoard';

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
    this.firstTarget = null; //firstHit
    this.currentTarget = null; //lastHit
    this.lastHitDirection = null;
  }

  #oppositeDirection(direction) {
    const newDirection =
      direction == 'left'
        ? 'right'
        : direction == 'right'
          ? 'left'
          : direction == 'up'
            ? 'down'
            : direction == 'down'
              ? 'up'
              : null;
    return newDirection;
  }

  #calculateCoord(lastHitDirection, x, y) {
    const [nextX, nextY] =
      lastHitDirection == 'left'
        ? [x, y - 1]
        : lastHitDirection == 'right'
          ? [x, y + 1]
          : lastHitDirection == 'up'
            ? [x - 1, y]
            : lastHitDirection == 'down'
              ? [x + 1, y]
              : null;
    return [nextX, nextY];
  }

  #calculateDirection([firstX, firstY], [secondX, secondY]) {
    const direction =
      secondX == firstX && secondY == firstY - 1
        ? 'left'
        : secondX == firstX && secondY == firstY + 1
          ? 'right'
          : secondX == firstX - 1 && secondY == firstY
            ? 'up'
            : secondX == firstX + 1 && secondY == firstY
              ? 'down'
              : null;
    return direction;
  }

  attack(opponentGameBoard, x, y) {
    const hit = super.attack(opponentGameBoard, x, y);
    if (opponentGameBoard.shipBeingAttacked) {
      if (hit == 1) {
        this.firstTarget = [x, y];
        this.currentTarget = [x, y];
      } else if (hit > 1 && hit < opponentGameBoard.shipBeingAttacked.length) {
        if (this.currentTarget) {
          const [targetX, targetY] = this.currentTarget;
          this.lastHitDirection = this.#calculateDirection(
            [targetX, targetY],
            [x, y]
          );
        }
        this.currentTarget = [x, y];
      } else if (hit == false) {
        this.currentTarget = this.firstTarget;
        this.lastHitDirection = this.#oppositeDirection(this.lastHitDirection);
      }
    } else {
      this.firstTarget = null;
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
        nextMove = [
          this.#calculateCoord(this.lastHitDirection, targetX, targetY),
        ];
        const [nextX, nextY] = nextMove[0];
        if (this.attacks.has(`${nextX},${nextY}`)) {
          const [firstTargetX, firstTargetY] = this.firstTarget;
          nextMove = [
            this.#calculateCoord(
              this.#oppositeDirection(this.lastHitDirection),
              firstTargetX,
              firstTargetY
            ),
          ];
        }
      } else {
        nextMove = [
          [targetX - 1, targetY],
          [targetX + 1, targetY],
          [targetX, targetY - 1],
          [targetX, targetY + 1],
        ];
      }
      for (let [nextX, nextY] of nextMove) {
        if (
          opponentGameBoard.isValidCoordinate(nextX, nextY) &&
          !this.attacks.has(`${nextX},${nextY}`) &&
          !opponentGameBoard
            .getSunkAdjacentCoordinates()
            .has(`${nextX},${nextY}`)
        ) {
          return this.attack(opponentGameBoard, nextX, nextY);
        }
      }
    }

    do {
      x = Math.floor(Math.random() * opponentGameBoard.size);
      y = Math.floor(Math.random() * opponentGameBoard.size);
    } while (
      this.attacks.has(`${x},${y}`) ||
      opponentGameBoard.getSunkAdjacentCoordinates().has(`${x},${y}`)
    );
    return this.attack(opponentGameBoard, x, y);
  }
}
