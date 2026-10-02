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

        const length = s.length
        const ht1 = {}
        const ht2 = {}

        for (let i = 0; i < s.length; i++) {
            if (ht1[s[i]] >= 1) {
                ht1[s[i]] = ht1[s[i]] + 1
            } else {
                ht1[s[i]] = 1
            }
            if (ht2[t[i]] >= 1) {
                ht2[t[i]] = ht2[t[i]] + 1
            } else {
                ht2[t[i]] = 1
            }
        }
    
        for (let i = 0; i < length; i++) {
            if (ht1[s[i]] === ht2[s[i]]) {
                continue
            } else {
                return false
            }
        }
        return true
    }
}
