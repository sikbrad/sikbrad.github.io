---
title: "409-LongestPalindromicSubstring"
date: 2021-04-05 00:22:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* I know the solution with two pointer thing. I am practicing that.



## Problem

Link : https://leetcode.com/problems/longest-palindromic-substring/

Given a string `s`, return *the longest palindromic substring* in `s`.

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```



## Before getting into

* will use two-pointer solution



## While processing

``` python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def get_pal_str(test_str):
            return test_str[::-1]
        def is_pal_str(test_str):
            return test_str == get_pal_str(test_str)
        
        input_str = s
        longest_palindron = ""
        
        for idx_left, ch in enumerate(input_str):
            str_from_left_idx = input_str[idx_left:]
            for idx_right in range(idx_left, len(input_str)):
                str_btw_pointers = input_str[idx_left:idx_right+1]              
                len_str = len(str_btw_pointers)
                # print('examining', str_btw_pointers, 'idx_left', idx_left, 'idx_right', idx_right)
                
                if is_pal_str(str_btw_pointers) and len_str > len(longest_palindron):
                    # print('new longest palindrom : ',str_btw_pointers,
                          # ', while older was',longest_palindron)
                    longest_palindron = str_btw_pointers
                    
        return longest_palindron
```

time limit exceeded

what did i do wrong?



errrr...



40min passed.

Let me see the solution...



``` python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def logd(*params):
            is_print = True
            if is_print:
                print(*params)
        def get_pal_str(test_str):
            return test_str[::-1]
        def is_pal_str(test_str):
            return test_str == get_pal_str(test_str)
        
        input_str = s
        longest_palindron = ""
        
        for idx_left, ch in enumerate(input_str):
            str_from_left_idx = input_str[idx_left:]
            
            for idx_oddity in range(0,2):
                logd('Testing with oddity : ', idx_oddity)
                for idx_right in range(idx_left + idx_oddity, len(input_str), 2):
                    str_btw_pointers = input_str[idx_left:idx_right+1]              
                    len_str = len(str_btw_pointers)
                    logd('examining', str_btw_pointers, 
                         'size', len(str_btw_pointers),
                         'idx_left', idx_left, 'idx_right', idx_right)

                    if is_pal_str(str_btw_pointers):
                        if len_str > len(longest_palindron):
                            logd('new longest palindrom : ',str_btw_pointers,
                                  ', while older was',longest_palindron)
                            longest_palindron = str_btw_pointers
                    else:
                        break
                    
        return longest_palindron
```

this is not covering all test cases.



ahh.

comparing thing should start from mid. not from the beginning.

starting point was wrong. literally.



would do that again.



fixed.. but time limit here..

``` python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def logd(*params):
            is_print = False
            if is_print:
                print(*params)
        def get_pal_str(test_str):
            return test_str[::-1]
        def is_pal_str(test_str):
            return test_str == get_pal_str(test_str)
                
        input_str = s
        longest_palindron = input_str[:1]
        
        if len(input_str) < 2:
            return input_str
        
        if is_pal_str(input_str):
            return input_str
        
        
        for idx_startpoint in range(0, len(input_str)-1):
            logd('idx_startpoint', idx_startpoint)
            
            ## start grassfire, even len case
            idx_left = idx_startpoint
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len(input_str):
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str', test_str)
                if is_pal_str(test_str):
                    if len(longest_palindron) < len(test_str):
                        longest_palindron = test_str
                        logd('test_str became new longest palin.', test_str)
                
                idx_left -= 1
                idx_right += 1
                
            ## start grassfire, odd len case
            idx_left = idx_startpoint - 1
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len(input_str):
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str', test_str)
                if is_pal_str(test_str):
                    if len(longest_palindron) < len(test_str):
                        longest_palindron = test_str
                        logd('test_str became new longest palin.', test_str)
                
                idx_left -= 1
                idx_right += 1
        
        return longest_palindron
                
                
