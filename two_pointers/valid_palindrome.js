// function to check if a string is a palindrome
function valid_palindrome(s) {
    s = s.match(/[a-z0-9]/gi).join('').toLowerCase();
    left = 0;
    right = s.length - 1;

    while(left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        }
        else {
            return false
        };
    }
    return true;
}

console.log(valid_palindrome("A man, a plan, a canal: Panama"))