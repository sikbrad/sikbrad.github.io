---
title: "70. Climbing Stairs"
date: 2021-01-24 02:00:00 +0900
categories: prog train
tags: leet python eng failed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

---
## Log

* Sta 2:11



## Problem

Link : https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?



## Before getting into

* Maybe there's analytic solution. If i expand from 2,3, .. .and so on, maybe i can find pattern, and derive the function. Maybe odd number and even number's solutiion may different.
* But lets think computing problem first. Cause think that is more harder.
* Decision Tree? Recursive?
* Random is stupid.
* Dont think about what step methods that i can make. Think about remaining solution to reach the goal.
* What if i can climb 1,2, and even more? like 3 and 4?
* Maybe it is related to binary. MOD thing.
* Non-analytic solultion.
  * Lets say n=5
  * then the maximum trial it can get is 5(1+1+..)
  * but in each trial, it can be other than one
  * if we cherry pick the case when it becomes target number, that is 'path'.
  * Almost brute force..
  * Errrrr... no.... it will crash for sure...
* Try analytic
  * max_stride =2
  * target = N
  * if 1 -> 1 : (1)
  * if 2 -> 2 : (1,1) / (2)
  * if 3 -> 3 : (1,1,1) / (1,2) / (2,1)
  * if 4 -> 5 : (1,1,1,1) / (1,1,2) / (1,2,1) / (2,1,1) / (2, 2)
  * ways to 'merge' ones may be the key.
  * AM 2:40 shit
  * Lets sort
    * if 1 -> 1 : (1)
    * if 2 -> 2 : (1,1) // (2) : 1 + 0
    * if 3 -> 3 : (1,1,1) // (2,1) / (1,2) : 2 + 0 : n-1
    * if 4 -> 5 : (1,1,1,1) // (2,1,1) / (1,2,1) / (1,1,2) // (2, 2) : 3+1
    * if 5 -> 8 : (1,1,1,1,1) // (2,1,1,1) / (1,2,1,1) / (1,1,2,1) / (1,1,1,2) // (2,2,1) / (2,1,2) / (1,2,2) : 4 + 3
* Err shit
* How can i make 'paths'?
* Give up at AM2:53



## While processing

``` python

```



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

* ERRRRR
* Should study more.



## Thoughts

* 



## Review with Solution

* Brute force

  ``` python
  class Solution:
      def climbStairs(self, n: int) -> int:
          return self.climb_stairs(0, n)
          
      def climb_stairs(self, i, n) -> int:
          if i > n:
              return 0
          
          if i == n:
              return 1
          
          return self.climb_stairs(i+1, n) + self.climb_stairs(i+2, n)
  ```

  * succeeds testing
  * submission fails -> time limit exceed error

* Brute force with list

  ``` python
  class Solution:
      def climbStairs(self, n: int) -> int:
          memo = [-1] * n
          return self.climb_stairs(0, n, memo)
          
      def climb_stairs(self, i, n, memo) -> int:
          if i > n:
              return 0
          
          if i == n:
              return 1
          
          if memo[i] > 0:
              return memo[i]
          
          memo[i] = self.climb_stairs(i+1, n, memo) + self.climb_stairs(i+2, n, memo)
          return memo[i]
  ```

  * passes test.



* DP

  ``` python
  class Solution:
      def climbStairs(self, n: int) -> int:
          if n == 1:
              return 1
          if n == 2:
              return 2
          
          dp_list = [-1] * (n+1)
          dp_list[0] = 0
          dp_list[1] = 1
          dp_list[2] = 2
          
          for i in range(3, n+1):
              print(f"{i} <-- {dp_list[i-1]}({i-1}) + {dp_list[i-2]}({i-2})")
              dp_list[i] = dp_list[i-1] + dp_list[i-2]
              
          return dp_list[n]
  ```



* More study needed