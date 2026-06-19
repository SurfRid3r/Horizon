---
layout: default
title: "Horizon Summary: 2026-06-19 (ZH)"
date: 2026-06-19
lang: zh
---

> 从 44 条内容中筛选出 10 条重要资讯。

---

1. [Project Valhalla：十年磨一剑，值类型终将随 JDK 28 登场](#item-1) ⭐️ 9.0/10
2. [为模型上下文协议推出零接触 OAuth 框架](#item-2) ⭐️ 9.0/10
3. [AutoJack：单个网页通过 MCP WebSocket 对 AI 代理宿主机实现远程代码执行](#item-3) ⭐️ 9.0/10
4. [业余研究者借助 Claude Code 在破解线形文字 A 上取得重大突破](#item-4) ⭐️ 8.0/10
5. [理解 ATProto：为什么它没有类似 Mastodon 的“实例”](#item-5) ⭐️ 8.0/10
6. [Cloudflare 推出 AI agent 临时账户，实现 Worker 快速部署](#item-6) ⭐️ 8.0/10
7. [Metasploit 周更新：NTLM 中继提权、MCP AI 插件、Paperclip AI RCE](#item-7) ⭐️ 8.0/10
8. [中国网信办就分布式数字身份互通互认规定征求意见](#item-8) ⭐️ 8.0/10
9. [美国就顶级 EUV 光刻机疑似流入中国向 ASML 施压](#item-9) ⭐️ 8.0/10
10. [Midjourney 宣布进军医疗领域，将于 2027 年推出全身超声波扫描仪与水疗中心](#item-10) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Project Valhalla：十年磨一剑，值类型终将随 JDK 28 登场](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 9.0/10

自 2014 年宣布以来，经过近十年的开发，Project Valhalla 的值类型和增强内存布局功能即将在 JDK 28 中推出。该项目为 Java 的类型系统引入了值对象，将面向对象的抽象与简单原生类型的性能特征相结合。 这是自泛型以来 Java 最重大的变革之一，通过实现值的密集连续存储（无需每个对象都带有头部或指针间接引用），从根本上改变了 JVM 处理内存的方式。它有望为数据密集型应用带来显著的性能提升，同时保持 Java 的面向对象编程模型。 值类型使数组能够将值直接存储在连续的内存块中——例如，一个包含两个 32 位整数的 Point 每个元素大约只需 8 字节，可能还需加上一个 null 标志位。但存在一些限制：对于表示形式超过 64 位的对象，堆扁平化无法生效，一些社区成员也批评文章中的示例在这方面可能存在不一致之处。

hackernews · philonoist · 6月19日 06:35 · [社区讨论](https://news.ycombinator.com/item?id=48595511)

**背景**: Project Valhalla 于 2014 年 7 月宣布，是由 Oracle 工程师 Brian Goetz 领导的实验性 OpenJDK 项目，旨在推进 Java 的类型系统。在 Java 当前的模型中，原生类型（int、double 等）和引用类型（对象）有着根本性的区别——原生类型按值存储，而对象则按引用存储，带有头部和指针间接引用。将原生类型装箱到 Integer、Double 等包装类中会产生可衡量的运行时开销。Valhalla 旨在通过引入值对象来弥合这一差距，将对象的抽象能力与原生类型的性能相结合，并最终将包装类迁移为原生类。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Valhalla_(Java_language)">Project Valhalla (Java language)</a></li>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla</a></li>
<li><a href="https://www.baeldung.com/java-valhalla-project">Java Valhalla Project | Baeldung</a></li>

</ul>
</details>

**社区讨论**: 社区讨论呈现出两极分化的观点：一些人赞赏 Java 已演变为 2026 年强大的平台，而另一些人则不以为然，认为这不过是赶上了 C++ 自 1980 年代就有的特性。技术读者批评了文章示例中可能存在的不准确之处，特别是关于像 Point 这样包含两个 32 位整数加一个 null 标志位的对象在堆扁平化时的 64 位限制。空安全（null-safety）的权衡也引发了争论，一些人认为不可空变量并不像文章所说的那样'心智负担重'。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Java</span> <span class="tag-badge">JVM</span> <span class="tag-badge">Project Valhalla</span> <span class="tag-badge">value types</span> <span class="tag-badge">performance</span></p>

---

<a id="item-2"></a>

## [为模型上下文协议推出零接触 OAuth 框架](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 9.0/10

模型上下文协议（MCP）推出了企业托管授权（EMA），这是一个全新的零接触 OAuth 框架，可为企业 AI 代理实现安全、隔离的身份验证。EMA 由新型的 ID-JAG 令牌格式提供支持，并由 Okta 和 Microsoft 等合作伙伴联合开发，允许 MCP 服务器在首次登录时自动连接，无需进行针对每个应用程序的配置。 该框架通过将身份验证流程隔离在 AI 模型的上下文窗口之外，显著提升了安全性，从而解决了企业采用 AI 代理的关键障碍。它还为大型组织简化了部署流程，使 Claude 和 VS Code 等兼容 MCP 的应用程序能够实现无缝的单点登录（SSO）体验。 该系统在标准登录流程中使用 OAuth 令牌交换机制，从组织的身份提供商请求 ID-JAG 令牌。尽管具有架构优势，但开发者报告了一些实际集成挑战，例如在使用 Microsoft Entra ID 时难以指定特定的客户端 ID。

hackernews · niyikiza · 6月18日 21:54 · [社区讨论](https://news.ycombinator.com/item?id=48592163)

**背景**: 模型上下文协议（MCP）是 Anthropic 于 2024 年底推出的一种开源标准，旨在标准化 AI 应用程序连接外部数据源和工具的方式。企业托管授权（EMA）作为 MCP 规范的一个稳定扩展，用于管理访问控制。该扩展的基础是 ID-JAG 令牌标准，这是一种新兴的 IETF 草案，专为在使用相同 SSO 提供商的应用程序之间进行安全数据共享而设计，使其应用场景不仅限于 MCP。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/">Enterprise-Managed Authorization: Zero-touch OAuth for MCP | Model Context Protocol Blog</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://www.techtimes.com/articles/318708/20260619/mcp-enterprise-authorization-goes-stable-zero-touch-sso-okta-anthropic-vs-code.htm">MCP Enterprise Authorization Goes Stable: Zero-Touch SSO for Okta, Anthropic, VS Code</a></li>

</ul>
</details>

**社区讨论**: 社区强调，与标准技能等替代方案相比，MCP 的真正优势在于能够将身份验证流程与 AI 上下文窗口隔离，从而提供更好的安全性和用户体验。一位 Anthropic 开发者指出，EMA 现在是一个稳定的扩展，正在积极征求用户反馈。然而，部分开发者分享了实际实施中的障碍，特别详细描述了在使用 Microsoft Entra ID 配置系统时遇到的摩擦。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">MCP</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Enterprise Security</span> <span class="tag-badge">Authentication</span></p>

---

<a id="item-3"></a>

## [AutoJack：单个网页通过 MCP WebSocket 对 AI 代理宿主机实现远程代码执行](https://www.microsoft.com/en-us/security/blog/2026/06/18/autojack-single-page-rce-host-running-ai-agent/) ⭐️ 9.0/10

微软安全研究人员披露了名为“AutoJack”的漏洞利用链，攻击者可以通过单个恶意网页强迫 AI 浏览代理在宿主机上执行任意代码。该攻击专门劫持 AutoGen Studio 中的 MCP WebSocket 连接来触发远程代码执行。 这暴露了一类严重的新型安全漏洞：能够浏览不受信任网页内容的 AI 代理可能会绕过传统的 localhost 安全边界。这对 AI 系统架构具有深远的影响，证明了将网络访问权限与本地系统特权相结合会为严重的网络攻击创造直接途径。 该攻击滥用对 localhost 服务的固有信任、缺失的身份验证机制以及不安全的参数处理。通过将代理对本地 MCP 服务器的访问权限武器化，攻击者可以在底层操作系统上实现任意进程执行。

rss · Microsoft Security · 6月19日 00:17

**背景**: AutoGen 是微软开发的一个开源框架，旨在构建能够自主行动或与人类协作的多代理 AI 应用程序。模型上下文协议（MCP）经常使用 WebSocket，为 AI 模型与本地工具或数据源之间提供标准化的通信通道。传统上，运行在 localhost 上的服务被认为可以免受外部互联网威胁，但 AI 代理通过同时读取网页和与本地服务交互，模糊了这一安全边界。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/microsoft/autogen">GitHub - microsoft/ autogen : A programming framework for agentic AI</a></li>
<li><a href="https://microsoft.github.io/autogen/stable/index.html">Top-level documentation for AutoGen , a framework for developing...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-4"></a>

## [业余研究者借助 Claude Code 在破解线形文字 A 上取得重大突破](https://aiclambake.com/clamtakes/linear-a/) ⭐️ 8.0/10

业余研究者和 AI 工程师 Tom Di Mino 据报道通过利用 Claude Code 在破解古老的线形文字 A（Linear A）方面取得了重大进展。他没有将 AI 用作黑盒翻译器，而是用它构建了一套 Python 工具，针对数字化的数据库系统地测试语言学假设，成功翻译了超过 300 个单词。 破译线形文字 A 将是考古学和语言学领域的一项不朽突破，有可能解锁米诺斯文明的书面历史。此外，它展示了一种高效且工具化的方法论，将大语言模型应用于复杂的学术研究，证明了 AI 作为用于系统分析的自主代理的价值。 分析主要集中在“奠酒公式”上，这是极其有限的线形文字 A 语料库（仅在 1500 篇铭文中包含约 7500 个字符）中唯一重复出现的短语。尽管这项工作产生了前所未有的结果，甚至解决了线形文字 B 中的一些问题，但它目前正在接受 Rutgers 和 Cambridge 专家的学术审查，尚未被视为最终定论。

hackernews · Kosturdistan · 6月19日 16:04 · [社区讨论](https://news.ycombinator.com/item?id=48600107)

**背景**: 线形文字 A 是公元前 1800 年至 1450 年间克里特岛上的米诺斯文明所使用的一种未被破解的书写系统。它于 1900 年被重新发现，是线形文字 B（后来被破解为早期希腊语的一种形式）的前身，但线形文字 A 的底层语言仍然是个谜。Claude Code 是 Anthropic 开发的一种智能体编程系统，它可以跨项目运行，理解代码库并自主执行复杂的多文件任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Linear_A_script">Linear A script</a></li>
<li><a href="https://www.anthropic.com/product/claude-code">Claude Code | Anthropic's agentic coding system</a></li>

</ul>
</details>

**社区讨论**: 评论者们对使用 Claude Code 构建 Python 工具而非尝试黑盒翻译的方法论感到印象深刻，认为这是 AI 的理想应用。尽管人们确实感到兴奋，但知识渊博的用户强调了语料库的极端稀缺性，并警告说这项工作仍然是一项未经证实的尝试，需要学术验证，尽管有人指出该研究确实正在接受同行评审。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Linguistics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Archaeology</span> <span class="tag-badge">Claude Code</span> <span class="tag-badge">Ancient History</span></p>

---

<a id="item-5"></a>

## [理解 ATProto：为什么它没有类似 Mastodon 的“实例”](https://overreacted.io/there-are-no-instances-in-atproto/) ⭐️ 8.0/10

一篇文章澄清了一个常见误解，指出 ATProto 并不使用 Mastodon 中的传统“实例”模型。相反，它依赖于由个人数据服务器（PDS）、中继和 AppViews 等独立微服务组成的分布式架构。 这种架构上的根本差异改变了去中心化社交网络扩展和管理数据的方式，使 Bluesky 在更广泛的 ActivityPub 生态系统中脱颖而出。它影响了从服务器维护成本到用户数据可移植性以及网络组件交互方式的方方面面。 ATProto 将职责划分为用于托管用户数据的个人数据服务器（PDS）、与内容无关地传输数据的中继，以及用于索引和提供数据视图的 AppViews。批评者指出，中继目前运行成本高昂，且用户数据绑定在单一规范的 PDS 上，这使得该系统更类似于客户端-服务器架构，而非点对点分布式数据库。

hackernews · danabramov · 6月19日 15:10 · [社区讨论](https://news.ycombinator.com/item?id=48599515)

**背景**: 基于 ActivityPub 构建的 Mastodon 和其他网络通常使用相互连接的“实例”（服务器）运行，用户在这些服务器上创建账户，服务器之间直接进行通信。相比之下，由 Bluesky 开发的 ATProto（认证传输协议）使用模块化微服务架构来分别处理不同的扩展需求。它旨在通过解耦这些服务来提供更好的用户数据可移植性和网络可扩展性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Atproto">Atproto</a></li>
<li><a href="https://activitypub.rocks/">ActivityPub Rocks!</a></li>
<li><a href="https://softwaremill.com/blueskys-decentralized-architecture-compared-to-mastodon-and-twitter-x/">Bluesky's Decentralized Architecture Compared to Mastodon and Twitter/X</a></li>

</ul>
</details>

**社区讨论**: 社区对此褒贬不一，一些人称赞这种服务分离是解决系统设计和扩展问题的优美方案。然而，批评者认为，对昂贵中继的依赖以及个人数据服务器（PDS）的规范性，使该架构更接近于传统的客户端-服务器模型，并对作者将其类比为 RSS 的做法提出了质疑。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Decentralized Web</span> <span class="tag-badge">ATProto</span> <span class="tag-badge">Bluesky</span> <span class="tag-badge">System Architecture</span> <span class="tag-badge">ActivityPub</span></p>

---

<a id="item-6"></a>

## [Cloudflare 推出 AI agent 临时账户，实现 Worker 快速部署](https://blog.cloudflare.com/temporary-accounts/) ⭐️ 8.0/10

Cloudflare 为 Cloudflare Workers 推出了临时账户功能，AI agent 可以自主运行`wrangler deploy --temporary`，在数秒内部署在线 Worker，无需任何面向人类的账户设置或认证壁垒。 该功能直接解决了日益增长的 AI agent 生态系统中的一个主要摩擦点，允许无需人工干预即可自主部署代码，标志着主要平台提供商在向 agent 原生基础设施方向上的实际行业进展。 临时预览账户目前支持的产品范围有限，包括 Workers、Workers Static Assets、Workers KV、D1、Hyperdrive、Queues 和 SSL/TLS 证书，使该功能适用于原型开发、测试和演示部署等临时用例。

rss · The Cloudflare Blog · 6月19日 13:00

**背景**: Cloudflare Workers 是一个无服务器平台，允许开发者在 Cloudflare 的全球边缘网络上运行代码，能够在 50 毫秒内触达全球 95%的互联网用户。Wrangler 是 Cloudflare 开发者平台的官方 CLI 工具，用于构建、测试和部署 Workers 项目。此前，部署 Workers 需要创建完整的 Cloudflare 账户并进行身份验证，这给尝试自主部署的 AI agent 造成了重大障碍。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://noise.getoto.net/2026/06/19/temporary-cloudflare-accounts-for-ai-agents/">Temporary Cloudflare Accounts for AI agents | Noise</a></li>
<li><a href="https://developers.cloudflare.com/changelog/post/2026-06-19-temporary-accounts-for-agents/">Temporary accounts for AI agent deployments · Changelog</a></li>
<li><a href="https://developers.cloudflare.com/workers/wrangler/">Wrangler · Cloudflare Workers docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI agents</span> <span class="tag-badge">Cloudflare Workers</span> <span class="tag-badge">infrastructure</span> <span class="tag-badge">serverless</span> <span class="tag-badge">developer tools</span></p>

---

<a id="item-7"></a>

## [Metasploit 周更新：NTLM 中继提权、MCP AI 插件、Paperclip AI RCE](https://www.rapid7.com/blog/post/pt-metasploit-wrap-up-19-06-2026) ⭐️ 8.0/10

本周 Metasploit 发布了五个新模块，其中最引人注目的是 windows/local/ntlm_relay_2_self 提权链，该模块通过 WebDAV 强制本地机器账户认证，并将 NTLM 认证中继到域控制器的 LDAP 服务，最终获取 SYSTEM 权限。此外，新增的 MCP（模型上下文协议）服务器插件允许 AI 工具在运行的 msfconsole 实例中直接辅助操作人员，还有一个针对 Paperclip AI 的未认证六步 API 调用 RCE 链（CVE-2026-41679）。 NTLM 中继至自身模块代表了一条仅需低权限用户会话即可实现从本地到域提权的复杂攻击链，对于 Active Directory 环境中的红队行动具有极高的价值。MCP 服务器插件标志着 AI 辅助渗透测试的重要行业趋势，可能彻底改变安全专业人员与漏洞利用框架的交互方式。 ntlm_relay_2_self 模块串联了 WebDAV 强制认证（OpenEncryptedFileRaw）、LDAP 中继、通过 msDS-KeyCredentialLink 注入 Shadow Credentials，以及 S4U2Proxy Kerberos 委派以获取 Administrator 的服务票据，然后利用 PsExec 实现 SYSTEM 级访问。Paperclip AI 漏洞利用（CVE-2026-41679）通过精确的六步 API 调用链，在以认证模式默认配置运行的实例上实现未认证 RCE。

rss · Rapid7 Cybersecurity Blog · 6月19日 17:08

**背景**: NTLM 中继攻击拦截并转发 Windows 系统之间的认证请求，通常利用 WebDAV 等协议强制目标机器发起认证。Shadow Credentials 是一种 Active Directory 攻击技术，攻击者通过修改目标对象的 msDS-KeyCredentialLink 属性来追加基于证书的替代凭据，从而实现账户接管。S4U2Proxy 是 Kerberos 约束委派扩展，允许服务代表用户请求访问其他服务的票据授予服务（TGS）票据，攻击者可滥用此机制进行权限提升。模型上下文协议（MCP）是由 Anthropic 推出的开放标准，可在数据源与 AI 驱动的工具之间建立安全的双向连接。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/shadow-credentials">Shadow Credentials | Red Team Notes</a></li>
<li><a href="https://www.notsoshant.io/blog/attacking-kerberos-constrained-delegation/">Attacking Kerberos : Constrained Delegation</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Metasploit</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Privilege Escalation</span> <span class="tag-badge">AI Integration</span></p>

---

<a id="item-8"></a>

## [中国网信办就分布式数字身份互通互认规定征求意见](https://www.cac.gov.cn/2026-06/18/c_1783525605384124.htm) ⭐️ 8.0/10

6 月 18 日，国家网信办发布《促进分布式数字身份互通互认应用规定（征求意见稿）》，面向社会公开征求意见，截止日期为 7 月 18 日。征求意见稿提出依托国家区块链网络建设"身份链"，建立分布式数字身份公共服务体系，推动金融、交通、海关、税务、数字人民币等领域跨平台身份互通互认。 这份征求意见稿代表了中国政府对区块链身份基础设施的重大国家级背书，有望以前所未有的规模影响关键经济领域的 DID 采用。如果正式实施，将建成全球规模最大的政府支持分布式身份系统之一，从根本上改变中国个人、机构和工业设备跨平台认证和管理身份的方式。 征求意见稿明确分布式数字身份由标识符、密钥、可验证凭证和可验证声明构成，可用于登录认证、数据授权等场景。境内外个人、机构和工业设备均可自愿申请注册，相关机构须履行数据安全和个人信息保护义务。

telegram · zaihuapd · 6月19日 01:39

**背景**: 分布式数字身份（DID）利用以区块链为主的分布式基础设施，将身份控制权从中心化机构转移到用户自身，使个人获得对身份和数据的主权。可验证凭证（VC）是通过数字签名实现的证明，无需依赖中心化注册机构即可实现安全、可移植、快速验证的身份声明。身份链将现有数字身份技术与区块链融合，利用可验证凭证的选择性披露和默克尔树技术，在验证身份的同时保护用户隐私。中国至少自 2022 年起即开始探索建设权威可信数字身份链，将其作为更广泛数字基础设施战略的重要组成部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/689030887">【深度】DID分布式数字身份(1/5)--什么是DID - 知乎</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/357716225">可验证凭证 – 数字身份的核心 - 知乎</a></li>
<li><a href="https://www.zhihu.com/question/549950311">如何看待：我国将建权威可信数字身份链？ - 知乎</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">digital-identity</span> <span class="tag-badge">blockchain</span> <span class="tag-badge">regulation</span> <span class="tag-badge">China</span> <span class="tag-badge">DID</span></p>

---

<a id="item-9"></a>

## [美国就顶级 EUV 光刻机疑似流入中国向 ASML 施压](https://www.bloomberg.com/news/articles/2026-06-19/us-tells-asml-it-s-concerned-china-may-have-top-chip-tool) ⭐️ 8.0/10

美国商务部长卢特尼克近期向 ASML 高管表示，怀疑一台顶级极紫外光刻机（EUV）可能已流入中国，违反了美方主导的出口管制。ASML 坚决否认该指控，强调全球运行的 314 台 EUV 设备均不在中国。 这一争端标志着中美半导体紧张局势的重大升级，并可能损害美欧在技术出口管制上的合作。它还可能推动美国国会正在审议的、旨在收紧对华芯片设备出口限制的法案。 美方高级官员声称掌握 ASML 未善意行事的证据，包括对华出口 EUV 相关运输设备，但拒绝出示该证据。ASML 已散发内部文件以自证合规，并反驳称从未向中国出口任何 EUV 专用组件。

telegram · zaihuapd · 6月19日 03:09

**背景**: 极紫外光刻（EUV）是由荷兰 ASML 独家生产的前沿技术，使用波长仅为 13.5 纳米的光在芯片上印制极微小的特征，是推动摩尔定律持续发展的关键。自特朗普第一任政府以来，美国一直禁止 ASML 向中国出售 EUV 设备，作为限制中国获取先进芯片制造能力更广泛战略的一部分。EUV 设备极其昂贵且复杂——每台造价高达数亿美元——使其成为全球芯片供应链中的关键瓶颈。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcrunch.com/2026/06/19/the-us-says-asmls-top-chip-tool-may-be-in-china-asml-says-it-isnt/">The US says ASML’s top chip tool may be in China. ASML says ...</a></li>
<li><a href="https://www.dutchnews.nl/2026/06/asml-denies-us-accusation-an-advanced-machine-reached-china/">ASML denies US accusation an advanced machine reached China</a></li>
<li><a href="https://www.asml.com/en/products/euv-lithography-systems">EUV lithography systems – Products | ASML</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">ASML</span> <span class="tag-badge">Export Controls</span> <span class="tag-badge">EUV Lithography</span></p>

---

<a id="item-10"></a>

## [Midjourney 宣布进军医疗领域，将于 2027 年推出全身超声波扫描仪与水疗中心](https://www.midjourney.com/medical/blogpost) ⭐️ 8.0/10

Midjourney 成立了医疗部门并宣布了“Midjourney Scanner”，这是一款旨在约 60 秒内生成高精度 3D 图像的全身超声波扫描仪。公司计划于 2027 年在旧金山开设首家配套的水疗与扫描中心，并设定了到 2031 年在全球部署 5 万台设备的宏大目标。 这一公告标志着一家以 AI 图像生成闻名的公司令人惊讶地向实体医疗硬件领域进行了战略转移。如果成功，该技术可能会普及快速、无创的全身成像，极大地提高获取详细身体成分监测和预防性健康诊断的便利性。 该扫描仪利用约 50 万个微型传感器在浅水池中发射并接收声波，以获取身体的垂直切面图像。尽管公司声称最终扫描时间为 60 秒且速度可与 MRI 媲美，但报道指出其目前的原型机完成一次扫描仍需约 20 分钟。

telegram · zaihuapd · 6月19日 04:00

**背景**: 传统超声波技术利用高频声波测量振动在组织中的回声，从而生成内部结构的 2D 图像。Midjourney 扫描仪建立在新兴的超声断层扫描（UST）系统之上，该系统使用环形传感器捕捉身体的横截面，以评估肌肉、脂肪和骨骼的组成。与 MRI 机器不同，超声成像高度普及且无创，使其成为常规身体成分评估的首选方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theverge.com/ai-artificial-intelligence/952011/midjourney-medical-ai-ultrasound-scan">Midjourney goes from generating cat images to full-body ultrasound scans</a></li>
<li><a href="https://www.techtimes.com/articles/318628/20260618/midjourney-full-body-ultrasound-scanner-targets-mri-speed-prototype-runs-20-minutes.htm">Midjourney Full-Body Ultrasound Scanner Targets MRI Speed, But Prototype Runs 20 Minutes</a></li>
<li><a href="https://www.caltech.edu/about/news/scanning-the-body-with-sound">Scanning the Body with Sound - www.caltech.edu</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Midjourney</span> <span class="tag-badge">Medical Imaging</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Healthcare Tech</span> <span class="tag-badge">Ultrasound</span></p>

---