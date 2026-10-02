class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):
            return False
        
        length = len(s)

        arr1 = [0] * 26
        arr2 = [0] * 26

        for i in range(length):
            letter1 = ord(s[i]) - 97
            letter2 = ord(t[i]) - 97
            arr1[letter1] += 1
            arr2[letter2] += 1

        if arr1 == arr2:
            return True
        else:
            return False

