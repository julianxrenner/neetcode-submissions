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
        const len = s.length
        const tracker = {}
        for(let i = 0; i < len; i++){
            tracker[s[i]] = tracker[s[i]] ? tracker[s[i]] + 1 : 1
            tracker[t[i]] = tracker[t[i]] ? tracker[t[i]] - 1 : -1
        }
        console.log(tracker)
        for(let i = 0; i < len; i++){
            if(tracker[s[i]] != 0){
                return false
            }
        }
        return true

    }
}
