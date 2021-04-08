---
title: "메뉴 리뉴얼"
date: 2021-04-07 23:26:00 +0900
categories: prog train
tags: programmers python eng
---
## Log

* from here https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/
* 2021 KAKAO BLIND RECRUITMENT
* 2326
* 2425
* 1h
* solved



## Problem

Link : https://programmers.co.kr/learn/courses/30/lessons/72411



## Before getting into

* 와우.
* hash 로 풀려고 해도 ...
* 아 떠올랐다
* sorted니까 모둔 input대해 조합을 key로 하는 hash를 많이 만들고
* bucket에 넣고
* count 해서 베스트 가져오면 된다. 타이가 있으면 타이 가져오고.



## While processing

``` python
from itertools import combinations
import collections

def logd(*params):
    # dbg
    print(*params)
    # rel
    pass

def solution(orders, course):
    
    hashof2 = collections.defaultdict(int)
    for idx_order, order in enumerate(orders):
        combs = combinations([ch for ch in order], 2)
        for comb in combs:
            comb_str = ''.join(comb)
            # logd('comb_str added : ',comb_str)
            hashof2[comb_str] += 1
        
    hashof2_counted = collections.Counter(hashof2)
    logd('hashof2_counted')
    logd(hashof2_counted)
    
    most_commons_occurence = hashof2_counted.most_common(1)[0][1]
    logd('most_commons_occurence')
    logd(most_commons_occurence)
    list_most_commons = []
    for hkey, hval in hashof2.items():
        if most_commons_occurence == hval:
            list_most_commons.append(hkey)
            
    logd('list_most_commons')
    logd(list_most_commons)
    
    answer = []
    return answer
```

made for hash of two.

0009

will do it for more



``` python
from itertools import combinations
import collections


def logd(*params):
    # dbg
    print(*params)
    # rel
    pass


def solution(orders, course):
    course_sizes = course

    def find_menus_with_sizeof(course_size):
        hashofN = collections.defaultdict(int)
        for idx_order, order in enumerate(orders):
            combs = combinations([ch for ch in order], course_size)
            for comb in combs:
                comb_str = ''.join(comb)
                # logd('comb_str added : ',comb_str)
                hashofN[comb_str] += 1

        hashofN_counted = collections.Counter(hashofN)
        logd('hashof2_counted')
        logd(hashofN_counted)

        most_commons_occurence = -1
        try:
            most_commons_occurence = hashofN_counted.most_common(1)[0][1]
        except:
            pass
        logd('most_commons_occurence')
        logd(most_commons_occurence)
        list_most_commons = []
        for hkey, hval in hashofN.items():
            if most_commons_occurence == hval:
                list_most_commons.append(hkey)

        logd('list_most_commons')
        logd(list_most_commons)

        return list_most_commons

    list_commons = []
    for course_size in course_sizes:
        list_commons += find_menus_with_sizeof(course_size)

    list_commons.sort()

    answer = list_commons
    return answer



```

1 test passed.

possibly conditions.



``` python
from itertools import combinations
import collections


def logd(*params):
    # dbg
    print(*params)
    # rel
    pass


def solution(orders, course):
    course_sizes = course

    def find_menus_with_sizeof(course_size):
        hashofN = collections.defaultdict(int)
        for idx_order, order in enumerate(orders):
            order = ''.join(sorted(list(order))) #case when order not sorted, like ["XYZ", "XWY", "WXA"]
            combs = combinations([ch for ch in order], course_size)
            for comb in combs:
                comb_str = ''.join(comb)
                # logd('comb_str added : ',comb_str)
                hashofN[comb_str] += 1

        hashofN_counted = collections.Counter(hashofN)
        logd('hashof2_counted')
        logd(hashofN_counted)

        most_commons_occurence = -1
        try:
            most_commons_occurence = hashofN_counted.most_common(1)[0][1]
        except:
            pass
        
        ## 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함
        if most_commons_occurence < 2:
            most_commons_occurence = -1
        
        logd('most_commons_occurence')
        logd(most_commons_occurence)
        list_most_commons = []
        for hkey, hval in hashofN.items():
            if most_commons_occurence == hval:
                list_most_commons.append(hkey)

        logd('list_most_commons')
        logd(list_most_commons)

        return list_most_commons

    list_commons = []
    for course_size in course_sizes:
        list_commons += find_menus_with_sizeof(course_size)

    list_commons.sort()

    answer = list_commons
    return answer



```

all passed

1225



``` python

```





## Initially Accepted Solution

``` python
accepted
```



## Mistakes/Errors

* 



## Thoughts

* 



## Review with Solution

* 