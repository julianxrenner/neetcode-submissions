class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //sort string
        //create map where key is the sort of the string
        const myMap = new Map()
        //instead of saving the index, save the element at that index to skip it
        //Now loop through the keys and add values to an array
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
