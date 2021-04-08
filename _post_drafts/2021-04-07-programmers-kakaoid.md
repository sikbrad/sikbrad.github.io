---
title: "신규 아이디 추천"
date: 2021-04-07 22:56:00 +0900
categories: prog train
tags: programmers python eng
---
## Log

* from here https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/
* 2021 KAKAO BLIND RECRUITMENT 신규 아이디 추천
* 2256
* 2324
* Hmmm took some time
* Need to familiarize with regex more.
* Conditions should have been made with functions, so that i can use that again in sequence.



## Problem

Link : https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3



## Before getting into

* 



## While processing

``` python
import re
def solution(new_id):
    
    # step1
    idstr = new_id.lower()
    print(f"S1 : ${idstr}")
    
    # step 2
    patt = r"[a-z0-9-_.]"
    idstr = ''.join([ch for ch in idstr if re.match(patt, ch)])
    print(f"S2 : ${idstr}")
    
    # 3
    idstr = re.sub("[\.]+", ".", idstr)
    print(f"S3 : ${idstr}")
    
    # 4
    idstr = re.sub("^[\.]", "", idstr)
    idstr = re.sub("[\.]$", "", idstr)
    print(f"S4 : ${idstr}")
    
    # 5
    if not idstr:
        idstr = ''.join(['a']*len(new_id))
    print(f"S5 : ${idstr}")
        
    # 6
    if len(idstr) >= 16:
        idstr = idstr[:15]
    print(f"S6 : ${idstr}")
    
    ## enforce #3 again
    idstr = re.sub("^[\.]", "", idstr)
    idstr = re.sub("[\.]$", "", idstr)
    print(f"S4 : ${idstr}")
    
    # 7
    if len(idstr) <= 2:
        while len(idstr) < 3:
            idstr += idstr[-1]
    print(f"S7 : ${idstr}")
    
    answer = idstr
    return answer
```



``` python

```





``` python

```



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