import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';
import { createGrid, showShip } from './modules/interface';

const board = gameboard();
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
        }
        break;
      case 1:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 4, playerBattleship);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerBattleship) {
          shipsPlaced += 1;
        }
        break;
      case 2:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, playerCruiser);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerCruiser) {
          shipsPlaced += 1;
        }
        break;
      case 3:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, playerSubmarine);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerSubmarine) {
          shipsPlaced += 1;
        }
        break;
      case 4:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 2, playerDestroyer);
        showShip(board.grid);
        if(board.grid[parseInt(cell.dataset.y)][parseInt(cell.dataset.x)] == playerDestroyer) {
          shipsPlaced += 1;
        }
        break;
      case 5:
        return;
    }
  });
});



