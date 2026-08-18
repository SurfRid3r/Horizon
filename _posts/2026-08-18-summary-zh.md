---
layout: default
title: "Horizon Summary: 2026-08-18 (ZH)"
date: 2026-08-18
lang: zh
---

> 从 63 条内容中筛选出 2 条重要资讯。

---

1. [CVE-2026-42945：NGINX 隐藏 18 年的堆溢出未认证远程代码执行漏洞](#item-1) ⭐️ 9.0/10
2. [Jane Street 7 月亏损 150 亿美元，暴露其对冲基金式的风险押注](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [CVE-2026-42945：NGINX 隐藏 18 年的堆溢出未认证远程代码执行漏洞](https://forum.butian.net/share/4982) ⭐️ 9.0/10

一篇深度技术分析文章披露了 CVE-2026-42945，这是 NGINX rewrite_module 中隐藏 18 年、CVSS 评分高达 9.2 的堆溢出漏洞。文章展示了完整的利用链以实现未认证远程代码执行：利用脚本引擎两阶段处理中 is_args 标志不一致导致的缓冲区分配不足，结合跨请求堆风水覆盖 ngx_pool_t.cleanup 指针，最终触发 system()调用。 NGINX 是全球部署最广泛的 Web 服务器和反向代理之一，CVSS 9.2 的未认证 RCE 漏洞可能威胁海量生产环境系统。该缺陷在被反复审计、久经考验的代码中潜藏 18 年才被发现，说明即使是成熟软件，其冷门代码路径中仍可能埋藏着严重的内存安全漏洞。 漏洞根因在于脚本引擎的长度计算阶段与数据拷贝阶段对 is_args 标志的处理不一致，导致分配的缓冲区小于实际写入的数据量。利用时通过 POST 请求体进行堆喷射（因为 URI 字节无法包含空字节），借助跨请求堆风水将目标 ngx_pool_t 布局到溢出缓冲区相邻位置，并用伪造的 ngx_pool_cleanup_s 结构覆盖其 cleanup 指针，在内存池销毁时触发 system()调用——不过也有独立分析提醒，该漏洞的实际可利用性可能没有表面上那么可怕。

rss · 奇安信攻防社区 · 8月18日 09:33

**背景**: NGINX 的 ngx_http_rewrite_module 通过 PCRE 正则表达式和 rewrite、if、set 等指令处理 URI 重写，其脚本引擎分两个阶段工作：先计算所需缓冲区大小（长度阶段），再将数据拷贝进缓冲区（拷贝阶段）。NGINX 还使用自定义内存池分配器（ngx_pool_t）以提升性能，内存池支持通过 ngx_pool_cleanup_add 注册清理回调，这些回调会在内存池销毁时被自动调用。堆风水（heap feng shui）是一种知名的利用技术，通过精心选择分配尺寸来操纵堆布局，使攻击者可控数据与目标对象相邻，从而将小规模溢出转化为任意代码执行能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/depthfirstdisclosures/nginx-rift">GitHub - DepthFirstDisclosures/Nginx-Rift: NGINX RCE exploits</a></li>
<li><a href="https://www.smolkin.org/blog/2026/05/cve-2026-42945-nginx-rewrite-heap-overflow.html">CVE-2026-42945: The NGINX Heap Overflow That Isn't as Scary ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Heap_feng_shui">Heap feng shui - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">nginx</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">heap-overflow</span></p>

---

<a id="item-2"></a>

## [Jane Street 7 月亏损 150 亿美元，暴露其对冲基金式的风险押注](https://www.bloomberg.com/news/articles/2026-08-17/jane-street-s-15-billion-loss-lays-bare-its-hedge-fund-side?srnd=homepage-asia) ⭐️ 8.0/10

据知情人士透露，Jane Street 在 7 月份亏损了 150 亿美元，这一单月亏损堪比对冲基金历史上最臭名昭著的亏损案例。该公司已将战略扩展至类似对冲基金的长期方向性投资，证实做市商、自营交易员与对冲基金之间的界限已变得模糊不清。 此次亏损揭示了这家全球最大的做市商之一所承担的方向性风险已远超传统华尔街中间商的范畴，引发监管机构、交易对手方以及整个市场应如何评估这类跨角色经营公司的质疑。这可能促使监管层更严格地审视自营交易公司的风险状况，并可能重塑人们对现代市场结构的理解。 尽管亏损巨大，Jane Street 今年迄今已创造超过 400 亿美元的净交易收入，超过了其 2025 年全年的收入。150 亿美元的规模使这次 7 月亏损跻身交易公司历史上最大单月亏损之列，但该公司的整体盈利能力依然惊人。

telegram · Marcoview666 · 8月18日 06:05

**背景**: Jane Street 是一家量化交易公司，也是全球最大的做市商之一，通过持续报出买卖价格、赚取买卖价差来提供流动性，业务以 ETF 为主，同时涵盖股票、债券、期权、大宗商品和加密货币。传统上，做市被视为风险相对较低的业务，因为利润来自价差而非押注价格走向；而对冲基金则进行方向性交易，通过押注资产价格的未来涨跌来获利。Jane Street 已建立起类似对冲基金的方向性敞口这一事实，挑战了大型做市商基本是市场中性的中间商这一普遍假设。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.janestreet.com/what-we-do/overview/">Overview :: Jane Street</a></li>
<li><a href="https://www.geckomode.ai/blog/jane-street-market-maker-house">Jane Street : How a Secretive Firm Made $39.6 Billion Being the House</a></li>
<li><a href="https://dowidth.com/trading/directional-trading-vs-market-making">Market Making vs Directional Trading in Trading - dowidth.com</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">quantitative-finance</span> <span class="tag-badge">hedge-funds</span> <span class="tag-badge">jane-street</span> <span class="tag-badge">risk-management</span> <span class="tag-badge">market-structure</span></p>

---