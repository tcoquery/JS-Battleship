import { ship } from './modules/ship';
import { gameboard } from './modules/gameboards';

const board = gameboard();
const vertBtn = document.querySelector('.vert');
const horiBtn = document.querySelector('.hori');
let orientation = '';

function createGrid() {
  for (let i = 0; i < 100; i++) {
    const grid = document.querySelector('.grid');
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.id = i;
    grid.appendChild(gridCell);
  }
}

createGrid();

const gridCells = document.querySelectorAll('.grid-cell');

gridCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    board.placeShip(parseInt(cell.id), 5, orientation);
    console.log(board.grid);
  });
});

vertBtn.addEventListener('click', () => {
  orientation = 'vert';
});

horiBtn.addEventListener('click', () => {
  orientation = 'hori';
});
