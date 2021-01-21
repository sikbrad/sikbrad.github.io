---
title: "First leetcode attempt"
date: 2021-01-22 07:00:00 +0900
categories: prog train
tags: leet python eng solved
---
## Problem

https://leetcode.com/problems/two-sum/



## Before getting into

I will pick two numbers from iteration, and return if satisfies.



## Solution

``` python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        print(f'called. taret is {target}')
        pair = None
        """
        pick two numbers with iteration (upper tirangle)
          put in the pair if satisfies
          (given that exactly one solution for example)
        """ 
        
        for idx_i, num_i in enumerate(nums):
            for idx_j, num_j in enumerate(nums):
                if idx_j <= idx_i:                    
                    continue
                    
                if (num_i + num_j) == target:
                    print(f'adding {[idx_i,num_i]} and {[idx_j, num_j]} makes \
                          target val {target}')
                    if pair is None:
                        pair = [idx_i, idx_j]
                    
        
        return pair
```



## Thoughts

First attempt. I'm learning the process of Leetcode for now.

Before I began, I thought having Pycharm ready would had been useful for my journey. But leetcode have it all, and testcases are not consistent - sometimes they have only input sets, sometimes they have input and expected output all together, making it parsing inconsistent - so I think I better stick to leetcode itself.

About purchasing premium version? Not yet I guess.