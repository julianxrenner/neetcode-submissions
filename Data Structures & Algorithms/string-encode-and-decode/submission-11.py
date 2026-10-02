class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_string = ""

        for string in strs:
            string_length = len(string)
            encoded_string += str(string_length) + ":" + string
   
        return encoded_string


    def decode(self, s: str) -> List[str]:
        ans = []
        string_len = ""
        i = 0

        while(i<len(s)):
            if(s[i] == ":"):
                ans.append(s[i+1:i+1+int(string_len)])
                i = int(string_len) + 1 + i
                string_len = ""
            else:
                string_len += s[i]
                i += 1
        return(ans)



