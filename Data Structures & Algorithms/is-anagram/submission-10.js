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
        let len = s.length
        const letters = new Array(26)
        for (let i = 0; i < len; i++) {
            let sVal = s[i].charCodeAt(0) - 97
            let tVal = t[i].charCodeAt(0) - 97
            letters[sVal] = typeof (letters[sVal]) === 'number' ? letters[sVal] + 1 : 1
            letters[tVal] = typeof (letters[tVal]) === 'number' ? letters[tVal] - 1 : -1
        }
        for (let i = 0; i < 26; i++) {
            if (letters[i] !== 0 && letters[i] != undefined) {
                return false
            }
        }
        return true
    }
}
