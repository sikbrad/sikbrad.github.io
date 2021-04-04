---
title: "PROBLEM_NAME_HERE"
date: 2021-01-22 07:00:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* list thing
* started 9:55
* fin 22:17 after some studies.
* defaultdict thing
* started 22:19
* finished 22:27 with some studies.



## Problem

Link : https://leetcode.com/problems/most-common-word/

Given a string `paragraph` and a string array of the banned words `banned`, return *the most frequent word that is not banned*. It is **guaranteed** there is **at least one word** that is not banned, and that the answer is **unique**.

The words in `paragraph` are **case-insensitive** and the answer should be returned in **lowercase**.



## Before getting into

* I know solution. Im practicing to use the counter.
* gotta use this counter for list and dict.
* will get list of words by using split, and make list or dict, and will use count.
* defaultDict will be used too.



## While processing

### list way

``` python
from collections import Counter
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.split("[!?',;. ]", paragraph.lower()) 
                 if word not in banned and word]
        words_counter = Counter(words)
        print(words)
        print(words_counter)
        mcommon_list = words_counter.most_common(1) # list
        print(f"most common : {mcommon_list}")
        mcommon_tup = mcommon_list[0]        
        return mcommon_tup[0]        
        
```

!?\'\",;.



### dict way

``` python
from collections import Counter, defaultdict
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.split("[!?',;. ]", paragraph.lower()) 
                 if word not in banned and word]
        
        word_occurences = defaultdict(int)
        for word in words:
            word_occurences[word] += 1
        
        print(word_occurences)
        
        ## should get dict with most largest val
        key_max = max(word_occurences, key=word_occurences.get)
        print("max key-val :", key_max, word_occurences[key_max])
        
        return key_max
        
```



``` python

```





## Initially Accepted Solution

``` python
accepted on the first fly
```



## Mistakes/Errors

* split thing.



## Thoughts

* re.split and re.compile thing.
* and split is for only one character sequence. not multiple of it like the behaviour in cpp.



## Review with Solution

* Na