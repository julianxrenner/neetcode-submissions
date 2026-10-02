class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const map1 = {}
        const map2 = {}
        for (let i = 0; i < s.length; i++) {
            if (map1[s[i]]) {
                map1[s[i]] = map1[s[i]] + 1
            } else {
                map1[s[i]] = 1
            }
            if (map2[t[i]]) {
                map2[t[i]] = map2[t[i]] + 1
            } else {
                map2[t[i]] = 1
            }
        }
        for (let i = 0; i < s.length; i++) {
            if (map1[s[i]] === map2[s[i]]){
                continue
            }else{
                return false
            }
        }
        return true
    }
}