```



optim?



not really works.

still timeout.



would need another solution like dynamic programming, like book says. Actually book does not shows execution time, which is written everywhere in this book. This may mean that it is not supposed to work.



Anyway, my code is like this

``` python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def logd(*params):
            # dbg
            # print(*params)
            # rel
            pass
        
        def get_pal_str(test_str):
            return test_str[::-1]
        def is_pal_str(test_str):
            return test_str == get_pal_str(test_str)
                
        input_str = s
        len_input_str = len(input_str)
        longest_palindron = input_str[:1]
        len_longest_palindron = len(longest_palindron)
        
        if len_input_str < 2:
            return input_str
        
        if is_pal_str(input_str):
            return input_str
        
        
        for idx_startpoint in range(0, len_input_str-1):
            logd('idx_startpoint', idx_startpoint)
            
            ## start grassfire, even len case
            idx_left = idx_startpoint
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len_input_str:
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str', test_str)
                if is_pal_str(test_str):
                    if len_longest_palindron < len(test_str):
                        longest_palindron = test_str
                        len_longest_palindron = len(longest_palindron)
                        logd('test_str became new longest palin.', test_str)
                
                idx_left -= 1
                idx_right += 1
                
            ## start grassfire, odd len case
            idx_left = idx_startpoint - 1
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len_input_str:
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str', test_str)
                if is_pal_str(test_str):
                    if len_longest_palindron < len(test_str):
                        longest_palindron = test_str
                        len_longest_palindron = len(longest_palindron)
                        logd('test_str became new longest palin.', test_str)
                
                idx_left -= 1
                idx_right += 1
        
        return longest_palindron
                
                
```

gives timeout.





## Initially Accepted Solution

``` python
na
```



## Mistakes/Errors

* while doing twopointer with palindrome, you need to device the case when len is odd and even. If it is normal two-pointer thing, I might grow pointer arbitutray but in this palindrome case, i need to move both left and right pointer to outwards, cause palindrome does not make sens when only onse side of list is grown, when the list is previously palindrome.
* Timeout... timeout... hmm.



## Thoughts

* made logd method. it maybe usefull later, better than print. it does not slows you down at the moment.



## Review with Solution

* DP.



## Another attempt

so 'is_pal_str' was causing much trouble, while i didnt had to 'reverse' all the data, but compare just newly added ones, because previous ones are readly tested as palindrome.

"aacabdkacaa"



``` python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def logd(*params):
            # dbg
            # print(*params)
            # rel
            pass
        
        def get_pal_str(test_str):
            return test_str[::-1]
        def is_pal_str(test_str):
            return test_str == get_pal_str(test_str)
        def is_pal_str_simple(test_str):
            return test_str[0] == test_str[-1]
                
        input_str = s
        len_input_str = len(input_str)
        longest_palindron = input_str[:1]
        len_longest_palindron = len(longest_palindron)
        
        if len_input_str < 2:
            return input_str
        
        if is_pal_str(input_str):
            return input_str
        
        
        for idx_startpoint in range(0, len_input_str-1):
            logd('idx_startpoint', idx_startpoint)
            
            ## start grassfire, even len case
            idx_left = idx_startpoint
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len_input_str:
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str(evn)', test_str)
                if is_pal_str_simple(test_str):
                    if len_longest_palindron < len(test_str):
                        longest_palindron = test_str
                        len_longest_palindron = len(longest_palindron)
                        logd('test_str became new longest palin(evn).', test_str)
                else:
                    break
                
                idx_left -= 1
                idx_right += 1
                
            ## start grassfire, odd len case
            idx_left = idx_startpoint - 1
            idx_right = idx_startpoint + 1
            
            while idx_left >= 0 and idx_right+1<=len_input_str:
                test_str = input_str[idx_left:idx_right+1]
                
                logd('test_str(odd)', test_str)
                if is_pal_str_simple(test_str):
                    if len_longest_palindron < len(test_str):
                        longest_palindron = test_str
                        len_longest_palindron = len(longest_palindron)
                        logd('test_str became new longest palin(odd).', test_str)
                else:
                    break
                
                idx_left -= 1
                idx_right += 1
        
        return longest_palindron
                
                
```

accepted.

faster than 91.78%? hmm.

DP worked.



mistakes - was missing condition to break at 

else of 'if is_pal_str_simple(test_str):'



why am i doing mistake for this too often?

need to think break condition more carefully.