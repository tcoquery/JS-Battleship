import { orientation } from './interface';

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
    if (grid[y][x] != '') {
      grid[y][x].hit();
      grid[y][x].isSunk();
      console.log(grid);
    } else {
      grid[y][x] = 'O';
      console.log(grid);
    }
  }

  function shipsSunk() {
    if (grid.some(shipPresent)) {
      return;
    } else {
      console.log('game over');
    }
  }

  return {
    grid, placeShip, placeComputerShip, receiveAttack, shipsSunk,
  };
};

export { gameboard };
