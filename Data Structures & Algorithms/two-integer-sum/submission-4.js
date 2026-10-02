class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        map[nums[0]] = 0
        for (let i = 1; i < nums.length; i++) {
            let val = target - nums[i]
            if (map[val] != null) {
                return [map[val], i]
            }
            map[nums[i]] = i
        }
    }
}
