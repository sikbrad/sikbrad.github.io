---
title: "7 Reverse Interger"
date: 2021-01-23 07:45:00 +0900
categories: prog train
tags: leet python eng solved cheeped
---
## Problem

https://leetcode.com/problems/reverse-integer/



## Before getting into

This is my second leet problem.

I will get div10 value from A and save it to B

I will div10 the A, and get div10. I will multi B by 10 and add new div10 val.



## Solution

``` python
class Solution:
    def reverse(self, x: int) -> int:
        A = x
        B = 0
        idx = -1
        neg = A < 0
        
        ## drop if OOR
        lim32 = pow(2,31)
        print(f'pow2,31 -> {lim32}')
        if x > (lim32-1):
            return 0
        if neg and x < -lim32:
            return 0
        
        ## neg proc
        if neg:
            A = -A            
            
        while A > 0:
            idx = idx + 1
            print(f"IDX {idx} - A:{A}, B:{B}")
            B = B * 10 + A % 10
            
            ## drop if ORR
            if B > (lim32-1):
                return 0
            
            A = int(A / 10)
                
        if neg:
            B = -B
        
        return B
```



## Thoughts

* Found shortcut for "run console"
  * That is Cmd+'

* Had to cheet
  * That's because I could not find reason why I was rejected for upper-out-of-bound test.
  * https://leetcode.com/problems/reverse-integer/discuss/409682/1534236469-is-beyond-range-231-231-1
  * Output must follow the system limitation too... ahh yeah. It means I really have to understand the sys req for this. Got it.