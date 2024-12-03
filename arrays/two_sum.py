
# Time O(n) | Space O(n)
# this works for sorted, positive and negative arrays
def two_sum(nums, target):
    map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in map:
            return [map[complement], i]
        map[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))
print(two_sum([-1,-2,-3,-4,-5], -8))