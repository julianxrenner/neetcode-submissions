class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total = nums[0]
        let value = 0
        let res = []
        let isZero = false
        let doubleZero = false
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === 0) {
                if (isZero) {
                    doubleZero = true
                }
                isZero = true
                continue
            }
            total = total * nums[i]
        }
        console.log(total)
        for (let i = 0; i < nums.length; i++) {
            if(doubleZero){
                res.push(0)
                continue
            }
            if (!isZero) {
                value = total / nums[i]
                res.push(value)
                continue
            }
            if (nums[i] === 0) {
                value = total / 1
                res.push(value)
                continue
            }
            res.push(0)
        }
        return res
    }
}
