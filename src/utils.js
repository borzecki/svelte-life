import { range, xprod, times } from "ramda";

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1], // top neighbours
  [0, -1],
  [0, 1], // middle
  [1, -1],
  [1, 0],
  [1, 1], // bottom
];

const isActive = (id, list) => list[id];

const withinBounds = (i, j, width, height) =>
  i >= 0 && i < width && j >= 0 && j < height;

// generate list of pairs of coordinates
// [[a, b]: for a in [0..x], b in [0..y]]
const coords = (rows, cols) => xprod(range(0, rows), range(0, cols));

// for given cell [i, j] return viable neighbours in flat form (x*cols + y)
const neighbourIndexes = (i, j, rows, cols) =>
  directions
    .map(([si, sj]) => [si + i, sj + j])
    .filter(([ni, nj]) => withinBounds(ni, nj, rows, cols))
    .map(([ni, nj]) => ni * cols + nj);

const activeNeighbours = (neighbours, active) =>
  neighbours.filter((n) => isActive(n, active)).length;

export const nextGeneration = ({ active, rows, cols }) => {
  const result =
    active.length !== rows * cols
      ? active.slice(0, rows * cols)
      : active.slice(0);

  coords(rows, cols).forEach(([i, j]) => {
    const id = i * cols + j;
    const neighbours = activeNeighbours(
      neighbourIndexes(i, j, rows, cols),
      active
    );
    if (neighbours < 2 || neighbours > 3) {
      result[id] = false;
    } else if (!isActive(id, active) && neighbours === 3) {
      result[id] = true;
    }
  });

  return result;
};

export const randomize = (count) => times((i) => Math.random() > 0.7, count);
