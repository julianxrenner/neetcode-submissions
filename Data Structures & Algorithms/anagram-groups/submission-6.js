class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //create an array of 26 0s
        //iterate through string and add 1 to char position in array
        //use that as the key and an array of strings as the value
        //return the list of arrays
        const myMap = new Map()
        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++) {
                let character = strs[i][j]
                let charVal = character.charCodeAt(0) - 97
                count[charVal] = count[charVal] + 1
                console.log(count)
            }
            let mergedCount = count.join(',')
            console.log(mergedCount)
            if (myMap[mergedCount] == null) {
                myMap[mergedCount] = []
            }
            myMap[mergedCount].push(strs[i])
        }
        console.log(myMap)
        return Object.values(myMap)
    }
}
