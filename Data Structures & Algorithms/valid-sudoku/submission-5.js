class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Set()
        const colMap = new Set()
        const boxMap1 = new Set()
        const boxMap2 = new Set()
        const boxMap3 = new Set()
        let count = 0
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    continue
                }
                if (rowMap.has(board[i][j])) {
                    return false
                } else {
                    rowMap.add(board[i][j])
                }
            }
            rowMap.clear()
        }
        console.log("Row is valid")

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === '.') {
                    continue
                }
                if (colMap.has(board[j][i])) {
                    return false
                } else {
                    colMap.add(board[j][i])
                }
            }
            colMap.clear()
        }
        console.log("Col is valid")

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '.') {
                    continue
                }
                if (boxMap1.has(board[i][j])) {
                    return false
                } else {
                    boxMap1.add(board[i][j])
                }
            }
            for (let j = 3; j < 6; j++) {
                if (board[i][j] === '.') {
                    continue
                }
                if (boxMap2.has(board[i][j])) {
                    return false
                } else {
                    boxMap2.add(board[i][j])
                }
            }
            for (let j = 6; j < 9; j++) {
                if (board[i][j] === '.') {
                    continue
                }
                if (boxMap3.has(board[i][j])) {
                    return false
                } else {
                    boxMap3.add(board[i][j])
                }
            }
            count++
            if (count === 3) {
                boxMap1.clear()
                boxMap2.clear()
                boxMap3.clear()
                count = 0
            }
        }
        console.log("Boxes are Valid")
        return true
    }
}
