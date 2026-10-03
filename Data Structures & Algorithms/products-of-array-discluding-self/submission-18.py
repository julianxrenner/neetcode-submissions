#Now no divison
# create a result array
# create a product tracker initialized to 1
# create a previous num tracker initialized to 1
# iterate forward and place the current product of the previous values in each index
# iterate back and place the final values in each spot
# return result

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        prod_tracker = 1
        prev_value = 1

        for i in range(len(nums)):
            prod_tracker = prev_value * prod_tracker
            result.append(prod_tracker)
            prev_value = nums[i]
  
        prod_tracker = 1
        prev_value = 1
        

        for i in range(len(nums)-1,-1,-1):
            prod_tracker = prev_value * result[i]
            result[i] = prod_tracker
            prev_value = nums[i] * prev_value
        return(result)


        