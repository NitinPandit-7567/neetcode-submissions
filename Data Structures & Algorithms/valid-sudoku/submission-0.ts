class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Check row:
        const seen = new Set();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const val = board[i][j];
                if (val !== ".") {
                    if (seen.has(val)) {
                        return false;
                    }
                    seen.add(val);
                }
            }
            seen.clear();
        }
        //columns
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const val = board[j][i];
                if (val !== ".") {
                    if (seen.has(val)) {
                        return false;
                    }
                    seen.add(val);
                }
            }
            seen.clear();
        }
        //grids - 3x3
        let gridY = 0;
        let gridX = 0;
        while (gridX < board.length / 3 && gridY < board.length / 3) {
            for (let i = gridX * 3; i < gridX * 3 + 3; i++) {
                for (let j = gridY * 3; j < gridY * 3 + 3; j++) {
                    const val = board[i][j];
                    if (val !== ".") {
                        if (seen.has(val)) {
                            return false;
                        }
                        seen.add(val);
                    }
                }
            }
            seen.clear();
            gridY++;
            if (gridY - gridX >= 3) {
                gridX = gridY;
            }
        }
        return true;
    }
}
