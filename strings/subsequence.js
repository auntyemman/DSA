// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
function isSubSeq(s, t) {
    // initialise counter variables
    let i = 0;
    let j = 0;

    // initialise seen array
    let seen = []

    // loop through s  and t while the longer of the two is not reached
    while(i < s.length && j < t.length){
        // if the current character in s is equal to the current character in t
        // then increment the counter for s
        if (s[i] === t[j]){
            seen.push(s[i]);
            i++;
        }
        j++;
    }
    // if the length of seen array is equal to the length of s
    // then return true
    if (seen.length !== s.length) return false;
    return true
}
// time complexity: O(n) 
// space complexity: O(n) for the seen array


console.log(isSubSeq("awc", "aecw"));
console.log(isSubSeq("aec", "abecw"))
console.log(isSubSeq("abc", "ahbgdc"))