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

function registerComputerAttacks(obj) {
  let x = Math.floor(Math.random() * 10)
  let y = Math.floor(Math.random() * 10)
  const cell = document.getElementById(`${y}` + `${x}`);
  if (obj.grid[y][x] != "" && cell.style.backgroundColor != "#ff4f56") {
    obj.receiveAttack(x, y);
    const hitIcon = document.createElement("i");
    hitIcon.className = "fa-solid fa-crosshairs";
    cell.appendChild(hitIcon);
    cell.style.backgroundColor = "#ff4f56";
  } else if (obj.grid[y][x] === '') {
    const missIcon = document.createElement("i");
    missIcon.className = "fa-solid fa-water";
    cell.appendChild(missIcon);
    obj.grid[y][x] = 'O';
  } else {
    registerComputerAttacks(obj);
  }
}

function registerPlayerAttacks(event) {
  const x = parseInt(event.target.dataset.x);
  const y = parseInt(event.target.dataset.y);
  if (computerBoard.grid[y][x] != "" && event.target.style.backgroundColor != "#ff4f56") {
    const hitIcon = document.createElement("i");
    hitIcon.className = "fa-solid fa-crosshairs";
    event.target.appendChild(hitIcon);
    event.target.style.backgroundColor = "#ff4f56";
    computerBoard.receiveAttack(x, y);
    registerComputerAttacks(board);
  } else if(computerBoard.grid[y][x] === '') {
    const missIcon = document.createElement("i");
    missIcon.className = "fa-solid fa-water";
    event.target.appendChild(missIcon);
    computerBoard.grid[y][x] = 'O';
    registerComputerAttacks(board);   
  } else {
    alert("This cell was already selected !");
  }
}

export { createGrid, showShip, orientationButton, shipPlacementOrder, registerPlayerAttacks, orientation };
