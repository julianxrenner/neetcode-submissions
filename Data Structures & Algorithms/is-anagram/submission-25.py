# array of 26 ints representing each char
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False

        letter_tracker = [0] * 26

        for char in range(len(s)):
            letter_tracker[ord(s[char])-97]+=1
            letter_tracker[ord(t[char])-97]-=1

        return all(count == 0 for count in letter_tracker)



        