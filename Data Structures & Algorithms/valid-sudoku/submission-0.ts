class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const columns = Array.from({ length: 9 }, () => new Set<string>());
        const subBoxes = Array.from({ length: 9 },() => new Set<string>());

        for (let i = 0; i < board.length; i++) {
            const rowSet = new Set<string>();

            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];

                if (columns[j].has(val)) return false;
                if (val !== ".") columns[j].add(board[i][j]);

                if (rowSet.has(val)) return false;
                if (val !== ".") rowSet.add(val);

                const square = Math.floor(i / 3) * 3 +  Math.floor(j / 3);
                if (subBoxes[square].has(val)) return false;
                if (val !== ".") subBoxes[square].add(board[i][j]);
            }
        }

        return true;
    }
}
