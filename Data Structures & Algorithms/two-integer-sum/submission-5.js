class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            let find = target - nums[i]
            if (map.has(find)) {
                return ([i, map.get(find)])
            }
            map.set(nums[i], i)
        }
    }
}
