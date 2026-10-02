# array of 26 ints representing each char
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False

        arrayS = [0] * 26
        arrayT = [0] * 26

        for char in range(len(s)):
            letterIndexS = ord(s[char])-97
            letterIndexT = ord(t[char])-97
            arrayS[letterIndexS]+=1
            arrayT[letterIndexT]+=1

        if arrayS == arrayT:
            return True
        else:
            return False



        