---
title: "121. Best Time to Buy and Sell Stock"
date: 2021-01-23 21:54:00 +0900
categories: prog train
tags: leet python eng failed
---
## Log

* sta



## Problem

Link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array `prices` where `prices[i]`is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.



## Before getting into

* it is not just finding min and max. see example 1.
* walk the array. find the min, find the max.
  * if cannot find larger val, return 0
  * if smaller than min found, then it is new min
  * if larger than max found, then it is new max



## While processing

``` python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = pow(10,5)
        max_price = -1
        
        for idx_price, price in enumerate(prices):
            if price < min_price:
                min_price = price
               
            if min_price < price:
                if max_price > price:
                    max_price = price
                
        revenue = max_price - min_price
        if revenue<=0:
            return 0
        else:
            return revenue
```

no compile error

wrong answer?

condition thing was wrong

```python
           if max_price > price:
                max_price = price
```
test fail

``` python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = pow(10,5)
        max_price = -1
        
        for idx_price, price in enumerate(prices):
            if price < min_price:
                min_price = price
               
            if min_price < price:
                if price > max_price:
                    max_price = price
                
        revenue = max_price - min_price
        if revenue<=0:
            return 0
        else:
            return revenue
```

for [2,4,1]

What

ok.. min was changed after 'sell'.



revenue 



submitted again.

``` python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = pow(10,5)
        max_price = -1
        
        revenue = 0
        for idx_price, price in enumerate(prices):
            print(f"proc : {price}")
            if price < min_price:
                min_price = price
               
            if min_price < price:
                if price > max_price:
                    max_price = price
                    revenue = max_price - min_price
                
        if revenue<=0:
            return 0
        else:
            return revenue
```



Failed here

[2,1,2,1,0,1,2]

My algo only works once. that is problem.



i think my approach has problem.

thought too much of cost maybe.



change

if price > max_price: -> if price >= max_price: will do

case when max price not changes but price changes...



what fail again?

``` python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = pow(10,5)
        max_price = -1
        
        revenue = 0
        for idx_price, price in enumerate(prices):
            print(f"proc : {price}")
            if price < min_price:
                print(f"updating minima : {min_price} -> {price}")
                min_price = price
               
            if min_price < price:
                if price > max_price:
                    print(f"updating maxima : {max_price} -> {price}")
                    max_price = price
                    
                if price >= max_price:                
                    new_revenue = max_price - min_price
                    print(f"updating revenue : {revenue} -> {new_revenue}")
                    revenue = new_revenue
                    
        if revenue<=0:
            return 0
        else:
            return revenue
```

ahhh case when new val is not maximum but have max revenue...



Fuck what did i missed



If it was not sequential, i could just go over upper trialgle of matrix and find maximum.

yeah lets do that. N^2 sol...

Submitted

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = pow(10,5)
        max_price = -1
        
        if len(prices) == 1:
            return 0
        
        max_revenue = 0
        for idx_price, price in enumerate(prices):    
            max_revenue_for_substet = 0
            for idx2, price2 in enumerate(prices[idx_price+1:]):
                revenue = price2 - price
                max_revenue_for_substet = revenue if revenue > max_revenue_for_substet else max_revenue_for_substet
            
            max_revenue = max_revenue_for_substet if max_revenue_for_substet > max_revenue else max_revenue
                
                    
        return max_revenue
```



what??

Time Limit Exceeded

O(N^2) must be the problem.



Almost hitting 1h.

Fin. Failed. Lets see the solution. 22:44.



## Initially Accepted Solution

``` python
# NA
```



## Mistakes/Errors

* 



## Thoughts

* Should think more testcases, by myself, before submission.
* Making it work not works here. Time limit... Should think of 'one path' algo anyways.



## Review with Solution

Failed. So...

That works??

``` python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0]
        mx_profit = 0
    
        for i in range(1,len(prices)):
            profit = prices[i]-buy

            if profit>mx_profit:
                mx_profit = profit

            if buy>prices[i]:
                buy = prices[i]

        return mx_profit
```

Checking max_price thing was nonsense. With all that, i am getting revenue. So, i only had to compare revenue. So, in other words, condition was duplicated.

Ahh that works...

BUY comes first, and calculating profit comes second.

Not sure how to pull out that algo if i counter this agian.

Think for a day and come here again...

