class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # create 2 pointers at start and end
        # iterate through the list
        # get container
        # set max container
        # change smaller pointer
        # check if new max

        i = 0
        j = len(heights) - 1
        max_volume = 0

        while (i < j):
            current_max = min(heights[i], heights[j]) * (j - i)
            # print(f"current iterated volume: {current_max}")
            # print(f"current max volume: {max_volume}")
            if (current_max > max_volume):
                max_volume = current_max
            if heights[i] > heights[j]:
                j -= 1
            else:
                i += 1
        return(max_volume)


            



        