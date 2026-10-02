#use hashmap to store previous viewed numbers and the index
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for index, num in enumerate(nums):
            needed_value = target - num
            if needed_value in hashmap:
                return[hashmap[needed_value],index]
            else:
                hashmap[num] = index