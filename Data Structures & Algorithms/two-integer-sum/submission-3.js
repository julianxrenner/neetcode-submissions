class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        let temp;
        for (let i = 0; i < nums.length; i++){
            temp = target - nums[i]
            if (map[temp] != null){
                return([map[temp],i])
            }else{
                map[nums[i]] = i
            }
        }
    }
}
