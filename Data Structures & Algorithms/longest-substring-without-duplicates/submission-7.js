class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 1
        let length = 0
        const mySet = new Set()
        mySet.add(s[left])
        while (left < s.length) {
            if (!mySet.has(s[right]) && s[right] != undefined) {
                mySet.add(s[right])
                right++
            } else {
                length = Math.max(mySet.size, length)
                if(s[right]==undefined){
                    break
                }
                console.log(mySet, "Before Delete")
                while (s[left] != s[right]) {
                    mySet.delete(s[left])
                    left++
                }
                mySet.delete(s[left])
                mySet.add(s[right])
                console.log(mySet, "After Delete")
                console.log("Max Length: ",length)
                left++
                right++
            }
        }
        return length
    }
}
