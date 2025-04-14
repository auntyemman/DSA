def valid_palindrome(s: str) -> bool:
    left = 0
    right = len(s) - 1
    s = s.lower()
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True


# procces the string with python expression
def valid_palindrome(s: str) -> bool:
    s = ''.join(char for char in s if char.isalnum()).lower()
    print(s)
    left = 0
    right = len(s) - 1
    while(left < right):
        if(s[left] == s[right]):
            left+=1
            right-=1
        else:
            return False
    return True

print(valid_palindrome("A man, a plan, a canal: Panama"))