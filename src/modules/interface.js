const startBtn = document.getElementById('start');
let orientation = '';

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
    console.log(orientation);
  });
  horiBtn.addEventListener('click', () => {
    orientation = 'hori';
    console.log(orientation);
  });
})

function showShip(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] == 'S') {
      const cell = document.getElementById(i);
      cell.classList.remove('.grid-cell');
      cell.classList.add('grid-cell-with-ship');
    }
  }
}

function createPlayerGrid() {
  for (let i = 0; i < 100; i++) {
    const grid = document.getElementById('player-grid');
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.id = i;
    grid.appendChild(gridCell);
  }
}

function createComputerGrid() {
  for (let i = 0; i < 100; i++) {
    const grid = document.getElementById('computer-grid');
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.id = i;
    grid.appendChild(gridCell);
  }
}

function createGrid() {
  createComputerGrid();
  createPlayerGrid();
}

export { createGrid, showShip, orientation };
