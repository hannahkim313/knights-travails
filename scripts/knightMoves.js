const knightMoves = (currPosition, newPosition) => {
  // Find the possible moves of currPosition (EX: [0, 0])
  // Pattern: [x +/- 1, y +/- 2] and [x +/- 2, y +/- 1]
  // Conditions: x < 8 and x > -1, y < 8 and y > -1
  // => [[1, 2], [2, 1]]
  //
  // If array of possible moves contains newPosition:
  // Print the total number of moves and the positions of each move
  //
  // Else:
  // For each possible move of currPosition, find its own possible moves by
  // recursively calling knightMoves where currPosition = possible move
  // => [1, 2]: [[0, 0], [0, 4], [2, 0], [2, 4], [3, 1], [3, 3]]
  // => [2, 1]: [[0, 0], [0, 2], [4, 0], [4, 2], [1, 3], [3, 3]]
};

export default knightMoves;