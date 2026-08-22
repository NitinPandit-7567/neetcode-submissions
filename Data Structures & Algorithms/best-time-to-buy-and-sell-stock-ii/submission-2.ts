class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxRight = 0;
        let minRight = Infinity;
        let maxR = [];
        let minR = [];
        for (let i = prices.length - 1; i >= 0; i--) {
            maxRight = Math.max(maxRight, prices[i]);
            minRight = Math.min(minRight, prices[i]);
            maxR[i] = maxRight;
            minR[i] = minRight;
        }
        let buy = -1;
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            if ((minR[i] === prices[i] || ((prices[i]<maxR[i] && prices[i]<prices[i+1])))&& buy<0) {
                buy = prices[i];
            } else if (
                ((prices[i] !== maxR[i] && prices[i + 1] < prices[i]) ||
                    prices[i] === maxR[i] ||
                    i === prices.length - 1) &&
                buy >=0
            ) {
                profit += prices[i] - buy;
                buy = -1;
            }
        }
        return profit;
    }
}
