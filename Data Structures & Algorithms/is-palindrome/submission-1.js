class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '');
        for (let i = 0; i < s.length; i++) {
            if (s[i].toLowerCase() === s[s.length - i - 1].toLowerCase()) {
                continue
            }
            return false
        }
        return true
    }
}
