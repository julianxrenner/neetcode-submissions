class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        const map = {}
        let sorted
        //n^3 solution HINT 1
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        sorted = [nums[i], nums[j], nums[k]].sort()
                        if (map[sorted]) {
                            continue
                        }
                        res.push(sorted)
                        map[sorted] = true
                    }
                }
            }
        }
        return res
    }
}
