class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        map[nums[0]] = 0;
        for (let i = 1; i < nums.length; i++) {
            let temp = target - nums[i]
            if (map[temp] != undefined && map[temp] !== i) {
                const arr = map[temp] > i ? [i, map[temp]] : [map[temp], i];
                return arr;
            }
            map[nums[i]] = i
        }
    }
}
