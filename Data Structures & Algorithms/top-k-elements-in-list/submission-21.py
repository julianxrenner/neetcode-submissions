# perfect solution
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}  # dict to store num freqs
        freq = [[] for i in range(len(nums) +1)] # list to sort nums by freq

        for n in nums:
            count[n] = 1 + count.get(n, 0) # count freq of each num
        for n, c in count.items():
            freq[c].append(n) # append num where index == count
        
        res = []    # store the result
        for i in range(len(freq)-1,0,-1):
            for n in freq[i]:
                res.append(n)   # loop freq in reverse and append existing values
                if len(res) == k:
                    return res  # return when result len == k

        
        