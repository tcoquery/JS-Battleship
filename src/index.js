import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';
import { createGrid, showShip, shipPlacementOrder, registerAttacks } from './modules/interface';

const board = gameboard();
const computerBoard = gameboard();
const playerCarrier = ship(5);
const computerCarrier = ship(5);
const playerBattleship = ship(4);
const computerBattleship = ship(4);
const playerCruiser = ship(3);
const computerCruiser = ship(3);
const playerSubmarine = ship(3);
const computerSubmarine = ship(3);
const playerDestroyer = ship(2);
const computerDestroyer = ship(2);
const gameInfo = document.querySelector('.game-info');

createGrid();

let shipsPlaced = 0;

const gridCells = document.querySelectorAll('.player-grid-cell');

gridCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    switch(shipsPlaced) {
      case 0:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 5, playerCarrier);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerCarrier) {
          shipsPlaced += 1;
          shipPlacementOrder("battleship");
        }
        break;
      case 1:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 4, playerBattleship);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerBattleship) {
          shipsPlaced += 1;
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
          shipPlacementOrder("destroyer");
        }
        break;
      case 4:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 2, playerDestroyer);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerDestroyer) {
          shipsPlaced += 1;
          gameInfo.textContent = '';
          registerAttacks(computerBoard);
        }
        break;
      case 5:
        return;
    }
  });
});

computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 5, computerCarrier);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 4, computerBattleship);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerCruiser);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 3, computerSubmarine);
computerBoard.placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 2, computerDestroyer);
