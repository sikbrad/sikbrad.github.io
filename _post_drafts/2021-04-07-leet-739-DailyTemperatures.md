---
title: "739-DailyTemperatures"
date: 2021-04-07 21:12:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* I know it is about stack, after reading book. It says it is similar to rainwater trapping so lets just practice.
* 2112
* 2215



## Problem

Link : https://leetcode.com/problems/daily-temperatures/

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.



## Before getting into

* will use stack
* will keep indices as well as temps
* I will append to stack things to list everytime
* will flush when find something to be updated



## While processing

``` python
def logd(*params):
    # dbg
    # print(*params)
    # rel
    pass
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        temp_list = T
        
        days_to_wait = [0] * len(temp_list)
        stack = [ ]
        for idx_temp, temp in enumerate(temp_list):
            # do something with pop
            while stack and min(stack, key=lambda x:x["temp"])['temp'] < temp:
                popped = stack.pop()
                
                days_to_wait[popped['idx']] = idx_temp - popped['idx']
                logd('popped', popped)
                
            logd('idx:',idx_temp,'temp:',temp,'stack:',stack)
            
            # add to stack
            stack.append({
                "idx" : idx_temp,
                "temp" : temp
            })
            
        return days_to_wait
        
```

2141

timeout?

what to do now



can i do dynamic prog?



maybe i can elminate 'min' thing, to not to search everything in stack. that could be just a number.

and stack popping was.. lucky. i should have popped the min idx



Stuck.

im idiot.

``` python
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        temp_list = T
        
        days_to_wait = [0] * len(temp_list)
        stack = [ ]
        idx_min = -1
        temp_min = sys.maxsize
        for idx_temp, temp in enumerate(temp_list):
            while stack and temp_min < temp:
                popped_idx = stack.index(temp_min)
                popped_temp = stack.pop(popped_idx)
                if stack:
                    temp_min = min(stack)
                
                days_to_wait[popped_idx] = idx_temp - popped_idx
                logd('popped_idx', popped_idx)
            stack.append(temp)
            temp_min = min(temp, temp_min)
            
            logd('idx:',idx_temp,'temp:',temp,'stack:',stack,'days_to_wait:',days_to_wait)
            
            
        return days_to_wait
            
```





``` python

```



``` python

```





## Initially Accepted Solution

Cheated

``` python
def logd(*params):
    # dbg
    # print(*params)
    # rel
    pass
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        temp_list = T
        
        days_to_wait = [0] * len(temp_list)
        stack = [ ]
        for idx_temp, temp in enumerate(temp_list):
            while stack and temp > temp_list[stack[-1]]:
                last = stack.pop()
                days_to_wait[last] = idx_temp - last
            stack.append(idx_temp)
            
            logd('idx:',idx_temp,'temp:',temp,'stack:',stack,'days_to_wait:',days_to_wait)
            
            
        return days_to_wait
            
```



## Mistakes/Errors

* 



## Thoughts

* am i overthinking?



## Review with Solution

* have to test with only when curr temp is higher than stack's last one - others will iterate in the time's reversed order. that will do.

