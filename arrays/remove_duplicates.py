#remove dduplicates from a sorted array

# method 1, stepping back after seeing duplicates
# Time complexity: O(n^2)
# Space complexity: O(1)
def remove_duplicates(nums):
    i = 0
    while (i < len(nums) - 1):
        if (nums[i] == nums[i+1]):
            del nums[i]
            i = i - 1
        i = i + 1
    return len(nums)


# method 2, stepping back after seeing duplicates
# Time complexity: O(n)
# Space complexity: O(1)
def remove_duplicates(nums):
    k = 1
    i = 1
    while (i < len(nums)):
        if (nums[i] != nums[k-1]):
            nums[k] = nums[i]
            k = k + 1
        i = i + 1
    return k

print(remove_duplicates([1,1,2]))
print(remove_duplicates([0,0,1,1,1,2,2,3,3,4]))