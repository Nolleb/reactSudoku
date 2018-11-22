const sudokus = {
    sudoku1:  [
        Array(9).fill(8, 2, null, 1, 9, null, null, 3, null),
        Array(9).fill(null, null, 1, null, 2, null, null, null, null),
        Array(9).fill(null, null, null, null, null, null, null, null, 1),
        Array(9).fill(null, null, null, 9, null, 3, null, null, 1),
        Array(9).fill(1, 9, null, 8, null, 2, null, 6, 3),
        Array(9).fill(5, null, null, 1, null, 7, null, null, null),
        Array(9).fill(4, null, null, null, null, null, null, null, null),
        Array(9).fill(null, null, null, null, 5, null, 9, null, null),
        Array(9).fill(null, 8, null, null, 1, 4, null, 7, 3)
    ],
    sudoku2:  [
        Array(9).fill(null, null, 3, null, null, 4, null, null, null),
        Array(9).fill(1, null, null, 7, null, null, null, 5, null),
        Array(9).fill(null, 7, 5, null, null, null, 1, 6, null),
        Array(9).fill(null, null, null, 5, null, 1, null, 6, null),
        Array(9).fill(null, null, 7, 8, null, 9, 5, null, null),
        Array(9).fill(null, 5, null, 2, null, 7, null, null, null),
        Array(9).fill(null, 8, 6, null, null, null, 7, 3, null),
        Array(9).fill(null, 4, null, null, null, 2, null, null, 1),
        Array(9).fill(null, null, null, 8, null, null, 5, null, null)
    ],
    sudoku3:  [
        Array(9).fill(null, 1, null, null, null, null, null, 6, 3),
        Array(9).fill(null, 4, null, 6, null, null, 2, null, null),
        Array(9).fill(8, null, null, null, null, 4, null, null, 9),
        Array(9).fill(null, null, 9, 5, null, 8, null, 3, null),
        Array(9).fill(5, null, null, null, null, null, null, null, 1),
        Array(9).fill(null, 7, null, 6, null, 1, 4, null, null),
        Array(9).fill(8, null, null, 7, null, null, null, null, 6),
        Array(9).fill(null, null, 2, null, null, 5, null, 9, null),
        Array(9).fill(9, 1, null, null, null, null, null, 8, null)
    ]
}

export default sudokus;