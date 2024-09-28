# Battleship

## Overview
The Battleship Game is a JavaScript implementation of the classic naval warfare game. Players can compete against the computer, placing ships and attacking until all of the opponent's ships are sunk.

## Features
- Player vs. Computer gameplay
- Customizable ship placement and direction
- Random ship placement option
- Support for resetting and restarting the game
- Display of game status and winner


## Code Breakdown

### 1. `index.js`
- **Functionality**: Responsible for initializing the game and manipulating the DOM.
- **Key Functions**:
  - `buildStartPageDom()`: Creates the DOM structure for the game start page.
  - `initStartPage()`: Initializes the player’s ship placement interface.
  - `startGame()`: Starts the game and handles game logic, including player and computer attacks.

### 2. `player.js`
- **Functionality**: Defines classes for the player and the computer (Bot).
- **Key Classes**:
  - `Player`: Contains logic for attacking and checking for a winner.
    - Methods:
      - `attack(opponentGameBoard, x, y)`: Attacks the opponent's game board.
      - `checkWinner(opponent)`: Checks for a winner in the game.
  - `Bot`: Inherits from `Player` and implements the logic for the computer's attacks.
    - Methods:
      - `botAttack(opponentGameBoard)`: Logic for the computer to attack.

### 3. `gameBoard.js`
- **Functionality**: Manages the state of the game board, including ship placement and attack logic.
- **Key Functions**:
  - `placeShip(ship, row, col, direction)`: Places a ship on the game board.
  - `receiveAttack(x, y)`: Handles an attack and updates ship status.

### 4. `boardFunctions.js`
- **Functionality**: Provides functions for updating the game board.
- **Key Functions**:
  - `updateBoard(boardElement, player, opponent)`: Updates the display state of the game board.

### 5. `findParentContainer.js`
- **Functionality**: Provides a helper function to find specific parent elements in the DOM.

## How to Run
1. Clone or download this project to your local machine.
2. Open the `index.html` file in a web browser.
3. Follow the on-screen prompts to start the game.

## Usage Instructions
- On the game start page, players can choose to place ships manually or use the random placement option.
- Click the `Start` button to begin the game.
- Players take turns attacking by clicking on the computer's game board.
- The game will display remaining ship counts and declare the winner.
