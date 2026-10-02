class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        #valid rows
        valid = {}
        for row in board:
            for num in row:
                if(num == '.'):
                    continue
                if num in valid:
                    print(f"{num} was found in same row")
                    return False
                else:
                    valid[num] = True
            valid.clear()

        #valid columns
        for i in range(9):
            for row in board:
                if(row[i] == '.'):
                    continue
                if row[i] in valid:
                    print(f"{row[i]} was found in same column at index {i}")
                    return False
                else:
                    valid[row[i]] = True
            valid.clear()

        #validbox
        #Thinking to use the box like 0:0 as the key and array of values as val
        checkingBoxes = defaultdict(list)
        for i in range(9):
            boxRow = i//3
            for j in range(9):
                if(board[i][j] == '.'):
                    continue
                boxColumn = j//3
                box = f"{boxRow}:{boxColumn}"
                checkingBoxes[box].append(board[i][j])
        
        for key, values in checkingBoxes.items():
            if(len(values) != len(set(values))):
                return False
        return True
            



        