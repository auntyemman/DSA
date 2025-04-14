#  time complexity O(n) | space complexity O(n)
def squares_of_sorted_array(nums: list[int]) -> list[int]:
    left = 0
    right = len(nums) -1
    result = []
    
    while(left <= right):
        if(abs(nums[left]) > abs(nums[right])):
            result.append(nums[left] ** 2)
            left += 1
        else:
            result.append(nums[right] ** 2)
            right -= 1
    result.reverse()
    return result

print(squares_of_sorted_array([-4,-1,0,3,10]))