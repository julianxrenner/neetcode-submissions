class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        my_dict = defaultdict(list)

        for string in strs:
            sorted_string = "".join(sorted(string))
            my_dict[sorted_string].append(string)

        final_answer = []

        for values in my_dict.values():
                final_answer.append(values)
        
        return(final_answer)
