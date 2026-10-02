class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let res = 0
        let windowLen = right - left
        const map = {}
        while (right < s.length) {
            windowLen = right - left + 1
            map[s[right]] = map[s[right]] >= 1 ? map[s[right]] + 1 : map[s[right]] = 1
            right++
            let mostFreq = findFreq(map)
            if (windowLen - map[mostFreq] <= k) {
                res = Math.max(res, windowLen)
                continue
            } else {
                map[s[left]] = map[s[left]] > 0 ? map[s[left]] - 1 : map[s[left]] = 0
                left++
            }
        }
        return res
    }
}

const findFreq = (obj) => {
    let freq = 0
    let character
    for (let item in obj) {
        if (obj[item] > freq) {
            freq = obj[item]
            character = item
        }
    }
    return character
}
