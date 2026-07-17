---
layout: default
title: "Horizon Summary: 2026-07-17 (ZH)"
date: 2026-07-17
lang: zh
---

> 从 55 条内容中筛选出 12 条重要资讯。

---

1. [CVSS 9.8 SharePoint 严重远程代码执行漏洞已被野外利用](#item-1) ⭐️ 10.0/10
2. [首次在类地系外行星上发现潜在大气层](#item-2) ⭐️ 9.0/10
3. [Mozilla 开源 AI 现状报告引发激烈讨论](#item-3) ⭐️ 8.0/10
4. [NadMesh 僵尸网络分析：针对 AI 服务的产品级威胁](#item-4) ⭐️ 8.0/10
5. [朝鲜黑客利用 SVG 国旗图像隐藏恶意软件以攻击开发者](#item-5) ⭐️ 8.0/10
6. [Unit 42 披露西门子 ROX II OT 交换机中三个链式零日漏洞](#item-6) ⭐️ 8.0/10
7. [HTB FireFlow:从 Langflow RCE 到 Kubernetes Root](#item-7) ⭐️ 8.0/10
8. [重构版 SRDI 增强 DLL 注入的隐蔽性与灵活性](#item-8) ⭐️ 8.0/10
9. [Truth Social 推出“Truth API”为华尔街算法交易提供数据](#item-9) ⭐️ 8.0/10
10. [特斯拉无方向盘 Cybercab 在北美正式投产](#item-10) ⭐️ 8.0/10
11. [华为昇腾 950 超节点首次公开亮相，算力达英伟达同级 6.7 倍](#item-11) ⭐️ 8.0/10
12. [中国人工智能模型的崛起，让习近平主席获得了新的炫耀资本，也让他更有力地塑造了这项技术的全球规则，尽管其日益增长的力量也引起了华盛顿和北京的安全警觉。](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [CVSS 9.8 SharePoint 严重远程代码执行漏洞已被野外利用](https://www.rapid7.com/blog/post/etr-cve-2026-58644-microsoft-sharepoint-server-unauthenticated-remote-code-execution-vulnerability-exploited-in-the-wild) ⭐️ 10.0/10

2026 年 7 月 14 日，Microsoft 发布了 CVE-2026-58644 的安全公告，这是一个影响本地部署 Microsoft SharePoint Server 的 CVSS 9.8 分未认证远程代码执行漏洞，由不可信数据的反序列化（CWE-502）引起。CISA 在确认该漏洞已被野外积极利用后，于 2026 年 7 月 16 日将其添加到已知被利用漏洞（KEV）目录中。 这是一个最高严重级别的漏洞，允许未认证攻击者在无需任何用户交互的情况下在企业 SharePoint 服务器上执行任意代码，可能导致系统完全被攻陷、数据泄露以及在内部网络中的横向移动。由于野外利用已经在发生，且许多组织运行着可能暴露在互联网上的本地 SharePoint 部署，立即修补对于防止大规模入侵至关重要。 该漏洞影响 SharePoint Enterprise Server 2016、SharePoint Server 2019 和 SharePoint Server 订阅版，修复需要在服务器场中的所有 SharePoint 服务器上应用 2026 年 7 月 14 日的安全更新。Microsoft 和 CISA 还建议为每个 SharePoint Web 应用程序启用反恶意软件扫描接口（AMSI），并监控 Microsoft Defender 检测以发现利用迹象。

rss · Rapid7 Cybersecurity Blog · 7月17日 18:18

**背景**: 不可信数据的反序列化（CWE-502）是指应用程序在反序列化来自不可信来源的数据时未充分验证其有效性，这可能使攻击者能够操纵内存中的对象并实现任意代码执行。CVSS v3.1 评分 9.8 代表最高严重级别，表明此类漏洞通常利用复杂度低、无需认证或用户交互，且可能对机密性、完整性和可用性造成完全影响。CISA 的已知被利用漏洞（KEV）目录是一份确认已被野外利用的权威漏洞清单，联邦机构依法须在规定期限内修复列出的漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cwe.mitre.org/data/definitions/502.html">CWE - CWE-502: Deserialization of Untrusted Data (4.20)</a></li>
<li><a href="https://owasp.org/www-community/vulnerabilities/Deserialization_of_untrusted_data">Deserialization of untrusted data - OWASP Foundation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">Remote Code Execution</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-2"></a>

## [首次在类地系外行星上发现潜在大气层](https://www.bbc.com/news/articles/cy4kdd1e0ejo) ⭐️ 9.0/10

天文学家可能在距离地球 48 光年的类地系外行星 LHS 1140b 上发现了首个大气层。通过使用詹姆斯·韦伯太空望远镜（JWST），他们发现这颗位于红矮星宜居带内的行星成功保留了其大气层。 这一发现是寻找地外生命的一个重大突破，因为大气层对于维持液态水和潜在的生物过程至关重要。它极大地推进了我们对岩石质系外行星的认识，并展示了现代望远镜表征遥远的、可能宜居的星球的能力。 LHS 1140b 围绕一颗红矮星运行，科学家最初怀疑它可能是一个正被恒星辐射剥离大气层的迷你海王星。然而，JWST 的发射光谱数据排除了迷你海王星的假设，表明它是一个拥有大量大气层的坚固岩石世界。

hackernews · neversaydie · 7月17日 14:06 · [社区讨论](https://news.ycombinator.com/item?id=48947560)

**背景**: 宜居带，也被称为“金发姑娘区”，是指恒星周围行星理论上可以在其表面维持液态水的轨道区域。红矮星的温度低于我们的太阳，这意味着它们的宜居带更靠近恒星，导致行星暴露在强烈的辐射下，其大气层通常会被剥离。詹姆斯·韦伯太空望远镜（JWST）能够进行红外观测，通过观察透过行星过滤的光线，实现了对这些遥远系外行星大气层的详细表征。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/JWST">JWST</a></li>
<li><a href="https://en.wikipedia.org/wiki/Habitable_zone">Habitable zone</a></li>

</ul>
</details>

**社区讨论**: 评论者们深入探讨了技术细节，特别是指出 LHS 1140b 尽管面临红矮星典型的强烈恒星剥离，却依然保留了大气层这一令人惊讶的发现。其他人则对未来探索技术进行了推测，主张建造太阳透镜望远镜以直接对这些天体进行成像，并讨论了能够达到接近光速的星际探测器推进系统。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Astronomy</span> <span class="tag-badge">Exoplanets</span> <span class="tag-badge">Astrophysics</span> <span class="tag-badge">JWST</span> <span class="tag-badge">Space Exploration</span></p>

---

<a id="item-3"></a>

## [Mozilla 开源 AI 现状报告引发激烈讨论](https://stateofopensource.ai/) ⭐️ 8.0/10

Mozilla 发布了一份全面分析开源 AI 现状的报告，突显了开源模型的快速增长和普及。该报告展示了多项关键指标，包括在 OpenRouter 等平台上市场份额的显著转变，开源模型目前以 63%对 37%领先闭源模型，与仅四个月前的情况完全逆转。 向开源 AI 模型的快速转变可能会从根本上颠覆 OpenAI 和 Anthropic 等前沿 AI 实验室的商业模式，这些公司在模型训练上投入数十亿，但模型可能很快被商品化。这标志着更广泛的行业趋势，即价值可能从模型本身转移到运行它们的基础设施和设备上，超大规模云服务商和硬件制造商可能因此受益。 该报告利用 OpenRouter 等平台的数据展示增长，指出近期开源模型每日处理 4.19 万亿个 Token，而四个月前仅为 8880 亿。然而，报告本身因疑似由 AI 生成而遭到社区的严厉批评，被描述为一堆缺乏连贯叙述分析的图表，且没有 Mozilla 领导层的独立见解。

hackernews · rellem · 7月17日 14:31 · [社区讨论](https://news.ycombinator.com/item?id=48947825)

**背景**: 开源 AI 运动倡导免费提供模型权重和架构，允许任何人检查、修改和部署模型。这与通过 API 访问的闭源模型形成鲜明对比，后者的底层模型是公司的专有财产。Mozilla 参与这一领域与其保持互联网开放、防止单一实体控制互联网访问权的历史使命一致。

**社区讨论**: 讨论非常活跃，用户们就前沿模型公司面临的生存威胁展开辩论，一位用户推测开源模型最终会击垮 OpenAI 和 Anthropic，因为超大规模云服务商可以运行无需许可费的模型。用户们还分享了基于数据的见解，显示 OpenRouter 上开源模型的使用量增长了五倍，同时严厉批评该报告是一个不连贯的、由 AI 生成的幻灯片，削弱了其自身的可信度。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Industry Analysis</span> <span class="tag-badge">LLMs</span></p>

---

<a id="item-4"></a>

## [NadMesh 僵尸网络分析：针对 AI 服务的产品级威胁](https://blog.xlab.qianxin.com/nadmesh-botnet-analysis-a-product-grade-threat-for-the-ai-service-era-en/) ⭐️ 8.0/10

XLab 研究人员发现了一种名为 NadMesh 的复杂僵尸网络，该网络基于 Go 语言编写，集成了自主扫描、漏洞利用以及大规模收集 AI 服务凭据的功能。该僵尸网络运营商的面板声称已经收集了 3,811 个唯一的 AWS 密钥，并编录了 DeepSeek、GLM 和 Kimi 等 AI 服务。 这标志着传统僵尸网络能力正向专门针对 AI 基础设施和云资产的方向发生危险演变。大规模窃取 AI 服务凭据可能导致严重的数据泄露、模型训练资源被劫持，并给受影响的组织带来巨大的经济损失。 NadMesh 因其源代码中的“n4d mesh controller”字符串而得名，它作为一个统一的自主平台进行情报收集。其清单机制超越了受感染的主机本身，能够标记和编录基于云的 AI 服务，突显了其产品级的工程设计和对 AI 生态系统的特定关注。

rss · 奇安信 X 实验室 · 7月17日 08:14

**背景**: 僵尸网络是由恶意攻击者控制的受感染计算机网络，通常用于发起协同攻击或分发恶意软件。现代僵尸网络越来越多地使用 Go 语言编写，因为它具有跨平台特性且难以被分析。随着 AI 服务成为企业运营的核心，用于访问这些模型和云基础设施的凭据已成为网络犯罪分子的高价值目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/07/new-nadmesh-botnet-hunts-exposed-ai.html">New NadMesh Botnet Hunts Exposed AI Services for Cloud Keys and...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">Malware Analysis</span></p>

---

<a id="item-5"></a>

## [朝鲜黑客利用 SVG 国旗图像隐藏恶意软件以攻击开发者](https://www.elastic.co/security-labs/contagious-interview-malware-svg-steganography) ⭐️ 8.0/10

与朝鲜结盟的黑客正在利用虚假的编程面试，分发伪装成普通 SVG 国旗文件（如 AE.svg 和 AF.svg）的恶意软件。这一新策略利用了 SVG 隐写术——将 Base64 编码的恶意代码隐藏在图像的注释块中——从而成功避开了所有传统防病毒软件的检测。 这次被称为“传染性面试”（Contagious Interview）的活动直接针对软件开发者和工程师，利用求职过程中的脆弱环节窃取凭证并渗透企业网络。由于恶意有效载荷完全绕过了标准防病毒的检测，安全和工程团队必须立即采取超越传统基于特征扫描的高级防御措施。 与 OtterCookie 恶意软件家族相关的恶意有效载荷被隐藏在 SVG 文件中，具体方式是将 Base64 编码的数据注入到注释块里。由于 SVG 格式是一种开放标准，能够原生包含文本、XML 和 JavaScript，攻击者可以有效地将这些图像文件用作逃避检测的容器，以传递活动的恶意代码。

rss · Elastic Security Labs · 7月18日 00:00

**背景**: 隐写术是一种网络安全技术，用于将恶意数据隐藏在普通的、非机密的文件或消息中以避免引起怀疑。在近期的攻击中，威胁行为者越来越多地滥用 SVG（可缩放矢量图形）格式，因为其基于 XML 的结构允许在图像渲染或打开时执行嵌入的代码。与朝鲜结盟的威胁行为者有着利用复杂社会工程学策略的充分记录，例如在职业社交网站上伪装成招聘人员，诱骗技术工作者在虚假的求职面试中执行恶意软件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thehackernews.com/2026/07/north-korea-linked-hackers-hide.html">Fake Coding Tests Deliver OtterCookie-Aligned Malware Hidden in...</a></li>
<li><a href="https://unit42.paloaltonetworks.com/north-korean-threat-actors-lure-tech-job-seekers-as-fake-recruiters/">Contagious Interview: DPRK Threat Actors Lure Tech Industry Job...</a></li>
<li><a href="https://d2lvhbqifib4zm.cloudfront.net/blog/what-is-steganography/">What is steganography ? How hidden data attacks work</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Malware</span> <span class="tag-badge">Steganography</span> <span class="tag-badge">Developer Security</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-6"></a>

## [Unit 42 披露西门子 ROX II OT 交换机中三个链式零日漏洞](https://unit42.paloaltonetworks.com/siemens-rox-ii-zero-day-vulnerabilities/) ⭐️ 8.0/10

Unit 42 发布了一份详细的技术分析，揭示了西门子 RUGGEDCOM ROX II 运营技术交换机中三个链式零日漏洞（CVE-2025-40948、CVE-2025-40947 和 CVE-2025-40949）。这些漏洞组合利用后，攻击者可以实现权限提升并获得受影响设备的持久 root 访问权限。 西门子 RUGGEDCOM ROX II 交换机部署在包括电网、水处理设施和石油炼化厂在内的关键工业环境中，一旦被攻破，可能导致物理损坏、服务中断或安全隐患。获得持久 root 访问权限意味着攻击者可以长期隐蔽地控制工业网络，可能为破坏、间谍活动或向连接的企业系统横向渗透创造条件。 这三个漏洞构成了一条渐进式利用链，逐步提升攻击者权限，直至获得设备的完整 root 级别控制权。西门子和 CISA 已联合发布安全公告 ICSA-25-226-20，建议采取缓解措施，包括在 RUGGEDCOM ROX RX1400 设备上设置安全启动密码，以防止未经授权的 BIST（内建自检）模式访问。

rss · Unit 42 · 7月17日 10:00

**背景**: 运营技术（OT）包括在工业环境中监控和控制物理设备与过程的硬件和软件系统，例如电网、生产线和交通系统。与优先考虑数据机密性和可用性的 IT 网络不同，OT 系统专注于物理安全和实时过程控制，因此对中断特别敏感。西门子 RUGGEDCOM ROX II 是一系列工业级网络交换机和路由器，专为在恶劣环境条件下可靠运行而设计，同时为关键基础设施提供安全连接。零日漏洞是发现时尚未公开且无补丁可用的安全缺陷，而链式利用将多个漏洞组合在一起，可以实现持久 root 访问等任何单一漏洞都无法达到的攻击效果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unit42.paloaltonetworks.com/siemens-rox-ii-zero-day-vulnerabilities/">Three Steps to the Terminal: A Siemens ROX II Zero-Day Trilogy</a></li>
<li><a href="https://www.cisa.gov/news-events/ics-advisories/icsa-25-226-20">Siemens RUGGEDCOM ROX II - ICS Advisory</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">OT Security</span> <span class="tag-badge">Zero-Day</span> <span class="tag-badge">ICS</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-7"></a>

## [HTB FireFlow:从 Langflow RCE 到 Kubernetes Root](https://xz.aliyun.com/news/92536) ⭐️ 8.0/10

本文完整复盘 Hack The Box 靶机 FireFlow 的渗透过程,展示了一条多阶段攻击链:从利用 Langflow 1.8.2 版本的未授权远程代码执行漏洞 CVE-2026-33017 开始,随后通过伪造模型上下文协议(MCP)的 JWT 进行权限提升,最终在底层 Kubernetes 集群中获取 root 级别访问权限。 这项分析的意义在于它揭示了现代 AI 工具(如工作流编排平台)中的漏洞如何被链接起来,从而攻陷 Kubernetes 集群等关键基础设施。它为红队和安全专业人员提供了保护 AI 基础设施的可操作性见解——随着企业采用 AI 的加速,这正成为日益重要的攻击面。 初始入侵依赖于 CVE-2026-33017,这是一个 CVSS 9.8 的严重漏洞,未授权的攻击者可以构建一个包含 Python Interpreter 组件的恶意公开 Flow 来实现远程代码执行。值得注意的是,JFrog 的安全研究人员发现,据称已修复该漏洞的 Langflow 1.8.2 版本依然可以被利用。

rss · 先知安全技术社区 · 7月17日 08:15

**背景**: Langflow 是一个开源平台,允许用户可视化地构建和部署 AI 工作流与应用程序,通常集成了大型语言模型。模型上下文协议(MCP)是由 Anthropic 推出的开放标准,旨在标准化 AI 系统与外部数据源及工具的连接方式。Hack The Box (HTB) 是一个广受欢迎的在线平台,为安全专业人员提供互动式、游戏化的网络安全训练和渗透测试挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.jfrog.com/post/langflow-latest-version-was-not-fixed/">Langflow CVE-2026-33017: Latest 'fixed' version is still exploitable - JFrog Security Research</a></li>
<li><a href="https://github.com/EQSTLab/CVE-2026-33017">GitHub - EQSTLab/CVE-2026-33017: Langflow RCE · GitHub</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Penetration Testing</span> <span class="tag-badge">Kubernetes Security</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Langflow</span> <span class="tag-badge">Red Team</span></p>

---

<a id="item-8"></a>

## [重构版 SRDI 增强 DLL 注入的隐蔽性与灵活性](https://xz.aliyun.com/news/92534) ⭐️ 8.0/10

本文介绍了一种重构版的 Shellcode 反射 DLL 注入（sRDI）技术，新增了对 TLS 数据的支持，能够清零原始 PE 数据并隐藏映射后的 PE 头特征。此外，该重构版本还允许通过导出函数名或导出哈希灵活调用 DLL 导出函数，并支持向其传递用户数据。 这项技术进步通过减少内存取证痕迹，显著提升了红队和恶意软件开发中的操作安全性（OPSEC）。通过支持 API 哈希和清零 PE 头，它使得注入的载荷更难被 EDR 和杀毒软件检测到。 该技术通过集成线程局部存储（TLS）回调支持，专门解决了传统 sRDI 在执行复杂 DLL 时的局限性。此外，通过哈希而非明文字符串调用导出函数的能力，为防御静态分析增加了重要的保护层。

rss · 先知安全技术社区 · 7月17日 05:08

**背景**: Shellcode 反射 DLL 注入（sRDI）最初由 Nick Landers（monoxgas）开发，是反射 DLL 注入技术的演进，它将 DLL 转换为位置无关的 shellcode。这使得载荷可以直接从内存而非磁盘注入到受害者进程中。PE 头包含对恶意软件分析师极具价值的元数据，因此剥离或隐藏它们是常见的规避策略。此外，API 哈希是威胁行为者常用的一种技术，用于动态解析函数地址而无需暴露明文函数名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rbtsec.com/blog/shellcode-reflective-dll-injection-srdi-converting-dlls-into-position-independent-shellcode/">Shellcode Reflective DLL Injection ( sRDI ): Converting... | RBT Security</a></li>
<li><a href="https://securitymaven.medium.com/api-hashing-why-malware-loves-and-you-should-care-77c5135d9aaa">API Hashing — Why Malware Loves (And You Should Care) - Nikhil gupta</a></li>
<li><a href="https://www.ired.team/offensive-security/code-injection-process-injection/reflective-shellcode-dll-injection">Shellcode Reflective DLL Injection | Red Team Notes</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Red Teaming</span> <span class="tag-badge">Malware Development</span> <span class="tag-badge">Windows Security</span> <span class="tag-badge">Shellcode Injection</span> <span class="tag-badge">Reverse Engineering</span></p>

---

<a id="item-9"></a>

## [Truth Social 推出“Truth API”为华尔街算法交易提供数据](https://www.cnn.com/2026/07/16/business/truth-social-data-wall-street) ⭐️ 8.0/10

特朗普媒体科技集团（TMTG）宣布将于 8 月 1 日推出名为“Truth API”的企业级数据服务，提供毫秒级访问 Truth Social 顶级账户实时帖子的权限。该服务旨在为华尔街公司在高频算法交易中创造信息优势。 这一发展代表了社交媒体、政治和金融科技领域的新颖交叉，直接将政治帖子转化为金融市场中可变现的资产。由于特朗普过去在平台上的声明曾引发股市和油市的剧烈波动，该 API 创造了一个新生态系统，使算法交易者能够直接购买速度优势，从而利用政策驱动的市场波动获利。 Truth API 将严格提供平台排名前 10 位账户的实时授权数据流，其中最核心的便是唐纳德·特朗普。尽管 TMTG 尚未公开这项机构服务的具体定价，但它依赖于超低延迟的关键基础设施，而这正是高频交易公司在更广泛的市场做出反应之前执行交易所必需的。

telegram · zaihuapd · 7月17日 01:02

**背景**: 高频交易（HFT）依赖于极快、亚毫秒级的数据处理能力和网络连接，能够在几分之一秒内执行大量订单。金融机构不断寻找“另类数据”（如实时社交媒体信息流或地理定位数据），将其输入算法中，以便在人类交易员做出反应之前预测市场走势。Truth Social 实际上已成为发布重大政策声明的主要广播渠道，使其原始数据在预测性金融建模中具有极高的价值。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.globenewswire.com/news-release/2026/07/16/3328489/0/en/trump-media-and-technology-group-launches-truth-api-a-new-licensed-data-service-for-financial-services-partners-that-provides-the-fastest-access-to-truth-social-s-most-influential-.html">Trump Media and Technology Group Launches Truth API, a New Licensed Data Service for Financial Services Partners That Provides the Fastest Access to Truth Social’s Most Influential Accounts</a></li>
<li><a href="https://www.cnbc.com/2026/07/16/trump-truth-social-wall-street-traders-api.html">Trump Media launches paid data service to help Wall Street track Trump’s posts</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">FinTech</span> <span class="tag-badge">Data API</span> <span class="tag-badge">Algorithmic Trading</span> <span class="tag-badge">Social Media</span> <span class="tag-badge">High-Frequency Trading</span></p>

---

<a id="item-10"></a>

## [特斯拉无方向盘 Cybercab 在北美正式投产](https://t.me/zaihuapd/42621) ⭐️ 8.0/10

特斯拉已正式在北美启动其全自动汽车 Cybercab 的量产工作。该专用车辆完全取消了方向盘、踏板和后视镜，将所有驾驶操作完全交由车载人工智能处理。 专用 Robotaxi 的制造标志着自动驾驶行业的一个重要里程碑。它代表着从在传统汽车上改装自动驾驶系统，向专为无人驾驶网约车生态设计的专用车辆的重大转变。 Cybercab 的整体架构和用户交互方式专为无人驾驶场景定制，是特斯拉更广泛的 Robotaxi 服务网络的一部分。然而，由于缺乏人工驾驶控制装置，特斯拉目前无法将其合法出售给个人消费者，并且必须在无人类监督的情况下运营之前，克服重大的监管障碍。

telegram · zaihuapd · 7月17日 03:06

**背景**: Cybercab 的概念于 2024 年 10 月正式发布，其原型车展示了没有方向盘或踏板的大胆设计。在特斯拉的出行生态中，“Robotaxi”指的是整体的自动驾驶网约车服务，该服务可以使用改装过的 Model Y 或专用的 Cybercab。与具备半自动驾驶辅助功能的传统车辆不同，Cybercab 是从零开始作为 4 级或 5 级自动驾驶汽车设计的，完全依赖全自动驾驶（FSD）计算机和基于视觉的人工智能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Tesla_Cybercab">Tesla Cybercab</a></li>
<li><a href="https://electrek.co/2026/07/06/tesla-cybercab-production-before-autonomy/">Tesla Cybercab: mass-producing a car it can't sell or drive itself | Electrek</a></li>
<li><a href="https://www.theautopian.com/the-first-responders-guide-to-the-tesla-cybercab-was-released-and-reveals-some-interesting-and-weird-details/">The First Responder's Guide To The Tesla Cybercab Was Released And Reveals Some Interesting And Weird Details - The Autopian</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Tesla</span> <span class="tag-badge">Autonomous Vehicles</span> <span class="tag-badge">Robotaxi</span> <span class="tag-badge">Automotive Industry</span></p>

---

<a id="item-11"></a>

## [华为昇腾 950 超节点首次公开亮相，算力达英伟达同级 6.7 倍](https://www.ithome.com/0/978/019.htm) ⭐️ 8.0/10

7 月 17 日，华为在 2026 世界人工智能大会（WAIC）上首次公开亮相昇腾 950 超节点（Atlas 950 SuperPoD）真机，实现业界最大 1024 卡规模，提供 1 EFLOPS FP8、2 EFLOPS FP4 算力，拥有 256 TB 全局统一内存。据中银证券报告，其总算力达到英伟达搭载 144 张卡的同级别 NVL144 系统的 6.7 倍。 此次亮相标志着中国国产 AI 算力基础设施的重大突破，展示华为在大规模 AI 计算系统领域与英伟达旗舰产品正面竞争的能力。该系统的超大规模和对 FP8、FP4 等低精度格式的原生支持，使其成为训练下一代万亿参数大模型的关键基础设施，尤其在英伟达硬件获取受限的市场中具有战略意义。 昇腾 950 超节点基于华为灵衢（UnifiedBus）互联协议构建，理论上可扩展至 8192 卡无收敛全互联，规模是英伟达 NVL72 的百倍以上。其 DT 芯片采用双 Die UMA 架构，配备 144 GB HBM 内存、4 TB/s 内存带宽和 2 TB/s 单卡互联带宽，并新增 MXFP8、MXFP4 等低精度数据格式支持。

telegram · zaihuapd · 7月17日 10:27

**背景**: 超节点（SuperPoD）是一种超大规模 AI 计算集群，将数百或数千个加速器连接为一个逻辑系统，用于训练超出单台服务器承载能力的超大规模 AI 模型。华为灵衢（UnifiedBus）、英伟达 NVLink 以及行业标准 UALink 和 CXL 等互联协议，对于在此类规模下实现 GPU 间高带宽、低延迟通信至关重要。英伟达 NVL144 属于 Vera Rubin 平台路线图，是面向超长上下文 AI 推理工作负载的 144 GPU 旗舰级机架系统，但据报道该系统已遭遇延期，可用时间推迟至 2027 年之后。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cls.cn/detail/2426602">华为 昇 腾 950 超 节 点 将首次真机亮相 国产算力板块高景气有望延续</a></li>
<li><a href="https://www.nbd.com.cn/articles/2025-09-18/4065524.html">突破大规模超节点 互 联 技术 华为发布 互 联 协 议 “ 灵 衢 ” | 每经网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">华为昇腾</span> <span class="tag-badge">AI算力</span> <span class="tag-badge">硬件架构</span> <span class="tag-badge">超节点</span> <span class="tag-badge">人工智能</span></p>

---

<a id="item-12"></a>

## [中国人工智能模型的崛起，让习近平主席获得了新的炫耀资本，也让他更有力地塑造了这项技术的全球规则，尽管其日益增长的力量也引起了华盛顿和北京的安全警觉。](https://www.bloomberg.com/news/articles/2026-07-16/china-s-ai-ascendance-gives-xi-a-stage-and-a-security-dilemma?srnd=homepage-asia) ⭐️ 8.0/10

Bloomberg reports on China's growing dominance in the AI sector, highlighted by Xi Jinping's upcoming appearance at the WAIC, as Chinese models capture nearly 60% of US enterprise applications on platforms like OpenRouter.

telegram · Marcoview666 · 7月17日 01:38

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">China</span> <span class="tag-badge">Industry News</span> <span class="tag-badge">Enterprise AI</span></p>

---