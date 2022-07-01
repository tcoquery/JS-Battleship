const ship = (length) => {
  const arr = [];

  const hit = () => arr.push('X');

  const isSunk = () => {
    let sunk = arr.filter(x => x === 'X').length
    console.log(sunk);
    if(sunk === length) {
      console.log("sunk");
    } else {
      console.log("not sunk")
    }
  };

  return {
    arr, isSunk, hit,
  };
};

export { ship };
