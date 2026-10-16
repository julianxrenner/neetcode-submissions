# now implement with my own alphanum function
# also stop sooner because i dont have to iterate all chars

class Solution:

    def isPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1

        while(j > i):
            if(not self.checkAlphaNum(s[j])):
                print(f"j was {s[j]}")
                j -= 1
                print(f"j is now {s[j]}")
                continue
            if(not self.checkAlphaNum(s[i])):
                print(f"i was {s[i]}")
                i += 1
                print(f"i is now {s[i]}")
                continue
            if(s[i].lower() != s[j].lower()):
                print(f"i is {s[i]} | j is {s[j]}")
                return False
            i += 1
            j -= 1
        return True
    
    def checkAlphaNum(self, character):
        if(ord("A") <= ord(character) <= ord("Z")
            or ord("a") <= ord(character) <= ord("z")
            or ord("0") <= ord(character) <= ord("9")):
            return True
        else:
            return False
        