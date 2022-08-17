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
  textInfo.textContent = `Player, place your ${string}`;
}

function registerComputerAttacks(obj) {
  let x = Math.floor(Math.random() * 10)
  let y = Math.floor(Math.random() * 10)
  const cell = document.getElementById(`${y}` + `${x}`);
  if (obj.grid[y][x] != '' && cell.textContent != 'X') {
    obj.receiveAttack(x, y);
    cell.textContent = 'X'
  } else if (obj.grid[y][x] === '' && cell.textContent != 'O') {
    cell.textContent = 'O';
  } else {
    registerComputerAttacks(obj);
  }
}

function registerPlayerAttacks(computerObj, playerObj) {
  const computerCells = document.querySelectorAll('.computer-grid-cell')
  computerCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      let x = parseInt(cell.dataset.x);
      let y = parseInt(cell.dataset.y);
      if(computerObj.grid[y][x] != '' && cell.textContent != 'X') {
        computerObj.receiveAttack(x, y);
        cell.textContent = 'X';
        cell.style.backgroundColor = "darkgrey";
        registerComputerAttacks(playerObj);
      } else if(computerObj.grid[y][x] === '' && cell.textContent != 'O') {
        cell.textContent = 'O';
        registerComputerAttacks(playerObj);
      } else {
        alert("This cell was already selected !");
      }
    })
  })
}

export { createGrid, showShip, orientationButton, shipPlacementOrder, registerPlayerAttacks, orientation };
