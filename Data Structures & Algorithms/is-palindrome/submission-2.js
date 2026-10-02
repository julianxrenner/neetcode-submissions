class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /^[a-zA-Z0-9]+$/
        let j = s.length -1
        let i = 0
        while(i < s.length){
            if(!regex.test(s[j])){
                j--
                continue
            }
            if(!regex.test(s[i])){
                i++
                continue
            }
            if(s[i].toLowerCase()===s[j].toLowerCase()){
                i++
                j--
                continue
            }else{
                return false
            }
        }
        return true
    }
}
