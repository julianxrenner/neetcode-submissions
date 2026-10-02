class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        mySet = set()
        for num in nums:
            mySet.add(num)
        if len(mySet) == len(nums): 
            return False 
        else: 
            return True