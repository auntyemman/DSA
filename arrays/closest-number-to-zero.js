function closestToZero(nums){
    let closeToZero = Math.abs(nums[0]);
    let i = 0;
    while(i < nums.length-1){
        let absNum = Math.abs(nums[i]);
        closeToZero = Math.min(absNum, closeToZero);
        i++;
    }
    return closeToZero;
}

console.log(closestToZero([-4,-2,1,4,8]));