
# program to reverse a array of strings
def reverse_string(s):
    # initiate the two pointers
    l = 0
    r = len(s) - 1
    
    # loop through the array
    while(l < r):
        # swap the characters
        s[l], s[r] = s[r], s[l]
        
        l = l + 1
        r = r - 1
        
    return s

# time complexity: O(n) 
# space complexity: O(1) : swapping occurs in place

print(reverse_string(['h', 'e', 'l', 'l', 'o']))
print(reverse_string(['m', 'o', 'l', 'e']))