
/**
 * Determine if there is a winner from the given squares
 * @param {Array} squares  the given squares
 * @returns a number if there a winner and null if not
 */
export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * 
 * @param {Array} squares  the given array
 * @returns true if the given array contains a null value and false if not
 */
export const containsNull = (squares) => squares.includes(null)

