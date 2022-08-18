import {computerBoard, board} from "../index.js"

const gameInfo = document.querySelector('.game-info');
const textInfo = document.querySelector('.text-info');

let orientation = 'hori';

function orientationButton() {
  const oriBtn = document.createElement("button");
  oriBtn.textContent = 'Change orientation';
  gameInfo.appendChild(oriBtn);
  oriBtn.addEventListener('click', () => {
    if(orientation == 'vert') {
      orientation = "hori";
    } else {
      orientation = 'vert';
    }
  });
}

function showShip(array) {
  for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(array[i][j] != '') {
        const cell = document.getElementById(`${i}` + `${j}`);
        cell.classList.add('grid-cell-with-ship');
        cell.dataset.ship = true;
        cell.classList.remove('shadow');
      }
    }
  }
}

function createPlayerGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const grid = document.getElementById('player-grid');
      const gridCell = document.createElement('div');
      gridCell.classList.add('player-grid-cell');
      gridCell.dataset.y = i;
      gridCell.dataset.x = j;
      gridCell.id = `${i}` + `${j}`;
      grid.appendChild(gridCell);
    }
  }
}

function createComputerGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const grid = document.getElementById('computer-grid');
      const gridCell = document.createElement('div');
      gridCell.classList.add('computer-grid-cell');
      gridCell.dataset.y = i;
      gridCell.dataset.x = j;
      grid.appendChild(gridCell);
    }
  }
}

function createGrid() {
  createComputerGrid();
  createPlayerGrid();
}

function shipPlacementOrder(string) {
  textInfo.textContent = `Player, place your ${string}.`;
}

function registerComputerAttacks() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  const cell = document.getElementById(`${y}` + `${x}`);
  if (board.grid[y][x] != "" && cell.dataset.hit != "hit") {
    const hitIcon = document.createElement("i");
    hitIcon.className = "fa-solid fa-crosshairs";
    cell.appendChild(hitIcon);
    cell.style.backgroundColor = "#ff4f56";
    cell.dataset.hit = "hit"
    board.receiveAttack(x, y);
  } else if (board.grid[y][x] === '' && cell.dataset.hit != "hit") {
    const missIcon = document.createElement("i");
    missIcon.className = "fa-solid fa-water";
    cell.appendChild(missIcon);
    cell.dataset.hit = "hit"
  } else {
    registerComputerAttacks(board);
  }
}

function registerPlayerAttacks(event) {
  const x = parseInt(event.target.dataset.x);
  const y = parseInt(event.target.dataset.y);
  if (computerBoard.grid[y][x] != "" && event.target.dataset.hit != "hit") {
    const hitIcon = document.createElement("i");
    hitIcon.className = "fa-solid fa-crosshairs";
    event.target.appendChild(hitIcon);
    event.target.style.backgroundColor = "#ff4f56";
    event.target.dataset.hit = "hit"
    computerBoard.receiveAttack(x, y);
    registerComputerAttacks();
  } else if(computerBoard.grid[y][x] === "" && event.target.dataset.hit != "hit") {
    const missIcon = document.createElement("i");
    missIcon.className = "fa-solid fa-water";
    event.target.appendChild(missIcon);
    event.target.dataset.hit = "hit";
    registerComputerAttacks();   
  } else {
    alert("This cell was already selected !");
  }
}

export { createGrid, showShip, orientationButton, shipPlacementOrder, registerPlayerAttacks, orientation };
