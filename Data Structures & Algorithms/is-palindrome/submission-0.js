class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /^[a-zA-Z0-9]+$/;
        const arr = []
        for (let i = 0; i < s.length; i++) {
            if (regex.test(s[i])) {
                arr.push(s[i].toLowerCase())
            }
        }
        console.log(arr)
        for (let i = 0; i < s.length; i++) {
            if (arr[i] === arr[arr.length - 1 - i]) {
                console.log(arr[i], arr[arr[s.length - 1 - i]])
                continue
            }
            return false
        }
        return true
    }
}
