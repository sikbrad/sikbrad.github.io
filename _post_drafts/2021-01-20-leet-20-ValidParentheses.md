---
title: "20. Valid Parentheses"
date: 2021-01-22 12:01:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* started at noon
* Damn I got msg from work and passted the 30min lim. do it again later today.
* retry 6pm
* fin 6:30



## Problem

Link : https://leetcode.com/problems/valid-parentheses/

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.



## Before getting into

* Algo
  * Read char by char
  * Pair needed
    * Should i use tuple or list? or struct?
    * Class, maybe.
  * Stack is needed
    * does python have stack?
      * err.. no. i should use list.
  * Lets set stat for each piar. `open` `closed` , by making cheker fn inside fn
  * add char by one by one.
    * Save the last added type and pair, and depth
    * When adding an opener, just add and add depth
    * When adding an closer, check for corresponding 
* Applying constraint
  * python list size? search it later.



## Drafts

``` python
## later
```



## Accepted Solution without Modification

``` python
class Solution:
    def isValid(self, s: str) -> bool:
        
        k_ptype_normal = "()"
        k_ptype_middle = "{}"
        k_ptype_large = "[]"
        
        ## fail cases
        if len(s) < 1 or len(s) > pow(10,4):
            return False
        
        class Pair:
            k_status_opened = "opened"
            k_status_closed = "closed"
            depth = -1
            type = "undecided"
            
            def __init__(self):
                self.opener = None
                self.closer = None
            def checkStatus(self):
                if self.opener == None:
                    return k_status_opened
                if self.closer == None:
                    return k_status_opened
                return k_status_closed
                
        stack = [ ]
        
        def is_opener(ch):
            if ch == k_ptype_normal[0]:
                return True
            if ch == k_ptype_middle[0]:
                return True
            if ch == k_ptype_large[0]:
                return True
            return False
        
        def get_type(ch):
            if ch in k_ptype_normal:
                return "normal"
            if ch in k_ptype_middle:
                return "middle"
            if ch in k_ptype_large:
                return "large"
            return "error"
        
        # read string
        curr_depth = 0
        karma = 0
        for idx_ch, ch in enumerate(s):
            # update stack
            if is_opener(ch):
                print(f"opener {ch} entered")
                curr_depth += 1
                p = Pair()
                p.opener = ch
                p.depth = curr_depth
                p.type = get_type(ch)
                stack.append(p)
                karma += 1
                print(f"adding {ch} as type of {p.type}")
            else:
                ## cases when closer comes first
                if len(stack) <= 0:
                    return False
                
                recent_stack = stack[-1]
                print(f"closer {ch} entered")
                if recent_stack.type == get_type(ch):
                    karma -= 1
                    del stack[-1]
                    print(f"popping {ch} as type of {p.type}")
                else:
                    ## cases when closer comes first
                    return False
                    
        if karma == 0:
            return True
        else:
            return False
            
            
            
```



## Mistakes/Errors

* Im making too much of structure, not focusing on problem itself.
* missing def in __init\__ 
* not thinking all test cases
* not knowing removing elem by idx, without googling
* Not expecting all error cases, crazy inputs



## Thoughts

* Too verbose. Not accessing direcly to the problem itself.
* Half of the code is not even used. What an idiot. Too stylish, or dummish. Is it a joke. Be serious man...



## Review with Solution

* Started with simpler case. Like, all parenthesis type are same, and initial algorithm is derived. I can do that.