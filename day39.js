function maxProfit(prices: number[]): number {
    let minPrice = Infinity; // Set the minimum price to a very large value
    let maxProfit = 0; // Initialize maximum profit to 0

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // Calculate the profit and update the maximum profit
        }
    }

    return maxProfit;  
};