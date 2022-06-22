const gameboard = () => {
  const grid = document.querySelector('.grid');

  function createGrid() {
    for (let i = 0; i < 100; i += 1) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('grid-cell');
      gridCell.id = i;
      grid.appendChild(gridCell);
    }
  };
  return { createGrid };
};

export { gameboard };
