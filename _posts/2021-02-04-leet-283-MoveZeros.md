---
title: "283. Move Zeroes"
date: 2021-02-04 01:40:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* Started 1:40
* Ended 1:52



## Problem

Link : https://leetcode.com/problems/move-zeroes/

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note**:

1. You must do this **in-place** without making a copy of the array.
2. Minimize the total number of operations.



## Before getting into

* can't i just count zeros and add to the end later?



## While processing

``` python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        indices_zeros = []
        for idx_num, num in enumerate(nums):
            if num == 0:
                indices_zeros.append(idx_num)
                
        indices_zeros.reverse()
        zeros_count = len(indices_zeros)
        
        for idx in indices_zeros:
            del indices_zeros[idx]
            
        for idx in range(zeros_count):
            indices_zeros.append(0)
        
```

initally sent

``` python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        indices_zeros = []
        for idx_num, num in enumerate(nums):
            if num == 0:
                print(f"zero at idx {idx_num}, val {num}")
                indices_zeros.append(idx_num)
                
        indices_zeros.reverse()
        zeros_count = len(indices_zeros)
        
        for idx in indices_zeros:
            print(f"idx : {idx}")
            del nums[idx]
            
        for idx in range(zeros_count):
            nums.append(0)
        
            
            
```

testcase ok



``` python

```



``` python

```





## Initially Accepted Solution

``` python
# the last one
```



## Mistakes/Errors

* not knowing reverse, del by index property
* returnning val was wrong.... was deleting different array.



## Thoughts

* huh.... easy?



## Review with Solution

* yup i thought of the swap too.
* but how to do that in python array?
  * nah.... that solution is to kinky...
  * it touches all vars and changes all vars. this shouldnt be accepted as answer.. meh.