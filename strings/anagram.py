
# check if two strings are anagrams i.e same characters but in different order
def anagrams(s1, s2):
    # using map
    seen = {}
    # if length not equal return false
    if(len(s1) != len(s2)): return False
    # store all the characters of first string in map
    for c in s1:
        seen[c] = c
    # for second string
    # if any character in second string is not in map then return false
    for c in s2:
        if(c != seen[c]): return False
    return True

print(anagrams('cinema', 'iceman'))