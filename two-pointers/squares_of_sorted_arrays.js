// time complexity O(n) | space complexity O(n)
function sortedSquares(num){
    let sqr = num.map(x => x**2);
    let left = 0;
    let right = left+1;
    while(right < sqr.length) {
      if(sqr[left] > sqr[right]) {
          let temp = 0;
          temp = sqr[left];
          sqr[left] = sqr[right];
          sqr[right] = temp;
  
          // reset left and right pointers
          left = 0;
          right = left + 1;
      } else {
          left +=1
          right +=1
      }
    }
    return sqr;
  }
  
  console.log(sortedSquares([-4, -1, 0, 3, 10]));
  
  // time complexity O(n) | space complexity O(n)
  function sortedSquares(nums) {
      let n = nums.length;
      let result = new Array(n);
      let left = 0;
      let right = n - 1;
      let pos = n - 1;
    
      while (left <= right) {
        let leftSquare = nums[left] ** 2;
        let rightSquare = nums[right] ** 2;
    
        if (leftSquare > rightSquare) {
          result[pos] = leftSquare;
          left++;
        } else {
          result[pos] = rightSquare;
          right--;
        }
        pos--;
      }
    
      return result;
    }
    
    console.log(sortedSquares([-4, -1, 0, 3, 10]));
    