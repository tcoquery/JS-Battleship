const ship = (length) => {
  const arr = [];
  arr.length = length;

  const hit = (num) => arr[num - 1] = 'X';

  const sunk = (value) => value === 'X';

  const isSunk = () => {
    if (arr.every(sunk)) {
      console.log('sunk');
    }
  };

  return {
    arr, isSunk, hit,
  };
};

export { ship };
