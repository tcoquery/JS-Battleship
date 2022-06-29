const startBtn = document.getElementById('start');
let orientation = 'hori';

startBtn.addEventListener('click', () => {
  const gameInfo = document.querySelector('.game-info');
  gameInfo.textContent = "Player, place your ships";
  const vertBtn = document.createElement("button");
  const horiBtn = document.createElement("button");
  vertBtn.textContent = 'Vertical';
  horiBtn.textContent = 'Horizontal';
  gameInfo.appendChild(vertBtn);
  gameInfo.appendChild(horiBtn);
  vertBtn.addEventListener('click', () => {
    orientation = 'vert';
  });
  horiBtn.addEventListener('click', () => {
    orientation = 'hori';
  });
})

function showShip(array) {
  for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(array[i][j] != '') {
        const cell = document.getElementById(`${i}` + `${j}`);
        cell.classList.remove('.player-grid-cell');
        cell.classList.add('grid-cell-with-ship');
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

export { createGrid, showShip, orientation };
