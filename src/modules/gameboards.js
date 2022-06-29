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

  function receiveAttack(x, y, ship) {
    if (grid[y][x]) {
      ship.hit();
    } else {
      grid[y][x] = 'O';
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
    grid, placeShip, receiveAttack, shipsSunk,
  };
};

export { gameboard };
