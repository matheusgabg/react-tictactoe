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

export const getRowCol = (loc) => {
  //get col and row
  const col = (loc === 1 || loc === 4 || loc === 7) ? 1 : 
  (loc === 2 || loc === 5 || loc === 8) ? 2 : 
  (loc === 0) ? 0 : 3

  const row = (loc === 1 || loc === 2 || loc === 3) ? 1 : 
  (loc === 4 || loc === 5 || loc === 6) ? 2 : 
  (loc === 0) ? 0 : 3

  return " on (col: " + col + " row: " + row +")"
}
