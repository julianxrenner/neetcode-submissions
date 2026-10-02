class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        length = 0

        if (len(t) != len(s)):
            return False
        else:
            length = len(s)

        charArray = [0] * 26

        for index in range(length):
            char1 = s[index]
            char2 = t[index]
            charArray[ord(char1)-97] += 1
            charArray[ord(char2)-97] -= 1
        for val in charArray:
            if val == 0:
                continue
            else:
                return False
        return True

            
