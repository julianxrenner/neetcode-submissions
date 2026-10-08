# Correct solution
# Error 1: Did not include a solution to the edge case of no items
# Error 2: I reset the current sequence in the else block giving incorrect counts
# Error 3: Instead of iterating though nums, iterate through set

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        #create a set
        #iterate nums
        #check if num is start to a seq(skip num or count seq)
        #return longest seq
        if(len(nums) == 0):
            return 0

        my_set = set(nums)
        count = 0
        
        for num in my_set:
            if num - 1 not in my_set:
                current_num = num
                seq = 1
                while current_num + 1 in my_set:
                    seq += 1
                    current_num += 1
                count = max(count, seq)

        return(count)



        

            