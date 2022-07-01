const ship = (length) => {
  const arr = [];
  let sunk = false;

  const hit = () => arr.push('X');

  const isSunk = () => {
    let sunkCheck = arr.filter(x => x === 'X').length;
    if(sunkCheck === length) {
      sunk = true;
    }
  };

  return {
    arr, isSunk, hit,
  };
};

export { ship };
