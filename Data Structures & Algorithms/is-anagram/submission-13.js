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
        const trackArray = new Array(26)

        for (let i = 0; i < len; i++) {
            let tIndex = t[i].charCodeAt(0) - 97
            let sIndex = s[i].charCodeAt(0) - 97
            trackArray[tIndex] = trackArray[tIndex] ? trackArray[tIndex] + 1 : 1
            trackArray[sIndex] = trackArray[sIndex] ? trackArray[sIndex] - 1 : -1
        }

        for (let i = 0; i < 26; i++) {
            if (trackArray[i] > 0 || trackArray[i] < 0) {
                return false
            }
        }
        return true
    }
}
