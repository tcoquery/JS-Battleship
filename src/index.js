import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';
import { createGrid, showShip, shipPlacementOrder, registerPlayerAttacks, orientationButton, orientation} from './modules/interface';

const startBtn = document.getElementById('start');
const gameInfo = document.querySelector('.game-info');
const textInfo = document.querySelector('.text-info');
const board = gameboard();
const computerBoard = gameboard();
const playerCarrier = ship(5, "carrier");
const computerCarrier = ship(5, "computer-carrier");
const playerBattleship = ship(4, "battleship");
const computerBattleship = ship(4, "computer-battleship");
const playerCruiser = ship(3, "cruiser");
const computerCruiser = ship(3, "computer-cruiser");
const playerSubmarine = ship(3, "submarine");
const computerSubmarine = ship(3, "computer-submarine");
const playerDestroyer = ship(2, "destroyer");
const computerDestroyer = ship(2, "computer-destroyer");
let shipsPlaced = 0;
let shipLength = 5;

createGrid();

const gridCells = document.querySelectorAll('.player-grid-cell');
const computerCells = document.querySelectorAll('.computer-grid-cell')

startBtn.addEventListener('click', () => {
  textInfo.textContent = `Player, place your carrier.`;
  startBtn.style.display = "none";
  orientationButton();
  gridCells.forEach((cell) => {cell.addEventListener("mouseenter", showShipPosition)})
  gridCells.forEach((cell) => {cell.addEventListener("mouseenter", showHorizontalShips)})
  gridCells.forEach((cell) => {cell.addEventListener("mouseleave", hideShipPosition)})
  gridCells.forEach((cell) => {cell.addEventListener("mouseleave", hideHorizontalShips)})
  gridCells.forEach((cell) => {cell.addEventListener('click', placeShip)})
})

function showShipPosition(event) {
  if (orientation == "vert") {
    for (let i = 0; i < (shipLength * 10); i += 10)
      if (gridCells[parseInt(event.target.id) + ((shipLength - 1) * 10)] == null || gridCells[parseInt(event.target.id)+i].dataset.ship) {
        gridCells[parseInt(event.target.id) + i].classList.add("shadow-wrong") 
      } else {
        gridCells[parseInt(event.target.id) + i].classList.add("shadow")
      }
    }
  else {
    if ((parseInt(event.target.dataset.x) + shipLength) > 10) {
      for (let i = 0; i < (10 - parseInt(event.target.dataset.x)); i++) {
        gridCells[parseInt(event.target.id) + i].classList.add("shadow-wrong") 
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        gridCells[parseInt(event.target.id) + i].classList.add("shadow")
      }
    }
  }
}

function hideShipPosition(event) {
  if (orientation == "vert") {
    for (let i = 0; i < (shipLength * 10); i += 10)
      if (gridCells[parseInt(event.target.id) + ((shipLength - 1) * 10) ] == null || gridCells[parseInt(event.target.id)+i].dataset.ship) {
        gridCells[parseInt(event.target.id) + i].classList.remove("shadow-wrong") 
      } else {
        gridCells[parseInt(event.target.id) + i].classList.remove("shadow")
      }
  }
  else {
    if ((parseInt(event.target.dataset.x) + shipLength) > 10) {
      for (let i = 0; i < (10 - parseInt(event.target.dataset.x)); i++) {
        gridCells[parseInt(event.target.id) + i].classList.remove("shadow-wrong") 
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        gridCells[parseInt(event.target.id) + i].classList.remove("shadow")
      }
    }
  }
}

function showHorizontalShips(event) {
  for (let i = 0; i < shipLength; i++) {
    if(gridCells[parseInt(event.target.id) + i].dataset.ship) {
      gridCells[parseInt(event.target.id) + i].classList.add("shadow-wrong") 
    }
  }
} 

function hideHorizontalShips(event) {
  for (let i = 0; i < shipLength; i++) {
    if(gridCells[parseInt(event.target.id)+i].dataset.ship) {
      gridCells[parseInt(event.target.id) + i].classList.remove("shadow-wrong") 
    }
  }
} 
 
function placeShip(event) {
  switch(shipsPlaced) {
    case 0:
      board.placeShip(parseInt(event.target.dataset.x), parseInt(event.target.dataset.y), 5, playerCarrier);
      showShip(board.grid);
      if(board.grid[parseInt(event.target.dataset.y)][parseInt(event.target.dataset.x)] == playerCarrier) {
        shipsPlaced += 1;
        shipLength -= 1;
        shipPlacementOrder("battleship");
      }
      break;
    case 1:
      board.placeShip(parseInt(event.target.dataset.x), parseInt(event.target.dataset.y), 4, playerBattleship);
      showShip(board.grid);
      if(board.grid[parseInt(event.target.dataset.y)][parseInt(event.target.dataset.x)] == playerBattleship) {
        shipsPlaced += 1;
        shipLength -= 1;
        shipPlacementOrder("cruiser");
      }
      break;
    case 2:        
      board.placeShip(parseInt(event.target.dataset.x), parseInt(event.target.dataset.y), 3, playerCruiser);
      showShip(board.grid);
      if(board.grid[parseInt(event.target.dataset.y)][parseInt(event.target.dataset.x)] == playerCruiser) {
        shipsPlaced += 1;
        shipPlacementOrder("submarine");
      }
      break;
    case 3:
      board.placeShip(parseInt(event.target.dataset.x), parseInt(event.target.dataset.y), 3, playerSubmarine);
      showShip(board.grid);
      if(board.grid[parseInt(event.target.dataset.y)][parseInt(event.target.dataset.x)] == playerSubmarine) {
        shipsPlaced += 1;
        shipLength -= 1;
        shipPlacementOrder("destroyer");
      }
      break;
    case 4:
      board.placeShip(parseInt(event.target.dataset.x), parseInt(event.target.dataset.y), 2, playerDestroyer);
      showShip(board.grid);
      if(board.grid[parseInt(event.target.dataset.y)][parseInt(event.target.dataset.x)] == playerDestroyer) {
        shipsPlaced += 1;
        gridCells.forEach((cell) => {cell.removeEventListener("mouseenter", showShipPosition)})
        gridCells.forEach((cell) => {cell.removeEventListener("mouseleave", hideShipPosition)})
        gridCells.forEach((cell) => {cell.removeEventListener('click', placeShip)})
        gameInfo.textContent = '';
        addEvents();
      }
      break;
    case 5:
      return;
  }
}

function addEvents() {
  computerCells.forEach((cell) => {cell.addEventListener('click', registerPlayerAttacks)})
}

computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 5, computerCarrier);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 4, computerBattleship);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerCruiser);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerSubmarine);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 2, computerDestroyer);

export { computerBoard, board}