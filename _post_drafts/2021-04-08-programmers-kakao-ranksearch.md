---
title: "Kakao RankSearch"
date: 2021-0408 01:40:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* [코딩테스트 연습](https://programmers.co.kr/learn/challenges)
* [2021 KAKAO BLIND RECRUITMENT](https://programmers.co.kr/learn/challenges)
* 순위 검색



## Problem

Link : https://programmers.co.kr/learn/courses/30/lessons/72412





## Before getting into

* 효율성. 생각 좀 오래함. 0203
* 해시로 만들어서 가속화 하는 정도?



## While processing

``` python
import collections


def solution(info, query):
    
    applicant_info_list = info
    query_list = query
    
    mpp = {
        "java":1,
        "python":2,
        "cpp":3,
        "backend":4,
        "frontend":5,
        "junior":6,
        "senior":7,
        "pizza":8,
        "chicken":9,
        "-":10
    }
    
    tab = collections.defaultdict(list) #column major dict
    for idx_applicant, applicant_info in enumerate(applicant_info_list):
        info_frags = applicant_info.split()
        str_info_frags = info_frags[:-1]
        score = int(info_frags[-1])
        
        mapped = list(map(lambda x:mpp[x], str_info_frags))
        
        tab['langp'].append(mapped[0])
        tab['partg'].append(mapped[1])
        tab['exper'].append(mapped[2])
        tab['soulf'].append(mapped[3])
        tab['score'].append(score)
        
    print('tab', tab)
    
    for query in query_list:
        query_wo_and = query.replace("and","")
        query_frags = query_wo_and.split()
        print('query_frags',query_frags)
        
        string_queries = query_frags[:-1]
        string_queries_coded = list(map(lambda x:mpp[x],string_queries))
        print('string_queries_coded',string_queries_coded)
        num_queryies = int(query_frags[-1])
        query_coded = string_queries_coded + [num_queryies]
        print('query_coded',query_coded)
    
    
    
    
    answer = []
    return answer
```

need to stop here.

0234.









``` python

```





``` python

```



``` python

```





## Initially Accepted Solution

``` python

```



## Mistakes/Errors

* This is not numpy. Dont do dumpy way.
* Dont think about replacing string to coded thing or shit. That is not core question. O asymtotic notation is what matters so focus on them.



## Thoughts

* 



## Review with Solution

* 