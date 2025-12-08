// CodeSignal technical question

function countMatchingTriplets(text){
    const l = text.length;
    const ws = 3 // window size
    if (l < 3) {
        return 0;
    }
    let count = 0;
    const s = text.toLowerCase();

    // build the initial window and slide it one character at a time
    // i < = l - ws to avoid overflow when accessing s[i + 2]
    for(let i = 0; i <= l - ws; i++){
        const firstChar = s[i];
        const lastChar = s[i + 2];
        if (firstChar === lastChar){
            count++;
        }
    }
    return count;
}

console.log(countMatchingTriplets("aXA")) // 1
console.log(countMatchingTriplets("axax")) // 2
console.log(countMatchingTriplets("abcxccc")) // 2
console.log(countMatchingTriplets("aaaa")) // 2
console.log(countMatchingTriplets("ababa")) // 3