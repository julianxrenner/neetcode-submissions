class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if(len(nums) < 1):
            return 0
        
        hash_map = {}
        for num in nums:
            hash_map[num] = True

        numbers_considered = {}
        longest_sequence = 1
        
        for key, value in hash_map.items():

            current_sequence = 1
            current_value = key

            if(numbers_considered.get(current_value+1)):
                continue

            while(hash_map.get(current_value + 1)):
                current_sequence += 1
                current_value += 1
                numbers_considered[current_value] = True

            if(current_sequence > longest_sequence):
                longest_sequence = current_sequence
        return longest_sequence

        