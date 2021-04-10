---
title: "3. Longest Substring Without Repeating Characters"
date: 2021-04-09 00:10:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* got in my book. need to practice two pointer thing and hash.
* initial fin 0035
* fin 0105 



## Problem

Link : https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string `s`, find the length of the **longest substring**without repeating characters.



## Before getting into

* two pointer would be used.
* it uses hash but not sure why. will do list way and hash way again.



## While processing

``` python
import collections
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        input_str = s
        
        longest_str = ""
        for idx_ch1, ch1 in enumerate(input_str):
            
            word_dict = collections.defaultdict(int)
            len_word = 0
            word_for1 = input_str[idx_ch1:]
            for idx_ch2, ch2 in enumerate(word_for1):
                if word_dict[ch2] > 0: # dup
                    break
                else:
                    word_dict[ch2] += 1
                    len_word+=1
            
            longest_for1 = ""
            if len_word > 0:
                longest_for1 = word_for1[:len_word]
                
            logd('idx_ch1:',idx_ch1,' longest_for1:',longest_for1,' len_word:',len_word)
                
            if len(longest_str) < len_word:
                longest_str = longest_for1
                logd('longest_str now:',longest_str)
                
                
        return len(longest_str)
        
```

0035

speed sucks. 6%...

Implemented hash thing fist.

maybe i was getting the actual string, not just length of it.

need to speedup.



``` python
import collections
def logd(*params):
    # dbg
    # print(*params)
    # rel
    pass

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        input_str = s
        input_str_len = len(input_str)
        
        # longest_str = ""
        longest_str_len = 0
        word_dict = collections.defaultdict(int)
        for idx_ch1, ch1 in enumerate(input_str):
            word_dict.clear()
            grow = 0
            ch2 = input_str[idx_ch1]
            while word_dict[ch2] == 0:
                grow += 1
                word_dict[ch2] += 1
                if idx_ch1 + grow > input_str_len-1:
                    break
                ch2 = input_str[idx_ch1 + grow]
            
            if longest_str_len < grow:
                longest_str_len = grow
                
                
        return longest_str_len
        
```

err. still 6%

0046

switching to list



``` python
import collections
def logd(*params):
    # dbg
    # print(*params)
    # rel
    pass

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        input_str = s
        input_str_len = len(input_str)
        
        # longest_str = ""
        longest_str_len = 0
        
        for idx_ch1, ch1 in enumerate(input_str):
            ch1word = ""
            grow = 0
            ch2 = input_str[idx_ch1]
            while ch2 not in ch1word:
                grow += 1
                ch1word += ch2
                if idx_ch1 + grow > input_str_len-1:
                    break
                ch2 = input_str[idx_ch1 + grow]
            
            if longest_str_len < grow:
                longest_str_len = grow
                
                
        return longest_str_len
        
```

low 12%.wow. still.



sliding window, i could use that 'reverse hash' to keep memory to slim

and apply dynamic style wtih 'optimized sliding window' thing. had idea, and didn't know how to. now i know. apply it nex ttime.



## Initially Accepted Solution

``` python
import collections
def logd(*params):
    # dbg
    print(*params)
    # rel
    pass

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        input_str = s
        
        longest_str = ""
        for idx_ch1, ch1 in enumerate(input_str):
            
            word_dict = collections.defaultdict(int)
            len_word = 0
            word_for1 = input_str[idx_ch1:]
            for idx_ch2, ch2 in enumerate(word_for1):
                if word_dict[ch2] > 0: # dup
                    break
                else:
                    word_dict[ch2] += 1
                    len_word+=1
            
            longest_for1 = ""
            if len_word > 0:
                longest_for1 = word_for1[:len_word]
                
            logd('idx_ch1:',idx_ch1,' longest_for1:',longest_for1,' len_word:',len_word)
                
            if len(longest_str) < len_word:
                longest_str = longest_for1
                logd('longest_str now:',longest_str)
                
                
        return len(longest_str)
        
```



## Mistakes/Errors

* above



## Thoughts

* 



## Review with Solution

* Ok