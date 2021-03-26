---
title: "226. Invert Binary Tree"
date: 2021-02-04 02:00:00 +0900
categories: prog train
tags: leet python eng
---
## Log

* sta 02:00
* fin 02:23



## Problem

Link : https://leetcode.com/problems/invert-binary-tree/

Invert a binary tree.

**Example:**

Input:

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**Trivia:**
This problem was inspired by [this original tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl):

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.



## Before getting into

* that tweet is funny
* should use recursive.
* will swap following the tree
* if not leaf node, then swap.
  * if bst is single sided, do we have to swap?
  * will it be the case?
* if leafnode, stop.



## While processing

``` python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return _invert(root)
        
    def _invert(root : TreeNode) -> TreeNode:
        if root.left != None and root.right != None:
            root.right, root.left = _invert(root.left), _invert(root.right)
        
```

* python recursive... in class. how? no self?
  * static function in py?

``` python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return Solution._invert(root)
        
    def _invert(root : TreeNode) -> TreeNode:
        if root.left != None and root.right != None:
            root.right, root.left = Solution._invert(root.left), Solution._invert(root.right)
        
```

* got wrong answer. returns nothing.
  * errrr. stupid.



``` python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return Solution._invert(root)
        
    def _invert(root : TreeNode) -> TreeNode:
        print(f"_invert called with {root.val}")
        if root.left != None and root.right != None:
            root.right, root.left = Solution._invert(root.left), Solution._invert(root.right)
            return root
        else:
            return root
        
```

* if submit, will trigger more error cases, i guess.
  * case when list is empty
  * yeah, case when only one child - left only
  * case when right only... there's case too!

``` python

```





## Initially Accepted Solution

``` python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return Solution._invert(root)
        
    def _invert(root : TreeNode) -> TreeNode:
        
        if root == None:
            return root
        
        print(f"_invert called with {root.val}")
        # if root.left != None and root.right != None:
        if root.left != None or root.right != None:
            root.right, root.left = Solution._invert(root.left), Solution._invert(root.right)
            return root
        else:
            return root
        
```



## Mistakes/Errors

* was learning cases of BST.
  * can have only one child, and dont have to fill from left.



## Thoughts

* ok



## Review with Solution

* not much different.