class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // create hash map
        let map = {}
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = true
        }
        // for each number check if the next number exists, if so +1 and check the next number
        let count = 0
        let highest = 0
        for (let i = 0; i < nums.length; i++) {
            count = 0
            if(!map[nums[i]-1]){
                let j = nums[i]
                while (map[j] === true) {
                    count++
                    j++
                }
            }
            if (count > highest) {
                highest = count
            }
        }
        return highest
    }
}
