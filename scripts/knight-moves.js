const getLegalPositions = (position) => {
  const moves = [];
  const [x, y] = position;

  if (x - 2 > -1 && y - 1 > -1) {
    moves.push([x - 2, y - 1]);
  }

  if (x - 2 > -1 && y + 1 < 8) {
    moves.push([x - 2, y + 1]);
  }

  if (x - 1 > -1 && y - 2 > -1) {
    moves.push([x - 1, y - 2]);
  }

  if (x - 1 > -1 && y + 2 < 8) {
    moves.push([x - 1, y + 2]);
  }

  if (x + 1 < 8 && y - 2 > -1) {
    moves.push([x + 1, y - 2]);
  }

  if (x + 1 < 8 && y + 2 < 8) {
    moves.push([x + 1, y + 2]);
  }

  if (x + 2 < 8 && y - 1 > -1) {
    moves.push([x + 2, y - 1]);
  }

  if (x + 2 < 8 && y + 1 < 8) {
    moves.push([x + 2, y + 1]);
  }

  return moves;
};

const hasPosition = (set, position) => {
  const array = Array.from(set);

  for (const data of array) {
    const prevPosition = JSON.parse(data)[0];

    if (JSON.stringify(prevPosition) === JSON.stringify(position)) {
      return true;
    }
  }

  return false;
};

const printPath = (moves, finalPosition) => {
  let currKey = JSON.stringify(finalPosition);
  const path = [];

  while (moves[currKey] !== null) {
    path.push(moves[currKey]);
    currKey = moves[currKey];
  }

  path.reverse();
  path.push(JSON.stringify(finalPosition));
  path.forEach((position) => console.log(position));
};

const knightMoves = (initialPosition, finalPosition) => {
  const moves = {};
  moves[JSON.stringify(initialPosition)] = null;
  const visited = new Set();
  visited.add(JSON.stringify([initialPosition, 0]));
  const queue = [[initialPosition, 0]];

  while (queue.length > 0) {
    const [currPosition, distance] = queue.shift();

    if (JSON.stringify(currPosition) === JSON.stringify(finalPosition)) {
      console.log(`=> You made it in ${distance} moves! Here's your path:`);
      printPath(moves, finalPosition);

      break;
    }

    const legalPositions = getLegalPositions(currPosition);

    legalPositions.forEach((nextPosition) => {
      if (!hasPosition(visited, nextPosition)) {
        moves[JSON.stringify(nextPosition)] = JSON.stringify(currPosition);
        visited.add(JSON.stringify([currPosition, distance + 1]));
        queue.push([nextPosition, distance + 1]);
      }
    });
  }
};

export default knightMoves;
