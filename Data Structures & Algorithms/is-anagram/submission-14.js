class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //Use array
    isAnagram(s, t) {

        if (s.length != t.length) {
            return false
        }

        const len = s.length
        const trackArray = new Array(26).fill(0)

        for (let i = 0; i < len; i++) {
            trackArray[t[i].charCodeAt(0) - 97]++
            trackArray[s[i].charCodeAt(0) - 97]--
        }

        for (let i = 0; i < 26; i++) {
            if (trackArray[i] > 0 || trackArray[i] < 0) {
                return false
            }
        }
        return true
    }
}
