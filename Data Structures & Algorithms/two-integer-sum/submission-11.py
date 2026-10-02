#Brute force
#compare each int with each and add and check
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index in range(0, len(nums), 1):
            for next_index in range(index+1, len(nums),1):
                if(nums[index] + nums[next_index] == target):
                    return[index,next_index]
                else:
                    next_index = next_index + 1