class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
        let res = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }
            let current = nums[i]
            let lo = i + 1
            let hi = nums.length - 1
            while (hi > lo) {
                let threeSum = nums[lo] + nums[hi] + current
                if (threeSum > 0) {
                    hi--
                }
                else if (threeSum < 0) {
                    lo++
                } else {
                    res.push([current, nums[lo], nums[hi]])
                    lo++
                    while (nums[lo] == nums[lo - 1] && lo < hi) {
                        lo++
                    }
                }
            }
        }
        console.log(res)
        return res
    }
}
