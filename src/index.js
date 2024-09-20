import "./index.css";

import { Ship } from "./ship";
import { GameBoard } from "./gameBoard";
import { Player, Bot } from './player';
import { findParentContainerByClass, fndParentContainerById } from "./findParentContainer";
import { initBoard } from "./initBoard";

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

    const chooseCarrier = setPlayerBoard.querySelector('#carrier');
    const chooseBattleShip = setPlayerBoard.querySelector('#battleShip');
    const chooseSubMarine = setPlayerBoard.querySelector('#subMarine');
    const chooseDestroyer = setPlayerBoard.querySelector('#destroyer');
    const choosePatrolBoat = setPlayerBoard.querySelector('#patrolBoat');

    const [patrolBoat, destroyer, subMarine, battleShip, carrier] = player.gameBoard.shipsToPlace;
    chooseCarrier.obj = carrier;
    chooseBattleShip.obj = battleShip;
    chooseSubMarine.obj = subMarine;
    chooseDestroyer.obj = destroyer;
    choosePatrolBoat.obj = patrolBoat;

    const playerBoard = setPlayerBoard.querySelector('.playerBoard');
    initBoard(playerBoard, player.gameBoard);
    const cellsArray = Array.from(playerBoard.querySelectorAll('.cell'));

    const shipsNodeArray = Array.from(setPlayerBoard.querySelectorAll('.shipContainer'));

    setPlayerBoard.addEventListener('click', (event) => {
        const target = event.target;
        if (findParentContainerByClass(target, 'shipContainer')) {
            const shipNode = findParentContainerByClass(target, 'shipContainer')
            shipsNodeArray.forEach(ship => {
                ship.classList.remove('chosen');
            });
            shipNode.classList.add('chosen');
        }
    })
}

window.onload = () => {
    buildStartPageDom();
    initStartPage();
}
