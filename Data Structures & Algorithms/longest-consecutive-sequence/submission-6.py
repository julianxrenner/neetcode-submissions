# Correct solution
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        #create a set
        #iterate nums
        #check if num is start to a seq(skip num or count seq)
        #return longest seq
        if(len(nums) == 0):
            return 0

        my_set = set(nums)
        print(my_set)
        count = 1
        current_seq = 1
        
        for i in nums:
            if (i - 1 in my_set):
                continue
            else:
                while(True):
                    if(i+1 in my_set):
                        current_seq += 1
                        i += 1
                    else:
                        if(current_seq > count):
                            count = current_seq
                        current_seq = 1
                        break
        return(count)



        

            