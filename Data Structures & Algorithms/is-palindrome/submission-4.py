class Solution:
    def isPalindrome(self, s: str) -> bool:
        #create a string with no spaces
        #use a pointer in the front and the back
        #while the chars are the same continue
        #if chars differ return false

        i = 0
        j = len(s) - 1

        while(j > 0):
            if(not s[j].isalnum()):
                print(f"j was {s[j]}")
                j -= 1
                print(f"j is now {s[j]}")
                continue
            if(not s[i].isalnum()):
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
            
        