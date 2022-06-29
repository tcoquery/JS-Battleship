const gameboard = () => {
  const grid = [
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
  ];

  function placeShip(position, length, orientation) {
    if (orientation == 'hori') {
      grid[position] = 'S';
      for (let i = 1; i < length; i++) {
        grid[position + i] = 'S';
      }
    } else if (orientation == 'vert') {
      grid[position] = 'S';
      for (let i = 10; i < (length * 10); i += 10) {
        grid[position + i] = 'S';
      }
    }
  }

  function receiveAttack(position, ship) {
    if (grid[position]) {
      ship.hit();
    } else {
      grid[position] = 'O';
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
