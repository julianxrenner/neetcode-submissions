class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let length = s.length
        let arr = new Array(26)
        for (let i = 0; i < length; i++) {
            let asciiS = s[i].charCodeAt(0) - 97
            let asciiT = t[i].charCodeAt(0) - 97
            arr[asciiS] = typeof(arr[asciiS]) === "number" ? arr[asciiS] + 1 : 1
            arr[asciiT] = typeof(arr[asciiT]) === "number" ? arr[asciiT] - 1 : -1
        }
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 || arr[i] < 0) {
                return false
            }
        }
        return true
    }
}
