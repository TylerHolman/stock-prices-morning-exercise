const stockPrices = [7, 12, 5, 11, 34, 22] //create an array of stock prices

const best = arr => { //create a function called best with arr as its parameter
    let lowestPrice = arr[0] //create a var lowestPrice and set it equal to the arr at index 0 to set the buy price
    let profit = 0 // create a var called profit and set it equal to zero, this will assign our largest differential to the var profit. 
    let bestProfit = 0 //
    for(let i = 1; i < arr.length; i++ ){ // create a forloop that goes through the array but starts at index 1 because we are setting the element lowestPrice to be index 0.
        if(arr[i] <= lowestPrice){ //if the number in arr[] is lessthan the current lowestPrice then we will set it equal to the lowestPrice. This will update the variable throughout the for-loop, incase we come across any numbers less than the original lowestPrice. 
            lowestPrice = arr[i]
        }else{ 
            profit = arr[i] - lowestPrice //if the arr[] is greater than the lowest price, we will the current lowestPrice from the arr[] and assign that value to profit. 
        }
        if(profit > bestProfit){ //this will compare the current profit variable to the bestProfit variable. If the profit is greater than the bestProfit then it will assign that number to the var bestProfit.
            bestProfit = profit
        }}
        return bestProfit //because we want to find the bestProfit in the array stockPrices, we want to return the var bestProfit after the for-loop is finished.
}


console.log(best(stockPrices))