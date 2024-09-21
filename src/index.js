import "./index.css";

import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player, Bot } from './player';
import { findParentContainerByClass, findParentContainerById } from "./findParentContainer";
import { initBoard } from "./boardFunctions";

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
    initBoard(playerBoard, player.gameBoard);

    const chooseShip = setPlayerBoard.querySelector('.chooseShip');
    const chooseCarrier = chooseShip.querySelector('#carrier');
    const chooseBattleShip = chooseShip.querySelector('#battleShip');
    const chooseSubMarine = chooseShip.querySelector('#subMarine');
    const chooseDestroyer = chooseShip.querySelector('#destroyer');
    const choosePatrolBoat = chooseShip.querySelector('#patrolBoat');

    const [patrolBoat, destroyer, subMarine, battleShip, carrier] = player.gameBoard.shipsToPlace;
    chooseCarrier.obj = carrier;
    chooseBattleShip.obj = battleShip;
    chooseSubMarine.obj = subMarine;
    chooseDestroyer.obj = destroyer;
    choosePatrolBoat.obj = patrolBoat;

    const shipsNodeArray = Array.from(setPlayerBoard.querySelectorAll('.shipContainer'));

    let direction = 'horizontal';

    chooseShip.addEventListener('click', (e) => {
        const target = e.target;
        const chooseShipNode = findParentContainerByClass(target, 'shipContainer');
        if (chooseShipNode && !chooseShipNode.classList.contains('hidden')) {
            shipsNodeArray.forEach(chooseShipNode => {
                chooseShipNode.classList.remove('chosen');
            });
            chooseShipNode.classList.add('chosen');
        }
    })

    playerBoard.addEventListener('mousemove', (e) => {
        const chooseShipNode = chooseShip.querySelector('.chosen');
        if (chooseShipNode) {
            const brushWidth = chooseShipNode.obj.length;

            const cells = playerBoard.querySelectorAll('.cell');
            cells.forEach(cell => cell.classList.remove('active'));
    
            const rect = playerBoard.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const size = player.gameBoard.size;
    
            const col = Math.floor(mouseX / (rect.width / size));
            const row = Math.floor(mouseY / (rect.height / size));
            const index = row * size + col;

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
        if (chooseShipNode) {
            const brushWidth = chooseShipNode.obj.length;
            const shipCoordinates = [];
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const size = player.gameBoard.size;
            if (direction == 'horizontal') {
                for (let i = 0; i < brushWidth; i++) {
                    shipCoordinates.push([]);
                }
            }
        }
    });
}

window.onload = () => {
    buildStartPageDom();
    initStartPage();
}
