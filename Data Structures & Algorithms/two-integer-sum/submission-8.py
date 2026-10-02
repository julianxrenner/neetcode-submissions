class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for num in range(len(nums)):
            ans = target - nums[num]
            if ans in hashmap:
                return [hashmap[ans], num]
            else:
                hashmap[nums[num]] = num
        return False
