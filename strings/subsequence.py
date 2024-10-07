# loop through s  and t while the longer of the two is not reached
def isSubSeq(s, t):
    # initialise counter variables
    i = 0
    j = 0
    # initialise seen array
    seen = []
    
    # loop through s  and t while the longer of the two is not reached
    while(i < len(s) and j < len(t)):
        # if the current character in s is equal to the current character in t
        # then increment the counter for s
        if(s[i] == t[j]):
            seen.append(s[i])
            i = i + 1
        j = j + 1
    
    # if the length of seen array is equal to the length of s
    # then return true
    if(len(seen) != len(s)): return False
    return True

# time complexity: O(n) 
# space complexity: O(n) for the seen array

print(isSubSeq("awc", "aecw"))
print(isSubSeq("aec", "abecw"))
print(isSubSeq("abc", "ahbgdc"))