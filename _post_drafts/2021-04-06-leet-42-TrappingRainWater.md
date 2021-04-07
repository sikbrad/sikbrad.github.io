---
title: "42 Trapping Rain Water"
date: 2021-04-06 23:10:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* was in the book. kinda seen the solutino but have to practice it.



## Problem

Link : https://leetcode.com/problems/trapping-rain-water/

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.



## Before getting into

* will calculate while reading thru array.
* Finding max would help, but wont do it. That would be not better if we move on for realtime approach later. I think thats more elegant...



## While processing

``` python
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass
class Solution:

    def trap(self, height_list: List[int]) -> int:
        
        water_amount = 0
        
        left_wall_height = 0        
        locally_trapped_water_list = []
    
        # is_trap_started = False
        prev_leftwall_height = 0
        
        for idx_height, height in enumerate(height_list):
            logd()
            logd(f'idx_height : {idx_height}, height : {height}')
            
            if prev_leftwall_height > height:
                is_trap_started = True
            else:
                is_trap_started = False    
            
            if not is_trap_started:
                if height == 0:
                    logd('to low to trap water')
                else:
                    left_wall_height = height
                    logd(f'sets left_wall_height : {left_wall_height}')
                    is_trap_started = True
            else:
                if height < left_wall_height:
                    trapped = left_wall_height - height
                    locally_trapped_water_list.append(trapped)
                    logd(f'trapped : {trapped}')
                else:
                    # if height >= left_wall_height:
                    local_trapped = sum(locally_trapped_water_list)
                    water_amount += local_trapped
                    logd(f'local_trapped : {local_trapped}, sum is {water_amount}')

                    # clear params
                    locally_trapped_water_list = []
                    left_wall_height = height
                    is_trap_started = False
             
            prev_leftwall_height = height
                
                
        return water_amount
        
```

im going nowhere.

23:45.

starting over.

``` python
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass
class Solution:
    def trap(self, height: List[int]) -> int:
        height_list = height #change name of param
        
        left_wall_height = 0
        sump_height_list = []
        total_water = 0
        
        for idx_height, height in enumerate(height_list):
            logd()
                
            ## check if flush needed
            if height >= left_wall_height or idx_height == len(height_list) - 1:
                waterlevel = min(height,left_wall_height) if not idx_height == len(height_list) - 1 else min(left_wall_height,max(max(sump_height_list),height))
                sump_water_list = [max(0,waterlevel - x) for x in sump_height_list]

                logd('waterlevel',waterlevel)
                logd('sump_water_list', sump_water_list)
                sump_amount = sum(sump_water_list)
                
                sump_height_list = [ ]
                logd(f'sump_amount {sump_amount}')
                total_water += sump_amount
                left_wall_height = height
                pass
            else:
                sump_height_list.append(height)
                
            logd({
                "left_wall_height":left_wall_height,
                "idx_height":idx_height,
                "height":height,
                "total_water":total_water,
                "sump_height_list":sump_height_list
            })
            logd()
        return total_water
#             if prev_height <= height: # going down
#                 sump_total += left_wall_height - height
#                 pass
#             elif height > prev_height: # going up
#                 # if height is higher than left wall, we flush list here.
#                 pass
            
#             prev_height = height
            
        return 0
```

0057

oh fuck me



``` python
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass
class Solution:
    def trap(self, height: List[int]) -> int:
        height_list = height #change name of param
        
        left_wall_height = 0
        sump_height_list = []
        total_water = 0
        sump_amount = 0
        
        if len(height_list) == 1:
            return 0
        
        for idx_height, height in enumerate(height_list):
            logd()
                
            ## check if flush needed
            if height >= left_wall_height or idx_height == len(height_list) - 1:
                if len(sump_height_list) is not 0:
                    waterlevel = min(height,left_wall_height) if not idx_height == len(height_list) - 1 else min(left_wall_height,max(max(sump_height_list),height))
                    sump_water_list = [max(0,waterlevel - x) for x in sump_height_list]

                    logd('waterlevel',waterlevel)
                    logd('sump_water_list', sump_water_list)
                    sump_amount = sum(sump_water_list)
                
                sump_height_list = [ ]
                logd(f'sump_amount {sump_amount}')
                total_water += sump_amount
                left_wall_height = height
                pass
            else:
                sump_height_list.append(height)
                
            logd({
                "left_wall_height":left_wall_height,
                "idx_height":idx_height,
                "height":height,
                "total_water":total_water,
                "sump_height_list":sump_height_list
            })
            logd()
        return total_water
#             if prev_height <= height: # going down
#                 sump_total += left_wall_height - height
#                 pass
#             elif height > prev_height: # going up
#                 # if height is higher than left wall, we flush list here.
#                 pass
            
#             prev_height = height
            
        return 0
```

test case failed for [5,4,1,2]

need to see the solution.

fuck.

0105



``` python

```





## Initially Accepted Solution

``` python

```



## Mistakes/Errors

* Give-up



## Thoughts

* 



## Review with Solution

* 