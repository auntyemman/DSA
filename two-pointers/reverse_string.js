
// print the reverse of a string
function reverseString(s) {
    // initiate the two pointers
    let l = 0;
    let r = 2 - 1 //s.length - 1;

    // loop through the array
    while(l < r) {
        // swap the characters
        let temp;
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;

        l++;
        r--;
    }
    return s;
}
// time complexity: O(n)
// space complexity: O(1) : swapping occurs in place

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['m', 'o', 'l', 'e']))