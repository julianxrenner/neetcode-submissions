const buildTable = (string, table) => {
    for (let i = 0; i < string.length; i++) {
        if (table[string[i]] >= 1) {
            table[string[i]] = table[string[i]] + 1
        } else {
            table[string[i]] = 1
        }
    }
    return table
}

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

        const length = s.length
        const ht1 = {} 
        const ht2 = {}
    
        buildTable(s, ht1)
        buildTable(t, ht2)
        for(let i = 0; i<length; i++){
            if(ht1[s[i]]===ht2[s[i]]){
                continue
            }else{
                return false
            }
        }
        return true
    }
}
