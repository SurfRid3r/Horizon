---
layout: default
title: "Horizon Summary: 2026-07-07 (ZH)"
date: 2026-07-07
lang: zh
---

> 从 63 条内容中筛选出 13 条重要资讯。

---

1. [Januscape 漏洞：潜伏 16 年的 KVM 虚拟机逃逸缺陷被披露](#item-1) ⭐️ 10.0/10
2. [欧盟“聊天控制”大规模监控法案在议会取得进展](#item-2) ⭐️ 9.0/10
3. [马斯克宣布 xAI 解散，以 SpaceXAI 品牌并入 SpaceX](#item-3) ⭐️ 9.0/10
4. [中国计划五年投入 2 万亿元建设全国算力网络](#item-4) ⭐️ 9.0/10
5. [Anthropic 发布 Claude Sonnet 5：迄今代理能力最强的 Sonnet 模型](#item-5) ⭐️ 9.0/10
6. [欧盟'聊天控制'立法威胁加密与隐私](#item-6) ⭐️ 8.0/10
7. [微软据称解雇了 id Software 的 idTech 引擎团队](#item-7) ⭐️ 8.0/10
8. [通过 Machine DPAPI 恢复活动的 ADFS 签名密钥](#item-8) ⭐️ 8.0/10
9. [拒绝背后：通过行为监控确定 LLM 护栏激活](#item-9) ⭐️ 8.0/10
10. [Windows 11 Bug 可吞 513 GB 硬盘空间](#item-10) ⭐️ 8.0/10
11. [DeepSeek 自研 AI 芯片以减少对英伟达和华为的依赖](#item-11) ⭐️ 8.0/10
12. [中国商务部拟限制国产顶尖 AI 模型对外出口](#item-12) ⭐️ 8.0/10
13. [微信记录导出工具 WeFlow 遭 GitHub DMCA 下架](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Januscape 漏洞：潜伏 16 年的 KVM 虚拟机逃逸缺陷被披露](https://github.com/V4bel/Januscape) ⭐️ 10.0/10

安全研究人员披露了“Januscape”（CVE-2026-53359）漏洞，这是一个由影子内存管理单元中的释放后使用缺陷引起的严重 KVM/x86 虚拟机逃逸漏洞。这个潜伏了 16 年的缺陷影响了 2010 年至 2026 年 6 月的 Linux 内核，并且已公开了可同时在 Intel 和 AMD 平台上触发宿主机内核恐慌的概念验证代码。 该漏洞允许恶意客户机逃逸并攻击宿主机，严重破坏了公有云等多租户环境的隔离边界。它尤其关键，因为这是首个已知同时影响 Intel 和 AMD 平台的 KVM 逃逸漏洞，对依赖 KVM 虚拟化的基础设施提供商构成了紧迫的安全威胁。 该漏洞利用了影子页表处理中的释放后使用缺陷，不仅能实现从客户机到宿主机的攻击，还能在 RHEL 等发行版中实现本地权限提升至 root。值得注意的是，该漏洞多年来未被检测到，并且此前曾被用作 Google kvmCTF 比赛中的零日漏洞攻击。

telegram · zaihuapd · 7月7日 10:14

**背景**: KVM（基于内核的虚拟机）依赖于影子页表（影子 MMU 的一部分）等内存虚拟化技术，以安全地将客户机的虚拟内存地址映射到宿主机的物理地址。“释放后使用”漏洞是指程序意外尝试访问已被释放的内存，攻击者可利用此漏洞执行任意代码。Google 的 kvmCTF 是一个旨在识别和修复 KVM 管理程序中关键漏洞的漏洞赏金计划，对完整的虚拟机逃逸提供高达 25 万美元的奖励。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ryanstan.com/mmu-virtualization-shadow-page-tables.html">MMU virtualization: shadow page tables</a></li>
<li><a href="https://encyclopedia.kaspersky.com/glossary/use-after-free/">What is Use-After-Free? | Kaspersky IT Encyclopedia</a></li>
<li><a href="https://deepwiki.com/google/security-research/2.3-kvmctf">kvmCTF | google /security-research | DeepWiki</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">KVM</span> <span class="tag-badge">Virtual Machine Escape</span> <span class="tag-badge">Linux Kernel</span> <span class="tag-badge">Cloud Computing</span></p>

---

<a id="item-2"></a>

## [欧盟“聊天控制”大规模监控法案在议会取得进展](https://www.heise.de/en/news/Showdown-in-Strasbourg-The-unexpected-return-of-Chat-Control-1-0-11356680.html) ⭐️ 9.0/10

备受争议的欧盟“聊天控制”法规（正式名称为《打击儿童性虐待条例》，简称 CSAR）已在欧洲议会通过了关键的第一轮投票，并将于周四进行决定性的二读投票。该法案将要求消息平台扫描私人通信，包括端到端加密消息，以检测儿童性虐待材料。 如果获得通过，该法规将实质性瓦解 WhatsApp、Signal 和 Threema 等平台上的端到端加密，评论人士称这将是民主国家数字隐私领域的一次“历史性断裂”。该立法还将树立全球先例——一旦主流服务商遵守了欧盟的扫描要求，全球其他政府预计也会提出同样的访问权限，从而可能使大规模监控私人通信成为常态。 二读的程序规则赋予了支持者巨大的战术优势：修正案或否决需要全体议员的绝对多数即 361 票，而通过则只需出席议员的简单多数。由于投票日恰逢夏季休假期前的最后一天，许多议员已经离开，反对者要凑齐阻止该法案所需的约 60 张额外反对票面临极大困难。

hackernews · miroljub · 7月7日 15:16 · [社区讨论](https://news.ycombinator.com/item?id=48819008)

**背景**: “聊天控制”是《预防和打击儿童性虐待条例》的非正式名称，由欧盟内政事务专员 Ylva Johansson 于 2022 年 5 月 11 日首次提出。虽然其公开目标是打击儿童性虐待材料（CSAM），但该法规将强制要求采用客户端扫描技术，即在消息加密和传输之前扫描其内容，从而实质性瓦解端到端加密。隐私倡导者、网络安全专家和数字权利组织警告说，建立此类扫描基础设施将引入超出其预定用途的被利用漏洞，从根本上危害所有用户私人通信的安全。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chat_Control">Chat Control - Wikipedia</a></li>
<li><a href="https://fightchatcontrol.eu/">Fight Chat Control - Protect Digital Privacy in the EU</a></li>
<li><a href="https://www.heise.de/en/news/Chat-control-More-and-more-warnings-about-the-weakening-of-secure-encryption-10733664.html">Chat control : More and more warnings about the... | heise online</a></li>

</ul>
</details>

**社区讨论**: 评论者对他们所认为的反民主战术表达了深切不满，指出投票的时机和程序规则蓄意偏袒法案的支持者。多位用户强调了全球连锁效应，警告一旦服务商遵守了欧盟的命令，其他政府必然会要求获得同样的监控能力。一位评论者分享了资源网站，供公民查询其所在选区欧洲议员的投票记录，还有人引用了 Jean-Claude Juncker 等政治人物的话来说明推动不受欢迎立法的渐进式策略。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">EU policy</span> <span class="tag-badge">encryption</span> <span class="tag-badge">digital rights</span></p>

---

<a id="item-3"></a>

## [马斯克宣布 xAI 解散，以 SpaceXAI 品牌并入 SpaceX](https://x.com/i/status/2074214064746832060) ⭐️ 9.0/10

马斯克确认 xAI 将作为独立公司解散，更名为 SpaceXAI，成为 SpaceX 的 AI 产品部门。在 SpaceX 收购 xAI 之后，该公司在与 Anthropic 达成的计算合作公告中首次使用了新名称。 此次重组取消了 xAI 的独立品牌地位，将马斯克的 AI 雄心直接整合到 SpaceX 旗下，可能重塑 AI 行业的竞争格局。此举标志着马斯克商业帝国内部航天技术与人工智能技术的深度融合。 xAI 品牌及其独立公司实体将不复存在，其技术和产品（如 Grok 聊天机器人）将被纳入 SpaceX 生态系统。此消息与 xAI 和 Anthropic（以 Claude 大语言模型闻名的 AI 竞争对手）新达成的计算合作公告同时出现。

telegram · zaihuapd · 7月7日 02:30

**背景**: xAI 是马斯克创立的人工智能公司，以开发 Grok 聊天机器人闻名，该产品具备语音交互、图像生成、实时搜索和高级推理能力。SpaceX（太空探索技术公司）是马斯克旗下的航天企业，专注于太空运输和探索。Anthropic 是一家成立于 2021 年的 AI 安全初创公司，由前 OpenAI 研究员创立，以开发 Claude 系列大语言模型而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://x.ai/grok">Grok — Truth-seeking AI Chatbot with Voice & Image Generation | xAI</a></li>
<li><a href="https://k.sina.com.cn/article_7857201856_1d45362c00190650xi.html?from=tech">有人了解 Anthropic 公 司 吗?它家的 AI... | 新浪网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">xAI</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">马斯克</span> <span class="tag-badge">企业重组</span></p>

---

<a id="item-4"></a>

## [中国计划五年投入 2 万亿元建设全国算力网络](https://t.me/zaihuapd/42399) ⭐️ 9.0/10

中国正计划未来五年投入约 2 万亿元（约 2950 亿美元），在全国建设互联数据中心网络，主要设施由国有电信企业运营。该计划要求至少八成的 AI 芯片与技术来自华为等本土供应商，以减少对英伟达、AMD 等美国企业的依赖。 这是有史以来规模最大的政府主导 AI 基础设施项目之一，将从根本上重塑全球半导体和云计算格局。要求至少八成使用国产芯片的规定，标志着中国科技自主战略的果断加速，可能对华为等国产芯片厂商和外国技术供应商的市场格局产生重大影响。 该计划是北京"六网"基础设施计划的关键一环，旨在将分散的区域算力资源整合为统一的全国性网络。中国电信、中国联通等运营商已开始推出算力"token 套餐"，将 AI 算力像移动数据套餐一样打包销售，以降低大规模 AI 应用的使用门槛。

telegram · zaihuapd · 7月7日 04:45

**背景**: 算力网络"是一种将不同地点的分布式计算资源通过高速网络连接起来、作为一台虚拟计算机统一管理的概念，常被描述为"Network As A Computer"（网络即计算机）。这使得用户可以按需获取算力，而无需拥有物理硬件。"六网"计划是中国全面推进数字与实体基础设施现代化战略的一部分。近期，中国三大运营商已推出最低 5.99 至 9.9 元/月的 token 算力套餐，使个人用户和中小企业也能便捷地获取 AI 算力资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://36kr.com/p/1858434719471494">到底什么是“ 算 力 网 络 ”？ -36氪</a></li>
<li><a href="https://finance.sina.cn/tech/2026-04-21/detail-inhvheze6850693.d.html?fromtech=1&vt=4">算 力 套 餐 亲民上线——北京移动 算 力 Token 套 餐 开售！| 数据安全|Qwen...</a></li>
<li><a href="https://www.guandian.cn/article/20260422/556949.html">中国移动北京公司推出个人 算 力 Token 套 餐 最低5.99元起 - 观点网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">China</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Technological Sovereignty</span> <span class="tag-badge">Cloud Computing</span></p>

---

<a id="item-5"></a>

## [Anthropic 发布 Claude Sonnet 5：迄今代理能力最强的 Sonnet 模型](https://t.me/zaihuapd/42404) ⭐️ 9.0/10

Anthropic 发布了 Claude Sonnet 5，称其为迄今代理能力最强的 Sonnet 模型，能够进行规划、使用浏览器和终端等工具并自主运行。据报道，它在推理、工具使用、编码和知识工作方面强于 Sonnet 4.6，性能接近 Opus 4.8，但价格更低。 此次发布缩小了 Anthropic 中端 Sonnet 与旗舰级 Opus 模型之间的差距，以更低的价格让用户获得接近顶级的代理能力。通过将 Sonnet 5 作为 Free 和 Pro 套餐的默认模型，Anthropic 正在将高级自主代理能力确立为日常 AI 交互的新基准。 Claude Sonnet 5 即日起面向所有套餐开放，并已成为 Free 和 Pro 用户的默认模型。Claude Platform 的限时优惠价截至 2026 年 8 月 31 日，每百万输入 token 为 2 美元，输出 token 定价也低于 Opus 4.8。

telegram · zaihuapd · 7月7日 09:02

**背景**: 代理型 AI（Agentic AI）是指能够自主执行多步骤任务的系统，例如浏览网页、运行终端命令、串联工具调用以完成有意义的工作，而不仅仅是生成文本。在 Anthropic 的产品线中，Opus 是针对最困难编码和长周期任务优化的高端层级，而 Sonnet 是在性能与成本之间取得平衡的中端层级。根据对比基准测试，Opus 4.8 在 SWE-bench Pro 上仍以 69.2% 对 63.2% 领先于 Sonnet 5，但 Sonnet 5 在大多数工作负载下提供了更高的性价比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.remoteopenclaw.com/blog/claude-opus-vs-sonnet">Claude Opus vs Sonnet : Opus 4.8 vs Sonnet ... | Remote OpenClaw</a></li>
<li><a href="https://yingtu.ai/en/blog/opus-sonnet">Claude Opus vs Sonnet : Which Claude Model Should You... | YingTu</a></li>
<li><a href="https://ai.plainenglish.io/agentic-ai-separating-capability-from-agent-washing-2a685daa8c3a">Agentic AI : Separating Capability from Agent Washing | by Nathalie...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-6"></a>

## [欧盟'聊天控制'立法威胁加密与隐私](https://fightchatcontrol.eu/chat-control-overview) ⭐️ 8.0/10

该文章全面概述了欧盟聊天控制 1.0 和 2.0 立法，追溯了从 2021 年最初暂时豁免 ePrivacy 指令到更具扩张性的聊天控制 2.0 提案的时间线。聊天控制 1.0 已经到期，但据报道 Google、Meta、Microsoft 和 Snap 等主要科技公司仍在自愿继续扫描私人消息。 聊天控制是全球范围内对端到端加密（E2EE）最重大的威胁之一，因为它将以打击儿童性虐待材料（CSAM）为名强制对私人通信进行大规模监控。如果通过，它可能开创一个破坏全球数字隐私的先例，从根本上改变数十亿人使用的加密消息平台的信任模型。 扫描加密消息的拟议机制是客户端扫描（CSS），安全专家普遍认为它与真正的端到端加密根本不兼容。聊天控制 2.0 超越了 1.0 的自愿框架，试图强制要求扫描，而欧盟议会最近在隐私倡导者和包括 Vitalik Buterin 在内的科技领袖的强烈反对下未能通过该立法。

hackernews · gasull · 7月7日 14:23 · [社区讨论](https://news.ycombinator.com/item?id=48818311)

**背景**: 端到端加密（E2EE）确保只有发送方和接收方能够阅读消息内容，即使是服务提供商也无法访问明文数据。欧盟的 ePrivacy 指令通常禁止拦截私人通信，这创造了启用聊天控制 1.0 所需的'暂时豁免'。客户端扫描试图通过在用户设备上加密和发送内容之前进行扫描来解决加密困境，但研究人员已经证明这种方法引入了可被利用的漏洞，并实际上破坏了 E2EE 的安全保证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fightchatcontrol.eu/chat-control-overview">Chat Control 1 . 0 vs 2 . 0 - Fight Chat Control</a></li>
<li><a href="https://www.patrick-breyer.de/en/posts/chat-control/?ref=cyberlaw.stanford.edu">Chat Control : The EU ’s CSAM scanner proposal – Patrick Breyer</a></li>
<li><a href="https://www.internetsociety.org/resources/doc/2023/client-side-scanning/">Client - Side Scanning - Internet Society</a></li>

</ul>
</details>

**社区讨论**: 评论者绝大多数反对该立法，多位用户担心这是以保护儿童为伪装的监控国家越权行为。技术讨论集中在扫描 E2EE 的根本不可能性——除非实施中间人解密或强制设备端扫描，两者都会损害安全性。一位用户指出具有讽刺意味的是，即使聊天控制 1.0 到期后，主要科技公司仍自愿继续扫描，引发了对执法和企业遵守隐私指令的质疑。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">Surveillance</span> <span class="tag-badge">Encryption</span> <span class="tag-badge">Policy</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-7"></a>

## [微软据称解雇了 id Software 的 idTech 引擎团队](https://gamefromscratch.com/microsoft-fire-idtech-team-at-id-software/) ⭐️ 8.0/10

有传言称微软已解散了 id Software 的 idTech 引擎开发团队，这可能意味着该公司将放弃自研引擎的战略转向。该报道缺乏确凿证据，但在游戏和开发者社区内引发了广泛讨论。 如果属实，这一举动代表了游戏行业格局的重大转变——自研引擎如 idTech 正日益被 Unreal Engine 5 所取代。这引发了人们对引擎垄断、开发者商品化以及推动《毁灭战士》和《德军总部》等经典系列的数十年专业技术积累流失的担忧。 原始文章并未提供 idTech 团队被专门裁撤的确凿证据，部分评论者因此质疑报道的事实依据。更广泛的背景是微软在收购动视暴雪后持续进行 Xbox 业务重组，其中包括多个工作室的大规模裁员。

hackernews · bauc · 7月7日 15:33 · [社区讨论](https://news.ycombinator.com/item?id=48819244)

**背景**: idTech 是 id Software 开发的一系列自研游戏引擎，其根源可追溯到最初的 Doom 引擎，并经历了 id Tech 5 和 id Tech 6 等多次迭代。这些引擎驱动了包括《狂怒》、《德军总部：新秩序》和现代版《毁灭战士》重启系列在内的标志性作品。这些引擎历来以推动技术边界著称，John Carmack 在 3D 图形和引擎架构方面的开创性工作影响了整个游戏行业。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Id_Tech">id Tech - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Id_tech_5_engine">Id tech 5 engine</a></li>

</ul>
</details>

**社区讨论**: 评论者深切担忧此举反映了行业的更广泛趋势——用熟悉 Unreal Engine 5 的低成本承包商取代专业的引擎开发者。有人认为微软将引擎主导权拱手让给 Epic Games 是一个战略错误，也有人指出缺乏证据并认为重组最终可能有利于被困在企业官僚体制中的人才。反复出现的主题是企业削减成本与保护被收购工作室独特技术文化之间的矛盾。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Game Development</span> <span class="tag-badge">idTech</span> <span class="tag-badge">Unreal Engine</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-8"></a>

## [通过 Machine DPAPI 恢复活动的 ADFS 签名密钥](https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi/) ⭐️ 8.0/10

Mandiant 发现，当手动轮换 ADFS 证书时，配置漂移会将活动的签名密钥留在 Machine DPAPI 中暴露出来，而 WID 数据库仅包含过期的“幽灵”证书。攻击者可以从计算机的加密存储中提取此活动密钥来伪造 SAML 令牌，同时避免与受严格监控的进程（如 LSASS）进行交互。 这种技术使攻击者能够执行高度隐蔽的黄金 SAML 攻击，绕过多因素身份验证 (MFA) 并访问如 Microsoft 365 等基于 SAML 联合的应用程序。由于该方法避开了诸如监控 LSASS 内存等标准检测机制，它对企业身份安全构成了重大且隐蔽的威胁。 当 AutoCertificateRollover 被禁用时会出现此漏洞，导致活动密钥存储在系统的机器级加密存储中，而不是在 ADFS 数据库中更新。如果攻击者仅从 WID 数据库提取密钥，Entra ID 将由于签名材料无效而拒绝伪造的令牌，并返回 AADSTS500172 错误。

rss · Google Threat Intelligence · 7月7日 14:00

**背景**: Active Directory 联合服务 (ADFS) 是一种 Microsoft 软件组件，它通过跨安全边界共享身份信息来提供单点登录功能。当攻击者窃取 ADFS 令牌签名证书的私钥以伪造 SAML 令牌，从而允许他们冒充任何用户时，就会发生黄金 SAML 攻击。Windows 数据保护 API (DPAPI) 是用于保护敏感数据的加密接口，其中 Machine DPAPI 专门使用 DPAPI_SYSTEM LSA 机密在系统级别保护密钥。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence/recovering-active-adfs-signing-keys-machine-dpapi/">Recovering Active ADFS Signing Keys via Machine DPAPI</a></li>
<li><a href="https://netwrix.com/en/cybersecurity-glossary/cyber-security-attacks/golden-saml-attack/">Golden SAML attack : Forged access to hybrid environments | Netwrix</a></li>
<li><a href="https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/configure-ts-td-certs-ad-fs">Obtain and configure token signing and token... | Microsoft Learn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">ADFS</span> <span class="tag-badge">DPAPI</span> <span class="tag-badge">Golden SAML</span></p>

---

<a id="item-9"></a>

## [拒绝背后：通过行为监控确定 LLM 护栏激活](https://paper.seebug.org/3496) ⭐️ 8.0/10

William Hackett 和 Peter Garraghan 发表的一篇新研究论文引入了一种行为监控方法，用于确定大型语言模型（LLM）护栏何时被激活。该方法专门设计用于帮助安全研究人员在对生产级 AI 系统进行黑盒对抗模拟时识别护栏触发机制。 这项研究解决了一个关键盲点：如果不了解防御机制是如何以及何时被触发的，安全测试人员就无法有效地评估或绕过这些防御措施。通过在封闭的黑盒环境中提供对护栏激活情况的可见性，该研究显著增强了 AI 安全审计能力，并帮助开发者加强模型以抵御现实世界中的恶意提示。 该方法侧重于监控可观察的行为信号，而不是依赖内部系统日志或对模型架构的白盒访问权限。它专门针对黑盒测试的局限性，使研究人员能够区分模型的标准对话拒绝和显式的护栏干预。

rss · Seebug漏洞社区 · 7月7日 08:33

**背景**: LLM 护栏是部署在用户和基础模型之间的安全控制系统，用于监控和过滤恶意输入或不安全的输出。在网络安全领域，黑盒对抗模拟是指攻击者或研究人员在没有任何关于系统内部工作原理、模型权重或特定防御配置的先验知识的情况下对系统进行测试。这是一种非常贴近现实的测试方法，但研究人员通常难以判断 AI 的拒绝响应是由于主动的安全护栏触发的，还是仅仅因为模型自身的局限性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/data-science/safeguarding-llms-with-guardrails-4f5d9f57cff2">Safeguarding LLMs with Guardrails | by Aparna Dhinakaran | Medium</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9601915/">An Optimized Black - Box Adversarial Simulator Attack Based on...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Safety</span> <span class="tag-badge">LLM Guardrails</span> <span class="tag-badge">Adversarial Simulation</span> <span class="tag-badge">Behavioral Monitoring</span> <span class="tag-badge">Cybersecurity</span></p>

---

<a id="item-10"></a>

## [Windows 11 Bug 可吞 513 GB 硬盘空间](https://www.windowslatest.com/2026/07/06/microsoft-admits-a-windows-11-bug-is-eating-up-to-500gb-of-storage-verify-if-you-are-affected/) ⭐️ 8.0/10

Windows 11 的 Capability Access Manager 出现存储 Bug，其 WAL 文件 CapabilityAccessManager.db-wal 可能异常膨胀，已有用户报告磁盘占用从几十 GB 到最高约 513 GB 不等。微软已承认该问题，在 2026 年 6 月可选更新 KB5095093 中进行了部分缓解，并计划在 7 月补丁中推出永久修复。 该 Bug 会悄无声息地吞噬大量磁盘空间，可能导致系统不稳定、更新失败或应用程序崩溃，影响所有 Windows 11 用户。由于 Capability Access Manager 是追踪隐私敏感权限的核心系统服务，此问题影响范围广泛，也凸显了主动存储监控的重要性。 根本原因是 WAL（预写式日志）文件未能正常执行检查点操作，即事务日志没有按预期合并回主数据库 CapabilityAccessManager.db 中。作为临时解决方案，用户可以停止 Capability Access Manager 服务后安全删除膨胀的 WAL 文件，但在安装 7 月永久补丁之前问题可能复发。

telegram · zaihuapd · 7月7日 06:34

**背景**: 预写式日志（WAL）是一种标准的数据库技术，用于确保原子性和持久性——它在将更改写入主数据库之前，先记录到只追加的辅助日志文件中，以实现崩溃恢复。在正常运行情况下，WAL 文件会定期执行检查点操作并合并回主数据库，从而保持较小的文件体积。Capability Access Manager 是一项 Windows 系统服务，负责追踪和记录应用程序对摄像头、麦克风、位置和屏幕捕获等隐私敏感资源的访问，并将数据存储在 SQLite 数据库中。当检查点过程失败时，WAL 文件会无限增长，消耗大量磁盘空间。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Write-ahead_logging">Write - ahead logging - Wikipedia</a></li>
<li><a href="https://www.thewindowsclub.com/capability-access-manager-taking-up-storage-in-windows-11">Capability Access Manager taking up storage in Windows 11</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Windows 11</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Bug</span> <span class="tag-badge">Storage Management</span> <span class="tag-badge">System Administration</span></p>

---

<a id="item-11"></a>

## [DeepSeek 自研 AI 芯片以减少对英伟达和华为的依赖](https://www.reuters.com/world/china/chinas-deepseek-developing-its-own-ai-chip-sources-say-2026-07-07/) ⭐️ 8.0/10

中国 AI 公司 DeepSeek 约一年前开始研发专注于推理的自有 AI 芯片，目前已与芯片设计、代工和存储公司接洽，并在近几个月私下大量招募芯片设计工程师。该芯片专注于推理阶段，即已训练好的模型为用户生成回答的环节，而非模型训练阶段。 这是 DeepSeek 在美国持续收紧 AI 芯片出口管制背景下争取供应链自主权的重大战略举措，旨在同时减少对英伟达海外 GPU 和华为国产昇腾芯片的依赖。若成功，DeepSeek 有望成为垂直整合的 AI 公司，并进一步加剧中 国 AI 芯片生态系统日益激烈的竞争格局。 DeepSeek 此前的模型依赖英伟达 H800 芯片（美国最初出口管制后专为中国市场定制的版本）和华为昇腾芯片。该项目仍处于早期阶段，创始人梁文锋在 2024 年一次罕见采访中公开承认芯片管制是公司面临的重大挑战。

telegram · zaihuapd · 7月7日 11:08

**背景**: AI 芯片通常分为两大类：用于构建模型的训练芯片和用于在生产环境中运行已训练模型的推理芯片。美国政府持续收紧对华高性能 AI 芯片的出口管制，自 2023 年 10 月起英伟达的 H800 和 A800 已无法对华出口。华为昇腾系列（包括 910B 和 910C）已成为领先的国产替代方案，华为的芯片路线图已规划至 2028 年。推理芯片的需求已超越训练芯片，成为数据中心算力的新主力，使其成为日益关键的市场领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cloud.tencent.com/developer/article/2359846">腾讯刘炽平：已储备大量 H 800 ...</a></li>
<li><a href="https://www.53ai.com/news/zhinengyingjian/2024110882904.html">AI Phone... - 53 AI - AI 知识库|大模型知识库|大模型 训 练 |智能体开发</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">硬件</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">中国科技</span></p>

---

<a id="item-12"></a>

## [中国商务部拟限制国产顶尖 AI 模型对外出口](https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07/) ⭐️ 8.0/10

路透社 7 月 7 日独家报道，中国商务部近一个月内已召集阿里巴巴、字节跳动及智谱 AI 等头部企业开会，讨论限制最先进的国产 AI 模型向海外提供访问，包括尚未发布的模型。拟议措施包括将 AI 核心技术的泄露或窃取纳入国家安全法治罪，并考虑限制境外资本投资国内 AI 初创企业。 若政策落地，将通过限制国际社会获取中国最先进模型的能力来重塑全球 AI 竞争格局，并可能引发其他国家的对等反制措施。该政策将显著影响中国 AI 企业的出海战略，以及依赖中国 AI API 和服务的外国开发者和企业。 限制范围仍在商讨中，可能仅适用于未来发布的新模型，最终是否落地尚不确定。讨论还涉及控制跨境 API 访问和开源模型分发的可行性，这在执法层面面临巨大挑战，类似于美国在《出口管理条例》下监管开源 AI 权重时所遇到的困境。

telegram · zaihuapd · 7月7日 11:42

**背景**: 中国国产 AI 领域发展迅速，阿里巴巴（通义千问）、字节跳动（豆包）和智谱 AI（GLM 系列）等公司开发的大语言模型在性能上已具备全球竞争力。智谱 AI 源自清华大学，是国内估值最高的 AI 初创公司之一，提供多种大模型的 API 接口。美国此前已尝试将开源 AI 模型纳入《出口管理条例》（EAR）的管辖范围，但在追踪模型权重和衍生项目方面面临执法困难。这些动向反映了日益加剧的全球技术脱钩趋势，中美两国均将先进 AI 视为受国家安全管控的战略资产。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://segmentfault.com/a/1190000046530687">人工 智 能 - 国产五 大 AI 模 型 哪家强？ DeepSeek... - SegmentFault 思否</a></li>
<li><a href="https://ipc.court.gov.cn/zh-cn/news/view-5766.html">ipc.court.gov.cn/zh-cn/news/view-5766.html</a></li>
<li><a href="https://open.bigmodel.cn/">Zhipu ai open platform</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI政策</span> <span class="tag-badge">技术出口限制</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">地缘政治</span> <span class="tag-badge">大模型</span></p>

---

<a id="item-13"></a>

## [微信记录导出工具 WeFlow 遭 GitHub DMCA 下架](https://github.com/hicccc77/WeFlow) ⭐️ 8.0/10

7 月 7 日，用于查看、分析和导出微信聊天记录的本地工具 WeFlow 的 GitHub 仓库在收到 DMCA（数字千年版权法）下架通知后被移除。目前该仓库已被删除，但仍有一个存档链接可供参考。 此事件凸显了用户数据所有权与平台控制权之间持续存在的紧张关系，特别是在像微信这样的封闭生态系统中。它也强调了开源开发者在为专有应用创建逆向工程或数据提取工具时所面临的重大法律风险。 WeFlow 提供了生成年度聊天报告、群聊画像、消息防撤回功能以及 HTTP API 等特性。DMCA 下架意味着 GitHub 遵从了版权侵权的申诉，除非开发者成功提出反通知，否则该仓库将继续无法访问。

telegram · zaihuapd · 7月7日 15:19

**背景**: 微信是一款占主导地位的即时通讯平台，原生并未向用户提供导出个人聊天记录的强大工具，从而催生了对第三方提取工具的强烈需求。DMCA 的“通知-下架”机制为版权持有者提供了一种法律手段，用于要求 GitHub 等在线平台移除涉嫌侵权的材料。此外，微信的防撤回功能通过拦截服务器发送给客户端的“撤回”指令来工作，以确保原始消息保持可见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/1887554520982214102">跨境卖家必读：美国DMCA“通知-下架-反通知”规则详解</a></li>
<li><a href="https://blog.csdn.net/gitblog_00493/article/details/157012585">深度解析微信防撤回技术：从原理到实战的完整指南-CSDN博客</a></li>
<li><a href="https://www.downxia.com/downinfo/512641.html">weflow 微 信 导 出 | WeFlow ...</a></li>

</ul>
</details>

**社区讨论**: 该新闻在社区频道内被分享，显示出用户对数据管理和恢复工具的强烈关注。虽然没有提供具体评论，但热门工具的下架通常会引发关于数字权利、对开源开发的寒蝉效应以及企业对用户数据控制的讨论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">WeChat</span> <span class="tag-badge">DMCA</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Data Privacy</span> <span class="tag-badge">Takedown</span></p>

---