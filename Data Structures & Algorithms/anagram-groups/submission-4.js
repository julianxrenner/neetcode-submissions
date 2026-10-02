class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const myMap = new Map()
        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split('').sort().join('')
            if (myMap[key] != null) {
                myMap[key].push(strs[i])
            } else {
                myMap[key] = [strs[i]]
            }
        }
        return Object.values(myMap)
    }
}
