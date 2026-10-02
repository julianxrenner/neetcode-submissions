# now instead of using a two pointer lets try to alter it
# lets try to tally freq in one pass
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #iterate through nums
        #each number we set to 1 in a dict and tally up as we go
        my_dict = {}
        for i in range(len(nums)):
            my_dict[nums[i]] = my_dict.get(nums[i],0) + 1
            


        # create an array of arrays of len of nums
        # insert the val in that freq index
        # work backwords through the array k times and append to a result array

        freq_list = [[] for _ in range(len(nums)+1)]
        for key, value in my_dict.items():
            freq_list[value].append(key)

        result = []

        for item in range(len(freq_list)-1, -1,-1):
            if freq_list[item]:
                result += freq_list[item]
            if len(result) >= k:
                break
        return(result)
        