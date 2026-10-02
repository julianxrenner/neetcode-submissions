class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //Neet code Solution
        let buy = 0
        let sell = 1
        let profit = 0
        let length = prices.length
        while (buy < length && sell < length) {
            let total = prices[sell] - prices[buy]
            if (prices[buy] < prices[sell]) {
                profit = Math.max(total, profit)
            } else {
                buy = sell
            }
            sell++
        }
        return profit
    }
}
