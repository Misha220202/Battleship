import './index.css';

import { Player, Bot } from './player';
import { findParentContainerByClass } from './findParentContainer';
import { updateBoard } from './boardFunctions';

const player = new Player();
const bot = new Bot();
bot.gameBoard.placeShipRandomly();

const gameCenter = document.querySelector('.gameCenter');

function buildStartPageDom() {
  const carrierURL = require('./assets/images/carrier.svg');
  const battleShipURL = require('./assets/images/battleShip.svg');
  const subMarineURL = require('./assets/images/subMarine.svg');
  const destroyerURL = require('./assets/images/destroyer.svg');
  const patrolBoatURL = require('./assets/images/patrolBoat.svg');

  gameCenter.innerHTML = `
    <div class="setPlayerBoard">
        <h2>Place your ships</h2>
        <div class="playerBoard"></div>
        <div class="chooseShip">
            <div class="shipContainer" id="carrier">
                <span>carrier<br>(5f)</span>
                <div class="shipIcon"><img src="${carrierURL}" alt="carrier"></div>
            </div>
            <div class="shipContainer" id="battleShip">
                <span>battleShip<br>(4f)</span>
                <div class="shipIcon"><img src="${battleShipURL}" alt="battleShip"></div>
            </div>
            <div class="shipContainer" id="subMarine">
                <span>subMarine<br>(3f)</span>
                <div class="shipIcon"><img src="${subMarineURL}" alt="subMarine"></div>
            </div>
            <div class="shipContainer" id="destroyer">
                <span>destroyer<br>(3f)</span>
                <div class="shipIcon"><img src="${destroyerURL}" alt="destroyer"></div>
            </div>
            <div class="shipContainer" id="patrolBoat">
                <span>patrolBoat<br>(2f)</span>
                <div class="shipIcon"><img src="${patrolBoatURL}" alt="patrolBoat"></div>
            </div>
        </div>
        <div class="controlBoard">
            <button value="horizontal">horizontal</button>
            <button value="random">Random</button>
            <button value="reset">Reset</button>
            <button value="start">Start</button>
        </div>
    </div>`;
}

function initStartPage() {
  const setPlayerBoard = document.querySelector('.setPlayerBoard');

  const playerBoard = setPlayerBoard.querySelector('.playerBoard');
  updateBoard(playerBoard, player, bot);

  const chooseShip = setPlayerBoard.querySelector('.chooseShip');
  const chooseCarrier = chooseShip.querySelector('#carrier');
  const chooseBattleShip = chooseShip.querySelector('#battleShip');
  const chooseSubMarine = chooseShip.querySelector('#subMarine');
  const chooseDestroyer = chooseShip.querySelector('#destroyer');
  const choosePatrolBoat = chooseShip.querySelector('#patrolBoat');

  const [patrolBoat, destroyer, subMarine, battleShip, carrier] =
    player.gameBoard.shipsToPlace;
  chooseCarrier.obj = carrier;
  chooseBattleShip.obj = battleShip;
  chooseSubMarine.obj = subMarine;
  chooseDestroyer.obj = destroyer;
  choosePatrolBoat.obj = patrolBoat;

  const chooseShipNodes = setPlayerBoard.querySelectorAll('.shipContainer');

  const controlBoard = setPlayerBoard.querySelector('.controlBoard');
  let direction = 'horizontal';

  controlBoard.addEventListener('click', (e) => {
    const target = e.target;
    if (target.value == 'horizontal' || target.value == 'vertical') {
      target.value = target.value == 'horizontal' ? 'vertical' : 'horizontal';
      direction = target.value;
      target.textContent = target.value;
    } else if (target.value == 'random') {
      player.gameBoard.init();
      player.gameBoard.placeShipRandomly();
      updateBoard(playerBoard, player, bot);
      chooseShipNodes.forEach((chooseShipNode) => {
        chooseShipNode.classList.remove('chosen');
        chooseShipNode.classList.add('hidden');
      });
    } else if (target.value == 'reset') {
      location.reload();
    } else if (target.value == 'start') {
      if (player.gameBoard.shipsToPlace.length == 0) {
        startGame();
      }
    }
  });

  chooseShip.addEventListener('click', (e) => {
    const target = e.target;
    const chooseShipNode = findParentContainerByClass(target, 'shipContainer');
    if (chooseShipNode && !chooseShipNode.classList.contains('hidden')) {
      chooseShipNodes.forEach((chooseShipNode) => {
        chooseShipNode.classList.remove('chosen');
      });
      chooseShipNode.classList.add('chosen');
    }
  });

  playerBoard.addEventListener('mousemove', (e) => {
    const chooseShipNode = chooseShip.querySelector('.chosen');
    const cell = findParentContainerByClass(e.target, 'cell');
    if (chooseShipNode && cell.dataset.info) {
      const cells = playerBoard.querySelectorAll('.cell');
      cells.forEach((cell) => cell.classList.remove('active'));

      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);
      const size = player.gameBoard.size;
      const col = mouseX;
      const row = mouseY;
      const index = row * size + col;

      const brushWidth = chooseShipNode.obj.length;
      if (direction == 'horizontal') {
        if (col + brushWidth - 1 < size) {
          for (let i = 0; i < brushWidth; i++) {
            cells[index + i].classList.add('active');
          }
        }
      } else {
        if (row + brushWidth - 1 < size) {
          for (let i = 0; i < brushWidth; i++) {
            cells[index + i * size].classList.add('active');
          }
        }
      }
    }
  });

  playerBoard.addEventListener('click', (e) => {
    const chooseShipNode = chooseShip.querySelector('.chosen');
    const cell = findParentContainerByClass(e.target, 'cell');
    if (chooseShipNode && cell.dataset.info) {
      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);
      const col = mouseX;
      const row = mouseY;

      const brushWidth = chooseShipNode.obj.length;
      const shipCoordinates = [];
      if (direction == 'horizontal') {
        for (let i = 0; i < brushWidth; i++) {
          shipCoordinates.push([row, col + i]);
        }
      } else {
        for (let j = 0; j < brushWidth; j++) {
          shipCoordinates.push([row + j, col]);
        }
      }

      const ship = chooseShipNode.obj;
      if (player.gameBoard.canPlaceShip(shipCoordinates)) {
        player.gameBoard.placeShip(ship, row, col, direction);
        updateBoard(playerBoard, player, bot);
        chooseShipNode.classList.remove('chosen');
        chooseShipNode.classList.add('hidden');
      }
    }
  });
}

