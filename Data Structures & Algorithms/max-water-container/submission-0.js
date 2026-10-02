class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let lo = 0
        let hi = heights.length - 1
        let max = 0
        while (lo < hi) {
            let height = Math.min(heights[hi], heights[lo])
            let width = hi - lo
            console.log(width, height)
            let container = height * width
            console.log(container)
            if (max < container) {
                max = container
            }
            if (heights[hi] < heights[lo]) {
                hi--
            } else if (heights[hi] > heights[lo]) {
                lo++
            } else {
                lo++
            }
        }
        return max
    }
}
