---
layout: default
title: "Horizon Summary: 2026-08-18 (EN)"
date: 2026-08-18
lang: en
---

> From 63 items, 2 important content pieces were selected

---

1. [CVE-2026-42945: 18-Year-Old NGINX Heap Overflow Enables Unauthenticated RCE](#item-1) ⭐️ 9.0/10
2. [Jane Street's $15 Billion July Loss Exposes Its Hedge Fund-Like Risk-Taking](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [CVE-2026-42945: 18-Year-Old NGINX Heap Overflow Enables Unauthenticated RCE](https://forum.butian.net/share/4982) ⭐️ 9.0/10

A deep technical write-up was published on CVE-2026-42945, a heap overflow in NGINX's rewrite_module rated CVSS 9.2 that went undetected for 18 years. The analysis demonstrates a complete exploit chain for unauthenticated remote code execution, combining an is_args flag inconsistency in the script engine's two-phase processing with cross-request heap feng shui to overwrite the ngx_pool_t.cleanup pointer and invoke system(). NGINX is one of the most widely deployed web servers and reverse proxies on the internet, so an unauthenticated RCE with CVSS 9.2 could threaten a huge number of production systems worldwide. The fact that the flaw survived 18 years in such heavily scrutinized, battle-tested code shows that even mature software can harbor critical memory-safety bugs in rarely-exercised code paths. The root cause is an inconsistency in how the is_args flag is handled between the script engine's length pass and copy pass, causing the allocated buffer to be smaller than the data actually written into it. Exploitation sprays heap objects via POST bodies (since URI bytes cannot contain null bytes), uses cross-request heap feng shui to place a victim ngx_pool_t adjacent to the overflow, and overwrites its cleanup pointer with a fake ngx_pool_cleanup_s that calls system() upon pool destruction — though at least one independent analysis cautions the bug may be less scary in practice than it first appears.

rss · 奇安信攻防社区 · Aug 18, 09:33

**Background**: NGINX's ngx_http_rewrite_module handles URI rewriting through PCRE regular expressions and directives like rewrite, if, and set; its script engine works in two passes, first computing the required buffer size (the length pass) and then copying data into that buffer (the copy pass). NGINX also uses a custom memory pool allocator (ngx_pool_t) for performance, which supports registered cleanup handlers (added via ngx_pool_cleanup_add) that are automatically invoked when the pool is destroyed. Heap feng shui is a well-known exploitation technique that manipulates heap layout through carefully chosen allocation sizes, placing attacker-controlled data adjacent to a target object so that even a small overflow can be turned into arbitrary code execution.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/depthfirstdisclosures/nginx-rift">GitHub - DepthFirstDisclosures/Nginx-Rift: NGINX RCE exploits</a></li>
<li><a href="https://www.smolkin.org/blog/2026/05/cve-2026-42945-nginx-rewrite-heap-overflow.html">CVE-2026-42945: The NGINX Heap Overflow That Isn't as Scary ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Heap_feng_shui">Heap feng shui - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">security</span> <span class="tag-badge">nginx</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">heap-overflow</span></p>

---

<a id="item-2"></a>

## [Jane Street's $15 Billion July Loss Exposes Its Hedge Fund-Like Risk-Taking](https://www.bloomberg.com/news/articles/2026-08-17/jane-street-s-15-billion-loss-lays-bare-its-hedge-fund-side?srnd=homepage-asia) ⭐️ 8.0/10

Jane Street reportedly lost $15 billion in July, a single-month loss comparable to the most infamous failures in hedge fund history. According to people familiar with the matter, the firm has expanded its strategy to include hedge fund-like long-term directional investments, confirming that the boundaries between market makers, proprietary traders, and hedge funds have become blurred. The loss reveals that one of the world's largest market makers has taken on directional risk far beyond that of a traditional Wall Street intermediary, raising questions about how regulators, counterparties, and the broader market should assess firms that straddle these roles. It may prompt closer scrutiny of proprietary trading firms' risk profiles and could reshape understanding of modern market structure. Despite the massive loss, Jane Street has generated more than $40 billion in net trading revenue year-to-date, already exceeding its full-year 2025 revenue. The $15 billion magnitude places the July loss among the largest single-month losses ever recorded by a trading firm, yet the firm's overall profitability remains extraordinary.

telegram · Marcoview666 · Aug 18, 06:05

**Background**: Jane Street is a quantitative trading firm and one of the world's largest market makers, providing liquidity by continuously quoting buy and sell prices and earning the bid-ask spread, especially in ETFs, as well as equities, bonds, options, commodities, and crypto. Traditionally, market making is viewed as relatively low-risk because profits come from the spread rather than from betting on price direction, whereas hedge funds take directional positions that speculate on future price movements. The revelation that Jane Street has built up hedge fund-like directional exposure challenges the common assumption that major market makers are largely neutral intermediaries in the market.

<details><summary>References</summary>
<ul>
<li><a href="https://www.janestreet.com/what-we-do/overview/">Overview :: Jane Street</a></li>
<li><a href="https://www.geckomode.ai/blog/jane-street-market-maker-house">Jane Street : How a Secretive Firm Made $39.6 Billion Being the House</a></li>
<li><a href="https://dowidth.com/trading/directional-trading-vs-market-making">Market Making vs Directional Trading in Trading - dowidth.com</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">Tags:</span> <span class="tag-badge">quantitative-finance</span> <span class="tag-badge">hedge-funds</span> <span class="tag-badge">jane-street</span> <span class="tag-badge">risk-management</span> <span class="tag-badge">market-structure</span></p>

---