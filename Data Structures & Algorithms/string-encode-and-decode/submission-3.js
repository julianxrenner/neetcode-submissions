class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = ''
        for (let i = 0; i < strs.length; i++) {
            let newString = strs[i] + '~'
            finalString = finalString + newString
        }
        console.log(finalString)
        return finalString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const finalArray = []
        let newString = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '~' || i == str.length - 1) {
                finalArray.push(newString)
                newString = ''
                continue
            }
            newString = newString + str[i]
        }
        return finalArray
    }
}
