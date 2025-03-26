---
title: Page performance調査
date: 2025-03-26
layout: "post"
tags: post
---

### PageSpeed Insights のユーザー補助が通らない

リンクは色に依存して識別可能です。という項目がなかなか基準に満たなかった

### 解決法

オンライン上にあるコントラストチェッカーを用いて値を調節した

```diff
- #4c1769
+ #2400b3
```
