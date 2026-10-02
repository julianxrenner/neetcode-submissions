class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //key is an array, if a match add to value array
    groupAnagrams(strs) {
        const map = new Map()
        let finalArray = []
        for (let i = 0; i < strs.length; i++) {
            let key = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++) {
                let characterIndex = strs[i][j].charCodeAt(0) - 97
                key[characterIndex]++
            }
            let joinedKey = key.join()
            if (map.has(joinedKey)) {
                let newValue = map.get(joinedKey)
                newValue.push(strs[i])
                map.set(joinedKey, newValue)
            } else {
                map.set(joinedKey, [strs[i]])
            }
        }
        for (const key of map.keys()) {
            let value = map.get(key)
            finalArray.push(value)
        }
        return(finalArray)
    }
}
