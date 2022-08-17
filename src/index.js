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

startBtn.addEventListener('click', () => {
  textInfo.textContent = `Player, place your carrier.`;
  startBtn.style.display = "none";
  orientationButton();
  showShipPosition();
  hideShipPosition();
  placeShip();
})

function showShipPosition() {
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      if (orientation == "vert") {
        for (let i = 0; i < (shipLength * 10); i += 10)
          if (gridCells[parseInt(cell.id) + ((shipLength - 1) * 10)] == null) {
            gridCells[parseInt(cell.id) + i].classList.add("shadow-wrong") 
          } else {
            gridCells[parseInt(cell.id) + i].classList.add("shadow")
          }
      }
      else {
        if ((parseInt(cell.dataset.x) + shipLength) > 10) {
          for (let i = 0; i < (10 - parseInt(cell.dataset.x)); i++) {
            gridCells[parseInt(cell.id) + i].classList.add("shadow-wrong") 
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            gridCells[parseInt(cell.id) + i].classList.add("shadow")
          }
        }
      }
    })
  })
}

function hideShipPosition() {
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseleave", () => {
      if (orientation == "vert") {
        for (let i = 0; i < (shipLength * 10); i += 10)
          if (gridCells[parseInt(cell.id) + ((shipLength - 1) * 10) ] == null) {
            gridCells[parseInt(cell.id) + i].classList.remove("shadow-wrong") 
          } else {
            gridCells[parseInt(cell.id) + i].classList.remove("shadow")
          }
      }
      else {
        if ((parseInt(cell.dataset.x) + shipLength) > 10) {
          for (let i = 0; i < (10 - parseInt(cell.dataset.x)); i++) {
            gridCells[parseInt(cell.id) + i].classList.remove("shadow-wrong") 
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            gridCells[parseInt(cell.id) + i].classList.remove("shadow")
          }
        }
      }
    })
  })
}


function placeShip() {
  gridCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      switch(shipsPlaced) {
        case 0:
          board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 5, playerCarrier);
          showShip(board.grid);
          if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerCarrier) {
            shipsPlaced += 1;
            shipLength -= 1;
            shipPlacementOrder("battleship");
          }
          break;
        case 1:
          board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 4, playerBattleship);
          showShip(board.grid);
          if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerBattleship) {
            shipsPlaced += 1;
            shipLength -= 1;
            shipPlacementOrder("cruiser");
          }
          break;
        case 2:        
          board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, playerCruiser);
          showShip(board.grid);
          if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerCruiser) {
            shipsPlaced += 1;
            shipPlacementOrder("submarine");
          }
          break;
        case 3:
          board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, playerSubmarine);
          showShip(board.grid);
          if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerSubmarine) {
            shipsPlaced += 1;
            shipLength -= 1;
            shipPlacementOrder("destroyer");
          }
          break;
        case 4:
          board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 2, playerDestroyer);
          showShip(board.grid);
          if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerDestroyer) {
            shipsPlaced += 1;
            shipLength = 0;
            gameInfo.textContent = '';
            registerPlayerAttacks(computerBoard, board);
          }
          break;
        case 5:
          return;
      }
    });
  });
}

computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 5, computerCarrier);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 4, computerBattleship);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerCruiser);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerSubmarine);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 2, computerDestroyer);

