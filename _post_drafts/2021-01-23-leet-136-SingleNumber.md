---
title: "136. Single Number"
date: 2021-01-23 21:10:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* Sta 7:10
* Fin 9:31



## Problem

Link : https://leetcode.com/problems/single-number/

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

**Follow up:** Could you implement a solution with a linear runtime complexity and without using extra memory?



## Before getting into

* Lets use stack startegy that i used before. While walking the array, find 'opener' and 'closer'. will return if unmatched.
* 'Follow up' thing, how's that possible?



## While processing

not knowing array removing value wise

``` python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        
        appeared_num_list = [ ]
        for idx_num, num in nums:
            if num not in appeared_num_list:
                appeared_num_list.append(num)
            else:
                appeared_num_list.remove(num)
                
        ## should have just one elem
        if len(appeared_num_list) != 1:
            print(f"Somethings wrong. len(appeared_num_list) : {len(appeared_num_list)}")
        
        return appeared_num_list[0]
```

TypeError: cannot unpack non-iterable int object    for idx_num, num in nums: Line 5 in singleNumber (Solution.py)

​	used enum, but no enum was written.



## Initially Accepted Solution

``` python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        
        appeared_num_list = [ ]
        for idx_num, num in enumerate(nums):
            if num not in appeared_num_list:
                appeared_num_list.append(num)
            else:
                appeared_num_list.remove(num)
                
        ## should have just one elem
        if len(appeared_num_list) != 1:
            print(f"Somethings wrong. len(appeared_num_list) : {len(appeared_num_list)}")
        
        return appeared_num_list[0]
            
```

andd.. accepted.



## Mistakes/Errors

* Nah



## Thoughts

* nah



## Review with Solution

* Furthers....
  * HASH. wow okay.
* Hash with sets
  * AHHHHHH
  * Was thinking similar but HASH was key. okay.
* XOR?? fuck me.

