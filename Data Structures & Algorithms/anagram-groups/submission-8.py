class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #loop strs
            # build key
            # key exists push item
            # key doesnt exist new key value pair
        #loop keys and append vals(arrays) to array
        # return array of arrays
        anagramMap = {}
        ans = []
        for index, string in enumerate(strs):
            newKey = [0] * 26
            for char in string:
                charIndex = ord(char) - 97
                newKey[charIndex] += 1
            newKeyString = str(newKey)
            if newKeyString in anagramMap:
                anagramMap[newKeyString].append(string)
            else:
               anagramMap[newKeyString] = [string]
        for key, val in anagramMap.items():
            ans.append(val)
        return ans
        