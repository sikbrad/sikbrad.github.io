---
title: "Code snippets 1"
date: 2021-04-04 21:50:00 +0900
categories: prog train
tags: leet python eng
---
# String / Char

### getting only ascii chars

https://stackoverflow.com/questions/35889505/check-that-a-string-contains-only-ascii-characters/35895857

``` python
all(ord(char) < 128 for char in 'string')
```

## *isalpha* and such

https://careerkarma.com/blog/python-isalpha-isnumeric-isalnum/

*isalpha*, *isnumeric*, *isalnum*

### split

python splite chars..

default separator is any whitespace.

https://www.w3schools.com/python/ref_string_split.asp

https://docs.python.org/3/library/stdtypes.html?highlight=split#str.split

# Algo



# Utils

### print util

use it for testing. code snippet for later.

``` python
def logd(*params):
    is_print = True
    if is_print:
        print(*params)
```

or, this should work faster..

``` python
def logd(*params):
        # dbg
        # print(*params)
        # rel
        pass
```



# Datastructures

### Listnodes

``` python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

### BinaryTree

``` python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
```



