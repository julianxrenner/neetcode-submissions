#Improved with division
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res=[]
        total = 1
        zeroBool = False
        double_zero = False
        for num in nums:
            if num == 0 and zeroBool == True:
                double_zero = True
                break
            if num == 0:
                zeroBool = True
                continue
            else:
                total *= num
        print(total)
        if(double_zero):
            for num in nums:
                res.append(0)
        elif(zeroBool):
            for num in nums:
                if num != 0:
                    res.append(0)
                else:
                    res.append(total)
        else:
            for num in nums:
                if num == 0:
                    res.append(0)
                else:
                    res.append(int(total/num))
        return(res)
        
        