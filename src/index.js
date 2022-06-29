import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';
import { createGrid, showShip, orientation } from './modules/interface';

const board = gameboard();
const carrier = ship(5);
const battleship = ship(4);
const cruiser = ship(3);
const submarine = ship(3);
const destroyer = ship(2);
let shipsPlaced = 0;

createGrid();

const gridCells = document.querySelectorAll('.grid-cell');


gridCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    switch(shipsPlaced) {
      case 0:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 5, orientation);
        showShip(board.grid);
        shipsPlaced += 1;
        break;
      case 1:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 4, orientation);
        showShip(board.grid);
        shipsPlaced += 1;
        break;
      case 2:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, orientation);
        showShip(board.grid);
        shipsPlaced += 1;
        break;
      case 3:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 3, orientation);
        showShip(board.grid);
        shipsPlaced += 1;
        break;
      case 4:
        board.placeShip(parseInt(cell.dataset.x), parseInt(cell.dataset.y), 2, orientation);
        showShip(board.grid);
        shipsPlaced += 1;
        break;
      case 5:
        return;
    }
  });
});



