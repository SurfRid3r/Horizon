---
layout: default
title: "Horizon Summary: 2026-07-14 (ZH)"
date: 2026-07-14
lang: zh
---

> 从 47 条内容中筛选出 18 条重要资讯。

---

1. [Wiz 详述通过 GitHub Actions 发起的 AsyncAPI 供应链攻击](#item-1) ⭐️ 9.0/10
2. [Rapid7 披露严重的 SharePoint 身份验证绕过漏洞](#item-2) ⭐️ 9.0/10
3. [2026 菲尔兹奖名单疑泄露：ICM 官网代码藏四位得主姓名](#item-3) ⭐️ 9.0/10
4. [DeepSeek 完成逾 500 亿元首轮融资，采用特殊架构维持创始人控制](#item-4) ⭐️ 9.0/10
5. [Linux 输入延迟的数据驱动分析：X11 与 Wayland 的对比](#item-5) ⭐️ 8.0/10
6. [AI 代理无法解决大型软件项目的协调瓶颈](#item-6) ⭐️ 8.0/10
7. [欧盟年龄验证应用恐排斥非 iOS/Android 用户](#item-7) ⭐️ 8.0/10
8. [印度科学家发布迄今最详细的人类脑干三维图谱](#item-8) ⭐️ 8.0/10
9. [Langflow 漏洞遭利用，用于部署定制 Gafgyt DDoS 僵尸网络](#item-9) ⭐️ 8.0/10
10. [2026 AI 安全报告：AI 成为自主网络攻击操作者](#item-10) ⭐️ 8.0/10
11. [微软发布针对 ShinyHunters 滥用 OAuth 攻击 SaaS 应用的防御指南](#item-11) ⭐️ 8.0/10
12. [DeepSeek 创始人梁文锋身家 360 亿美元，成全球身价最高 AI 模型创始人](#item-12) ⭐️ 8.0/10
13. [Cloudflare 推出 Precursor 以实现持续 AI 机器人检测](#item-13) ⭐️ 8.0/10
14. [高德开源 ABot-WorldStudio：交互式 3D 世界生成工坊](#item-14) ⭐️ 8.0/10
15. [DeepMind CEO 呼吁美国主导成立全球 AI 监管机构](#item-15) ⭐️ 8.0/10
16. [DeepSeek 启动新一轮融资，估值达 710 亿美元](#item-16) ⭐️ 8.0/10
17. [Anthropic 面向美国 K-12 教师推出免费的 Claude for Teachers](#item-17) ⭐️ 8.0/10
18. [白宫扩大自愿承诺范围，确保 AI 用电成本不转嫁给消费者](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Wiz 详述通过 GitHub Actions 发起的 AsyncAPI 供应链攻击](https://www.wiz.io/blog/m-red-team-asyncapi-supply-chain-compromise-via-github-actions) ⭐️ 9.0/10

Wiz 的 M-Red Team 发布了一份供应链攻击分析报告，该攻击利用通过 GitHub Actions 传播的恶意 @asyncapi npm 包。报告揭露了具体的负载机制，包括信标加密和命令与控制（C2）通信协议。 此次事件突显了开源生态系统内的活跃威胁，直接影响了依赖事件驱动架构的 DevSecOps 团队。了解这些攻击媒介对于开发人员保护其 CI/CD 管道和云基础设施至关重要。 恶意负载在其代码注释中明确自称为“M-RED-TEAM v6.4”，并在多个运行时阶段执行。提取的配置文件针对特定组织，并使用名为“miasma-monitor.service”的服务来维持持久性。

rss · Wiz Blog | RSS feed · 7月14日 10:33

**背景**: AsyncAPI 是一个开源计划，提供用于构建事件驱动架构的工具和规范。供应链攻击通常通过将恶意代码注入依赖项来针对 npm 等包管理器，从而破坏 GitHub Actions 等自动化构建过程。Wiz 的红队代理是一种 AI 驱动的工具，用于模拟这些复杂的攻击路径，以帮助安全团队发现漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.asyncapi.com/">AsyncAPI Initiative for event-driven APIs | AsyncAPI Initiative for event-driven APIs</a></li>
<li><a href="https://www.wiz.io/blog/introducing-the-wiz-red-agent">Introducing the Wiz Red Agent- AI-Powered Attacker | Wiz Blog</a></li>
<li><a href="https://www.wiz.io/blog/m-red-team-asyncapi-supply-chain-compromise-via-github-actions">M-Red-Team: AsyncAPI Supply Chain Compromise via GitHub Actions</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Supply Chain Security</span> <span class="tag-badge">GitHub Actions</span> <span class="tag-badge">npm</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">DevSecOps</span></p>

---

<a id="item-2"></a>

## [Rapid7 披露严重的 SharePoint 身份验证绕过漏洞](https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed) ⭐️ 9.0/10

Rapid7 披露了 Microsoft SharePoint 中的 CVE-2026-55040 漏洞，这是一个 CVSS 评分为 9.1 的严重漏洞，允许远程攻击者绕过 JWT 令牌身份验证。该漏洞是在 Pwn2Own Berlin 2026 黑客大赛期间发现的，它是最终可实现未经身份验证的远程代码执行（RCE）漏洞链的第一部分。 由于 SharePoint 被深度集成到企业环境中，用于管理敏感的公司数据和内联网，因此该漏洞构成了巨大的攻击面。一旦成功利用并与 RCE 组件结合，未经身份验证的攻击者即可执行管理操作，这可能导致系统被完全接管。 该漏洞源于 JWT 令牌验证管道中的缺陷，要求攻击者事先知道目标用户的 Active Directory 安全标识符（SID）或用户主体名称（UPN）。虽然身份验证绕过部分现已修复，但预计 Microsoft 要到 2026 年 8 月才会修补漏洞链中的 RCE 组件。

rss · Rapid7 Cybersecurity Blog · 7月14日 13:00

**背景**: Microsoft SharePoint 是 Microsoft 365 生态系统中的一个无处不在的基于 Web 的平台，被全球企业广泛用于内部协作和文档管理。JWT（JSON Web Token）是一项行业标准，用于在各方之间安全地传输信息，通常在现代 Web 应用程序中用于身份验证。Pwn2Own 是一项备受推崇的黑客大赛，安全研究人员在此展示针对主要软件和硬件平台的零日漏洞利用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/hackers-earn-1-298-250-for-47-zero-days-at-pwn2own-berlin-2026/">Hackers earn $1,298,250 for 47 zero-days at Pwn2Own Berlin 2026</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Zero-Day</span> <span class="tag-badge">Microsoft SharePoint</span> <span class="tag-badge">RCE</span> <span class="tag-badge">Vulnerability</span></p>

---

<a id="item-3"></a>

## [2026 菲尔兹奖名单疑泄露：ICM 官网代码藏四位得主姓名](https://www.reddit.com/r/math/comments/1urv4id/fields_medal_26_predictionsdiscussion/) ⭐️ 9.0/10

有网友在国际数学家大会（ICM）官网的前端代码中发现了一个隐藏标签，疑似泄露了 2026 年菲尔兹奖的四位得主：Yu Deng、John Pardon、Jacob Tsimerman 和 Hong Wang。目前，预测市场 Polymarket 上关于该名单的预测概率已高达 95%。 菲尔兹奖是数学界的最高荣誉，此次官方渠道的提前泄露在学术界是史无前例的事件。其中，Hong Wang 最近因合作证明了三维 Kakeya 猜想而备受瞩目，她的入选将是一个具有里程碑意义的成就。 泄露的姓名出现在 ICM 官网讲座日程的源代码中，且被特别标记为“HIDDEN”（隐藏），直至官方正式公布。Reddit 上的讨论此前已将 Jacob Tsimerman 和 Hong Wang 视为热门人选，这得益于他们近期在数学领域的杰出贡献。

telegram · zaihuapd · 7月14日 05:51

**背景**: 菲尔兹奖每四年颁发一次，授予 40 岁以下的青年数学家，以表彰其杰出的数学成就。三维 Kakeya 猜想涉及在三维空间中包含各个方向线段的集合的几何性质，近期刚由 Hong Wang 和 Joshua Zahl 成功证明。Polymarket 是一个基于加密货币的预测市场平台，用户可以在上面就各类未来事件的结果下注，其目前显示的高概率指标增加了此次泄露信息的可信度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/27351797561">重大突破！三维Kakeya猜想终获解决，多尺度几何分析显神威 - 知乎</a></li>
<li><a href="https://en.wikipedia.org/wiki/Polymarket">Polymarket</a></li>

</ul>
</details>

**社区讨论**: Reddit 等平台上的数学界社区一直在积极预测 2026 年的获奖者，而这次代码泄露也印证了此前关于 Hong Wang 和 Jacob Tsimerman 是热门人选的讨论。许多网友评论认为，近期对三维 Kakeya 猜想的成功证明是决定性因素，几乎确保了 Wang 能够入选获奖名单。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Fields Medal</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Academic Leak</span> <span class="tag-badge">ICM 2026</span> <span class="tag-badge">Research</span></p>

---

<a id="item-4"></a>

## [DeepSeek 完成逾 500 亿元首轮融资，采用特殊架构维持创始人控制](https://t.me/zaihuapd/42557) ⭐️ 9.0/10

据报道，DeepSeek 完成了首轮融资，筹得逾 500 亿元人民币（约 74 亿美元），估值超过 500 亿美元。本轮融资采用非常规架构，投资者需将资金注入由 CEO 梁文锋管理的有限合伙企业，而非直接投资 DeepSeek，且需接受五年锁定期且不享有表决权。 这是 AI 历史上规模最大的首轮融之一，巩固了 DeepSeek 作为全球顶级 AI 实验室的地位，与 OpenAI 和 Anthropic 并驾齐驱。严苛的投资条款——无表决权和长锁定期——彰显了创始人的极大信心和投资者的强烈需求，反映出 DeepSeek 在以极低成本推出与美国顶尖公司抗衡的模型后所拥有的巨大影响力。 创始人梁文锋在本轮 personally 投资 200 亿元人民币，彰显其坚定承诺。据报道，腾讯和宁德时代分别考虑或计划投资 100 亿元和 50 亿元，可能成为本轮最大的外部投资者。DeepSeek 对此暂未置评。

telegram · zaihuapd · 7月14日 11:06

**背景**: DeepSeek 是一家中国 AI 初创公司，因其模型在性能上媲美美国顶尖 AI 公司的同时大幅降低算力消耗而声名鹊起。2025 年 1 月，该公司的聊天机器人曾一度超越 ChatGPT 登顶苹果 App Store 下载榜，成为中国 AI 行业的标志性时刻。DeepSeek 还拓展至非洲市场，提供经济高效的 AI 解决方案并催生了当地初创企业。公司由梁文锋创立，他同时领导量化对冲基金幻方，DeepSeek 以研究优先的文化吸引了大量顶尖人才。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(chatbot)">DeepSeek (chatbot) - Wikipedia</a></li>
<li><a href="https://www.foxbusiness.com/technology/chinas-deepseek-ai-startup-releases-new-model-rivalry-openai">Chinese AI startup DeepSeek releases new model in evolving rivalry with US firms | Fox Business</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Funding</span> <span class="tag-badge">Venture Capital</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-5"></a>

## [Linux 输入延迟的数据驱动分析：X11 与 Wayland 的对比](https://marco-nett.de/blog/measuring-input-latency-on-linux-x11-vs-wayland-vrr-dxvk/) ⭐️ 8.0/10

一篇全面的文章发布了，展示了 Linux 上输入延迟的实证测量结果，系统地比较了 X11、Wayland、XWayland、VRR（可变刷新率）和 DXVK 配置。作者使用 500Hz 显示器和严谨的方法论，量化了这些显示技术和游戏翻译层之间的差异。 这项分析为 Wayland 与 X11 在游戏性能方面的长期争论提供了急需的客观数据，超越了轶事般的说法。这些结果可以反馈给图形开发者和发行版打包者，使 Linux 游戏生态系统能够进行有针对性的改进，这是 Windows 等闭源平台无法比拟的。 XWayland 配置比原生 X11 显示出约 3 毫秒的更高延迟，在 500Hz 下这可能意味着落后了一整帧。评论者指出，在更低的刷新率（60Hz 或 120Hz）下测试将有助于区分微小的时间差异和更大的帧锁定延迟，并强调测试实际上测量的是特定的合成器（如 KWin），而不是 Wayland 协议本身。

hackernews · hoechst · 7月14日 16:36 · [社区讨论](https://news.ycombinator.com/item?id=48909424)

**背景**: X11 是 Linux 传统的显示服务器协议，拥有数十年的历史，而 Wayland 是旨在取代它的新协议，通过让合成器充当显示服务器来工作。XWayland 是一个兼容层，将 X 服务器作为 Wayland 客户端运行，使传统的 X11 应用程序能够在 Wayland 环境中运行。DXVK 是一个开源翻译层，将 Direct3D 8/9/10/11 调用转换为 Vulkan，使 Windows 游戏能够通过 Proton/Steam 在 Linux 上运行，已确认支持超过 80%的 Direct3D 游戏。VRR（可变刷新率）允许显示器动态调整其刷新率以匹配内容，减少画面撕裂并提升流畅度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/XWayland">XWayland</a></li>
<li><a href="https://en.wikipedia.org/wiki/DXVK">DXVK</a></li>

</ul>
</details>

**社区讨论**: 社区赞扬了 Linux 的开放性，使此类分析成为可能，并允许结果推动生态系统改进，这在 Windows 上是不可能的。几位评论者提出了方法论上的担忧，指出 500Hz 显示器隐藏了在较低刷新率下可见的问题，XWayland 的 3 毫秒延迟可能代表落后了一整帧。关于"Wayland 输入延迟"是否有意义出现了关键争论，因为测量实际上比较的是特定的合成器（如 KWin），而不是协议本身。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Linux</span> <span class="tag-badge">Wayland</span> <span class="tag-badge">X11</span> <span class="tag-badge">Input Latency</span> <span class="tag-badge">Gaming</span></p>

---

<a id="item-6"></a>

## [AI 代理无法解决大型软件项目的协调瓶颈](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) ⭐️ 8.0/10

Armin Ronacher 的文章《The Tower Keeps Rising》指出，尽管 AI 编程代理大幅提升了个人的代码产出速度，但大型软件项目仍然从根本上受到人类协调和共享架构理解需求的制约。这篇文章对 AI 工具能轻松扩展以解决企业级软件复杂性的主流叙事提出了挑战。 随着业界急于将 AI 代理整合到开发流程中，这项分析凸显了个人生产力提升与构建复杂系统的组织挑战之间的关键差距。文章暗示，软件工程中最困难的问题——协调、共享心智模型和架构对齐——恰恰是 AI 代理最无力解决的。 文章强调，软件项目的共享语言不仅存在于文档和代码中，还存在于代码审查、对话、争论以及向他人解释变更的经验之中。文章对代码产出速度与团队协调系统理解的能力之间做出了明确的区分。

hackernews · cdrnsf · 7月14日 16:57 · [社区讨论](https://news.ycombinator.com/item?id=48909785)

**背景**: Lisp Curse 是一个知名现象：语言的极端灵活性让个人能轻松构建自定义解决方案，但反而阻碍了协作，因为每个人都在创建自己的抽象，而非趋同于共享抽象。软件中的可组合性指的是组件能够被组合和重组的程度，常被比作俄罗斯方块——方块必须正确拼接才能消除。历史上，《人月神话》等经典著作早已指出，大型软件项目更多受到沟通开销的限制，而非代码编写速度的限制。

**社区讨论**: 评论者强烈认同文章论点，有人将可组合性比作俄罗斯方块中'必须消除整行'的规则，并警告说天真地使用 AI 代理会违反这一原则。另一位评论者将其类比为 Lisp Curse，认为正如 Lisp 的易构建性阻碍了协作一样，AI 代理可能以牺牲共享理解为代价来换取孤立的生产力。多位评论者强调，项目中隐含的知识——存在于代码审查和对话中——仍然无法被 AI 自动化所取代。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Software Architecture</span> <span class="tag-badge">Composability</span> <span class="tag-badge">Complexity</span></p>

---

<a id="item-7"></a>

## [欧盟年龄验证应用恐排斥非 iOS/Android 用户](https://github.com/eu-digital-identity-wallet/av-doc-technical-specification/discussions/19) ⭐️ 8.0/10

在欧盟数字身份钱包年龄验证技术规范的 GitHub 讨论中，有人提出该方案可能实际上强制用户使用主流的 iOS 或 Android 设备，导致替代操作系统的用户无法满足合规要求。 这一问题直击欧盟在数字主权和数字包容性方面的既定目标，因为它可能造成一个双层数字生态系统——只有使用 Google 和 Apple 授权平台的用户才能完整参与在线服务。它也为未来欧盟数字身份基础设施如何处理平台多样性和用户选择权开创了先例。 该技术规范目前不包含桌面端支持，相关讨论还表明该应用可能要求使用经 Google 授权的 Android 系统，这实际上会禁止定制 ROM 和去 Google 化设备。基于 Linux 的替代移动操作系统也将被排除在这些要求之外。

hackernews · roundabout-host · 7月14日 08:34 · [社区讨论](https://news.ycombinator.com/item?id=48903777)

**背景**: 欧盟数字身份钱包（EUDI Wallet）是 eIDAS 2.0 法规的一部分，旨在为欧盟公民提供一个安全、注重隐私保护的数字身份框架。年龄验证是该框架下正在开发的关键用例之一，旨在允许用户在不泄露其他个人数据的情况下证明自己的年龄。技术规范在 GitHub 上以协作方式开发，允许公众以及开发者和民间社会进行审查和反馈。

**社区讨论**: 评论者对欧盟数字主权言辞与依赖美国控制的移动平台之间的矛盾表达了强烈不满。一些人认为政府发行的年龄验证比 Roblox 等企业收集数据的方案更好，但也有人质疑强制年龄验证这一根本前提本身，指出缺乏公众同意，并担忧对老年人和非智能手机用户的数字排斥问题。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Digital Identity</span> <span class="tag-badge">Privacy</span> <span class="tag-badge">EU Policy</span> <span class="tag-badge">Mobile OS</span> <span class="tag-badge">Regulation</span></p>

---

<a id="item-8"></a>

## [印度科学家发布迄今最详细的人类脑干三维图谱](https://www.bbc.com/news/articles/cg53l737v1qo) ⭐️ 8.0/10

印度科学家团队创建并公开发布了迄今最详细的人类脑干三维图谱，已在网上免费开放访问。该图谱为这一关键脑区提供了前所未有的神经解剖学分辨率，可通过项目网站访问。 脑干控制着呼吸、心率和意识等至关重要的功能，是人类大脑中临床意义最大但映射最不充分的区域之一。这一开放获取的图谱提供了一个高分辨率参考，可能极大地推动全球神经外科、神经研究和医学教育的发展。 该图谱是基于少数个体大脑构建的参考图谱，而非实时诊断扫描工具。它是印度更广泛的脑映射计划的一部分，相关出版物和交互式查看器可通过 HumanBrain.in 门户网络访问。

hackernews · BaudouinVH · 7月14日 06:43 · [社区讨论](https://news.ycombinator.com/item?id=48903082)

**背景**: 脑图谱是一种综合性的空间参考图，用于识别和标注大脑内的解剖结构，为研究人员和临床医生提供标准化指南。脑干位于大脑底部，将大脑与脊髓连接，并调节维持生命的基本功能。以往的脑干图谱在分辨率和细节方面有限，部分原因是该区域结构复杂且高度密集。印度一直在发展国家脑研究生态系统，包括印度理工学院马德拉斯分校（IIT Madras），该机构在 HumanBrain.in 计划下托管脑映射项目。

**社区讨论**: 多位评论者希望澄清该图谱是基于少数个体构建的参考图谱，而非实时诊断工具。社区强烈赞赏其开放获取的方式，一位用户称赞了不将该技术据为己有的决定。评论中还分享了项目网站和相关出版物的链接，供有兴趣探索交互式三维查看器的人参考。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">neuroscience</span> <span class="tag-badge">biology</span> <span class="tag-badge">medical-imaging</span> <span class="tag-badge">open-science</span> <span class="tag-badge">research</span></p>

---

<a id="item-9"></a>

## [Langflow 漏洞遭利用，用于部署定制 Gafgyt DDoS 僵尸网络](https://www.akamai.com/blog/security-research/2026/jul/langflow-exploited-build-custom-ddos-gafgyt-botnets) ⭐️ 8.0/10

Akamai 安全研究人员发现，流行的 AI 编排工具 Langflow 中的漏洞正被攻击者积极利用，用于部署定制化的 Gafgyt 僵尸网络来发起分布式拒绝服务（DDoS）攻击。这类攻击代表的是针对 AI 开发基础设施的实际野外利用，而非理论上的漏洞披露。 这一漏洞利用凸显了威胁行为者开始将矛头转向 AI 和 ML 基础设施的令人担忧的趋势，将开发工具转化为大规模网络攻击的跳板。在其流程中使用 Langflow 的系统管理员和开发人员必须紧急修补并保护其部署，以避免在不知情的情况下成为僵尸网络 DDoS 攻击活动的一部分。 Gafgyt，又称 BASHLITE，是一个长期存在的恶意软件家族，历来以路由器和 IP 摄像头等基于 Linux 的物联网设备为目标来组建僵尸网络。攻击者现在专门定制 Gafgyt 变体以通过 Langflow 进行部署，这表明他们正在改造传统的僵尸网络技术来利用新暴露的高价值 AI 基础设施。

rss · akamai Blog · 7月14日 16:00

**背景**: Langflow 是一个开源的可视化框架，用于构建 AI 和大语言模型（LLM）应用程序，使其成为现代 AI/ML 开发生态系统中广受欢迎的工具。Gafgyt 最早于 2014 年被发现，此后从主要攻击物联网设备演变为一个多功能的僵尸网络平台，甚至借鉴了 Mirai 等其他恶意软件家族的代码。AI 编排工具的漏洞与成熟的僵尸网络恶意软件的融合，标志着一个新兴攻击面的出现，开发基础设施本身正在成为网络犯罪分子眼中的高价值目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/BASHLITE">BASHLITE - Wikipedia</a></li>
<li><a href="https://hunt.io/malware-families/gafgyt">Gafgyt Malware: Evolution from IoT to Cloud Threats</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Langflow</span> <span class="tag-badge">Botnet</span> <span class="tag-badge">DDoS</span></p>

---

<a id="item-10"></a>

## [2026 AI 安全报告：AI 成为自主网络攻击操作者](https://research.checkpoint.com/2026/ai-security-report-2026/) ⭐️ 8.0/10

Check Point Research 发布的《2026 AI 安全报告》揭示，人工智能已经从单纯的攻击助手转变为能够自主执行网络威胁的操作者。近期事件表明，AI 驱动的智能体现在能够在极少人工干预的情况下自主进行情报收集和多步骤攻击。 这种范式的转变意味着网络攻击现在可以以前所未有的速度和规模执行，大大降低了复杂威胁行为者的准入门槛。它迫使网络安全行业和企业从根本上重新思考其防御策略和 AI 治理框架，以应对自主威胁。 该报告记录了一个关键的演变：AI 系统现在可以自主处理网络钓鱼、恶意软件投递和侦察等战术执行阶段。虽然 AI 在关键战略决策点上仍然需要人类操作员的输入，但这些攻击性行动的大规模自动化标志着网络战能力的一个关键里程碑。

rss · Check Point Research · 7月14日 00:51

**背景**: 过去，网络安全行业将 AI 视为一种“力量倍增器”，认为它只是使现有的攻击技术变得更快、更便宜且更容易获取。以前的报告详细说明了攻击者主要如何将 AI 武器化，用于生成网络钓鱼电子邮件、深度伪造和基本恶意软件等准备性任务。自主网络行动的概念代表了 AI 系统在野外独立对防御良好的目标进行多步骤攻击的第一个已知实例。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.iaps.ai/research/autonomous-cyber-attacks">The Emergence of Autonomous Cyber Attacks: Analysis and ...</a></li>
<li><a href="https://cybermagazine.com/news/ai-agents-drive-first-large-scale-autonomous-cyberattack">AI Agents Drive First Large-Scale Autonomous Cyberattack</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">AI security</span> <span class="tag-badge">threat intelligence</span> <span class="tag-badge">AI threats</span> <span class="tag-badge">security research</span></p>

---

<a id="item-11"></a>

## [微软发布针对 ShinyHunters 滥用 OAuth 攻击 SaaS 应用的防御指南](https://www.microsoft.com/en-us/security/blog/2026/07/13/defending-saas-based-applications-against-shinyhunters-oauth-abuse/) ⭐️ 8.0/10

微软威胁情报部门发布了一份详细的安全公告，概述了针对 ShinyHunters 相关威胁行为的防御策略，该威胁组织正通过 OAuth 滥用、语音钓鱼、供应链攻击和利用错误配置的来宾访问权限来攻击基于 SaaS 的应用程序。 该安全公告对安全工程师和系统管理员至关重要，因为 ShinyHunters 是一个至少自 2019 年以来一直活跃的以经济利益为动机的网络犯罪组织，以大规模数据窃取和针对 SaaS 平台的勒索行为而闻名。随着组织越来越依赖 SaaS 应用程序，了解并缓解这些基于 OAuth 的攻击向量对保护敏感企业数据和基础设施至关重要。 已识别的威胁活动涉及多种协同攻击向量，包括滥用 OAuth 令牌以获取对 SaaS 环境的持久访问权限、通过语音钓鱼窃取目标用户的凭据、利用供应链攻击影响下游受害者，以及利用错误配置的来宾访问策略。微软的安全公告提供了检测和阻止这些多阶段入侵技术的具体防御建议。

rss · Microsoft Security · 7月13日 22:02

**背景**: ShinyHunters 是一个以经济利益为动机的网络犯罪和勒索组织，约自 2019 至 2020 年开始活跃，最初因在暗网论坛上出售海量用户数据库而声名狼藉。该组织以大规模数据窃取、针对 SaaS 的入侵和"付费或泄露"式勒索计划而闻名，并与 Google 描述的威胁集群 UNC6040/UNC6240 相关联。OAuth（开放授权）是一种基于令牌的认证和授权开放标准协议，允许第三方应用程序在不共享密码的情况下访问用户数据，但当攻击者滥用该机制时，被入侵的 OAuth 令牌可以赋予攻击者对 SaaS 平台的持久且看似合法的访问权限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.huntress.com/threat-library/threat-actors/shinyhunters">ShinyHunters Threat Actor Profile: TTPs, IoCs & Attacks ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/ShinyHunters">ShinyHunters - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">OAuth</span> <span class="tag-badge">SaaS</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">ShinyHunters</span></p>

---

<a id="item-12"></a>

## [DeepSeek 创始人梁文锋身家 360 亿美元，成全球身价最高 AI 模型创始人](https://www.bloomberg.com/news/articles/2026-07-14/deepseek-s-liang-tops-amodei-and-brockman-as-richest-ai-founder) ⭐️ 8.0/10

DeepSeek 创始人梁文锋在 2026 年 6 月完成的 74 亿美元融资后，身家从约 167 亿美元飙升至 360 亿美元，超越 Anthropic 联合创始人 Dario Amodei 和 OpenAI 的 Greg Brockman，成为全球身价最高的 AI 模型创始人。他个人在本轮融资中出资 30 亿美元，DeepSeek 估值达到 500 亿美元。 这一里程碑凸显了中国 AI 企业在全球 AI 竞赛中的迅猛崛起，DeepSeek 达到 500 亿美元估值，其创始人在个人财富上超越了知名的西方 AI 领袖。这标志着 AI 行业地缘政治和金融格局的重大转变，反映出投资者对中国 AI 生态系统的信心日益增强。 梁文锋持有 DeepSeek 约 78%的股份，这是其财富的主要来源。74 亿美元的融资轮次使公司估值达到 500 亿美元，将 DeepSeek 定位为全球最有价值的私人 AI 公司之一。

telegram · zaihuapd · 7月14日 05:06

**背景**: DeepSeek 是一家中国 AI 公司，以开发大型语言模型而闻名，其模型因出色的性能和高性价比而受到广泛关注。该公司由梁文锋创立，已成为 OpenAI 和 Anthropic 等西方 AI 实验室的强劲竞争对手。DeepSeek 的模型以更低的训练成本实现了优秀的表现，打破了人们对构建前沿 AI 系统所需资源的既有认知。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI Industry</span> <span class="tag-badge">Funding</span> <span class="tag-badge">Liang Wenfeng</span> <span class="tag-badge">Valuation</span></p>

---

<a id="item-13"></a>

## [Cloudflare 推出 Precursor 以实现持续 AI 机器人检测](https://blog.cloudflare.com/introducing-precursor/) ⭐️ 8.0/10

Cloudflare 发布了名为 Precursor 的持续行为验证引擎，通过在整个会话期间分析鼠标轨迹和键盘节奏等用户交互模式来检测 AI 机器人和脚本。与仅在特定时刻进行验证的传统工具 Turnstile 不同，这款客户端 JavaScript 解决方案会在后台持续运行，以判断屏幕另一端是否为真人。 这一发展通过持续监控难以伪装的人类生理特征，有效应对了日益复杂的 AI 代理和脚本威胁，代表着 Web 安全防御的重大升级。它突破了登录等关键节点的限制，为整个用户旅程提供保护，为企业构建了更强大的防线，是不断升级的 AI 与网络安全军备竞赛中的关键一环。 Precursor 目前正面向企业版机器人管理（Bot Management）用户进行免费测试，正式版计划于今年晚些时候上线。它被定位为 Turnstile 的可选补充，能够将采集的数据整理成基于会话的分析面板，从而区分真实的人类交互与自动化操作。

telegram · zaihuapd · 7月14日 09:44

**背景**: 传统的身份验证机制通常仅在登录或结账时对用户进行验证，这使得它们在面对能够在通过初始验证后进行操作的复杂 AI 代理时显得不堪一击。持续行为验证通过在整个活跃会话期间动态验证用户来解决这一漏洞，其核心理念在于人类操作包含独特的生理特征，如自然的鼠标移动弧线和思考时的认知停顿。研究表明，这些生物识别数据极难被自动化脚本或 AI 模型完美复制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nca-ieee.org/2025/assets/pdf/32_Sarmiento_authn-mouse-dynamics.pdf">Continuous behavioral authentication using mouse dynamics ...</a></li>
<li><a href="https://www.computer.org/csdl/proceedings-article/nca/2025/784200a087/2bZ8v0SPf56">Continuous behavioral authentication using mouse dynamics ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Bot Detection</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">AI</span> <span class="tag-badge">Web Security</span></p>

---

<a id="item-14"></a>

## [高德开源 ABot-WorldStudio：交互式 3D 世界生成工坊](https://www.ithome.com/0/976/538.htm) ⭐️ 8.0/10

高德正式发布了 ABot-WorldStudio 世界模型工坊，首次在同一产品中统一了交互式视频生成与 3DGS 场景生成。用户输入文字或图片即可生成可实时交互的 AI 世界，内置的"时空任意门"机制将孤立的 3D 场景串联成无界探索网络，底层 ABot-World 系列模型已全面开源。 此次发布在长期推理稳定性上实现了重大突破——系统在单张 RTX 5090 上连续推理超过 1 小时无崩溃、无质量衰减，远超同类产品约 1 分钟的上限。通过开源模型并原生输出照片级保真度的 3DGS 资产，它为具身智能仿真训练、游戏影视创作及文旅教育等领域的开发者和研究人员提供了巨大价值。 ABot-WorldStudio 可在单张 RTX 5090 上本地部署，推理时长无上限，并与高德此前发布的 ABot-Earth0.5 共享相同的推理路径。系统采用"生成-评估-修复"的模块化设计，确保高保真长序列场景的稳定可控质量，原生输出的 3DGS 资产保留了真实的几何结构而非仅仅是 2D 视频帧。

telegram · zaihuapd · 7月14日 12:22

**背景**: 3D Gaussian Splatting（3DGS）是一种革命性的辐射场技术，使用数百万个可学习的 3D 高斯函数进行显式场景表示，能够实现实时、高质量的新视角合成。与隐式神经表示不同，3DGS 提供真实的几何结构，这对于具身智能应用尤为重要——智能体需要理解并导航物理空间。AI 领域的"世界模型"是指能够模拟和预测环境动态的系统，使具身智能体可以在逼真的虚拟世界中进行训练和规划，然后再部署到物理世界中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ithome.com/0/976/538.htm">内置“任意门”，高德发布通用世界模型工坊 ABot-WorldStudio - IT之家</a></li>
<li><a href="https://autonews.gasgoo.com/articles/icv/amap-launches-abot-world-studio-a-general-world-model-development-platform-2077009328685764608">Amap Launches ABot-World Studio, a General World Model ...</a></li>
<li><a href="https://arxiv.org/html/2401.03890v8">A Survey on 3D Gaussian Splatting - arXiv.org</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">World Model</span> <span class="tag-badge">3D Generation</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Embodied AI</span></p>

---

<a id="item-15"></a>

## [DeepMind CEO 呼吁美国主导成立全球 AI 监管机构](https://www.theverge.com/tech/965270/google-deepmind-demis-hassabis-global-ai-watchdog) ⭐️ 8.0/10

Google DeepMind CEO Demis Hassabis 公开呼吁由美国主导成立一个全球性 AI 监管机构，力争在今年年底前开始运作。该机构将由独立专家和开源社区代表组成，有权在前沿 AI 模型发布前进行风险评估，并在风险过高时协调全行业暂停部署。 作为全球顶尖 AI 实验室的负责人公开倡导建立具有约束力的国际监管框架，这标志着行业对监管态度的重大转变。该提案可能塑造 AI 开发的未来治理框架，尤其是在 Hassabis 警告通用人工智能（AGI）可能仅剩数年之遥的背景下。 Hassabis 已就这一提案与特朗普政府、其他 AI 实验室及欧洲官员进行了数月的沟通，并表示对方反馈非常积极。该机构将专门聚焦前沿 AI 模型——即具备多模态处理和智能体行为等特征的最先进系统——而非所有 AI 应用。

telegram · zaihuapd · 7月14日 14:29

**背景**: 前沿 AI 模型是当前最先进的人工智能系统，具备多模态处理、零样本学习和智能体行为等关键特征，代表性实例包括 GPT-4o 和 Gemini 1.5。通用人工智能（AGI）指在跨领域学习、推理与决策方面达到或超越人类水平的 AI 系统，被视为人工智能发展的终极目标之一。2023 年，谷歌、微软、OpenAI 和 Anthropic 等主要 AI 公司成立了前沿模型论坛，以推动此类系统的安全开发，反映出业界对潜在风险日益增长的关注。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://baike.baidu.com/item/前沿人工智能模型/68190808">前沿人工智能模型 - 百度百科</a></li>
<li><a href="https://baike.baidu.com/item/通用人工智能(AGI)/67547871">通用人工智能 (AGI) - 百度百科</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI监管</span> <span class="tag-badge">Google DeepMind</span> <span class="tag-badge">人工智能</span> <span class="tag-badge">科技政策</span> <span class="tag-badge">AGI</span></p>

---

<a id="item-16"></a>

## [DeepSeek 启动新一轮融资，估值达 710 亿美元](https://t.me/zaihuapd/42564) ⭐️ 8.0/10

在 5 月底刚以约 520 亿美元估值完成约 70 亿美元融资后，中国 AI 创业公司 DeepSeek 已开始与投资者初步洽谈新一轮融资，投前估值约 710 亿美元。据路透社报道，该公司还在开发自有 AI 芯片，以减少对英伟达和华为芯片的依赖。 仅在一个月内估值从 520 亿美元飙升至 710 亿美元，凸显了投资者对 DeepSeek 及中国 AI 行业整体前所未有的信心。公司计划开发自有 AI 芯片，在当前美国对中国先进芯片出口管制的背景下，对半导体自主化具有重要战略意义。 据报道，710 亿美元的投前估值相比 5 月底约 520 亿美元的估值增长了约 37%。路透社本月早些时候报道，芯片开发计划旨在减少对英伟达和华为的依赖，暗示公司正在采取垂直整合战略。

telegram · zaihuapd · 7月14日 15:15

**背景**: DeepSeek（深度求索）是一家总部位于杭州的 AI 公司，由梁文锋于 2023 年 7 月创立，他同时也是拥有和资助该公司的对冲基金幻方量化的 CEO。2025 年 1 月，DeepSeek 发布了 DeepSeek-R1 模型，其性能可与 OpenAI 的 GPT-4 和 o1 相媲美，但训练成本据报道仅约 600 万美元，而 GPT-4 的训练成本约为 1 亿美元。公司通过混合专家（MoE）等技术以及在使用符合出口管制的较弱芯片的情况下运营，实现了成本大幅降低。其以 MIT 许可证发布的开源模型被广泛认为引发了美国 AI 行业的"斯普特尼克时刻"。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek_(Company)">DeepSeek (Company)</a></li>
<li><a href="https://www.deepseek.com/">DeepSeek | 深度求索</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">AI融资</span> <span class="tag-badge">AI芯片</span> <span class="tag-badge">估值</span> <span class="tag-badge">中国AI</span></p>

---

<a id="item-17"></a>

## [Anthropic 面向美国 K-12 教师推出免费的 Claude for Teachers](https://www.anthropic.com/news/claude-for-teachers) ⭐️ 8.0/10

Anthropic 推出了“Claude for Teachers”计划，为经验证的美国 K-12 教师提供一年的免费 Claude 高级访问权限。该计划包含一个专门的教学技能库，旨在生成与全美 50 个州学术标准对接的教案和测验。 此举通过消除个人教师的成本障碍，确立了 Anthropic 在教育领域的战略地位。通过强调 FERPA 合规性和课程整合，它直接解决了学校在采用 AI 方面的主要担忧。 教师必须在 2027 年 6 月 30 日前注册才能获得为期一年的免费订阅。此外，教师数据默认不用于模型训练，学生信息受符合 FERPA 标准的数据处理协议保护。

telegram · zaihuapd · 7月14日 15:37

**背景**: FERPA（家庭教育权利和隐私法案）是一项美国联邦法律，旨在保护学生教育记录的隐私。符合 FERPA 标准是任何教育技术工具被美国学校采用的先决条件。AI 工具在处理敏感学生数据的方式上经常面临严格审查，因此隐私功能对于进入该市场至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="http://studentprivacy.ed.gov/ferpa">FERPA | Protecting Student Privacy - ed</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Claude</span> <span class="tag-badge">AI in Education</span> <span class="tag-badge">K-12</span> <span class="tag-badge">EdTech</span></p>

---

<a id="item-18"></a>

## [白宫扩大自愿承诺范围，确保 AI 用电成本不转嫁给消费者](https://t.me/zaihuapd/42566) ⭐️ 8.0/10

白宫计划在未来几周内召集电力公司、数据中心开发商以及相关州长，推动扩大一项自愿承诺的范围，确保人工智能激增的电力需求不会推高居民和企业的电费。今年早些时候，Google、Meta、OpenAI 等科技巨头已在白宫签署了类似承诺，同意自行承担发电和电网升级等基础设施成本，而非转嫁给现有用户。 这一举措直击 AI 发展中最关键的瓶颈之一——激增的能源消耗——并代表了防止 AI 巨额基础设施成本转嫁给普通消费者的重要政策努力。通过将承诺范围扩大至电力公司和托管运营商，白宫正在堵住可能让成本通过电力供应链层层传导的漏洞。 扩大后的承诺预计不仅涵盖超大规模云服务商，还将纳入代表科技巨头建设和运营数据中心的批发托管服务商、电力公司，以及处于能源基础设施扩张前沿的州长。各企业可能会越来越依赖表后发电——即在数据中心现场或附近自行发电——来满足需求，同时减轻公共电网压力。

telegram · zaihuapd · 7月14日 16:00

**背景**: AI 工作负载，尤其是大语言模型的训练和推理，消耗的电力远超传统计算，给当地电网带来巨大压力，并推动了对新发电能力的需求。表后（BTM）发电——即在数据中心现场或附近直接发电——已成为一项关键策略，使设施能够绕过公用电网或在用电高峰时进行补充。批发托管是一种由服务商向科技公司大规模出租数据中心空间和基础设施的模式，越来越受到超大规模 AI 部署的青睐。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.datacenterdynamics.com/en/opinions/behind-the-meter-power-the-new-backbone-of-data-center-growth/">Behind-the-meter power: The new backbone of data center ...</a></li>
<li><a href="https://www.datacenters.com/news/wholesale-colocation-the-rising-star-of-data-center-real-estate">Wholesale Colocation: The Rising Star in Data Center Real Estate</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Energy Policy</span> <span class="tag-badge">Data Centers</span> <span class="tag-badge">Tech Industry</span> <span class="tag-badge">Government Regulation</span></p>

---