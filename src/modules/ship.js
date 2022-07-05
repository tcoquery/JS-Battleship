const ship = (length) => {
  const arr = [];

  const hit = () => arr.push('X');

  const isSunk = () => {
    let sunkCheck = arr.filter(x => x === 'X').length;
    if(sunkCheck == length) {
      return true;
    }
  };

  return {
    isSunk, hit,
  };
};

export { ship };
