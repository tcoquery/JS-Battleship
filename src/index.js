import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';
import { createGrid, showShip, orientation } from './modules/interface';

const board = gameboard();

createGrid();

const gridCells = document.querySelectorAll('.grid-cell');

gridCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    board.placeShip(parseInt(cell.id), 5, orientation);
    showShip(board.grid);
  });
});

