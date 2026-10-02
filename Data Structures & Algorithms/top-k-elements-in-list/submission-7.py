class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #create an array where the index is the current leader
        #only has to be the length of the array because there can be n elements
        #maybe we can store the elements as we go, sort of like arrays
        frequencyArray = [[] for i in range(len(nums)+1)] # 2Darray of length k since thats the max freq
        res = []
        count = {}
        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1

        for key, value in count.items():
            frequencyArray[value].append(key)

        for i in reversed(frequencyArray):
            if len(i) == k and len(res) < 1:
                return i
            while len(i) > 0:
                val = i.pop()
                res.append(val)
            if len(res) == k:
                return res
            