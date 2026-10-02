class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ansMap = {}
        for i in range(len(nums)):
            ans = target - nums[i]
            if ansMap.get(ans) != None:
                return [ansMap.get(ans), i]
            ansMap[nums[i]] = i
        return False
        