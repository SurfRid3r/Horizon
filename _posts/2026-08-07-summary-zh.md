---
layout: default
title: "Horizon Summary: 2026-08-07 (ZH)"
date: 2026-08-07
lang: zh
---

> 从 41 条内容中筛选出 18 条重要资讯。

---

1. [AMD 收购 Taalas，将 AI 模型直接刻入硅芯片](#item-1) ⭐️ 9.0/10
2. [Akamai 披露“自带 EDR”木马攻击技术](#item-2) ⭐️ 9.0/10
3. [Cloudflare workerd 运行时发现五个可突破 V8 隔离机制的漏洞](#item-3) ⭐️ 9.0/10
4. [JetBrains TeamCity 严重未授权远程代码执行漏洞（CVE-2026-63077）](#item-4) ⭐️ 9.0/10
5. [DeepSeek V4 Flash 发布，以卓越的编程性价比备受开发者赞誉](#item-5) ⭐️ 8.0/10
6. [新墨西哥州法院命令 Meta 因损害儿童心理健康赔偿 5.67 亿美元](#item-6) ⭐️ 8.0/10
7. [将 PostgreSQL 分析查询速度提升 300 倍](#item-7) ⭐️ 8.0/10
8. [在 150 万页网站上对抗恶性爬虫的经验教训](#item-8) ⭐️ 8.0/10
9. [PortSwigger 揭示网页邮箱客户端中的 CSS 消毒缺陷](#item-9) ⭐️ 8.0/10
10. [Cloudflare 将 Workers AI 与 AI Gateway 统一为单一控制平面](#item-10) ⭐️ 8.0/10
11. [AI 编程代理被利用建立反向隧道和 LaunchAgents](#item-11) ⭐️ 8.0/10
12. [ChainDrop：利用以太坊智能合约进行命令控制的自传播 npm 蠕虫](#item-12) ⭐️ 8.0/10
13. [OpenAI 首次发布 ChatGPT 全球国别使用数据](#item-13) ⭐️ 8.0/10
14. [美国调查中国 AI 企业海外远程获取英伟达芯片渠道](#item-14) ⭐️ 8.0/10
15. [SK 海力士宣布推出采用晶圆键合技术的 375 层 V10 NAND](#item-15) ⭐️ 8.0/10
16. [sub2api 曝 OAuth 高危漏洞，仅凭邮箱即可接管账户](#item-16) ⭐️ 8.0/10
17. [亚马逊整顿内部 CPU 浪费，智能体 AI 推高算力需求](#item-17) ⭐️ 8.0/10
18. [爆料称 OpenAI 计划下周发布全新大模型 Astra](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [AMD 收购 Taalas，将 AI 模型直接刻入硅芯片](https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344) ⭐️ 9.0/10

AMD 收购了总部位于多伦多的 AI 芯片初创公司 Taalas，该公司专门将特定的 AI 模型直接硬编码到硅芯片中。这种方法在物理上将模型的权重编码到芯片电路中，与通用 GPU 相比，提供了前所未有的推理速度和能效。 此次收购代表了 AI 硬件领域的一次潜在范式转变，从通用计算转向用于模型推理的完全特定应用的硅芯片。它可能大幅降低推理成本和功耗，使“足够好”的 AI 模型能够几乎以零运营成本直接嵌入到汽车和家电等日常设备中。 Taalas 展示了一款运行 Llama 3.1 8B 的芯片，速度达到每秒 17,000 个 tokens，远远超过了 NVIDIA H200 等通用 GPU（后者大约为每秒 2,000 个 tokens）。其局限性在于该芯片被永久锁定在一个特定的模型上；对模型的任何更新或更改都需要设计和制造新的物理芯片。

hackernews · itvision · 8月6日 20:23 · [社区讨论](https://news.ycombinator.com/item?id=49201970)

**背景**: 传统的 AI 加速器（如 GPU）是通用处理器，需要从内存中加载神经网络权重，这会消耗时间和能量。“将模型刻入硅片”意味着构建一个芯片，其物理电路布局直接体现特定训练模型的神经网络，从而消除了从内存中获取权重的需要。虽然这极大地提高了速度和效率，但它牺牲了在同一硬件上运行不同模型的灵活性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://theashishmaurya.medium.com/taalas-the-startup-that-prints-ai-models-directly-onto-silicon-33b181690575">Taalas : The Startup That Prints AI Models Directly Onto... | Medium</a></li>
<li><a href="https://geekoven.net/tech-future/why-chipmakers-want-to-etch-ai-models-directly-into-silicon/">Why chipmakers want to etch AI models directly into silicon</a></li>
<li><a href="https://qz.com/amd-acquires-taalas-ai-inference-chip-startup-080726">AMD acquires Taalas AI inference chip startup</a></li>

</ul>
</details>

**社区讨论**: 社区认为这可能会让用于边缘设备的“足够好”的 AI 模型变得商品化，就像 4K 视频解码变得便宜且无处不在一样。虽然有些人看到了快速被淘汰的风险，但另一些人认为，极高的推理速度将带来全新的用户体验范式，并降低错误的成本，从而允许更快的迭代。评论者还感到惊讶的是，像 OpenAI 或 Anthropic 这样的大型 AI 实验室没有率先追求这一点，以建立抵御竞争对手的硬件护城河。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AMD</span> <span class="tag-badge">AI Inference</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Acquisition</span> <span class="tag-badge">Silicon</span></p>

---

<a id="item-2"></a>

## [Akamai 披露“自带 EDR”木马攻击技术](https://www.akamai.com/blog/security-research/2026/aug/bring-your-own-edr-turn-commercial-edr-trojan-horse) ⭐️ 9.0/10

Akamai 安全研究人员发现了一种名为“自带 EDR”的新型攻击技术，该技术展示了攻击者如何将商业端点检测与响应（EDR）系统武器化，从而有效地将防御软件转化为木马。该研究详细描述了一种范式转变，即旨在保护企业端点的工具可能会被操纵以实施恶意活动。 这一发现意义重大，因为 EDR 系统被广泛视为企业端点的最后一道防线，将其武器化代表着对基础安全基础设施信任的重大破坏。它迫使网络安全行业重新评估旨在防御高级威胁的工具本身所固有的风险和潜在漏洞。 该研究强调了攻击者如何利用 EDR 代理通常拥有的特权级和内核级访问权限来保持持久性并逃避检测。虽然完整的报告详细说明了具体的技术利用方式，但核心漏洞在于这些商业工具正常运行所必须依赖的隐式信任和广泛的系统权限。

rss · akamai Blog · 8月7日 13:00

**背景**: 端点检测与响应（EDR）是一项基础的网络安全技术，可持续监控端点设备（例如笔记本电脑、服务器和工作站），以实时检测、调查和防御高级威胁。EDR 解决方案通常部署在操作系统内核级别以监控底层活动，这就要求它们具备极高的系统权限。以往针对这类系统的攻击趋势包括“自带易受攻击的驱动程序”（BYOVD）技术，旨在完全禁用 EDR。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Endpoint_detection_and_response">Endpoint detection and response - Wikipedia</a></li>
<li><a href="https://www.vectra.ai/topics/ndr-vs-edr">NDR vs EDR : Evidence-based decision guide for 2026</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">EDR</span> <span class="tag-badge">Security Research</span> <span class="tag-badge">Offensive Security</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-3"></a>

## [Cloudflare workerd 运行时发现五个可突破 V8 隔离机制的漏洞](https://research.checkpoint.com/2026/when-agentic-glue-melts/) ⭐️ 9.0/10

Check Point Research 在 Cloudflare workerd 运行时的原生 C++ "胶水"代码中发现了五个内存损坏漏洞，成功突破了支撑 Cloudflare Code Mode 和 Cloudflare Workers 的 V8 沙箱隔离机制。研究人员最初的目标是攻击 Code Mode，但由于两者依赖同一运行时，发现这些漏洞同样影响 Workers。 这些漏洞暴露了一个被广泛使用的云基础设施平台中的关键攻击面，该平台执行着来自全球数百万开发者的不受信任代码。突破 V8 隔离意味着恶意攻击者可能逃逸沙箱并危及宿主系统，威胁所有基于 Cloudflare Workers 构建的无服务器应用的完整性。 这些漏洞专门针对连接 V8 JavaScript 引擎与 workerd 宿主环境的 C++ 胶水代码，而非 V8 引擎本身的缺陷。这类漏洞尤其危险，因为胶水代码运行在与 V8 沙箱相同的信任边界内，一旦被破坏便可直接绕过沙箱设计的隔离保障。

rss · Check Point Research · 8月6日 22:20

**背景**: Cloudflare Workers 是一个在网络边缘运行 JavaScript 和 WebAssembly 的无服务器执行平台，由开源的 workerd 运行时驱动。workerd 运行时使用 V8——与 Google Chrome 浏览器相同的 JavaScript 引擎——作为进程内沙箱，将不受信任的代码与宿主系统隔离。V8 沙箱充当宿主进程内的保护屏障，旨在防止内存损坏扩散到沙箱边界之外。Cloudflare Code Mode 是一项近期推出的功能，允许 AI 代理编写和执行 TypeScript 代码来动态组合和编排工具，而非简单地调用预定义的 API。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/cloudflare/workerd">GitHub - cloudflare/ workerd : The JavaScript / Wasm runtime that...</a></li>
<li><a href="https://developers.cloudflare.com/agents/tools/codemode/">Code Mode · Cloudflare Agents docs</a></li>
<li><a href="https://www.linkedin.com/pulse/google-chrome-enhances-security-v8-sandbox-boom-cyber-laone-moalosi-lheaf">Google Chrome Enhances Security with V 8 Sandbox : A Boom for...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">V8 Engine</span> <span class="tag-badge">Systems Research</span></p>

---

<a id="item-4"></a>

## [JetBrains TeamCity 严重未授权远程代码执行漏洞（CVE-2026-63077）](https://www.rapid7.com/blog/post/ra-unauthenticated-rce-in-jetbrains-teamcity-cve-2026-63077) ⭐️ 9.0/10

Rapid7 发布了对 CVE-2026-63077 的技术分析，这是 JetBrains TeamCity 中一个严重的不安全反序列化漏洞，允许未经身份验证的攻击者通过 agent 轮询协议执行任意操作系统命令。CISA 已于 2026 年 8 月 5 日将该漏洞添加到已知被利用漏洞（KEV）目录中，确认其在野外被积极利用。 该漏洞对企业软件供应链构成严重威胁，因为攻陷 TeamCity CI/CD 服务器后，攻击者可以向构建流水线注入恶意代码，并在整个组织中分发被篡改的制品。该漏洞无需身份验证即可利用且已在野外被确认利用，使得任何暴露的 TeamCity 部署都必须立即进行修补。 漏洞的根本原因是过于宽松的 XStream 白名单在 `/app/agents/v1` 端点中错误地添加了 TeamCity 协议类而未移除 XStream 的默认权限。2026.1.3 版本中的修复方案是在 TeamCity 白名单之前添加 `NoTypePermission.NONE` 使其变为排他性白名单；受影响版本包括 2026.1.2 及更早版本。Rapid7 Labs 已发布了概念验证漏洞利用代码。

rss · Rapid7 Cybersecurity Blog · 8月7日 14:32

**背景**: JetBrains TeamCity 是一款广泛使用的持续集成和交付（CI/CD）服务器，通过中央服务器与分布式构建代理协调来自动化软件的构建、测试和部署流程。构建代理通过轮询协议与服务器通信，定期发送 HTTP(S) 请求在 `/app/agents/v1` 端点下注册、接收命令并报告构建结果。不安全反序列化漏洞发生在应用程序未经验证地反序列化不受信任的数据时，攻击者可通过精心构造的序列化负载实例化任意 Java 类并执行恶意代码，这通常涉及 XStream 等序列化库的处理过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.thecybersignal.com/jetbrains-teamcity-cve-2026-63077-agent-polling-protocol-2026/">TeamCity CVE-2026-63077: Agent Polling Protocol Is the Way In</a></li>
<li><a href="https://www.criminalip.io/knowledge-hub/blog/36786">TeamCity On-Premises CVE-2026-63077... | Criminal IP</a></li>
<li><a href="https://genxcyber.com/blog/cve-2026-63077-teamcity-agent-polling-deserialization-rce/">CVE-2026-63077 Teardown: Weaponizing JetBrains ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">CI-CD</span> <span class="tag-badge">JetBrains TeamCity</span></p>

---

<a id="item-5"></a>

## [DeepSeek V4 Flash 发布，以卓越的编程性价比备受开发者赞誉](https://arcprize.org/results/deepseek-v4-flash-0731) ⭐️ 8.0/10

DeepSeek 发布了新的 V4 Flash 模型，这是一个具有 284B 总参数和 13B 激活参数的混合专家架构模型。它专为 1M 令牌上下文窗口的高效推理而设计，并在编程基准测试中取得了顶级性能。 这次发布具有高度的颠覆性，因为它以极低的成本提供了与 Claude Opus 等领先闭源模型相媲美的性能。它显著降低了开发者获取高级编程辅助的门槛，加速了 AI 模型的快速商品化。 该模型目前的成本极低，有开发者报告称每天只需花费几美元即可进行广泛使用。然而，DeepSeek 已宣布计划“大幅”提高价格，这意味着这种极致的性价比可能是暂时的。

hackernews · tosh · 8月7日 17:56 · [社区讨论](https://news.ycombinator.com/item?id=49214008)

**背景**: 大语言模型（LLM）是在海量文本数据上训练的人工智能系统，用于理解和生成类人的文本和代码。混合专家是一种通过仅对每个令牌使用模型的一个子集（即“专家”）来提高计算效率的架构，允许在不按比例增加计算成本的情况下拥有更大的总参数量。DeepSeek 是一家著名的人工智能公司，以开发挑战行业领导者的高性能、开放权重模型而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek -ai/ DeepSeek - V 4 - Flash · Hugging Face</a></li>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-flash">DeepSeek V 4 Flash - API Pricing & Benchmarks | OpenRouter</a></li>

</ul>
</details>

**社区讨论**: 社区热情高涨，赞扬该模型强大的编程能力和极低的成本，许多人指出它可与 Claude Opus 媲美甚至超越。用户还强调了 AI 商品化惊人的发展速度，并将其价格与以前的模型进行了比较，同时宣布的未来价格上涨表达了些许担忧。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI/ML</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Programming</span> <span class="tag-badge">Cost Efficiency</span></p>

---

<a id="item-6"></a>

## [新墨西哥州法院命令 Meta 因损害儿童心理健康赔偿 5.67 亿美元](https://www.theguardian.com/technology/2026/aug/06/new-mexico-court-meta) ⭐️ 8.0/10

新墨西哥州法院命令 Meta 支付超过 5.67 亿美元的赔偿，原因是该公司通过 Instagram 和 Facebook 等平台损害了儿童的心理健康，违反了该州的公共滋扰法。该裁决还要求公司进行结构性调整，以更好地保护未成年用户。 这项裁决为依据公共滋扰法追究社交媒体公司对其平台对未成年人心理健康影响的责任开创了有力的法律先例。考虑到新墨西哥州仅有约 200 万人口，这样一个规模较小的州开出如此高额的罚单，可能会为美国其他州和司法管辖区提起类似诉讼打开闸门。 法院裁定 Meta 违反了新墨西哥州的公共滋扰法（NMSA 1978 § 30-8-1），该法律将公共滋扰定义为故意创建或维护任何影响一定数量公民且有害于公共健康、安全、道德或福利的事物。部分报道引用的处罚总额为 9.42 亿美元，并且该公司可能面临关于如何为未成年用户设计功能的额外合规要求。

hackernews · boplicity · 8月7日 00:06 · [社区讨论](https://news.ycombinator.com/item?id=49204352)

**背景**: 公共滋扰法是传统上用于处理危害公众利益的活动或条件的法律条文，例如环境污染或危险建筑。近年来，这些法律被创造性地应用于社交媒体公司，美国多个州提起诉讼，认为 Instagram 等平台设计了令人上瘾的功能——如无限滚动和算法推送——故意导致青少年出现焦虑、抑郁和其他心理健康问题。此案是针对大型科技公司儿童安全问题更大规模诉讼浪潮的一部分。

**社区讨论**: 评论者强调，虽然这笔罚款相对于 Meta 的全球收入来说似乎微不足道，但对于一个仅有 200 万人口的司法管辖区来说却是巨大的，使其成为一个潜在的重要先例。用户还引用了被违反的具体公共滋扰法条文，并讨论类似的裁决是否会扩展到 TikTok 和 X 等其他平台，同时也有人质疑是否有任何罚款金额能真正改变 Meta 的行为，还是仅仅被视为"做生意的成本"。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Legal</span> <span class="tag-badge">Social Media</span> <span class="tag-badge">Mental Health</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-7"></a>

## [将 PostgreSQL 分析查询速度提升 300 倍](https://malisper.me/how-we-made-postgres-hundreds-of-times-faster-the-query-engine/) ⭐️ 8.0/10

作者通过用现代查询引擎取代传统的执行模型，为 PostgreSQL 的分析查询实现了 300 倍的提速。该新引擎利用了批处理、算子融合和 SIMD 向量化等高级系统工程技术，显著降低了 CPU 和内存带宽的消耗。 这一突破表明，PostgreSQL 可以通过优化来与专用的分析型数据库相媲美，而无需用户迁移数据。它还验证了自适应计划等高级执行模型的可行性，对 PostgreSQL 核心团队历来采用的传统方法提出了挑战。 优化后的查询引擎使用 Rust 语言构建，并利用 CPU 级别的 SIMD 指令同时处理多个数据元素。此外，它采用算子融合将多个查询操作精简为单一步骤，并使用批处理来高效处理大量数据块。

hackernews · poly2it · 8月7日 11:00 · [社区讨论](https://news.ycombinator.com/item?id=49208535)

**背景**: PostgreSQL 传统上依赖于逐行处理模型，这会导致较高的开销，并在分析工作负载中限制 CPU 的效率。现代分析型数据库则采用向量化执行，通过处理批量的列式数据来更好地利用 CPU 缓存和指令。SIMD（单指令多数据流）允许 CPU 同时对多个数据点执行相同的操作，而算子融合则将相邻的数据库操作合并，从而避免不必要的内存读写。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://malisper.me/how-we-made-postgres-hundreds-of-times-faster-the-query-engine/">Rebuilding Postgres for 300x faster analytics: batching, operator ...</a></li>
<li><a href="https://medium.com/starrocks-engineering/deep-dive-how-starrocks-built-a-high-performance-vectorized-engine-156ab9c38328">Deep Dive: How StarRocks Built a High- Performance ... | Medium</a></li>
<li><a href="https://hevodata.com/learn/sql-batch-processing/">SQL Batch Processing: A Comprehensive Guide | Hevo</a></li>

</ul>
</details>

**社区讨论**: 社区对自适应计划的实现表现出极高的热情，用户对 PostgreSQL 核心团队迟迟不愿采用这项成熟技术表示了不满。评论者希望该项目能证明此类模型在生产环境中的可行性，同时还赞扬了作者选择了一个尊重用户自由的软件许可证。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">PostgreSQL</span> <span class="tag-badge">Database Performance</span> <span class="tag-badge">Systems Engineering</span> <span class="tag-badge">Data Analytics</span> <span class="tag-badge">SIMD</span></p>

---

<a id="item-8"></a>

## [在 150 万页网站上对抗恶性爬虫的经验教训](https://patronview.com/news/99-percent-of-my-website-traffic-is-bots/) ⭐️ 8.0/10

一名网站管理员分享了一年来对抗恶性机器人爬虫的详细经历，这些爬虫在其 150 万页的公共记录网站上产生了高达 99%的流量。严重的抓取行为导致云基础设施成本急剧飙升，迫使该管理员探索各种机器人管理策略。 随着 AI 公司部署自动爬虫来训练大型语言模型并生成实时答案，独立网站运营商正在不公平地承受基础设施成本的负担。这一情况凸显了 AI 生态系统中日益增长的伦理问题：科技巨头在不提供任何补偿或实际流量引导的情况下榨取数据。 该网站管理员在流量高峰期经历了数据库托管成本飙升 500%的情况，促使社区建议其迁移到静态网站架构。为了对抗使用伪造用户代理的机器人，评论者推荐了 Anubis 等工具，该工具使用工作量证明挑战来验证真实的浏览器软件。

hackernews · petercooper · 8月7日 14:51 · [社区讨论](https://news.ycombinator.com/item?id=49211386)

**背景**: 传统的搜索引擎爬虫通过索引网页来帮助用户查找信息，从而为原始来源带来流量。相比之下，AI 爬虫旨在从内容中学习，并大规模复制原始数据，以供大型语言模型（LLM）训练数据管道或实时的 AI 生成答案使用。为了对抗这些自动化机器人，现代机器人管理策略采用了诸如静态标头分析、设备验证或工作量证明挑战等技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.fastly.com/learning/what-are-ai-crawlers">What are AI Crawlers? How They Work & What They Do | Fastly</a></li>
<li><a href="https://www.cequence.ai/learn/bot-management/what-is-bot-management/">How Bot Management Solutions Work, Top 14 Solutions & Pros/Cons</a></li>

</ul>
</details>

**社区讨论**: 社区成员对与 AI 爬虫之间不对称的关系表示极度沮丧，指出像 Claude-searchbot 这样的机器人可以抓取数十万个页面，而带来的引荐流量几乎为零。讨论中提供了诸如工作量证明机器人检测和静态网站迁移等实用解决方案，同时一名评论者幽默地指出了一个讽刺现象：该网站管理员自己的网站也是通过抓取公共文档建立起来的。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">web-scraping</span> <span class="tag-badge">bot-management</span> <span class="tag-badge">ai-crawlers</span> <span class="tag-badge">cloud-infrastructure</span> <span class="tag-badge">web-operations</span></p>

---

<a id="item-9"></a>

## [PortSwigger 揭示网页邮箱客户端中的 CSS 消毒缺陷](https://portswigger.net/research/css-the-bomb-inside-your-inbox) ⭐️ 8.0/10

PortSwigger 的研究员 Gareth Heyes 发表了一项新研究，展示了网页邮箱客户端中不当的 CSS 消毒机制是如何被利用的。研究结果表明，攻击者可以通过在电子邮件中使用特制的 CSS 来绕过安全过滤器，并在受信任的邮箱界面内执行恶意操作。 这种漏洞极其危险，因为电子邮件是普遍使用的通信工具，利用 CSS 缺陷使攻击者能够在不依赖传统基于 JavaScript 的跨站脚本攻击（XSS）的情况下，窃取敏感数据或操纵用户。它迫使网络安全社区和邮件服务提供商从根本上重新评估 Web 应用程序中不受信任内容的渲染方式。 该攻击媒介专门针对试图对不受信任的 CSS 进行消毒而不是完全将其删除的网页邮箱界面。通过找到绕过这些消毒过滤器的方法，攻击者可以滥用复杂的 CSS 特性（如属性选择器）来泄露数据或与底层的文档对象模型（DOM）进行交互。

rss · PortSwigger Research · 8月6日 22:00

**背景**: 网页邮箱客户端通常在用户的浏览器中直接渲染 HTML 电子邮件，以提供丰富的视觉体验。由于电子邮件来自不受信任的来源，邮件提供商尝试剥离危险的动态内容（如 JavaScript），同时通常允许使用 CSS 进行样式设计。然而，CSS 非常复杂并且可以与页面元素进行交互，这使得完美的消毒成为一项艰巨的任务，并使应用程序容易受到注入攻击。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.ostorlab.co/roundcube-imap-injection-ssrf-ove-2026.html">New Roundcube Webmail Vulnerabilities Disclosed : IMAP Command...</a></li>
<li><a href="https://watchstack.io/intel/cve/CVE-2026-48849">CVE-2026-48849 - Stored XSS/HTML/ CSS injection ... | WatchStack.io</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Web Security</span> <span class="tag-badge">CSS</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Email Security</span> <span class="tag-badge">PortSwigger</span></p>

---

<a id="item-10"></a>

## [Cloudflare 将 Workers AI 与 AI Gateway 统一为单一控制平面](https://blog.cloudflare.com/workers-ai-gateway-unification/) ⭐️ 8.0/10

Cloudflare 将其 Workers AI 和 AI Gateway 合并为一个单一的 AI 控制平面，为开发者提供跨 Cloudflare 托管 GPU 和外部 AI 提供商的统一可观测性、计费和动态路由能力。此次整合引入了统一绑定和模型优先路由机制，以简化弹性多提供商 AI 应用的构建。 此次统一消除了在混合或多提供商 AI 环境下分别管理路由、可观测性和计费工具所带来的运营摩擦。这使 Cloudflare 成为一个综合性的 AI 基础设施抽象层，帮助工程团队降低成本、提升弹性并避免供应商锁定。 统一控制平面采用模型优先路由机制，根据任务需求将每个请求分发给最合适的模型，并通过一个稳定的端点统一对接 Workers AI、OpenAI、Anthropic 和 AWS Bedrock 等提供商。开发者可以通过一个账户级接口获得整合的缓存、速率限制、重试、边缘分析和计费功能。

rss · The Cloudflare Blog · 8月7日 13:00

**背景**: Cloudflare Workers AI 是一个无服务器 GPU 驱动的推理平台，通过一次 API 调用即可访问 50 多种开源模型，采用按量付费模式，无需进行容量规划。AI Gateway 则是一个互补产品，充当应用程序与各类 AI 提供商之间的代理层，提供缓存、速率限制、重试逻辑和分析功能。此前，同时使用这两个产品的开发者需要将它们作为独立系统管理，在 Cloudflare 托管模型和外部提供商之间路由流量时会在可观测性和计费方面产生摩擦。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cloudflare.com/products/workers-ai/">Cloudflare Workers AI - Edge AI Inference Platform</a></li>
<li><a href="https://developers.cloudflare.com/workers-ai/">Overview · Cloudflare Workers AI docs</a></li>
<li><a href="https://alchemy.run/cloudflare/ai/ai-gateway/">Add an AI Gateway | alchemy</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Workers AI</span> <span class="tag-badge">AI Gateway</span> <span class="tag-badge">Serverless</span></p>

---

<a id="item-11"></a>

## [AI 编程代理被利用建立反向隧道和 LaunchAgents](https://www.elastic.co/security-labs/coding-agent-launchagent-tunnel-detection) ⭐️ 8.0/10

Elastic Security Labs 发布了一份详细分析，揭示 AI 编程代理可被利用来建立由代理派生的反向隧道和 macOS LaunchAgents，从而将本地管理应用暴露在公共互联网上。该研究强调，这些操作可能看起来像是无害的'vibe-coded'活动而非已确认的恶意软件，但仍然需要进行高严重性级别的端点检测。 这项研究揭示了端点安全中的一个重大盲区：随着 AI 编程助手在开发者中日益普及，这些工具可能被用作持久化和未授权网络访问的攻击向量。随着各组织将 AI 代理快速引入开发流程，安全团队必须更新其检测策略，以区分合法的代理行为和恶意利用。 该攻击利用 macOS LaunchAgents 实现持久化，并通过反向隧道技术绕过网络边界，创建一条从外部互联网回到本地服务的通道。一个关键挑战在于，即使该活动看起来像是合法的代理驱动操作而非传统的恶意软件特征，端点检测系统也必须将其标记为高严重性。

rss · Elastic Security Labs · 8月7日 23:59

**背景**: LaunchAgent 是一种 macOS 机制，允许应用程序自动启动并在后台运行，这使其目录成为寻求持久化的恶意软件的主要目标。反向隧道是一种网络技术，它通过让内部机器向第三方服务器发起出站连接，使外部系统能够访问位于防火墙或 NAT 后面的服务。'Living off the Land' (LOTL)攻击策略利用系统原生的合法工具——而非自定义恶意软件——来规避基于签名的防御。这项研究将这几个概念联系起来，展示了 AI 编程代理如何成为 LOTL 类技术的新型载体。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.decryptiondigest.com/blog/macos-launchagent-persistence-detection-removal">Malicious macOS LaunchAgents 2026: Detect Persistence</a></li>
<li><a href="https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/living-off-the-land-attack/">What Are Living off the Land (LOTL) Attacks? - CrowdStrike</a></li>
<li><a href="https://medium.com/@aeonaten/introductory-guide-to-reverse-tunnel-attacks-e16a07b048c6">Introductory Guide to Reverse Tunnel Attacks | by Ankit... | Medium</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Endpoint Detection</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Coding Assistants</span></p>

---

<a id="item-12"></a>

## [ChainDrop：利用以太坊智能合约进行命令控制的自传播 npm 蠕虫](https://unit42.paloaltonetworks.com/chaindrop-npm-worm-analysis/) ⭐️ 8.0/10

Unit 42 发布了对 ChainDrop 的详细分析，这是一种窃取凭据的 npm 供应链蠕虫，感染了超过 400 个 npm 包（444 个包和 2,212 个版本），从被篡改的 keyv@6.0.0 开始传播。该蠕虫独特地将 GitHub Actions 运行器密钥提取与以太坊智能合约结合，用于弹性命令控制路由，使常规域名封禁措施失效。 ChainDrop 展示了供应链攻击的新高度，将常规的 npm 包安装转化为针对开发者机器、CI/CD 构建系统和云环境的自动化凭据窃取。利用基于区块链的命令控制基础设施标志着攻击方式向更难检测和摧毁的方向演进，影响整个 JavaScript 生态系统乃至更广泛的范围。 该蠕虫通过读取 GitHub Actions Runner Worker 进程内存来提取标记为 isSecret:true 的值，专门针对工作流中显式引用的密钥。在命令控制通信方面，它查询以太坊智能合约（一种称为 EtherHiding 的技术）来动态获取当前的 C2 地址，使攻击者能够在不修改恶意软件本身的情况下轮换基础设施。

rss · Unit 42 · 8月6日 22:26

**背景**: npm 是 Node.js 的默认包管理器，发布到其注册表的恶意包可以被数百万下游项目自动安装。GitHub Actions 运行器负责执行 CI/CD 工作流，通常可以访问存储为环境变量的敏感密钥，如 API 密钥和部署令牌。以太坊智能合约是区块链上可自动执行的程序，可以不可变且公开地存储数据，这使其对希望获得弹性、抗审查基础设施的攻击者具有吸引力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.stepsecurity.io/blog/chaindrop-npm-worm">ChainDrop npm Worm: Bun-loaded CI/CD credential harvester ...</a></li>
<li><a href="https://cybersecuritynews.com/chaindrop-worm-infects-npm-packages/">ChainDrop Worm Infects 400+ npm Packages to Steal GitHub and ...</a></li>
<li><a href="https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/">ChainDrop supply chain compromise: Anatomy of a self ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">npm</span> <span class="tag-badge">supply-chain-security</span> <span class="tag-badge">malware-analysis</span> <span class="tag-badge">ethereum</span> <span class="tag-badge">cybersecurity</span></p>

---

<a id="item-13"></a>

## [OpenAI 首次发布 ChatGPT 全球国别使用数据](https://openai.com/index/how-the-world-is-putting-chatgpt-to-work/) ⭐️ 8.0/10

OpenAI 首次发布了 ChatGPT 全球国别使用数据，显示用户在工作中创建内容和执行任务的频率是工作之外的两倍多。此外，自 4 月份 ChatGPT Images 2.0 上线以来，多媒体使用量大幅飙升，且 35 岁以上用户和新兴市场的采用率也在迅速上升。 这份数据提供了难得的确凿证据，表明生成式 AI 正从一种新颖的问答聊天机器人成熟发展为企业和专业人员不可或缺的生产力工具。它还突显了一种普惠效应，发展中国家正逐渐赶上早期采用者市场，而年龄较大的群体也越来越多地将 AI 融入到他们的工作流程中。 在全球范围内，目前有 7.8% 的消息涉及多媒体，其中巴西和哥伦比亚等国家有超过 10% 的消息使用了图像功能。在过去一年中，法国和捷克等国家 35 岁及以上用户的消息份额增长了超过 10 个百分点。

telegram · zaihuapd · 8月7日 08:43

**背景**: 随着生成式 AI 变得更加普及，追踪其实际应用有助于了解全球技术趋势和用户行为。近期多媒体使用量激增的主要驱动力之一是 ChatGPT Images 2.0，OpenAI 于 4 月份推出了该功能，以提供具有改进文本渲染、多语言支持和视觉推理能力的先进图像生成技术。了解这些人口统计和地区的变化，有助于开发者和企业调整其 AI 工具，以更好地服务于更广泛、更多样化的全球用户群体。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-chatgpt-images-2-0/">Introducing ChatGPT Images 2 . 0 | OpenAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">ChatGPT</span> <span class="tag-badge">AI Adoption</span> <span class="tag-badge">Usage Data</span> <span class="tag-badge">Productivity</span></p>

---

<a id="item-14"></a>

## [美国调查中国 AI 企业海外远程获取英伟达芯片渠道](https://www.bloomberg.com/news/articles/2026-08-07/us-reviews-china-s-offshore-access-to-nvidia-chips-after-ai-breakthroughs) ⭐️ 8.0/10

美国商务部工业与安全局（BIS）已启动系统性审查，调查中国 AI 企业如何在海外获取和使用英伟达芯片，包括通过远程云计算方式租用算力。此前，月之暗面发布的 Kimi K3 模型性能逼近美国同行，一名白宫高官公开指控其非法获取英伟达芯片并经泰国一方远程访问，随后 BIS 执法团队启动了审查。 此次审查暴露了美国出口管制的关键漏洞：虽然将芯片走私至中国被明令禁止，但通过海外云服务远程访问受限的英伟达 GPU 目前仍处于法律灰色地带。调查结果可能重塑全球 AI 基础设施获取格局，推动针对云计算协议的新法规出台，并对英伟达、阿里巴巴和月之暗面等依赖跨境算力资源的企业产生重大影响。 BIS 正在整理两份国家名单：涉嫌将受限芯片走私入境中国的黑市所在国，以及中国企业远程租用芯片的国家。此外，据报道，阿里巴巴通过开曼群岛实体控制的新加坡壳公司，经正被美方调查的 Megaspeed 使用位于马来西亚的英伟达芯片——该公司进口了超过 46 亿美元的英伟达 GPU，但其东南亚设施中可见使用的数量远低于进口量。

telegram · zaihuapd · 8月7日 11:18

**背景**: 美国对先进 AI 芯片，尤其是英伟达 GPU 实施了日益严格的出口管制，旨在限制中国的 AI 发展能力。然而，这些法规主要针对实体芯片转移，在远程云计算访问方面存在监管空白——中国企业可以从第三国的数据中心租用算力。月之暗面于 2026 年 7 月发布的 Kimi K3 是一个拥有 2.8 万亿参数的开源多模态模型，性能可与 OpenAI 和 Anthropic 的系统匹敌，引发了对中国初创企业如何获取训练所需大规模算力资源的质疑。据报道，总部位于新加坡的 Megaspeed 进口了价值数十亿美元的英伟达 GPU，但其东南亚设施中可见使用的数量仅占进口量的很小比例。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html">China's Moonshot AI unveils Kimi K3 that rivals OpenAI, Anthropic</a></li>
<li><a href="https://www.nytimes.com/2025/10/09/technology/nvidia-chips-china-megaspeed.html">A Mystery C.E.O. and Billions in Sales: Is China Buying Banned Nvidia ...</a></li>
<li><a href="https://www.cryptopolitan.com/megaspeed-nvidia-imports-exceed-usage-data/">Megaspeed ’s Nvidia imports far exceed usage data... - Cryptopolitan</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Nvidia</span> <span class="tag-badge">Export Controls</span> <span class="tag-badge">Semiconductors</span></p>

---

<a id="item-15"></a>

## [SK 海力士宣布推出采用晶圆键合技术的 375 层 V10 NAND](https://www.gelonghui.com/live/2599953) ⭐️ 8.0/10

SK 海力士确认其下一代 V10 NAND 闪存将采用 375 层堆叠设计，并首次引入晶圆键合技术。该产品旨在实现上代产品 2.5 倍的每瓦性能，专为 AI 基础设施环境进行了优化。 这标志着存储硬件架构的重大突破，突破了 NAND 闪存密度和能效的极限。每瓦性能的大幅提升将极大地造福于以功耗为关键瓶颈的数据中心和 AI 应用。 V10 NAND 是继 321 层 V9 "4D NAND"之后的下一代产品，并在 FMS 2026 峰会的新闻稿中正式确认。这也是 SK 海力士首款采用晶圆键合技术以实现如此高堆叠层数的 NAND 产品。

telegram · zaihuapd · 8月7日 12:19

**背景**: 4D NAND 是由 SK 海力士主导推出的一种高密度存储器架构，它在传统 3D NAND 的基础上，将 CMOS 逻辑电路（外围电路）直接置于存储单元阵列下方，从而实现更小的占位面积和更高的生产效率。随着堆叠层数超过 300 层，传统制造工艺面临物理极限。晶圆键合技术通过将两片分别制造的晶圆结合在一起，帮助克服这些扩展挑战，从而更好地实现存储单元和外围电路的集成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tech.ifeng.com/c/8vONreNLVH5">SK海力士确认V10 NAND闪存为375层堆叠，导入晶圆键合技术</a></li>
<li><a href="https://baike.baidu.com/item/4D+NAND闪存技术/68068390">4D NAND闪存技术 - 百度百科</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">SK海力士</span> <span class="tag-badge">NAND闪存</span> <span class="tag-badge">半导体</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">晶圆键合</span></p>

---

<a id="item-16"></a>

## [sub2api 曝 OAuth 高危漏洞，仅凭邮箱即可接管账户](https://github.com/Wei-Shaw/sub2api/issues/5350) ⭐️ 8.0/10

sub2api v0.1.171 及之前版本被披露存在一个 CVSS 8.8 的高危 OAuth 账户接管漏洞，攻击者仅需知道受害者的注册邮箱即可接管其账户。该攻击无需密码、无需验证码，也不需要受害者进行任何交互。 该漏洞使攻击者能够完全控制受害者的 API 密钥、账单余额和订阅配额，对所有 sub2api 用户构成严重的财务和数据安全风险。由于攻击的唯一前提是知道邮箱地址，攻击面极其广泛且易于利用。 漏洞存在于 pending session 流程的 existingUser 分支中，该分支在绑定 OAuth 身份时未校验密码和验证码。攻击者将目标用户 ID 设为受害者 ID 后即可绑定自己的 OAuth 身份，此后每次 OAuth 登录都会解析为受害者账户。

telegram · zaihuapd · 8月7日 14:59

**背景**: sub2api 是一个开源的 AI API 网关平台，用于分发和管理 AI 产品订阅的 API 配额，统一负责鉴权、计费、负载均衡和请求转发。OAuth（开放授权）是一种广泛采用的开放授权标准，允许用户通过第三方身份提供商进行认证，而无需直接共享密码。OAuth 流程中的 pending session 是认证过程中的临时状态，此时用户身份已发起但尚未完全验证或关联到已有账户。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Wei-Shaw/sub2api">GitHub - Wei-Shaw/sub2api: Sub2API 一站式开源中转服务，让 Claude...</a></li>
<li><a href="https://www.ithome.com.tw/news/155765">Booking.com修補可能導致帳號 接 管 的 OAuth 漏 洞 | iThome</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">安全漏洞</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">账户接管</span> <span class="tag-badge">sub2api</span></p>

---

<a id="item-17"></a>

## [亚马逊整顿内部 CPU 浪费，智能体 AI 推高算力需求](https://www.tomshardware.com/pc-components/cpus/amazon-cracks-down-on-cpu-waste-among-engineers-as-agentic-ai-crunch-intensifies-cpu-demand-makes-low-utilization-ec2-instances-a-hot-commodity) ⭐️ 8.0/10

亚马逊 AWS 开始严查内部 EC2 实例使用以消除 CPU 浪费，导致工程师申请实例的等待时间从数小时延长至数天。这一整顿行动是为了应对智能体 AI 工作负载激增的计算需求，这类任务需要大量的 CPU 资源用于工具编排。 这一转变凸显了一个重大的行业变革，即智能体 AI 正在从根本上改变数据中心的硬件需求。随着 AI 智能体在自主行动和使用工具方面的能力增强，对 CPU 的需求急剧上升，使得数据中心 GPU 与 CPU 的配比正从 8:1 或 4:1 逐步逼近 1:1。 与传统推理任务中 CPU 主要作为传递提示词的头节点不同，智能体 AI 工作流涉及复杂的工具调用和编排，给 CPU 带来了沉重负担。AMD 和英伟达等主要芯片制造商已经在扩大其数据中心 CPU 布局，以抢占这一新兴的市场转变。

telegram · zaihuapd · 8月7日 16:31

**背景**: 智能体 AI 是指能够追求目标并使用外部工具执行复杂任务的自主人工智能系统。虽然传统的生成式 AI 模型主要依赖 GPU 进行推理，但智能体工作流需要大量的 CPU 算力来管理执行多步骤操作所需的逻辑、API 调用和动态编排。过去，专为 AI 优化的数据中心保持着很高的 GPU 与 CPU 配比，因为 CPU 未被充分利用，但 AI 智能体的计算特性正迫使硬件资源重新平衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Agentic_AI">Agentic AI</a></li>
<li><a href="https://www.communicationstoday.co.in/agentic-ai-is-forcing-data-centers-to-rethink-their-cpu-budgets/">Agentic AI is forcing data centers to rethink their CPU budgets</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Cloud Computing</span> <span class="tag-badge">Agentic AI</span> <span class="tag-badge">AWS</span> <span class="tag-badge">Hardware</span></p>

---

<a id="item-18"></a>

## [爆料称 OpenAI 计划下周发布全新大模型 Astra](https://t.me/zaihuapd/43046) ⭐️ 8.0/10

有爆料称，OpenAI 正准备最早于下周发布名为 Astra 的新模型。据称该模型是一次全新的预训练，也是自 GPT-4.5 以来训练过的最大模型，其最新的内部测试版本代号「mewfour」已被定为候选发布版本。 Astra 的发布可能标志着 OpenAI 模型能力的又一次重大飞跃，并可能改变人工智能行业的竞争格局。作为一个全新的大规模预训练模型，它很可能会对依赖尖端性能来处理复杂任务的开发者和研究人员产生重要影响。 据报道，Astra 是基于一次全新的预训练运行构建的，而非增量更新。其最新的内部测试版本代号「mewfour」，据称已被选为发布候选版本。

telegram · zaihuapd · 8月7日 16:44

**背景**: Astra 被描述为一个尚未发布的 OpenAI 模型系列，该公司将其视为“下一个主要模型”。此前的报告表明，未发布的 Astra 模型已经展示出高级能力，例如解决开放性数学问题。作为 Astra 规模基准的 GPT-4.5 是一个通用且具有内在智能的模型，其预训练和推理方法旨在相辅相成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aiwiki.ai/wiki/openai_astra">Astra ( OpenAI ) | AI Wiki</a></li>
<li><a href="https://coursiv.io/blog/openai-astra-math-proofs">OpenAI Astra Solves 10 Open Math Problems | Coursiv Blog</a></li>
<li><a href="https://openai-dotcom-git-main-openai.vercel.app/index/introducing-gpt-4-5/">Introducing GPT - 4 . 5 | OpenAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Astra</span> <span class="tag-badge">AI Models</span> <span class="tag-badge">Rumors</span> <span class="tag-badge">Machine Learning</span></p>

---