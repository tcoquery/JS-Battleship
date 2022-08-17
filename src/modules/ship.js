const ship = (length, shipName) => {
  const arr = [];

  const name = shipName;

  const hit = () => arr.push('X');

  const isSunk = () => {
    let sunkCheck = arr.filter(x => x === 'X').length;
    if(sunkCheck == length) {
      return true;
    }
  };

  return {
    isSunk, hit, name
  };
};

export { ship };
