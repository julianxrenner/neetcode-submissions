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
        const mapS = {}
        const mapT = {}
        let len = s.length
        for (let i = 0; i < len; i++) {
            mapS[s[i]] = mapS[s[i]] ? mapS[s[i]]+1 : 1
            mapT[t[i]] = mapT[t[i]] ? mapT[t[i]]+1 : 1
        }
        for (let i = 0; i < len; i++) {
            if (mapS[s[i]] !== mapT[s[i]]) {
                return false
            }
        }
        return true
    }
}
