
# this is the second two sum required to use Space: O(1) i.e constanst space.
# Hash map cant be used as it will increase the space complexity.

# find the the two numbers that sums up to the target
# the function should return the two indices plus 1
def two_Sum_2(num, target):
    l = 0
    r = len(num) - 1
    
    while(l < r):
        sum = num[l] + num[r]
        if(sum == target):
            return [l+1, r+1]
        elif(sum < target):
            l = l + 1
        else:
            r = r -1

print(two_Sum_2([1, 3, 5, 9], 8))
print(two_Sum_2([-1, 0, 3], -1))