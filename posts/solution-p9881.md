---
title: P9881 [EC Final 2021] Elden Ring 题解
description: 洛谷 P9881 题解
category: OI
date: 2024-10-03 16:46:54
---

## 题意

有一个 $n$ 个节点 $m$ 条边的无向图，每个节点 $i$ 上有一个初始等级为 $l_i$ 的 boss。玩家开始时位于 1 号节点，初始等级为 $l_1$。（保证 1 号节点没有 boss）

每天开始后，玩家从 1 号节点开始，经过**没有 boss** 的节点到达一个有 boss 的节点 $i$，并击杀节点 $i$ 的 boss。玩家等级必须大于 boss 的等级才能将 boss 击杀，且每天只能击杀一个 boss。

每击杀一个 boss，玩家的等级会增加 $A$。每天开始时，所有**仍存在**的 boss 等级增加 $B$。输出至少需要多少天才能击杀节点 $n$ 的 boss 并通关，如果不能通关输出 -1。

## 题解

下文下标统一从 $0$ 开始。

由于怪物是一天开始时升级，为了方便不妨令 $l_i=l_i+B\ (1\le i < n)$，这样可以转化为在一天结束时升级。同时令 $w=l_0$。

---

首先我们考虑 $A=B$ 的情况，容易发现此时怪物的等级与玩家的等级之差不变，于是把大于等于玩家等级的节点删掉，求最短路即可。

---

其次是 $A<B$ 的情况，此时怪物的等级增长较快，玩家等级增长慢。此时玩家的策略一定是尽早击杀每个怪物，所以我们设计一个上限 $\mathrm{limit}_i$，表示如果玩家每天都可以升级，第 $i$ 个怪物可以被击杀的时间区间 $[1, \mathrm{limit}_i]$。

- 如果 $w\le l_i$，那么玩家无论如何也不能击杀该怪物，即区间为空集，可以令 $\mathrm{limit}_i=0$。
- 如果 $w>l_i$，那么满足 $w+(t-1)\times A>l_i+(t-1)\times B$ 的最大的 $t$ 就是 $\mathrm{limit}_i$。整理得 $\mathrm{limit}_i=\lfloor\frac{w-l_i+1}{B-A}\rfloor+1$。

我们限制每个节点的距离小于等于 $\mathrm{limit}_i$，求最短路即可。

---

最后是 $A>B$ 的情况，此时怪物可被击杀的时间区间是一个后缀区间，设为 $[\mathrm{limit}_i,+\infty)$。

- 如果 $w\le l_i$，那么满足 $w+(t-1)\times A>l_i+(t-1)\times B$ 的最小的 $t$ 就是 $\mathrm{limit}_i$，整理得 $\mathrm{limit}_i=\lfloor\frac{l_i-w}{A-B}\rfloor+2$。
- 如果 $w>l_i$，那么这个怪物任意时刻都能被击杀。令 $\mathrm{limit}_i=1$。

我们限制每个节点的距离大于等于 $\mathrm{limit}_i$，此时出现了问题，如果击杀一个怪物时等级不够，需要击杀其他等级低的怪升级，如何表示？

我们想到如果等级不够，可以将该节点的 $\mathrm{dist}_i$ 暂时记为 $\mathrm{limit}_i$，同时使用优先队列进行 BFS，击杀其他可以早击杀的怪（因为 $\mathrm{dist}_i$ 就相当于我们击杀某个怪的最短时间，所以使用优先队列可以让我们先取出容易击杀的怪），最后回来检查该节点的假设是否合法，不合法重置为 $+\infty$ 即可。

总时间复杂度 $O(n\log n)$。

## 代码

``` cpp
namespace hellolin {
static constexpr int INF = 1e9;
void solve() {
  int n, m, a, b;
  io.read(n, m, a, b);

  vector<vector<int>> g(n);
  for (int i = 0, u, v; i < m; ++i) {
    io.read(u, v);
    --u, --v;
    g[u].push_back(v);
    g[v].push_back(u);
  }

  vector<int> l(n);
  for (int &i : l) {
    io.read(i);
    i += b;
  }
  int w = l[0] - b;

  if (a <= b) {
    // 这里将等于和小于两种情况合并，他们的代码相似，把 limit 置 0 相当于删除某个节点
    vector<int> limit(n), dist(n, INF);
    dist[0] = 0;
    for (int i = 1; i < n; ++i) {
      if (a < b) {
        limit[i] = l[i] >= w ? 0 : ((w - l[i] - 1) / (b - a) + 1);
      } else {
        limit[i] = l[i] >= w ? 0 : INF;
      }
    }

    queue<int> q;
    q.push(0);
    while (!q.empty()) {
      int u = q.front();
      q.pop();
      for (const int &v : g[u]) {
        if (dist[u] + 1 <= limit[v] and chmin(dist[v], dist[u] + 1)) {
          q.push(v);
        }
      }
    }

    io.writeln(dist[n - 1] == INF ? -1 : dist[n - 1]);
  } else {
    vector<int> limit(n), dist(n, INF);
    dist[0] = 0;
    for (int i = 1; i < n; ++i) {
      limit[i] = w > l[i] ? 1 : ((l[i] - w) / (a - b) + 2);
    }

    using state = pair<int, int>;
    priority_queue<state, vector<state>, greater<state>> q;
    q.emplace(0, 0);

    int current = 0;
    while (!q.empty()) {
      auto [_, u] = q.top();
      q.pop();
      if (current < dist[u]) {
        // 记录总共打了多少怪，如果升级不够就重置这个节点
        dist[u] = INF;
        continue;
      }
      ++current;
      for (const int &v : g[u]) {
        if (chmin(dist[v], max(dist[u] + 1, limit[v]))) {
          // 这里取 min 时同时取 limit，就是假设可以打其他怪升级后返回打这个怪
          q.emplace(dist[v], v);
        }
      }
    }

    io.writeln(dist[n - 1] == INF ? -1 : dist[n - 1]);
  }
}
void main() {
  int t;
  for (io.read(t); t--;)
    solve();
}
} // namespace hellolin
```
