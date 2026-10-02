class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //Create an array of nums length
        //Track freq of each number and store it at that specific index(-1)
        //build array of k numbers by pushing elements in freqarray 
        const myMap = {}
        const arr = new Array(nums.length)
        let result = []
        for (let i = 0; i < nums.length; i++) {
            arr[i] = []
        }
        for (let i = 0; i < nums.length; i++) {
            myMap[nums[i]] = myMap[nums[i]] >= 1 ? myMap[nums[i]] + 1 : 1
        }
        for (const key in myMap) {
            console.log(myMap[key])
            console.log(Number(key))
            console.log(arr)
            arr[myMap[key]-1].push(Number(key))
            console.log(arr)
            console.log(result.length)
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            while (arr[i].length > 0) {
                if (result.length === k) {
                    break
                }
                let popVal = arr[i].pop()
                console.log(arr)
                result.push(popVal)
            }
        }
        return (result)
    }
}
