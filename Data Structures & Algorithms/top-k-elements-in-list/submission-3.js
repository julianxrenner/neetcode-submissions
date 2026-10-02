class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = Array.from({ length: nums.length+1 }, () => []);
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 : 1
        }
        for (let element in map) {
            let freq = Number(map[element])
            count[freq].push(Number(element))
        }
        let retArray = []
        for (let i = count.length-1; i>0; i--){
            if(count[i].length > 0){
                for(let item in count[i]){
                    retArray.push(count[i][item])
                } 
            }
            if(retArray.length === k){
                return retArray
            }
        }
    }
}
