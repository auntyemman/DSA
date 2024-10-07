// check if two strings are anagrams i.e they have same characters but in different order
function anagrams(s1, s2) {
    // using map
    let seen = {}
    // if length not equal return false
    if (s1.length !== s2.length) return false;
    // if length equal
    // store all the characters of first string in map
    for(let i = 0; i < s1.length; i++) {
        seen[s1[i]] = s1[i];
    }
    // for second string
    // if any character in second string is not in map then return false
    for(let i = 0; i < s2.length; i++) {
        if(s2[i] !== seen[s2[i]]) return false;
    }
    // finally return true if all characters are in map
    return true;
}

console.log(anagrams('cinema', 'iceman'));