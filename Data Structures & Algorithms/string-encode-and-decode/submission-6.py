class Solution:

    def encode(self, strs: List[str]) -> str:
        encodedString = ''
        for i in strs:
            delimiter = str(len(i)) + '#'
            encodedString = encodedString + delimiter + i
        return encodedString

    def decode(self, s: str) -> List[str]:
        decodedStrs = []
        #loop through string
        i = 0
        wordLen = ''
        currentWord = ''
        while i < len(s):
        #store the number
            if s[i] != '#':
                wordLen = wordLen + s[i]
                i+=1
                print(wordLen)
        #stop at the delimiter
            else:
        #build the word of the numbers length
                j = i + 1
                counter = j + int(wordLen)
                print(wordLen)
                while j < counter:
                    currentWord = currentWord + s[j]
                    j+=1
                i = j
        #repeat at the next character
                decodedStrs.append(currentWord)
                wordLen = ''
                currentWord = ''
        return  decodedStrs
            


                
            