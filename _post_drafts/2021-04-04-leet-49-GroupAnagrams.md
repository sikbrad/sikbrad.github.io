---
title: "Group Anagrams"
date: 2021-04-04 22:32:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* (first time using premium)
* sta 22:32:00
* fin 22:54:00 with some searches.



## Problem

Link : https://leetcode.com/problems/group-anagrams/

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



## Before getting into

* should calc list of anagraoms for each elem in list
* use that elem as key for dict, and append to list.
* then make list with only values.



## While processing

``` python
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        word_list_orig = strs
        word_list_rev = [''.join(sorted(word)) for word in word_list_orig]  # sorted will be used as key.
        print(f"rev : ", word_list_rev);
        
        wordpairs = list(zip(word_list_rev, word_list_orig))
        
        anadict = defaultdict(list)
        for wordpair in wordpairs:
            rev = wordpairs[0]
            org = wordpairs[1]
            print('rev',rev)
            print('org',org)
            anadict[rev].append(org)
            
        print("anadict", anadict)
        anadict_vals = list(anadict.values())
        list(anadict_vals)
        
        return anadict_vals
        
        
        
```

* defaultdict with List?
* ahh,,,
* defaultdict(list)
* not List

``` python
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        word_list_orig = strs
        word_list_rev = [''.join(sorted(word)) for word in word_list_orig]  # sorted will be used as key.
        print(f"org : ", word_list_orig);
        print(f"rev : ", word_list_rev);
        
        wordpairs = list(zip(word_list_rev, word_list_orig))
        print(f"wordpairs : ", wordpairs);
        
        anadict = defaultdict(list)
        for wordpair in wordpairs:
            rev = wordpair[0]
            org = wordpair[1]
            print('rev',rev)
            print('org',org)
            anadict[rev].append(org)
            
        print("anadict", anadict)
        anadict_vals = list(anadict.values())
        print('anadict_vals', anadict_vals)
        
        return anadict_vals
        
        
        
```

rev should be changed to 'srt' for sorted.





## Initially Accepted Solution

``` python
first one accepted.
```



## Mistakes/Errors

* mistaken anagram with palendrom.



## Thoughts

* practicesd with defaultdict a little bit. great.



## Review with Solution

* Na