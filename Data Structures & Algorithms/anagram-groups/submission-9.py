class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # create hash map
        my_map = {}
        final_output = []
        # loop strings
        for string in strs:
        # sort current string
            sorted_string = ''.join(sorted(string))
        # check if sorted string in hashmap
            if(sorted_string in my_map):
        # add sorted as key, unsorted as value
                my_map[sorted_string].append(string)
            else:
                my_map[sorted_string] = [string]
        for key, value in my_map.items():
            final_output.append(value)
        return final_output

