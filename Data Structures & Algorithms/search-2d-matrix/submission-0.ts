class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (let row = 0; row < matrix.length; row++) {
            let low = 0;
            let high = matrix[row].length - 1;
            if (target >= matrix[row][low] && target <= matrix[row][high]) {
                while (low <= high) {
                    let mid = low + Math.floor((high - low) / 2);
                    if (target === matrix[row][mid]) {
                        return true;
                    } else if (target > matrix[row][mid]) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
            }
        }
        return false;
    }
}
