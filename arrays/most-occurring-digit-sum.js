// CodeSignal technical interview question


// add each digit of each element in an array, create new array of each sum and return the element with the most occuring if more than there are ties return bigger didgit
// note that each elements in the new array must be one digit if the sum is more than one we will add each digit again to finaly be done with that flow
// // example [12,34,23,45] => [3,7,5,9] => return 7
// example [123, 456, 101] => [6, 6, 6, 2] => return 6
function mostOccuring(arr){
    if(arr.length ===0){
        return 0;
    }
    let freq = {};
    // find frequency
    for (const element of arr){
        const num = sumToSingleDigit(element);
        freq[num] = (freq[num] || 0) + 1;
    }

    let bestDigit = -1
    let bestCount = -1
    for (const [digitStr, count] of Object.entries(freq)){
        const digit = Number(digitStr);

        // return if its the most occuring in the array(count > bestcount)
        // or if there is a tie(count === bestcount) return the the bigger digit
        if(count > bestCount || (count === bestCount && digit > bestDigit)){
            // update the digit as the digit that met either of the 'or' logic
            bestDigit = digit;
            // update the count
            bestCount = count;
        }

    }

    return bestDigit;

}

function sumToSingleDigit(digits) {
    let num = Math.abs(digits);
    while(num > 9){
        let sum = 0;
        // make the digits str
        for(const ch of String(num)){
            sum += Number(ch);
        }

        num = sum;
    }
    return num;
}

function sumToSingleDigitUsingDr(digits) {
    let num = Math.abs(digits);
    if (num === 0) return 0;
    num = 1 + (num - 1 ) % 9;
    return num
}

console.log(mostOccuring([12, 34, 23, 45]));
// reduce → [3,7,5,9] → all freq 1 → return 9

console.log(mostOccuring([123, 456, 101]));
// reduce → [6,6,2] → return 6