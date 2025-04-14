function maxAvSubArray(nums, k) {
    let windowSum = 0;
    let maxSum = 0;
    // building the initial window sum
    for(i=0; i<k; i++){
        windowSum += nums[i];
    }
    // starting from next iterative to build the rest for the sum
    for(i=k; i<nums.length-1; i++){
        let currentSum = 0;
        currentSum = windowSum + nums[i];
        currentSum -= nums[i-k];
        maxSum = Math.max(windowSum, currentSum);
    }
    return maxSum/k;
}

console.log(maxAvSubArray([1,12,-5,-6,50,3], 4));