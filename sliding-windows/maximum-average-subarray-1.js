function maxAvSubArray(nums, k) {
    let windowSum = 0;
    let maxSum = 0;
    // building the initial window sum
    for(i=0; i<k; i++){
        windowSum += nums[i];
    }
    maxSum = 0;
    // starting from next iterative to build the rest for the sum
    for(i=k; i<=nums.length-1; i++){
        // add the next number to the window
        windowSum = windowSum + nums[i];
        // remove the previous number in the window
        windowSum -= nums[i-k];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum/k;
}

console.log(maxAvSubArray([1,12,-5,-6,50,3], 4));
console.log(maxAvSubArray([0,1,1,3,3], 4));