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

  function placeShip(x, y, length, orientation) {
    if (
      orientation == 'hori' &&
      grid[y][x] != 'S' &&
      grid[y][x + (length - 1)] != null
    ) {
      grid[y][x] = 'S';
      for (let i = 1; i < length; i++) {
        grid[y][x + i] = 'S';
      }
    } else if (
      orientation == 'vert' &&
      grid[y][x] != 'S' &&
      grid[y + (length - 1)][x] != null
    ) {
      grid[y][x] = 'S';
      for (let i = 1; i < length; i++) {
        grid[y + i][x] = 'S';
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

  const shipPresent = (element) => element == 'S';

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
