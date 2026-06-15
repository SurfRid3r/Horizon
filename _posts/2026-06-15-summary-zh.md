---
layout: default
title: "Horizon Summary: 2026-06-15 (ZH)"
date: 2026-06-15
lang: zh
---

> 从 83 条内容中筛选出 11 条重要资讯。

---

1. [据报道 Fox 将收购 Roku，引发硬件中立性争议](#item-1) ⭐️ 9.0/10
2. [Nginx ngx_http_rewrite 模块严重远程代码执行漏洞（CVE-2026-42945）](#item-2) ⭐️ 9.0/10
3. [哪吒监控存在严重的未授权路径穿越漏洞](#item-3) ⭐️ 9.0/10
4. [Iroh 1.0：去中心化 P2P 网络框架正式发布](#item-4) ⭐️ 8.0/10
5. [Typst 0.15.0 发布，支持多个参考文献并改进 HTML 导出](#item-5) ⭐️ 8.0/10
6. [开发者分享用本地大模型替代 Claude 和 GPT 进行日常编程的配置](#item-6) ⭐️ 8.0/10
7. [苹果向第三方云端大模型提供商开放 Foundation Models 框架](#item-7) ⭐️ 8.0/10
8. [谷歌发现中国背景黑客组织 UNC6508 针对医疗与国防研究的网络间谍活动](#item-8) ⭐️ 8.0/10
9. [NSFOCUS 成功复现 Linux 内核 Fragnesia 权限提升漏洞](#item-9) ⭐️ 8.0/10
10. [字节跳动洽购天数智芯与百度昆仑芯 AI 芯片](#item-10) ⭐️ 8.0/10
11. [因美国政府出口管制指令，Anthropic 关闭 Mythos 5 和 Fable 5 模型](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [据报道 Fox 将收购 Roku，引发硬件中立性争议](https://www.wsj.com/business/deals/fox-roku-deal-f6e564f9) ⭐️ 9.0/10

据报道，Fox 正在收购流媒体硬件和平台公司 Roku，该公司目前服务于数千万美国家庭。这一消息立即引发了社区的强烈负面反应。 此次收购将使一家大型内容提供商直接控制一个主导的电视硬件分发渠道，引发了对流媒体生态系统中硬件中立性和反竞争行为的严重担忧。这可能为内容创作者与分发平台之间进一步的垂直整合开创先例。 Roku 目前在美国家庭的估计市场渗透率为 30-50%，是最大的流媒体硬件平台之一。该平台已经内置广告，并逐渐涉足内容制作领域，即使在收购消息之前，一些用户就已将此视为利益冲突。

hackernews · thm · 6月15日 12:50 · [社区讨论](https://news.ycombinator.com/item?id=48540499)

**背景**: Roku 最初作为硬件中立的流媒体设备制造商起步，以其支持多个流媒体服务的平台中立性而闻名。随着时间推移，Roku 开始引入广告并开发自己的内容，这与其最初的价值主张产生了矛盾。内容提供商与硬件/分发平台之间的垂直整合一直是媒体行业不断增长的趋势，亚马逊和谷歌等公司已经同时拥有内容和分发渠道。

**社区讨论**: 社区的反应压倒性地负面，用户对内容提供商控制数百万家庭的硬件访问表示深切担忧。一些评论者正在积极寻找替代方案，推荐包括使用 Projectivy Launcher 的 Nvidia Shield 以获得干净无广告的体验，以及使用 Jellyfin 进行完全自主托管的媒体管理。部分用户认为，任何主要媒体公司都不应被允许拥有如此主导性的硬件访问权。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Roku</span> <span class="tag-badge">Fox</span> <span class="tag-badge">Acquisition</span> <span class="tag-badge">Streaming</span> <span class="tag-badge">Media</span></p>

---

<a id="item-2"></a>

## [Nginx ngx_http_rewrite 模块严重远程代码执行漏洞（CVE-2026-42945）](https://blog.nsfocus.net/%e3%80%90%e6%bc%8f%e6%b4%9e%e9%80%9a%e5%91%8a%e3%80%91nginx%e8%bf%9c%e7%a8%8b%e4%bb%a3%e7%a0%81%e6%89%a7%e8%a1%8c%e6%bc%8f%e6%b4%9e%ef%bc%88cve-2026-42945%ef%bc%89-2/) ⭐️ 9.0/10

2026 年 5 月 14 日，NSFOCUS 发布了安全通告 NS-2026-0015，警告 Nginx 的 ngx_http_rewrite 模块存在严重的远程代码执行漏洞（CVE-2026-42945）。该通告指出这是一个高危问题，可能允许远程攻击者执行任意代码。 Nginx 为全球大量 Web 服务器和反向代理提供服务，如果该 RCE 漏洞未被修补，可能影响全球数百万个部署。该漏洞位于 ngx_http_rewrite 模块中，这是用于 URL 重写和条件配置的核心组件，在大多数默认 Nginx 配置中均被启用。 当前通告仅为简要信息，尚未包含受影响的 Nginx 版本、利用前提条件、漏洞验证细节或建议的缓解措施等具体内容。ngx_http_rewrite 模块使用 PCRE 正则表达式处理 rewrite、if、return、set 和 break 等指令，表明该漏洞可能与这些指令处理构造输入的方式有关。

rss · 绿盟科技 · 6月15日 02:57

**背景**: Nginx 是一款高性能开源 HTTP Web 服务器和反向代理，承载着全球互联网流量的相当大份额。ngx_http_rewrite_module 是一个内置模块，允许管理员使用 PCRE 正则表达式修改请求 URI、执行重定向以及有条件地选择配置块。远程代码执行（RCE）是最严重的漏洞类型之一，它使攻击者能够在目标服务器上运行任意命令，可能导致系统被完全控制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://nginx.org/en/docs/http/ngx_http_rewrite_module.html">Module ngx_http_rewrite_module - nginx</a></li>
<li><a href="https://nginx.ac.cn/en/docs/http/ngx_http_rewrite_module.html">模块 ngx_http_rewrite_module - Nginx 文档</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">nginx</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">rce</span> <span class="tag-badge">cve</span></p>

---

<a id="item-3"></a>

## [哪吒监控存在严重的未授权路径穿越漏洞](https://github.com/nezhahq/nezha/security/advisories/GHSA-5c25-7vpj-9mqh) ⭐️ 9.0/10

哪吒监控 v2.0.13 以下版本受到一个严重未授权路径穿越漏洞的影响，该漏洞编号为 CVE-2026-53519，CVSS 评分高达 9.1。攻击者可以通过发送特制的 GET 请求（例如 `/dashboard../data/config.yaml`）来读取敏感配置文件并提取 JWT 密钥。 该漏洞极其严重，因为它允许未经身份验证的攻击者获取敏感密钥，进而伪造身份验证令牌，可能导致整个监控基础设施的管理权限被完全接管。作为一个被广泛使用的自托管运维工具，该缺陷对依赖它的个人开发者和组织构成了巨大的安全威胁。 该漏洞的利用极其简单，不需要身份验证或复杂的攻击载荷，仅需操纵 URL 路径即可实现目录穿越。一旦成功访问 `config.yaml` 文件，攻击者就能泄露用于签名会话令牌的 JWT 密钥，从而破坏整个系统的安全完整性。

telegram · zaihuapd · 6月15日 09:25

**背景**: 哪吒监控是一款流行的开源、自托管轻量级服务器和网站监控运维工具。当应用程序未能正确验证用户提供的文件路径时，就会发生路径穿越漏洞，从而允许攻击者访问预期目录之外的文件。JWT（JSON Web Token）密钥是用于安全签名身份验证令牌的加密密钥，一旦泄露，攻击者就可以伪造令牌以完全绕过身份验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/nezhahq/nezha">GitHub - nezhahq/nezha: :trollface: Self-hosted, lightweight server and website monitoring and O&M tool · GitHub</a></li>
<li><a href="https://owasp.org/www-community/attacks/Path_Traversal">Path Traversal | OWASP Foundation</a></li>
<li><a href="https://jwtsecrets.com/">JWT Secret Free Key Generator | Secure JWT Tokens</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Path Traversal</span> <span class="tag-badge">Nezha Monitoring</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-4"></a>

## [Iroh 1.0：去中心化 P2P 网络框架正式发布](https://www.iroh.computer/blog/v1) ⭐️ 8.0/10

用于构建去中心化应用的开源框架 Iroh 正式发布了 1.0 版本。该版本稳定了其网络协议栈，并引入了实现自定义网络传输层的能力，不再局限于默认的 IPv4、IPv6 和中继连接。 此次发布为 Rust 网络生态系统提供了一个健壮的、生产就绪的替代方案，标志着去中心化应用迈出了重要一步。它使开发者能够构建具有弹性的、直接的点对点应用程序，在这些应用中，设备通过加密密钥而非脆弱的 IP 地址进行安全连接。 Iroh 使用 QUIC 协议建立直接连接，利用网络打洞技术，并以中继服务器作为后备。虽然为了避免代码库臃肿，它目前没有原生支持所有传输协议，但 1.0 版本的架构允许开发者根据需要构建和集成自定义传输层，例如 WebRTC 或蓝牙（BLE）。

hackernews · chadfowler · 6月15日 15:13 · [社区讨论](https://news.ycombinator.com/item?id=48542480)

**背景**: 传统网络依赖 IP 地址，但由于 NAT、防火墙和不断变化的网络环境，这种方式往往不够稳定。Iroh 通过使用加密公钥作为稳定的节点身份来解决这个问题，使设备能够直接相互发现和连接。它使用 Rust 语言构建，并利用 QUIC 协议来确保节点之间快速、可靠和安全的数据流传输。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/n0-computer/iroh">GitHub - n0-computer/iroh: IP addresses break, dial keys instead ...</a></li>
<li><a href="https://docs.rs/iroh/latest/iroh/">iroh - Rust - Docs.rs</a></li>
<li><a href="https://www.iroh.computer/">Iroh</a></li>

</ul>
</details>

**社区讨论**: 社区的反响总体上是积极的，在庆祝这一里程碑的同时，也强烈呼吁改进文档。开发者澄清说，虽然为了保持核心代码的整洁而有意识地限制了原生传输支持，但新的自定义传输 API 允许进行扩展，从而缓解了关于缺乏 WebRTC 或 LoRa 支持的担忧。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Iroh</span> <span class="tag-badge">Decentralization</span> <span class="tag-badge">Peer-to-Peer</span> <span class="tag-badge">Rust</span> <span class="tag-badge">Networking</span></p>

---

<a id="item-5"></a>

## [Typst 0.15.0 发布，支持多个参考文献并改进 HTML 导出](https://typst.app/docs/changelog/0.15.0/) ⭐️ 8.0/10

Typst 0.15.0 已正式发布，带来了备受期待的功能，例如支持在单个文档中定义多个参考文献。此外，此次更新通过自动将数学公式转换为 MathML，显著提升了 HTML 导出能力。 作为一个快速增长的 LaTeX 开源替代方案，这些更新使 Typst 在应对复杂的出版需求和科学文档时变得更加通用且具有吸引力。通过处理复杂的参考文献并通过 MathML 提供现代的、适配网页的数学公式渲染，Typst 正在不断巩固其在现代数字出版和自动化文档工作流中的地位。 新的 HTML 导出功能专门利用 MathML 来呈现数学公式，确保在网页上无需依赖外部 JavaScript 库即可实现正确的结构化渲染。用户正成功将 Typst 集成到自动化工作流中，例如通过 Pandoc 将 Word 文档转换为 Typst，以生成格式一致的 PDF。

hackernews · schu · 6月15日 17:24 · [社区讨论](https://news.ycombinator.com/item?id=48544396)

**背景**: Typst 是一个现代的、基于标记的排版系统，旨在成为功能强大且易于使用的 LaTeX 替代品。它致力于弥合高级科学排版工具与简单文字处理软件之间的差距。MathML（数学标记语言）是一种基于 XML 的标准，用于描述数学符号并捕获其结构，能将数学公式原生集成到 HTML5 网页中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Typst">Typst - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/MathML">MathML</a></li>

</ul>
</details>

**社区讨论**: 社区的反响非常积极，用户称赞 Typst 在程序化生成 PDF 方面为他们节省了数千美元。一位用户详细介绍了使用 Pandoc 将 Word 文档转换为 Typst 来出版书籍的成功工作流。与此同时，一些非开发者用户也很好奇，与现有的 Markdown 或 Org-mode 加 Pandoc 的组合相比，Typst 具体有哪些优势。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Typst</span> <span class="tag-badge">Typesetting</span> <span class="tag-badge">Release Notes</span> <span class="tag-badge">LaTeX Alternative</span> <span class="tag-badge">Open Source</span></p>

---

<a id="item-6"></a>

## [开发者分享用本地大模型替代 Claude 和 GPT 进行日常编程的配置](https://news.ycombinator.com/item?id=48542100) ⭐️ 8.0/10

一个在 Hacker News 上获得 319 分和 200 条评论的讨论帖显示，越来越多的开发者已成功将 Claude 和 GPT 等云端大模型替换为 Qwen 3.6（35B-A3B）和 Gemma（26B-A4B）等本地模型作为日常主力编程工具。用户分享了详细的硬件配置——包括双 RTX 3090、128GB 内存的 Mac Studio 和 RTX 6000——以及每秒 55 到 150 tokens 的性能数据。 这一讨论标志着开发者生态系统的重要转变：隐私顾虑、订阅成本以及开源权重模型的成熟，使得完全本地的编程助手在生产工作流中变得可行，而不再仅仅是实验。它还凸显了混合策略的日益重要性——使用 Opus 等云端模型进行规划、本地模型进行执行——这可能重新定义工程团队构建 AI 工具链的方式。 热门的本地模型选择包括 Qwen 3.6 35B-A3B（一种仅激活 3B 参数的混合专家模型，运行速度快）和 Gemma 4 26B-A4B，通常量化为 Q4_K_M 格式。常用工具包括 Pi 编程框架（通过容器化实现完全离线）、配合 OhMyOpenCode 的 OpenCode，以及用于模型优化的 Unsloth Studio。性能因硬件差异显著，双 RTX 3090 可达到约 150 tok/s，而单块 Ada 4000（20GB 显存）由于代理框架的上下文开销，约为 55 tok/s。

hackernews · cloudking · 6月15日 14:46

**背景**: 本地大模型完全运行在用户自有硬件上，消除了将数据发送到云端服务器的需求和订阅费用，但需要大量 GPU 显存或统一内存（例如双 GPU 共 48GB 以上，或 Apple Silicon 上 128GB）。每秒 tokens 数（tok/s）衡量推理吞吐量——一般认为 15-30 tok/s 可满足编程辅助需求，而 50+ tok/s 可提供接近云端的体验。混合专家架构如 Qwen 3.6 每个 token 仅激活总参数的一小部分，在等效大小的密集模型相比下，能以更快的推理速度实现更大的有效模型规模。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mljourney.com/how-many-tokens-per-second-is-good-for-local-llms/">How Many Tokens Per Second Is 'Good' for Local LLMs?</a></li>
<li><a href="https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html">Metrics — NVIDIA NIM LLMs Benchmarking</a></li>

</ul>
</details>

**社区讨论**: 整体态度是谨慎乐观的——大多数回复者承认本地模型尚未达到 Claude Code 或 Codex 等前沿云端模型的能力水平，但已足以完成大部分日常工作。反复出现的主题是混合方法：开发者使用强大的云端模型进行高层规划，而用本地模型进行代码生成和执行。隐私和成本节约是主要驱动力，一位用户报告称他替代了每月 100 美元的 Claude 订阅。硬件投资被视为主要门槛，不过多位用户是对现有 GPU 的再利用，而非购买新设备。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Local LLMs</span> <span class="tag-badge">AI Coding Assistants</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">On-Premise AI</span> <span class="tag-badge">Privacy</span></p>

---

<a id="item-7"></a>

## [苹果向第三方云端大模型提供商开放 Foundation Models 框架](https://platform.claude.com/docs/en/cli-sdks-libraries/libraries/apple-foundation-models) ⭐️ 8.0/10

苹果在 WWDC 上宣布，从 iOS 27、macOS 27、iPadOS 27、visionOS 27 和 watchOS 27 开始，将向第三方云端模型提供商开放 Foundation Models 框架。Claude 和 Google Gemini 等提供商现在可以通过实现新的公开 LanguageModel 协议，以统一的原生 Swift 接口提供其服务端模型。 此举将苹果定位为所有 LLM 交互的统一门户——无论是本地还是云端——让公司在商品化底层模型提供商的同时掌控用户体验。它通过提供单一 API 抽象层简化了开发流程，同时也为苹果未来无缝替换为自家模型做好了生态准备。 该集成以 Swift 包的形式提供，LanguageModel 协议不限于任何单一提供商——Anthropic 的 Claude 和 Google 的 Gemini 已经率先接入。该框架目前尚未解决多个应用各自下载重复本地大模型导致的资源管理问题。

hackernews · MehrdadKhnzd · 6月15日 04:55 · [社区讨论](https://news.ycombinator.com/item?id=48536776)

**背景**: 苹果的 Foundation Models 框架最初作为 Apple Intelligence 的一部分推出，提供苹果自建的端侧和私有云端语言模型，用于写作工具和 Siri 等系统级功能。通过定义公开的 LanguageModel 协议，苹果正将这一架构扩展为可插拔系统，任何兼容的提供商都可以通过开发者已使用的同一原生 API 接口提供推理服务。

**社区讨论**: 评论者普遍认为这是苹果在商品化 LLM 的同时保留用户体验控制权的策略，进一步巩固其作为最佳 AI 硬件平台的地位。有人失望地表示原本期望的是反向场景——在 Apple Silicon 上本地运行 Claude——另一些人则提出了多个应用重复下载本地模型的实际问题。还有猜测认为，苹果正在为将来引导开发者使用自家模型铺设基础。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">Foundation Models</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Swift</span> <span class="tag-badge">AI Integration</span></p>

---

<a id="item-8"></a>

## [谷歌发现中国背景黑客组织 UNC6508 针对医疗与国防研究的网络间谍活动](https://cloud.google.com/blog/topics/threat-intelligence/prc-targets-us-medical-research/) ⭐️ 8.0/10

谷歌威胁情报小组（GTIG）揭露了一起由中国背景黑客组织 UNC6508 发起的、针对北美医疗、学术和军事机构的为期一年的网络间谍活动。攻击者使用名为 INFINITERED 的定制恶意软件入侵了暴露在外的 REDCap 服务器，以窃取凭据并外泄与人工智能、国防和医学研究相关的敏感数据。 此次活动凸显了由国家支持的间谍活动对关键国家安全和公共卫生基础设施所构成的持续且不断演变的威胁。窃取人工智能、无人驾驶车辆和军事行动方面的专有研究，可能会严重削弱目标国家的战略和技术优势。 威胁行为者利用了暴露在外的 REDCap 服务器，并操纵域内容合规规则来进行隐蔽的数据外泄。他们展示了高级的操作安全 技术，自 2023 年 9 月首次入侵以来，在受害者网络中潜伏了一年多而未被发现。

rss · Google Threat Intelligence · 6月15日 14:00

**背景**: REDCap（研究电子数据捕获）是一个被学术和医学研究机构广泛使用的安全 Web 应用程序，用于构建和管理在线调查与数据库。高级持续性威胁 通常以这些研究平台为目标，试图通过窃取的凭据绕过传统的边界防御，进而收集有关公共卫生计划、国防技术和尖端人工智能发展的情报。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">threat-intelligence</span> <span class="tag-badge">APT</span> <span class="tag-badge">china</span> <span class="tag-badge">espionage</span></p>

---

<a id="item-9"></a>

## [NSFOCUS 成功复现 Linux 内核 Fragnesia 权限提升漏洞](https://blog.nsfocus.net/%e3%80%90%e5%b7%b2%e5%a4%8d%e7%8e%b0%e3%80%91linux%e5%86%85%e6%a0%b8fragnesia%e6%9d%83%e9%99%90%e6%8f%90%e5%8d%87%e6%bc%8f%e6%b4%9e%ef%bc%88cve-2026-46300%ef%bc%89-2/) ⭐️ 8.0/10

NSFOCUS 已成功复现名为“Fragnesia”的 Linux 内核高危本地权限提升（LPE）漏洞（CVE-2026-46300）。该漏洞允许非特权攻击者利用 XFRM ESP-in-TCP 页面缓存损坏来获取 root 权限。 由于此权限提升漏洞几乎影响所有 Linux 发行版，Fragnesia 对数以百万计的系统构成了严重的安全威胁。像 NSFOCUS 这样的网络安全公司成功复现该漏洞，证实了其具备实际可利用性，促使企业生态系统紧急进行补丁修补。 该漏洞存在于 XFRM ESP-in-TCP 子系统的 skb_try_coalesce()函数中，该函数在合并期间未能保留共享碎片标记。其 CVSS 评分为 7.8，被归类为 Dirty Frag 漏洞家族的一部分。

rss · 绿盟科技 · 6月15日 02:53

**背景**: 本地权限提升（LPE）是指权限受限的用户通过执行代码来获取更高权限（如 root 访问权限）的攻击方式。Linux 内核中的 XFRM 子系统负责管理 IPsec 转换，其中包括封装安全载荷（ESP）协议。Dirty Frag 指的是一类利用内核在网络数据包处理期间处理内存碎片方式的特定漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.picussecurity.com/resource/blog/fragnesia-cve-2026-46300-linux-kernel-lpe-vulnerability-explained">Fragnesia CVE-2026-46300: Linux Kernel LPE Vulnerability Explained</a></li>
<li><a href="https://security-tracker.debian.org/tracker/CVE-2026-46300">CVE - 2026 - 46300</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">linux-kernel</span> <span class="tag-badge">vulnerability</span> <span class="tag-badge">privilege-escalation</span> <span class="tag-badge">CVE</span></p>

---

<a id="item-10"></a>

## [字节跳动洽购天数智芯与百度昆仑芯 AI 芯片](https://www.reuters.com/world/china/bytedance-talks-with-chinas-iluvatar-corex-purchase-ai-chips-sources-say-2026-06-15/) ⭐️ 8.0/10

字节跳动正在与上海芯片公司天数智芯洽谈采购数万颗 AI 推理芯片，并同时在评估百度昆仑芯产品。如果交易成功，天数智芯将成为字节跳动继华为和寒武纪之后的第三大国产 GPU 供应商，今年计划交付至少 5 万颗芯片。 这一举措标志着字节跳动在面临全球半导体限制的背景下，正加速推进其 AI 基础设施国内供应链的多元化。这也展示了中国本土芯片制造商如天数智芯和百度在获取大规模企业推理工作负载订单方面日益增强的竞争力。 路透社报道发布后，天数智芯的港股股价上涨了 12%。此次采购的芯片主要应用场景为 AI 推理任务，而非模型训练。

telegram · zaihuapd · 6月15日 06:53

**背景**: 天数智芯是一家总部位于上海的 AI 芯片初创公司，专注于面向云端训练和推理工作负载的高性能 GPU。百度的昆仑芯是独立融资的 AI 芯片业务，其已量产的昆仑 1 芯片已在百度搜索引擎及云计算服务中部署超过 2 万片。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mp.ofweek.com/ai/a856714059537">百 度 回应“ 昆 仑 芯 上市”背后：传统业务承压，需要新故事 - 维科号V</a></li>
<li><a href="https://m.chinaaet.com/article/3000129741">深扒 百 度 昆 仑 ，造 芯 靠什么？ -AET-电子技术应用</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Chips</span> <span class="tag-badge">ByteDance</span> <span class="tag-badge">Hardware Infrastructure</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Tech Industry</span></p>

---

<a id="item-11"></a>

## [因美国政府出口管制指令，Anthropic 关闭 Mythos 5 和 Fable 5 模型](https://t.me/zaihuapd/41960) ⭐️ 8.0/10

美国政府以国家安全为由向 Anthropic 下达出口管制指令，迫使该公司暂停外国用户对其 Fable 5 和 Mythos 5 模型的访问。为确保完全合规，Anthropic 突然切断了所有客户（包括其外籍员工）对这两款特定模型的访问权限，而其他 Claude 模型则不受影响。 这标志着人工智能治理的一个重大先例，展示了政府如何利用国家安全出口管制手段直接限制对前沿 AI 模型的访问。这凸显了全球人工智能发展与维护先进技术能力的地缘政治努力之间日益加剧的紧张关系。 据报道，美国商务部的行动与对模型被越狱以绕过安全防护机制的担忧有关。Fable 5 和 Mythos 5 共享相同的底层基础模型，是目前 Anthropic 发布的最强大的模型，在自主知识工作、编程和高级物理研究方面表现出色。

telegram · zaihuapd · 6月15日 08:55

**背景**: Anthropic 发布了 Fable 5 和 Mythos 5，它们是旨在执行复杂自主任务和前沿研究的高性能“Mythos 级”模型。美国国家安全机构一直在积极利用出口管制来限制外国获取先进的 AI 技术，尽管这些努力过去主要集中在半导体领域。这一指令标志着这些管制的重大扩展，直接针对高能力的算法模型，而不仅仅是物理硬件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theguardian.com/technology/2026/jun/13/anthropic-disable-advanced-ai-models-us-government-order">Anthropic to disable its most advanced AI models after US order limiting foreign access | AI (artificial intelligence) | The Guardian</a></li>
<li><a href="https://eu.36kr.com/en/p/3846606951250824">Mythos Public Version Launched: Claude's Most Powerful Model Now...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Policy</span> <span class="tag-badge">Export Controls</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">National Security</span> <span class="tag-badge">AI Regulation</span></p>

---