function startGame() {
  gameCenter.innerHTML = `
        <div class="gaming">
            <div class="screen">
                <div class="player">
                    <p>Player<span class="hidden"> is the Winner!</span></p>
                    <p><span id="playerShips">5</span> ships left.</p>
                </div>
                <div class="bot">
                    <p>Bot<span class="hidden"> is the Winner!</span></p>
                    <p><span id="botShips">5</span> ships left.</p>
                </div>
            </div>
            <div class="playerBoard"></div>
            <div class="botBoard"></div>
            <div class="controlBoard">
                <button class="restart">Restart</button>
            </div>
        </div>`;

  const gaming = gameCenter.querySelector('.gaming');
  const playerBoard = gaming.querySelector('.playerBoard');
  const botBoard = gaming.querySelector('.botBoard');
  updateBoard(playerBoard, player, bot);
  updateBoard(botBoard, bot, player);

  let playerTurn = true;
  botBoard.addEventListener('click', (e) => {
    if (playerTurn&&!player.checkWinner(bot)) {
      const screen = gaming.querySelector('.screen');
      const playerScreen = screen.querySelector('.screen>.player .hidden');
      const playerShip = screen.querySelector('.screen>.player #playerShips');
      const botScreen = screen.querySelector('.screen>.bot .hidden');
      const botShip = screen.querySelector('.screen>.bot #botShips');

      const cell = findParentContainerByClass(e.target, 'cell');
      const [mouseY, mouseX] = cell.dataset.info.split(',').map(Number);
      const col = mouseX;
      const row = mouseY;
      const attackKey = `${row},${col}`;

      const announceWinner = (name) => {
        if (!name) {
          return;
        }
        if (name == 'player') {
          playerScreen.classList.remove('hidden');
        }
        if (name == 'bot') {
          botScreen.classList.remove('hidden');
        }
      };

      if (!player.attacks.has(attackKey)) {
        player.attack(bot.gameBoard, row, col);
        playerTurn=false;
        updateBoard(botBoard, bot, player);
        botShip.textContent = bot.gameBoard.quantityShipsSunk();
        announceWinner(player.checkWinner(bot));
        if (!player.checkWinner(bot)) {
          setTimeout(() => {
            bot.botAttack(player.gameBoard);
            playerTurn = true;
            updateBoard(playerBoard, player, bot);
            playerShip.textContent = player.gameBoard.quantityShipsSunk();
            announceWinner(player.checkWinner(bot));
          }, 500);
        }
      }
    }
  });

  const restart = gaming.querySelector('.restart');
  restart.addEventListener('click', () => {
    location.reload();
  });
}

window.onload = () => {
  buildStartPageDom();
  initStartPage();
};
