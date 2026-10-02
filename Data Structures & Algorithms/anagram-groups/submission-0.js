class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        const list = []
        for (let i = 0; i < strs.length; i++) {
            let string = strs[i].split('').sort().join('')
            if (map[string] == null) {
                map[string] = [strs[i]]
            } else {
                map[string].push(strs[i])
            }
        }
        for(let item in map){
            list.push(map[item])
        }
        return list
    }
}
