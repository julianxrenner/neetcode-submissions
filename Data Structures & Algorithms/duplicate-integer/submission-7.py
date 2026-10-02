class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for number in nums:
            if number in map :
                return True
            map[number] = True
        return False
        