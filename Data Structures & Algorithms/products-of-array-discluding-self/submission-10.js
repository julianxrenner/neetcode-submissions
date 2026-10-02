class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let total
        const arr = []
        let isZero = false
        let isTwoZero = false
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]===0){
                if(isZero){
                    isTwoZero = true
                }
                isZero=true
                continue
            }
            total = (total||1)* nums[i]
        }
        if(typeof total != 'number'){
            total = 0
        }
        for(let i = 0; i<nums.length; i++){
            if(isTwoZero){
                arr.push(0)
                continue
            }

            if(isZero && nums[i]===0){
                arr.push(total)
                continue
            }else if(isZero){
                arr.push(0)
            }else{
                arr.push(total/nums[i])
            }
            
        }
        return arr
    }
}
