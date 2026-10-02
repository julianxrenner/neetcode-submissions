class Solution:

    def encode(self, strs: List[str]) -> str:
        # create empty string
        # iterate strings
        # append current string length, delimiter, string
        # return the encoded string

        encoded_string = ""
        for string in strs:
            encoded_string += str(len(string)) + "@" + string
        print(encoded_string)
        return(encoded_string)

    def decode(self, s: str) -> List[str]:
        # iterate through encoded string
        # store chars in a variable until reaching delimiter
        # convert that variable to an int for string len
        # store string and start the next string
        string_length = ""
        decoded_strings = []
        i = 0
        while(i<len(s)):
            if(s[i] == "@"):
                decoded_strings.append(s[i+1:int(string_length)+i + 1])
                i = i + int(string_length) + 1
                string_length = ""
                continue
            string_length += s[i]
            i += 1
        return(decoded_strings)



