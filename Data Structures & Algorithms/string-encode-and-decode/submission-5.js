class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalString = ''
        for (let i = 0; i < strs.length; i++) {
            let newString = `${strs[i].length}` + '#' + strs[i]
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
        //loop through string
        //store number until delimiter
        //convert string to number
        //built the string and store it
        //onto the next number
        let number = ''
        let strArray = []
        for (let i = 0; i< str.length; i++) {
            if (str[i] == '#') {
                i++
                let newNumber = Number(number)
                let newString = ''
                for (let j = newNumber; j > 0; j--) {
                    newString = newString + str[i]
                    i++
                }
                strArray.push(newString)
                number = ''
            }
            number = number + str[i]
        }
        return strArray
    }
}
