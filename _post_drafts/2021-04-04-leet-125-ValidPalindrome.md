---
title: "Valid Palindrome"
date: 2021-04-04 09:35:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* practicing easy one
* Started 9:35
* Finished 9:52 with studying



## Problem

Link : https://leetcode.com/problems/valid-palindrome/

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

 

**Constraints:**

- `1 <= s.length <= 2 * 105`
- `s` consists only of printable ASCII characters.



## Before getting into

* will filter ascii chars
* reverse it and comapre it



## While processing

``` python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = [c.lower() for c in s if c.isalpha()]
        s_rev = s[::-1]
        return s==s_rev
```

was wrong. test case failed. it had to deel with all ascii chars



## Initially Accepted Solution

``` python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = [c.lower() for c in s if c.isalnum()]
        s_rev = s[::-1]
        return s==s_rev
```



## Mistakes/Errors

* learned isalnum



## Thoughts

* na



## Review with Solution

* na