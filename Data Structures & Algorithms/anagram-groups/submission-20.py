class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        my_dict = defaultdict(list)

        #iterate through chars in string
        #store the count of chars in array(each index reps a char)
        #append that to the dict key=array of chars, value = string
        #iterate vals and return the resualt   
        for string in strs:
            char_counter = [0]*26

            for char in string:
                char_counter[ord(char)-97] += 1
            my_dict[tuple(char_counter)].append(string)

        return(list(my_dict.values()))
            
 
        