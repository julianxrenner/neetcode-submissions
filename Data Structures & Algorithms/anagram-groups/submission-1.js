class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for (let i = 0; i < strs.length; i++) {
            const contents = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++) {
                let index = (strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0))
                contents[index] = contents[index] + 1
            }
            let key = contents.join(',')
            if (result[key] == null) {
                result[key] = []
            }
            let value = result[key]
            value.push(strs[i])
            result[key] = value
        }
        return Object.values(result)
    }
}
