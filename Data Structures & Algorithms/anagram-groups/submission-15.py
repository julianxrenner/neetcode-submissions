# optimal solution 2
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = defaultdict(list)

        for string in strs:
            key_list = [0]*26

            for char in string:
                key_list[ord(char)-ord('a')] += 1
            anagram_map[tuple(key_list)].append(string)
            
        return list(anagram_map.values())



              