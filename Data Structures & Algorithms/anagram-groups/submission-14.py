# instead of sorting
# lets just create keys that
# represent letters in alphabet
# and tally how many of each char exists?
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = {}
        grouped_anagrams = []
        for string in strs:
            key_list = [0]*26
            for char in string:
                char_location = ord(char)-97
                key_list[char_location] += 1
            key = '-'.join(map(str,key_list))
            if(key in anagram_map):
                anagram_map[key].append(string)
            else:
                anagram_map[key] = [string] 

        for key, value in anagram_map.items():
            grouped_anagrams.append(value)
        return grouped_anagrams



        