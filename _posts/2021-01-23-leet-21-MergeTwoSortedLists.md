---
title: "21. Merge Two Sorted Lists"
date: 2021-01-23 19:43:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* Start 7:43
* Fin 8:24
* Hmmm



## Problem

Link : https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a **sorted** list. The list should be made by splicing together the nodes of the first two lists.



## Before getting into

* This is not python list but... user defined node list
* Should not iterate thru either of list only, because that can entagle the sorted order.
* Make a list, put it there, return? Will that do?
* Should check input condition later



## While processing

* Errr. this is not list, right?
* first draft

``` python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        
        # make first node
        sta_node = None
        last_node = None
        
        def pop(a,b):
            print(f"pop with a[{a.val}] and b[{b.val}]")
            res = 0
            if a.val > b.val:
                res = a.val
                a = a.next
            else
                res = b.val
                b = b.next
            
            return (a,b,res)
        
        ## prints to end
        def print_nodes(node, name):
            print(f"printing nodes : {name}")
            str_list = ""
            while(True):
                str_list += node.val
                node = node.next
                
        print_nodes(l1, "L1")
        print_nodes(l1, "L2")
        
        iter_cnt = -1
        while(True):            
            iter_cnt += 1
            print_nodes(sta_node, f"MER at {iter_cnt}")
            l1,l2, res = pop(l1,l2)
            
            if l1 == None and l2 == None:
                break
                
            if sta_node == None:
                sta_node = ListNode()
                sta_node.val = res
                last_node = sta_node
            else:
                new_node = ListNode()
                new_node.val = res
                
                last_node.next = new_node
                last_node = new_node
               
            
        print_nodes(sta_node, f"MER at FIN")
        return sta_node
        
        
```

SyntaxError: invalid syntax        ^    else

​	else: typo

TypeError: can only concatenate str (not "int") to str    str_list += node.val Line 30 in print_nodes (Solution.py)

​	not implementing what i've planned

AttributeError: 'NoneType' object has no attribute 'val'    str_list += str(node.val) + " " Line 30 in print_nodes (Solution.py)

​	not implementing what i've planned

​	not having fin condition

AttributeError: 'NoneType' object has no attribute 'val'    print(f"pop with a[{a.val}] and b[{b.val}]") Line 14 in pop (Solution.py)

​	condition position wrong. should be inversed.

	l1,l2, res = pop(l1,l2)
	if l1 == None and l2 == None:
	            break
AttributeError: 'NoneType' object has no attribute 'val'    print(f"pop with a[{a.val}] and b[{b.val}]") Line 14 in pop (Solution.py)

​	condition wrong. eithr can finsh early.

core condition is wrong. it is the otherwise.



Passed first test case

``` python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        
        # make first node
        sta_node = None
        last_node = None
        
        def val_if_exist(a):
            return a.val if a!=None else "NULL"
        
        def pop(a,b):
            print(f"pop with a[{val_if_exist(a)}] and b[{val_if_exist(b)}]")
            
            res = -1
            if a!=None and b!=None:
                if a.val > b.val:
                    res = b.val
                    b = b.next
                else:
                    res = a.val
                    a = a.next
            else:
                if a==None:
                    res = b.val
                    b = b.next
                    
                elif b==None:
                    res = a.val
                    a = a.next
                    
                else:
                    print(f"cannot happen")
                    
            return (a,b,res)
        
        ## prints to end
        def print_nodes(node, name):
            print(f"printing nodes : {name}")
            str_list = ""
            while(True):
                if node == None:
                    break
                str_list += str(node.val) + " "
                node = node.next
            print(f"str_list : {str_list}")
                
        print_nodes(l1, "L1")
        print_nodes(l2, "L2")
        
        iter_cnt = -1
        while(True):            
            iter_cnt += 1
            
            if l1 == None and l2 == None:
                break
                
            print_nodes(sta_node, f"MER at {iter_cnt}")
            l1,l2, res = pop(l1,l2)
            print_nodes(sta_node, f"popped {res}")
                
            if sta_node == None:
                sta_node = ListNode()
                sta_node.val = res
                last_node = sta_node
            else:
                new_node = ListNode()
                new_node.val = res
                
                last_node.next = new_node
                last_node = new_node
               
            
        print_nodes(sta_node, f"MER at FIN")
        return sta_node
        
        
```

Emm



## Initially Accepted Solution

``` python
## accepted without further modification
```



## Mistakes/Errors

* CORE CONDITION WAS WRONG. ADDED LARGER NUMBER INSTEAD OF SMALLER NUMBER.
* Took some time to understanding
* Printed thing, and even made dedicated function for print. It was short and nice, but it was not worth it, since result was enough to guess what was going inside the program...



## Thoughts

* Input is not just string, but it is object constructed with given string. This will make harder for me to make testcase inside python. Meh.



## Review with Solution

* arggggg solution is locked for premium. damn you.