class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0
        let sell = 0
        let profit = 0
        let length = prices.length
        while (buy < length && sell < length) {
            let total = prices[sell] - prices[buy]
            if (total === 0) {
                sell++
            } else if (total > 0) {
                sell++
                if (total > profit) {
                    profit = total
                }
            } else if (total < 0) {
                buy++
            }
        }
        return profit
    }
}
