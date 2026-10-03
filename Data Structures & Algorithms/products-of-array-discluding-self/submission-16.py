# brute force with division
        # iterate through nums
        # if a 0, set one zero True and skip
        # if another 0, set two zero True and skip
        # get the prod of all nums
        # iterate through nums
        # if one zero, place the prod at that location and the rest 0
        # if two zero, fill list with 0
        # if no zero, divide the prod by num[i] value
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        one_zero = False
        two_zero = False
        nums_product = 1

        for num in nums:
            if num == 0:
                if one_zero == True:
                    two_zero = True
                one_zero = True
                continue
            nums_product *= num

        if two_zero == True:
            result = [0] * (len(nums))
            return result

        if one_zero == True:
            result = [0] * (len(nums))
            for i in range(len(nums)):
                if nums[i] == 0:
                    result[i] = nums_product
                    return result
        result = []
        for i in range(len(nums)):
            result.append(int(nums_product/nums[i]))
        return result


            
            

        
        