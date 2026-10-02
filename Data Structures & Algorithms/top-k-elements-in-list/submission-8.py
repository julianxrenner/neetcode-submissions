class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #create an array where the index is the current leader
        #only has to be the length of the array because there can be n elements
        #maybe we can store the elements as we go, sort of like arrays
        freq = [[] for i in range(len(nums)+1)] # 2Darray of length k since thats the max freq
        res = []
        count = {}
        for num in nums:
            count[num] = 1 + count.get(num,0)

        for key, value in count.items():
            freq[value].append(key)

        for i in range(len(freq)-1,0,-1 ):
            for j in freq[i]:
                res.append(j)
                print(res)
                if len(res) == k:
                    return res