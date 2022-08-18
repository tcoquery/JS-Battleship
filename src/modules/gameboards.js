import { orientation, registerPlayerAttacks } from './interface';

const gameboard = () => {
  const grid = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ];

  let shipsSunk = 0;

  const shipPresent = (element) => element != '';

  function placeShip(x, y, length, obj) {
    if (orientation == 'hori') {  
      let horiShipArray = [];
      for (let i = 0; i < length; i++) {
        horiShipArray.push(grid[y][x + i]);
      }
      if (horiShipArray.some(shipPresent)) {
        return
      } else if (grid[y][x + (length - 1)] != null) {
        for (let i = 0; i < length; i++) {
          grid[y][x + i] = obj;
        }
      } 
    } else if (orientation == 'vert') {
      let vertShipArray = [];
      for (let i = 0; i < length; i++) {
        vertShipArray.push(grid[y + i][x]);
      }
      if (vertShipArray.some(shipPresent)) {
        return
      } else if (grid[y + (length - 1)][x] != null) {
        for (let i = 0; i < length; i++) {
          grid[y + i][x] = obj;
        }
      }
    }
  }

  function placeComputerShip(x, y, length, obj) {
    const randomOrientation = Math.floor(Math.random() * 10);
    if (randomOrientation > 4) {
      let horiShipArray = [];
      for (let i = 0; i < length; i++) {
        horiShipArray.push(grid[y][x + i]);
      }
      if (horiShipArray.some(shipPresent)) {
        placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), length, obj);
      } else if (grid[y][x + (length - 1)] != null) {
        for (let i = 0; i < length; i++) {
          grid[y][x + i] = obj;
        }
      } 
    } else if (randomOrientation <= 4 && grid[y + (length - 1)] != undefined) {
      let vertShipArray = [];
      for (let i = 0; i < length; i++) {
        vertShipArray.push(grid[y + i][x]);
      }
      if (vertShipArray.some(shipPresent)) {
        placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), length, obj);
      } else if (grid[y + (length - 1)][x] != null) {
        for (let i = 0; i < length; i++) {
          grid[y + i][x] = obj;
        }
      }
    } else {
      placeComputerShip(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), length, obj);
    }
  }

  function receiveAttack(x, y) {
      grid[y][x].hit();
      if(grid[y][x].isSunk()) {
        shipsSunk += 1;
        const ship = document.getElementById(grid[y][x].name);
        ship.style.textDecorationLine = "line-through";
        ship.style.color = "#ff4f56";
      }
      gameOver();
  }

  function gameOver() {
    if(shipsSunk == 5) {
      alert("Game over");
      const computerCells = document.querySelectorAll('.computer-grid-cell')
      computerCells.forEach((cell) => {cell.removeEventListener('click', registerPlayerAttacks)})
    }
  }

  return {
    grid, placeShip, placeComputerShip, receiveAttack
  };
};

export { gameboard };
