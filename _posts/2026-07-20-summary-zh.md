---
layout: default
title: "Horizon Summary: 2026-07-20 (ZH)"
date: 2026-07-20
lang: zh
---

> 从 35 条内容中筛选出 15 条重要资讯。

---

1. [WordPress“wp2shell”RCE 漏洞链遭野外主动利用](#item-1) ⭐️ 10.0/10
2. [黑客清除了罗马尼亚整个土地登记数据库](#item-2) ⭐️ 9.0/10
3. [WordPress 远程代码执行漏洞（CVE-2026-63030/CVE-2026-60137）通告](#item-3) ⭐️ 9.0/10
4. [Hugging Face 披露 AI 智能体攻击事件，商业大模型拒绝协助取证](#item-4) ⭐️ 9.0/10
5. [Fast 1.x 被曝无 gadget 高危 RCE 漏洞](#item-5) ⭐️ 9.0/10
6. [智谱建成全国产芯片大型数据中心](#item-6) ⭐️ 9.0/10
7. [中国的开放权重人工智能战略正在取得胜利](#item-7) ⭐️ 8.0/10
8. [研究发现 arXiv 上 65% 的计算机科学论文包含 AI 生成内容](#item-8) ⭐️ 8.0/10
9. [Firefox 合并 Vulkan 视频解码支持](#item-9) ⭐️ 8.0/10
10. [研究人员使用 LLM 和 25 美元发现 WordPress RCE 漏洞](#item-10) ⭐️ 8.0/10
11. [Kimi K3、Qwen 3.8 与 Anthropic 在前沿 AI 的战略十字路口](#item-11) ⭐️ 8.0/10
12. [暴露的 WebDAV 服务器揭示 AI 驱动的恶意软件分发实验室](#item-12) ⭐️ 8.0/10
13. [CVE-2026-26198：ormar ORM 聚合函数中的严重 SQL 注入漏洞](#item-13) ⭐️ 8.0/10
14. [因 Kimi K3 模型表现强劲，特朗普政府被曝酝酿限制中国 AI 模型](#item-14) ⭐️ 8.0/10
15. [Moonshot AI 在 Kimi K3 取得成功后计划六个月内进行 IPO](#item-15) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [WordPress“wp2shell”RCE 漏洞链遭野外主动利用](https://www.wiz.io/blog/wp2shell-cve-2026-63030-cve-2026-60137) ⭐️ 10.0/10

Wiz Research 发现了影响 WordPress Core 的关键预认证远程代码执行（RCE）漏洞链“wp2shell”正在遭到野外主动利用。攻击者正积极利用这些被追踪为 CVE-2026-63030 和 CVE-2026-60137 的缺陷，在易受攻击的服务器上部署持久的 Webshell。 由于 WordPress 驱动着互联网上大量的网站，这种无需身份验证的攻击链构成了严重且广泛的安全威胁，可能导致网站被完全控制。各组织必须立即修补系统或应用 WAF（Web 应用防火墙）缓解措施，以防止数据泄露和服务器被接管。 “wp2shell”攻击链结合了两个不同的漏洞（CVE-2026-63030 和 CVE-2026-60137），它们并不影响完全相同版本的 WordPress，其中一个 SQL 注入漏洞可追溯到 6.8 版本。目前技术细节有限以防止被进一步利用，但该漏洞链允许未经身份验证的用户执行任意代码。

rss · Wiz Blog | RSS feed · 7月20日 18:00

**背景**: 远程代码执行（RCE）漏洞允许攻击者在目标服务器上运行恶意命令，通常会导致系统被完全控制。“预认证”或“未经身份验证”的攻击意味着攻击者在不需要任何合法登录凭据的情况下即可利用该弱点。当多个较小的漏洞被链接在一起（例如由 SQL 注入最终导致代码执行）以造成更大的安全影响时，就会发生漏洞链，Searchlight Cyber 在此实例中将其昵称为“WP 2 Shell”。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rswebsols.com/news/new-wp2shell-vulnerability-in-wordpress-core-allows-unauthenticated-users-to-execute-code/">New WP 2 Shell Vulnerability in WordPress Core Allows Code Execution</a></li>
<li><a href="https://www.vulncheck.com/blog/wp2shell">WP 2 Shell Vulnerabilities : CVE-2026-60137 and... | VulnCheck</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">WordPress</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Web Security</span></p>

---

<a id="item-2"></a>

## [黑客清除了罗马尼亚整个土地登记数据库](https://news.risky.biz/risky-bulletin-hacker-wipes-romanias-entire-land-registry-database/) ⭐️ 9.0/10

一名黑客成功入侵并清除了罗马尼亚整个国家土地登记数据库，迫使国家土地测绘和登记局（ANCPI）从头开始重建其整个网络。该机构目前正在由特殊电信服务局（STS）协调，将其应用程序迁移到罗马尼亚政府云。 这一灾难性事件突显了关键政府基础设施中存在的严重安全漏洞，国家土地登记数据的完全丢失本可能引发有关财产所有权的巨大社会和法律混乱。它强调了政府 IT 腐败、弱密码策略以及管理重要公共记录的系统中缺少双重身份验证所带来的系统性风险。 据报道，此次入侵是由于糟糕的密码实践造成的，涉嫌攻击者发布的截图显示，被黑系统上使用了诸如 "P@ssw0rd" 等广为人知且易于猜测的密码。安全公司 KELA 已确认该黑客为来自阿尔及利亚奥兰的 Zakaria Mahdjoub。

hackernews · speckx · 7月20日 13:28 · [社区讨论](https://news.ycombinator.com/item?id=48978605)

**背景**: 土地登记数据库是记录财产所有权、边界和法定权利的关键政府系统，是房地产交易和争议解决的基础。罗马尼亚国家土地测绘和登记局（ANCPI）负责管理这些记录，这对于维护全国范围内财产所有权的法律确定性至关重要。此次攻击表明，当未实施 2FA 和强密码策略等适当的安全措施时，国家基础设施系统很容易受到网络威胁。

**社区讨论**: 社区成员对 ANCPI 可能拥有离线备份表示欣慰，这避免了财产所有权证明方面的彻底灾难，尽管对恢复时间表仍持怀疑态度。讨论强调了系统性问题，如政府 IT 腐败——据称合同被分配给那些未实施真正安全措施的亲信——以及弱密码和缺少 2FA 等不良做法。此外，鉴于阿尔及利亚与罗马尼亚之间缺乏引渡协议，黑客对目标的选择也引起了显著讨论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Cyberattack</span> <span class="tag-badge">Government IT</span> <span class="tag-badge">Data Loss</span> <span class="tag-badge">Infrastructure</span></p>

---

<a id="item-3"></a>

## [WordPress 远程代码执行漏洞（CVE-2026-63030/CVE-2026-60137）通告](https://blog.nsfocus.net/wordpress%e8%bf%9c%e7%a8%8b%e4%bb%a3%e7%a0%81%e6%89%a7%e8%a1%8c%e6%bc%8f%e6%b4%9e%ef%bc%88cve-2026-63030-cve-2026-60137%ef%bc%89%e9%80%9a%e5%91%8a/) ⭐️ 9.0/10

绿盟科技（NSFOCUS）发布了一份安全公告，详细说明了 WordPress 中已修复的严重远程代码执行（RCE）漏洞，编号为 CVE-2026-63030 和 CVE-2026-60137。 远程代码执行漏洞允许攻击者从远程位置在目标系统上执行任意代码，这使得它对任何受影响的 WordPress 网站都构成严重的安全威胁。鉴于 WordPress 作为内容管理系统的广泛使用，未能及时修补这些漏洞可能导致大规模的网站被入侵。 这些漏洞已在最近的 WordPress 安全更新中得到解决，强烈建议管理员立即应用这些补丁以防止漏洞被利用。攻击者可以在没有物理访问权限的情况下利用这些漏洞，潜在地获取对受影响 Web 服务器的完全控制权。

rss · 绿盟科技 · 7月20日 07:36

**背景**: WordPress 是世界上最受欢迎的内容管理系统（CMS），驱动着互联网上大量的网站。远程代码执行（RCE）是一类严重的安全漏洞，攻击者能够在目标系统上执行恶意代码，通常是由于对用户输入处理不当造成的。绿盟科技（NSFOCUS）是一家知名的网络安全提供商，经常监测并发布影响广泛使用的软件的严重漏洞通告。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/from-input-intrusion-how-remote-code-execution-work-paul-bamidele-mb8we">From Input to Intrusion: How Remote Code Execution Attacks Work</a></li>
<li><a href="https://mikes-newsletter-e02931.beehiiv.com/p/ai-vulnerability-found-on-multiple-platforms">AI Vulnerability found on multiple platforms</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">WordPress</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">RCE</span> <span class="tag-badge">Advisory</span></p>

---

<a id="item-4"></a>

## [Hugging Face 披露 AI 智能体攻击事件，商业大模型拒绝协助取证](https://huggingface.co/blog/security-incident-july-2026) ⭐️ 9.0/10

Hugging Face 披露了 2026 年 7 月的一起安全事件，攻击者利用自主 AI 智能体框架通过数据集处理流程中的代码执行漏洞入侵内部系统，横向移动并窃取了凭证和数据。值得注意的是，当团队尝试使用商业大模型 API 进行取证分析时，安全护栏拦截了请求，迫使他们改用本地部署的 GLM 5.2 完成了对超过 17,000 条攻击记录的分析。 此事件表明自主 AI 智能体构成了一种新型网络安全威胁，能够以前所未有的规模和速度协调复杂攻击。此外，商业大模型的安全护栏拒绝协助防御性网络取证的情况，凸显了双用途 AI 技术中的一个关键矛盾——旨在防止恶意使用的保护措施也可能阻碍合法的安全响应工作。 攻击者利用了两处代码执行漏洞，在周末期间执行了数万次操作，但 Hugging Face 确认面向公众的模型、数据集及 Spaces 未被篡改，软件供应链经核查无异常。公司已修复漏洞、清除攻击者据点、重建受损节点并轮换受影响凭证，同时建议用户出于预防目的轮换访问令牌并检查账户近期活动。

telegram · zaihuapd · 7月20日 10:41

**背景**: LLM 安全护栏是一套旨在防止大型语言模型生成有害、误导性或不当内容的安全过滤器，充当 AI 系统的"语义防火墙"。GLM 5.2 是由 Z.ai（前身为智谱 AI）开发的大型语言模型，以支持 100 万 token 上下文窗口和处理长达 8 小时的自主长任务而闻名。当安全事件涉及 AI 驱动的攻击时，防御团队可能会发现他们所需的取证分析工具（商业 LLM）被自身的安全护栏所阻碍，从而造成操作上的困难。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://qubittool.com/zh/blog/llm-guardrails-engineering-guide">模 型 护 栏 ( Guardrails )... | QubitTool</a></li>
<li><a href="https://ai.atomgit.com/zai-org/GLM-5.2">ai.atomgit.com/zai-org/ GLM - 5 . 2</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Hugging Face</span> <span class="tag-badge">Incident Response</span> <span class="tag-badge">LLM Guardrails</span></p>

---

<a id="item-5"></a>

## [Fast 1.x 被曝无 gadget 高危 RCE 漏洞](https://x.com/k_firsov/status/2078872293745570032) ⭐️ 9.0/10

安全研究人员 Kirill Firsov 披露，Fast 1.2.68 至 1.2.83 版本存在高危远程代码执行（RCE）漏洞。该漏洞极其危险，因为它在 JDK 8、17 和 21 上均可利用，且完全不需要依赖 classpath gadget 或开启 autoTypeSupport。 该漏洞使得这一广泛使用的 Java 库的默认配置完全暴露在远程攻击之下，影响了无数企业级应用。由于 Fast 1.x 分支已于 2024 年 10 月停止维护（EOL），官方不会发布任何安全补丁，迫使开发团队必须立即迁移到 Fast2 或手动启用 SafeMode 以保护系统安全。 该漏洞利用方式不依赖外部 gadget 或特定的不安全配置，从而绕过了传统的反序列化防御机制。目前唯一有效的补救措施是升级到更安全的 Fast2 库，或者通过 JVM 启动参数和配置文件全局启用 SafeMode。

telegram · zaihuapd · 7月20日 14:32

**背景**: Fast 是 Java 生态系统中广泛使用的 JSON 解析库，由于其“autoType”功能（根据 JSON 数据自动实例化指定的类）在历史上一直饱受漏洞困扰。为了降低这些风险，Fast 引入了“checkAutoType”安全机制，并最终推出了严格的安全模式，该模式会完全禁用 autoType 功能。在安全术语中，gadget（利用链组件）是指应用程序 classpath 中已存在的 Java 类，攻击者会在反序列化过程中将它们链接起来以实现代码执行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cloud.tencent.cn/developer/article/2485929">FastJson checkAutoType安全 机 制 研究-腾讯云开发者社区-腾讯云</a></li>
<li><a href="https://research.qianxin.com/archives/3018">Java XStream 反 序 列 化 ： Gadget 挖掘思路分享 – 奇安信技术研究院</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Fast</span> <span class="tag-badge">Java</span> <span class="tag-badge">RCE</span></p>

---

<a id="item-6"></a>

## [智谱建成全国产芯片大型数据中心](https://www.bloomberg.com/news/articles/2026-07-20/z-ai-completes-giant-data-center-with-chinese-chips-to-train-ai) ⭐️ 9.0/10

智谱 AI 完成了一座功率达 1 吉瓦的大型数据中心建设，该中心完全采用国产芯片，目前已开始部分运营。该设施是中国 AI 实验室建造的最大规模设施之一，将支持智谱前沿 GLM 模型平台的开发。 在美国对先进芯片实施出口管制的背景下，这是中国在 AI 硬件自主方面迈出的重要里程碑。能够在国产基础设施上训练大规模模型，标志着主权 AI 能力的重大进展，并减少了对国外技术的依赖。 该数据中心功率达 1 吉瓦，足以同时为约 75 万户家庭供电。智谱 AI 已运营多个各拥有超万枚芯片的计算集群，使该设施成为中国最大的 AI 基础设施项目之一。

telegram · zaihuapd · 7月20日 15:43

**背景**: 智谱 AI 是中国领先的人工智能初创公司之一，以开发 GLM（通用语言模型）系列而闻名，其中 GLM-5 是其旗舰模型。该公司一直处于中国构建具有竞争力的大语言模型的前沿。这一发展正值各国日益追求'主权 AI'之际——即通过国家努力开发和控制国内 AI 能力，以确保战略独立性并减少对外国供应商的依赖。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/zai-org/GLM-5">zai-org/ GLM -5 · Hugging Face</a></li>
<li><a href="https://en.wikipedia.org/wiki/Sovereign_AI">Sovereign AI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Data Center</span> <span class="tag-badge">Zhipu AI</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Sovereign AI</span></p>

---

<a id="item-7"></a>

## [中国的开放权重人工智能战略正在取得胜利](https://werd.io/american-ai-is-locked-down-and-proprietary-its-losing/) ⭐️ 8.0/10

一篇文章指出，中国在开放权重（open-weights）人工智能模型上的战略重点，使其在市场竞争中成功获得了超越美国的优势。这一策略与美国领先人工智能公司主导的专有且封闭的模式形成了鲜明对比。 这一进展之所以重要，是因为它暗示了全球人工智能主导权的潜在转移，易于获取的开放模型可能会使人工智能技术商品化。这呼应了科技史上的行业更迭，即免费或低成本的替代品最终将取代昂贵的专有系统。 尽管该文章声称中国模型获得了大规模采用，但社区成员指出，许多初创公司仍然主要依赖 Claude 和 Codex 等美国模型，并强调 Meta 的 Llama 是美国开放权重领域的重量级玩家。此外，运行这些开放模型仍面临实际限制，因为硬件成本和高昂的 GPU 推理费用依然是实现去中心化的重大障碍。

hackernews · benwerd · 7月20日 14:21 · [社区讨论](https://news.ycombinator.com/item?id=48979269)

**背景**: 开放权重（Open-weights）人工智能模型允许开发者获取模型的权重（即决定其行为的数值参数），从而能够在本地运行和集成该模型。这与真正的开源（open-source）人工智能不同，后者要求公开训练数据、训练代码和文档，以便能够从头开始完全复现该模型。相比之下，像 OpenAI 这样的专有模型将其权重和架构完全封闭。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnet.com/tech/services-and-software/openais-new-models-arent-really-open-what-to-know-about-open-weights-ai/">OpenAI's New Models Aren't Really Open : What to Know... - CNET</a></li>
<li><a href="https://www.linkedin.com/posts/sriramgopalan_open-source-ai-vs-open-weights-ai-what-activity-7476315236787163136-kHOd">Open Source AI vs. Open Weights AI : What’s Actually the Difference ?</a></li>

</ul>
</details>

**社区讨论**: 社区讨论非常热烈，许多用户将其与 Linux 和个人电脑等免费或低端技术最终主导市场的历史趋势相提并论。然而，对于文章的前提也存在明显的质疑，评论者指出 Claude 等美国模型在初创企业中仍占主导地位，Meta 的 Llama 是重要的开放权重模型，而且 GPU 的高昂成本依然是充分利用开放模型的障碍。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Open Weights</span> <span class="tag-badge">Industry Strategy</span> <span class="tag-badge">China</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-8"></a>

## [研究发现 arXiv 上 65% 的计算机科学论文包含 AI 生成内容](https://unslop.run/blog/measuring-ai-writing-on-arxiv) ⭐️ 8.0/10

对 2021 年至 2026 年初的 12,750 篇 arXiv 论文的分析显示，约 39% 的论文被标记为 AI 生成，其中计算机科学论文的峰值达到 65%。检测器经过特意调优以减少误报，ChatGPT 发布前的基线仅为 0.4%，而数学类论文几乎没有变化，维持在 0.7% 左右。 这些发现提供了迄今为止最有力的定量证据，表明生成式 AI 已从根本上改变了学术写作实践，尤其是在计算机科学领域。这引发了关于作者身份本质、科学文体同质化，以及学术出版体系能否适应 AI 辅助写作成为常态而非例外的紧迫问题。 该分析通过最终合并步骤结合了三个独立检测模型的评分，作者指出检测器特意校准为保守标记以避免误报。然而，社区成员测试 LLM 出现之前的论文时报告了惊人的高误报率（例如，一篇 2015 年的论文被判定为 74% 机器生成），这引发了对检测器可靠性和潜在方法学偏差的担忧。

hackernews · dopamine_daddy · 7月20日 16:36 · [社区讨论](https://news.ycombinator.com/item?id=48981206)

**背景**: arXiv 是一个开放获取的电子预印本和后印本存储库，论文经审核后即可发布，但不经过同行评审，这使其成为快速传播研究成果的热门平台，尤其在物理学、数学和计算机科学领域。AI 检测工具旨在将文本分类为人类生成或机器生成，但由于区分高级 LLM 输出与人类写作存在固有困难，此类软件被广泛认为通常不够可靠。自 2022 年底 ChatGPT 发布以来，人们对 AI 工具在起草或润色学术论文中的使用程度日益担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ArXiv">arXiv - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_detection_tool">AI detection tool</a></li>

</ul>
</details>

**社区讨论**: 讨论凸显了对检测器准确性的重大质疑，多位用户报告他们 LLM 出现之前的论文被标记了很高的机器生成分数，引发了 LLM 是否学习了他们写作风格的幽默质疑。另一个关键主题是企业环境中 LLM 使用的"博弈论"，开发者在有缺陷的生产力指标驱动下大量生产 AI 生成的代码和文档，而管理层基于这些指标给予奖励，从而形成了无论质量如何都采用 AI 工具的系统性压力。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Detection</span> <span class="tag-badge">arXiv</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Academic Research</span> <span class="tag-badge">Generative AI</span></p>

---

<a id="item-9"></a>

## [Firefox 合并 Vulkan 视频解码支持](https://github.com/search) ⭐️ 8.0/10

Mozilla 已将 Vulkan 视频解码支持合并到 Firefox 中，为视频播放提供了现代的跨平台硬件加速选项。这使浏览器能够通过 Vulkan 标准化的视频解码 API 对 H.264、H.265、AV1 和 VP9 等编解码器进行 GPU 加速解码。 这很重要，因为让硬件解码在 Firefox 中可靠地工作一直颇具挑战——用户将其形容为"纸牌屋"。通过采用 Vulkan Video，Firefox 获得了一个符合标准的 API，可跨平台和 GPU 供应商使用，有望改善视频播放性能和支持系统的电池续航。 Vulkan Video 规范目前涵盖 H.264、H.265、AV1 和 VP9 编解码器；更旧的编解码器仍需使用 VAAPI、nvdec 或 dx11va 等传统硬件解码 API。用户可能需要手动启用或切换到 Vulkan 视频解码，且在某些系统上（特别是 Linux/Nvidia）软件解码实际上可能比 GPU 解码更省电。

hackernews · DemiGuru · 7月20日 13:47 · [社区讨论](https://news.ycombinator.com/item?id=48978835)

**背景**: Vulkan Video 是 Vulkan 图形 API 的扩展，为 Vulkan 标准带来了跨平台的视频解码和编码功能。GPU 通常包含独立于其他图形和计算引擎的专用视频解码和编码加速引擎。Khronos Group 于 2022 年 12 月完成了针对 H.264 和 H.265 全加速解码的 Vulkan Video 扩展规范，使开发者能够在 Windows 和 Linux 上以标准化方式访问这些硬件功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.khronos.org/blog/an-introduction-to-vulkan-video">An Introduction to Vulkan Video | The Khronos Group</a></li>
<li><a href="https://github.com/mpv-player/mpv/discussions/13909">Vulkan Video Decoding : Usage Guide and FAQ · mpv-player mpv...</a></li>
<li><a href="https://www.khronos.org/blog/khronos-finalizes-vulkan-video-extensions-for-accelerated-h.264-and-h.265-decode">Khronos Finalizes Vulkan Video Extensions for Accelerated H.264...</a></li>

</ul>
</details>

**社区讨论**: 社区反应谨慎乐观，但提出了实际问题。一位用户指出分享的链接似乎是 GitHub 搜索页面而非具体项目链接。一位此前通过 mpv 使用 Vulkan 视频解码的用户报告其运行良好，但提出了如何在 Firefox 中启用的问题。值得注意的是，一位用户测量了功耗后发现，在 Linux/Nvidia 系统上未加速的视频播放实际上可能更省电，因为 GPU 解码会使 GPU 保持在高功耗状态。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Firefox</span> <span class="tag-badge">Vulkan</span> <span class="tag-badge">Hardware Acceleration</span> <span class="tag-badge">Video Decoding</span> <span class="tag-badge">Open Source</span></p>

---

<a id="item-10"></a>

## [研究人员使用 LLM 和 25 美元发现 WordPress RCE 漏洞](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/) ⭐️ 8.0/10

一名安全研究人员详细介绍了他们如何使用高级大型语言模型（称为 GPT5.6）以及仅 25 美元的 API 额度，在 WordPress 中发现了一个严重的 SQL 注入漏洞。该缺陷之所以引人注目，是因为它可以被升级以在目标系统上实现远程代码执行（RCE）。 这一事件突显了在进攻性网络安全行动中利用人工智能的日益增长的趋势，大幅降低了发现关键漏洞的门槛。它也引发了对 AI 安全护栏有效性以及在广泛部署的平台上自动化漏洞发现未来的重大担忧。 潜在的漏洞依赖于 SQL 查询的字符串拼接，这在现代软件开发中被视为过时且不安全的做法。评论者特别惊讶的是，AI 模型内置的护栏并未阻止研究过程中使用的进攻性安全提示词。

hackernews · infosecau · 7月20日 08:13 · [社区讨论](https://news.ycombinator.com/item?id=48975665)

**背景**: 漏洞经纪人是向安全研究人员购买零日漏洞和利用程序的实体，通常支付高昂的报酬将其打包成监控工具。远程代码执行（RCE）是一种严重的漏洞类别，使攻击者能够从远程位置在目标计算机上执行任意代码。当不受信任的用户输入未被正确过滤或拼接到数据库查询中时，就会发生 SQL 注入，这使得攻击者能够操纵数据库并可能借此实现 RCE。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/exploit-broker-zerodium-offers-1-million-for-tor-browser-zero-days/">Exploit Broker Zerodium Offers $1 Million for Tor Browser Zero-Days</a></li>
<li><a href="https://owasp.org/www-community/attacks/SQL_Injection">SQL Injection | OWASP Foundation</a></li>
<li><a href="https://www.linkedin.com/pulse/from-input-intrusion-how-remote-code-execution-work-paul-bamidele-mb8we">From Input to Intrusion: How Remote Code Execution Attacks Work</a></li>

</ul>
</details>

**社区讨论**: 社区对该文章耸人听闻的框架高度怀疑，指出研究人员的行业领域专业知识与 25 美元的 API 额度一样至关重要。评论者还嘲讽了在现代软件中发现基本的字符串拼接 SQL 注入，同时对 AI 模型的安全护栏允许执行攻击性提示词感到惊讶。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">WordPress</span> <span class="tag-badge">Ethical Hacking</span></p>

---

<a id="item-11"></a>

## [Kimi K3、Qwen 3.8 与 Anthropic 在前沿 AI 的战略十字路口](https://www.emergingtrajectories.com/lh/frontier-lab-economics/) ⭐️ 8.0/10

月之暗面推出了 Kimi K3，这是一个拥有 2.8 万亿参数的开源权重模型，定位为 OpenAI 和 Anthropic 的直接挑战者，同时阿里巴巴的 Qwen 3.8 拥有 2.4 万亿参数，声称"仅次于 Fable 5"。这些发布与 Anthropic 产品策略日益增长的争议同时发生，争议源于 CPO Mike Krieger 在 Claude Design 发布前辞去 Figma 董事会职务的事件。 中国实验室快速推出的具有竞争力的开源权重模型正在从根本上重塑前沿 AI 开发的经济格局，可能削弱西方既有参与者的定价能力和护城河。这种转变可能通过 ASIC 加速硬件商品化，并迫使实验室在专业化应用、基础设施效率或生态系统锁定方面竞争，而非仅仅依靠原始模型能力。 Kimi K3 拥有 2.8 万亿参数，专为专业软件工程、长上下文推理、自主代理和复杂的知识密集型任务而设计。这类开源权重模型提供模型权重以供托管和定制，但与完全开源不同，因为训练数据和代码可能保持专有，在 AI 可访问性方面创造了中间地带。

hackernews · cl42 · 7月20日 15:13 · [社区讨论](https://news.ycombinator.com/item?id=48980019)

**背景**: 前沿 AI 实验室生态系统一直由资金雄厚的西方公司如 OpenAI 和 Anthropic 主导，但中国初创公司越来越多地发布具有竞争力的开源权重模型，以显著更低的成本挑战这一等级制度。Anthropic-Figma 争议出现在 CPO Mike Krieger 于 4 月 14 日辞去 Figma 董事会职务时，就在 Claude Design 宣布前几天，引发了对利益冲突和潜在滥用专有合作信息的担忧。开源权重发布代表了一种战略转变，实验室在可访问性和定制化方面竞争，而非仅仅在基准性能上竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bbc.com/news/articles/cy9w4q8pgp0o">China's Moonshot AI claims Kimi K 3 can rival OpenAI and Anthropic</a></li>
<li><a href="https://www.youtube.com/watch?v=EvGAZS6hJ-E">Qwen 3 . 8 Explained: Features, Pricing, and When to Use It... - YouTube</a></li>
<li><a href="https://www.linkedin.com/pulse/open-weight-ai-what-we-finally-opened-bonnet-nicolas-pistorio-n3ulf">Open - weight AI : what if we finally opened the bonnet ?</a></li>

</ul>
</details>

**社区讨论**: LarsDu88 认为最终赢家将是最快将模型烧录到 ASIC 的厂商，指出前沿模型对大多数任务来说已经"足够好"。Overgard 强调 Figma 事件是对合作关系的潜在背叛，而 bko 反驳说风险被夸大了，因为客户愿意为边际改进支付溢价。Port3000 观察到炒作周期正在缩短，暗示尽管模型快速发布，可能已经出现了性能平台期。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Economics</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Business Strategy</span></p>

---

<a id="item-12"></a>

## [暴露的 WebDAV 服务器揭示 AI 驱动的恶意软件分发实验室](https://www.rapid7.com/blog/post/tr-exposed-webdav-malware-delivery-lab-analysis) ⭐️ 8.0/10

Rapid7 发现了一个暴露的 WebDAV 服务器，其中包含超过 1,000 个文件，该服务器实际上被用作复杂的恶意软件分发 QA 实验室。分析表明，攻击者现在正像现代软件开发人员一样，利用生成式 AI 快速生成社会工程学诱饵、编写有效载荷文档，并自动化测试分发路径。 这一发现突显了一个重大的范式转变：攻击者正在采用现代软件开发实践和生成式 AI 来扩展和加速他们的攻击。它强调了组织采取主动安全措施的迫切需求，即将暴露面管理与检测和响应统一起来，从而获得对整个攻击生命周期的可视性。 该调查始于 MDR（托管检测与响应）警报，该警报由用户通过 rundll32.exe 从 WebDAV 服务器执行文件而触发。被暴露的服务器托管了 1,048 个文件，其中包括 453 个批量生成的 LNK 分发启动器，以及 236 个利用 Unicode 操纵和双扩展名等技术的文件名欺骗 QA 文件。

rss · Rapid7 Cybersecurity Blog · 7月20日 13:00

**背景**: WebDAV（Web 分布式创作和版本控制）是 HTTP 的扩展，允许客户端管理远程服务器上的文件，但它经常被 Bumblebee 恶意软件等威胁行为者滥用，以下载和执行有效载荷。MDR（托管检测与响应）是一项提供 24/7 威胁狩猎、检测和响应的外包网络安全服务。通过持续监控端点遥测数据，MDR 团队能够发现复杂攻击活动的底层基础设施，而不仅仅是隔离单个安全事件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/bumblebee-malware-returns-in-new-attacks-abusing-webdav-folders/">Bumblebee malware returns in new attacks abusing WebDAV folders</a></li>
<li><a href="https://hyetech.com.au/managed-detection-and-response-mdr-how-it-works-and-why-australian-businesses-need-it/">Managed Detection and Response ( MDR ): How It Works</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Generative AI</span> <span class="tag-badge">Malware</span> <span class="tag-badge">WebDAV</span></p>

---

<a id="item-13"></a>

## [CVE-2026-26198：ormar ORM 聚合函数中的严重 SQL 注入漏洞](https://forum.butian.net/share/4940) ⭐️ 8.0/10

一份详细的技术分析报告披露了 CVE-2026-26198，这是 Python ormar 异步 ORM 中存在的一个严重 SQL 注入漏洞（CVSS 9.8）。该缺陷存在于 min() 和 max() 聚合函数中，它们将未经清洗的用户输入直接传递给 sqlalchemy.text()，允许仅通过单个未经认证的 HTTP 请求即可拖取整个数据库。 该漏洞极其严重，允许远程攻击者无需认证或用户交互即可完全控制应用程序的数据库。它凸显了即使在现代 ORM 中 SQL 注入的持续性危险，强调了当抽象层未能正确清洗输入时进行严格安全审计的必要性。 与执行类型检查的 sum() 和 avg() 函数不同，存在漏洞的 min() 和 max() 方法将原始字符串输入直接传递到 SQLAlchemy 的文本执行中。官方补丁通过专门针对这些聚合函数添加简单的 6 行白名单校验解决了该问题。

rss · 奇安信攻防社区 · 7月20日 09:41

**背景**: Ormar 是一款基于 SQLAlchemy 构建的 Python 迷你异步 ORM，通常与 FastAPI 和 Pydantic 结合使用以进行数据验证。虽然 ORM 通常通过自动参数化查询来防止 SQL 注入，但如果未对外部输入进行适当的清洗，那些构建原始 SQL 文本的函数（如 SQLAlchemy 的 text()）可能会引入严重的安全漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pypi.org/project/ormar/">ormar · PyPI</a></li>
<li><a href="https://dev.to/amal/fastapi-ormar-alembic-setup-een">Setting up FastAPI, Ormar and Alembic - DEV Community</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Python</span> <span class="tag-badge">SQL Injection</span> <span class="tag-badge">ORM</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-14"></a>

## [因 Kimi K3 模型表现强劲，特朗普政府被曝酝酿限制中国 AI 模型](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi) ⭐️ 8.0/10

据报道，特朗普政府正考虑通过采购规则和实体清单威胁等“软性封锁”手段，限制美国企业使用极具竞争力和性价比的中国开放权重模型，尤其是 Kimi K3。此前，美国国家安全机构的类似限制举措曾被主张放松监管的官员拦下。 这代表了在开源与闭源 AI 之争背景下可能出现的重大监管转变，有潜力重塑全球 AI 生态系统。限制使用更便宜且高性能的中国模型，可能会在无意中保护像 OpenAI 和 Anthropic 这样的美国本土闭源巨头免受市场竞争的冲击。 美国政府未必会实施硬性封禁，而是计划通过繁文缛节和舆论压力等官僚障碍迫使美企自愿弃用中国模型。白宫外部 AI 顾问 David Sacks 批评了 OpenAI 和 Anthropic，指责这两家闭源巨头企图利用政府干预来消灭更便宜的开源竞争对手。

telegram · zaihuapd · 7月20日 11:49

**背景**: 月之暗面（Moonshot AI）近期发布了 Kimi K3，这是一个拥有 2.8 万亿参数的混合专家模型，据称其性能已能媲美 OpenAI 和 Anthropic 的顶级模型。“开放权重”模型允许用户下载模型权重以在本地运行或进行定制，但其训练数据和代码通常并未完全公开。美国实体清单是一种贸易限制工具，允许政府限制美企与特定外国个人或实体之间的商业交易。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bbc.com/news/articles/cy9w4q8pgp0o">China's Moonshot AI claims Kimi K 3 can rival OpenAI and Anthropic</a></li>
<li><a href="https://apidog.com/blog/what-is-kimi-k3/">What Is Kimi K 3 ? Moonshot 's 2.8T Open Flagship</a></li>
<li><a href="https://en.wikipedia.org/wiki/Entity_List">Entity List - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Policy</span> <span class="tag-badge">Open Source AI</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Kimi K3</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-15"></a>

## [Moonshot AI 在 Kimi K3 取得成功后计划六个月内进行 IPO](https://www.bloomberg.com/news/articles/2026-07-19/china-s-moonshot-plans-ipo-in-six-months-after-ai-breakthrough?srnd=homepage-asia) ⭐️ 8.0/10

Moonshot AI 已向投资者表示，该公司正准备最早在六个月内在香港上市。受其全新 Kimi K3 模型取得巨大成功的推动，该公司目前正在完成一轮融资，这可能会使其估值提升至超过 300 亿美元。 这次即将到来的 IPO 标志着全球 AI 格局的重大转变，凸显了中国在开发前沿 AI 模型方面迅速增强的竞争力。如果按照 300 亿美元的估值成功上市，将巩固 Moonshot AI 作为该行业主导力量的地位，并证明大规模开源模型的商业可行性。 该公司 6 月份的年度经常性收入（ARR）达到了 3 亿美元，这主要得益于自推出以来 Kimi K3 模型的日订阅量至少增长了六倍。由于需求过于庞大，Moonshot AI 不得不暂时停止接受该模型的新订阅；该模型是一个拥有 2.8 万亿参数的庞大混合专家架构。

telegram · Marcoview666 · 7月20日 02:15

**背景**: Moonshot AI 是一家知名的中国人工智能初创公司，以其 Kimi 系列大语言模型而闻名。最近发布的 Kimi K3 是世界上第一个拥有近 3 万亿参数的开源模型，定位为 OpenAI 和 Anthropic 领先专有系统的直接竞争对手。通过利用混合专家架构，该模型在实现前沿性能的同时保持了高效的推理能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://interestingengineering.com/ai-robotics/worlds-largest-agent-from-china-challenge-us">World's first 3-trillion model from China does weeks of work in hours</a></li>
<li><a href="https://www.cometapi.com/models/moonshotai/kimi-k3/">Affordable Kimi K 3 API | text-to-text | CometAPI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">IPO</span> <span class="tag-badge">Kimi K3</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Startup</span></p>

---