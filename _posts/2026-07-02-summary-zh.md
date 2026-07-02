---
layout: default
title: "Horizon Summary: 2026-07-02 (ZH)"
date: 2026-07-02
lang: zh
---

> 从 73 条内容中筛选出 11 条重要资讯。

---

1. [Podman v6.0.0 发布，带来重大网络改进](#item-1) ⭐️ 9.0/10
2. [Cloudflare 9 月起默认拦截混合用途 AI 爬虫，点名批评 Google](#item-2) ⭐️ 9.0/10
3. [Erin Catto 发布 Box3D，全新的开源 3D 物理引擎](#item-3) ⭐️ 9.0/10
4. [Linux 6.9 回归问题导致 LUKS 挂起时无法清除加密密钥](#item-4) ⭐️ 8.0/10
5. [F-Droid 谴责 Google 安卓开发者验证政策是伪装成保护的生态封锁](#item-5) ⭐️ 8.0/10
6. [后 Mythos 时代：自动化漏洞挖掘的七大趋势](#item-6) ⭐️ 8.0/10
7. [Elastic InfoSec 的智能代理安全运营中心：警报分类时间从 30 分钟缩短至 3 分钟以内](#item-7) ⭐️ 8.0/10
8. [Watchtowr Labs 深入分析 Adobe ColdFusion 安全公告 APSB26-68 的大量 CVE 漏洞](#item-8) ⭐️ 8.0/10
9. [Meta 拟出售富余 AI 算力，进军云计算市场](#item-9) ⭐️ 8.0/10
10. [OpenAI 提议美国政府持有主要 AI 公司 5% 股份](#item-10) ⭐️ 8.0/10
11. [花旗禁用 GPT-5.5，多家大企业因 AI 成本飙升限制员工使用](#item-11) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Podman v6.0.0 发布，带来重大网络改进](https://blog.podman.io/2026/07/introducing-podman-v6-0-0/) ⭐️ 9.0/10

Podman v6.0.0 已正式发布，为其网络功能带来了重大改进。这一主要版本更新进一步巩固了其作为强大的、无根 Docker 替代方案的地位。 这一版本意义重大，因为网络一直被视为无根容器引擎的痛点，而这些改进增强了复杂部署的可用性。它增强了 Podman 对寻求更安全、无守护进程的 Docker 替代方案的 DevOps 专业人士和家庭实验室爱好者的吸引力。 Podman 是一个无守护进程的容器引擎，提供与 Docker API 兼容的替代方案。过渡到这个新版本的用户应注意，像 Quadlets 和无根容器这样的功能使得 systemd 集成和安全管理变得更加容易，尽管生态系统工具的兼容性可能有所不同。

hackernews · soheilpro · 7月2日 14:23 · [社区讨论](https://news.ycombinator.com/item?id=48762098)

**背景**: Podman 是由 Red Hat 开发的开源容器管理工具，无需中央守护进程即可处理容器、镜像和 pod。与传统的 Docker 不同，Podman 强调“无根”容器，这类容器无需 root 权限即可运行，从而提供隔离且更安全的执行环境。虽然 Podman 在很大程度上与 Docker 命令兼容，但在网络和生态系统工具方面的差异往往会造成迁移障碍。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Podman">Podman</a></li>
<li><a href="https://podman.io/">Podman</a></li>
<li><a href="https://medium.com/@ByteWaveNetwork/rootless-containers-whats-that-f4752158a923">Rootless Containers , what’s that? | by ByteWaveNetwork | Medium</a></li>

</ul>
</details>

**社区讨论**: 社区对网络改进表现出高度热情，几位用户强调 Quadlets 和无根支持是他们从 Docker 切换的主要原因。一些用户由于依赖 Coolify 等管理平台而感到被锁定在 Docker 生态系统中，而另一些用户则寻求关于迁移现有 Docker Compose 设置的建议，或赞扬了用户界面可读性的提升。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">podman</span> <span class="tag-badge">containers</span> <span class="tag-badge">docker</span> <span class="tag-badge">devops</span> <span class="tag-badge">release</span></p>

---

<a id="item-2"></a>

## [Cloudflare 9 月起默认拦截混合用途 AI 爬虫，点名批评 Google](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/) ⭐️ 9.0/10

Cloudflare 宣布从 9 月 15 日起，将默认拦截同时用于搜索收录、AI 问答和 AI 训练的"混合用途"爬虫抓取带广告的页面。该公司还特别点名批评 Google 利用网站难以区分"允许搜索收录"和"拒绝 AI 训练"的漏洞来获取训练数据。 作为全球最大的 CDN 和网络基础设施提供商之一，Cloudflare 的默认拦截政策可能从根本上改变 AI 公司获取训练数据的方式，迫使其与出版商协商付费内容许可协议。此举加剧了内容创作者与 AI 公司之间持续的版权博弈，可能为网络内容在 AI 领域的访问方式树立新的行业标准。 Cloudflare 的政策专门针对那些无法被网站明确区分为"仅用于搜索收录"还是"同时用于 AI 训练"的爬虫，这使得出版商几乎无法做到"允许搜索但拒绝 AI 训练"。新框架暗示未来 AI 公司不仅需要为抓取权限付费，还可能需要根据内容的实际使用量付费。

telegram · zaihuapd · 7月2日 05:37

**背景**: 网站通常使用 robots.txt 文件来控制哪些爬虫可以访问其内容，但这一协议依赖自愿遵守，许多 AI 爬虫要么无视规则，要么利用模糊的漏洞。"混合用途"爬虫（如 Google 的爬虫）将传统的搜索索引与 AI 训练数据采集结合在一起，给希望获得搜索可见性但不愿被用于 AI 训练的出版商带来了困境。Cloudflare 作为互联网重要部分的反向代理和 WAF 服务提供商，拥有在基础设施层面强制执行爬虫策略的技术能力，使其默认立场远比单个网站级别的 robots.txt 配置更具影响力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cnabke.com/blogs/robots-txt-audit-ai-crawlers-geo.html">robots . txt 检查与 AI 爬 虫 放行（GPTBot/ClaudeBot/Google-Extended</a></li>
<li><a href="https://www.codeqihan.com/post/ai.robots.txt/">ai . robots . txt 阻止 AI 爬 虫 - codeqihan的博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">AI Crawlers</span> <span class="tag-badge">Web Scraping</span> <span class="tag-badge">Copyright</span> <span class="tag-badge">Google</span></p>

---

<a id="item-3"></a>

## [Erin Catto 发布 Box3D，全新的开源 3D 物理引擎](https://github.com/erincatto/box3d) ⭐️ 9.0/10

广受欢迎的 Box2D 物理引擎原作者 Erin Catto 发布了 Box3D——一个完全用 C 语言编写的全新开源 3D 游戏物理引擎。该项目从 Box2D 代码库 fork 而来，提供了 C API，架构与其 2D 前身几乎完全一致。 Box2D 是无数游戏中事实上的行业标准 2D 物理引擎，来自同一作者的 3D 继任者具有极高的可信度。开源 3D 物理引擎领域目前相当稀缺，因此 Box3D 有潜力成为游戏开发者、图形程序员和实时仿真社区的基础性工具。 核心库除了 C 运行时（以及 Unix 上的 libm）之外没有任何依赖，使其具有高度的可移植性和易集成性。Erin Catto 亲自为 Box2D 和 Box3D 中的每一行代码负责，确保了代码库的高质量和一致性。

ossinsight · erincatto · 7月2日 20:00

**背景**: Box2D 最初由 Erin Catto 于 2006 年 GDC 大会上以 "Box2D Lite" 的形式作为物理演示引擎首次发布。它于 2007 年 9 月在 SourceForge 上开源，此后成为游戏开发领域使用最广泛的 2D 物理引擎。开源 3D 物理引擎领域一直比较稀缺，可供开发者选择的成熟且维护良好的选项寥寥无几。Box3D 旨在通过将 Box2D 经过验证的架构和设计理念应用于 3D 场景来填补这一空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.phoronix.com/news/Box3D-Open-Source-3D-Physics">Box 3 D Debuts As New Open-Source 3 D Physics Engine - Phoronix</a></li>
<li><a href="https://github.com/erincatto/box3d">GitHub - erincatto/ box 3 d : Box 3 D is a 3 D physics engine for games</a></li>
<li><a href="https://en.wikipedia.org/wiki/Box2D">Box2D - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---

<a id="item-4"></a>

## [Linux 6.9 回归问题导致 LUKS 挂起时无法清除加密密钥](https://mathstodon.xyz/@iblech/116769502749142438) ⭐️ 8.0/10

Linux 内核 6.9 版本中引入的回归问题导致 `cryptsetup luksSuspend` 在挂起加密卷时无法从内核内存中清除磁盘加密主密钥。系统仍然正常运行，这使得该安全回归问题在没有显式测试的情况下难以被发现。 此回归问题悄无声息地禁用了一项关键安全功能，该功能原本用于防御旨在从 RAM 中提取加密密钥的物理攻击（如冷启动攻击）。它凸显了在内核更新中维护安全关键功能的困难性，并引发了关于对那些失败方式隐蔽而非明显的安全功能进行回归测试的质疑。 该回归问题具体影响 `luksSuspend` 操作，该操作旨在从内核内存中移除主密钥并阻止对设备的所有 I/O 操作，直到使用正确的密码短语调用 `luksResume`。社区成员指出 `luksSuspend` 可能是 Debian 特有的扩展，而非上游官方支持的功能，这使得确定责任归属和受影响的发行版范围变得更加复杂。

hackernews · IngoBlechschmid · 7月2日 15:25 · [社区讨论](https://news.ycombinator.com/item?id=48763035)

**背景**: LUKS（Linux Unified Key Setup）是 Linux 全盘加密的标准，由 `cryptsetup` 工具管理。当 LUKS 加密卷处于活动状态时，主解密密钥驻留在内核内存中，以便系统能够透明地读写加密数据。`luksSuspend` 命令旨在从内存中移除此密钥——在无人看管机器时非常有用——这样获得物理访问权限的攻击者就无法通过冷启动攻击或 DMA 攻击等技术提取密钥。这与休眠（挂起到磁盘）不同，后者将包括主密钥在内的 RAM 内容写入加密的交换分区并关闭 RAM 电源，恢复时需要输入密码短语。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://man7.org/linux/man-pages/man8/cryptsetup.8.html">cryptsetup (8) - Linux manual page</a></li>
<li><a href="https://git.hubp.de/mahdi-n0rouzi/luks-cheatsheet">GitHub - mahdi-n0rouzi/ luks -cheatsheet: Complete LUKS Cheat Sheet...</a></li>

</ul>
</details>

**社区讨论**: 社区成员表达了不同的观点：一些人质疑其严重性，指出 `luksSuspend` 可能是 Debian 特有的扩展而非官方支持的功能。少数评论者怀疑该回归问题可能是潜在的"后门"，而另一些人则认为对于他们个人的威胁模型来说风险是可以接受的。多位用户强调安全回归问题特别危险，因为一切表面上都正常运行，并赞扬了 NixOS 的自动化测试基础设施能够发现此问题。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Linux</span> <span class="tag-badge">Security</span> <span class="tag-badge">Cryptography</span> <span class="tag-badge">Kernel</span> <span class="tag-badge">Bug</span></p>

---

<a id="item-5"></a>

## [F-Droid 谴责 Google 安卓开发者验证政策是伪装成保护的生态封锁](https://f-droid.org/2026/07/01/adv-malware.html) ⭐️ 8.0/10

F-Droid 于 2026 年 7 月 1 日发布了一篇措辞严厉的博客文章，谴责 Google 即将实施的安卓开发者验证政策。该政策自 2026 年 9 月起将要求所有通过 Google Play 以外方式分发应用的开发者完成验证。F-Droid 认为这一强制性要求并非真正的安全措施，而是一场威胁替代应用商店和用户自由的生态封锁。 该政策从根本上改变了安卓传统的开放分发模式，可能使 F-Droid 等第三方应用商店陷入困境，并让 APK 侧载对许多开发者变得不可行。它影响了所有重视在自己设备上自由安装软件的用户，并为 Google 进一步封闭平台开创了先例。 验证要求适用于 Google Play 以外的所有应用分发方式，包括第三方商店和直接 APK 安装，实际上将 Play Store 的把关机制扩展到了整个安卓平台。F-Droid 的文章使用了对抗性语言，称 Google 为'恶意软件供应商'并将该政策比作木马，一些社区成员担心这种措辞可能会削弱文章的可信度。

hackernews · drewfax · 7月2日 03:00 · [社区讨论](https://news.ycombinator.com/item?id=48755965)

**背景**: F-Droid 是一个免费开源的安卓应用仓库，作为 Google Play 商店的替代方案，仅托管 FOSS（自由开源软件）应用。安卓历来以允许用户通过 APK 侧载或第三方商店安装任意来源的应用而区别于 iOS，这使其成为重视开放性的开发者和高级用户的首选平台。Google 的新验证政策标志着对这一开放分发传统的重大背离，使安卓向类似于苹果围墙花园的受控生态系统模式靠拢。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://fatbobman.medium.com/from-open-platform-to-controlled-ecosystem-google-announces-android-developer-verification-policy-6a726b2f52bc">From Open Platform to Controlled Ecosystem: Google ... | Medium</a></li>
<li><a href="https://dev.to/dev-arafat-alim/android-is-losing-its-freedom-googles-2026-developer-verification-explained-2b5p">Android Is Losing Its Freedom: Google 's 2026 Developer ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/F-Droid">F - Droid - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 讨论反映了社区对 Google 政策的强烈反对，评论者强调设备所有权（'手机要么是我的，要么不是'），并建议转向 GrapheneOS 以及 SailfishOS 和 Ubuntu Touch 等基于 Linux 的移动操作系统。一位评论者批评 F-Droid 文章的语调'幼稚'且适得其反，认为这给了 Google 无视合理担忧的理由，并指出 keepandroidopen.org 的呈现方式更加专业。另一位评论者则持极端立场，将几乎所有 Google 产品都描述为以数据采集为目的的间谍软件。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Android</span> <span class="tag-badge">F-Droid</span> <span class="tag-badge">Mobile OS</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">App Distribution</span></p>

---

<a id="item-6"></a>

## [后 Mythos 时代：自动化漏洞挖掘的七大趋势](https://a7um.github.io/cn/blog/post-mythos-avd-trends/) ⭐️ 8.0/10

本文梳理了 Anthropic Mythos 模型突破之后 AI 驱动自动化漏洞挖掘的七大趋势，标志着战略重心从单纯寻找廉价漏洞转向覆盖漏洞全生命周期的复杂挑战。文章指出，漏洞发现本身将日益商品化，而真正稀缺的能力将转向仓库级覆盖、低噪声验证、修复、披露以及供应链治理。 这一分析意义重大，因为它抓住了安全行业的一个关键拐点：必须从单纯找漏洞进化到解决分类、修复和大规模供应链安全的下游瓶颈。随着 Mythos 级工具展示了自动发现数百个漏洞的能力，组织和开源维护者面临着前所未有的压力，需要构建能够承接这种量级漏洞发现的治理框架。 文章强调，低垂果实将被 AI 驱动的发现能力快速耗尽，迫使该领域面对仓库级代码覆盖和验证过程中减少误报噪声等更困难的问题。文章还提出了供应链投毒和变更入口攻击等新兴威胁向量，认为这些是自动化漏洞工具最终必须解决的关键治理挑战。

rss · atum-Blog · 7月2日 00:00

**背景**: Mythos 是由 Anthropic 开发的专门用于自动化安全漏洞挖掘的 AI 模型，定位为强大的自主安全研究工具。Mozilla 曾借助 Claude Mythos 修复了 Firefox 中的 271 个安全漏洞，展示了该模型大规模实际应用的影响力。出于安全考虑，Anthropic 已限制了对 Mythos 的访问，引发了安全行业对 AI 大规模漏洞挖掘影响的广泛讨论，也推动了 360 等公司开发自己的竞争性漏洞挖掘智能体。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://net.zhiding.cn/network_security_zone/2026/0423/3184861.shtml">Anthropic"超危险" 漏 洞 猎手模型 Mythos ...</a></li>
<li><a href="https://www.tahou.com/article/204172245447980037">挖 漏 洞 何必 Mythos ，国产智能体早跑通了-塔猴速递-塔猴</a></li>
<li><a href="https://news.qq.com/rain/a/20260528A080O900">海外媒体聚焦360 漏 洞 挖 掘 智能体： AI 安全不只有 Mythos ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Vulnerability Management</span> <span class="tag-badge">Automated Vulnerability Detection</span> <span class="tag-badge">Software Supply Chain</span> <span class="tag-badge">Cybersecurity Trends</span></p>

---

<a id="item-7"></a>

## [Elastic InfoSec 的智能代理安全运营中心：警报分类时间从 30 分钟缩短至 3 分钟以内](https://www.elastic.co/security-labs/alert-triage-agentic-soc-elastic-workflows) ⭐️ 8.0/10

Elastic 的信息安全团队基于 Elastic Workflows 构建了 AI 代理，能够自动调查安全警报并在分析师查看前汇编案例上下文。该方法将每个警报的平均分类时间从 30 分钟缩短至 3 分钟以内。 这一实际部署展示了智能代理 AI 如何显著提升安全运营中心（SOC）的效率，解决了警报疲劳和分析师短缺等关键行业挑战。它为其他寻求自动化安全运营的组织提供了具体可复制的模型。 AI 代理会自动调查每条警报并汇编案例上下文，这意味着分析师收到的是经过丰富的完整案例而非原始警报。作为内置于 Elasticsearch 平台的原生自动化引擎，Elastic Workflows 能够直接在数据所在位置实现脚本化和 AI 驱动的自动化。

rss · Elastic Security Labs · 7月2日 00:00

**背景**: 智能代理安全运营中心将自主 AI 代理集成到安全运营中，用于执行警报分类、调查、上下文丰富、推理和响应行动等任务。这种模式代表着对传统安全运营中心的重大演进，在传统模式中，人类分析师需要手动处理每条警报，经常导致瓶颈和警报疲劳。Elastic Workflows 在 Elasticsearch 平台内提供了支持这种智能代理方法的自动化基础设施。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Agentic_SOC">Agentic SOC</a></li>
<li><a href="https://www.elastic.co/elasticsearch/workflows">Native workflow automation where your data lives | Elastic</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">agentic-ai</span> <span class="tag-badge">soc-automation</span> <span class="tag-badge">elastic-security</span> <span class="tag-badge">ai-workflows</span></p>

---

<a id="item-8"></a>

## [Watchtowr Labs 深入分析 Adobe ColdFusion 安全公告 APSB26-68 的大量 CVE 漏洞](https://labs.watchtowr.com/its-37oc-and-all-we-can-think-about-is-coldfusion-adobe-coldfusion-security-bulletin-apsb26-68-cve-bonanza/) ⭐️ 8.0/10

Watchtowr Labs 发布了对 Adobe ColdFusion 安全公告 APSB26-68 的技术分析，该公告修复了 ColdFusion 平台中的大量漏洞（CVE）。研究人员指出，已修复漏洞的数量之多——以及一些似乎未被提及的漏洞——使得全面评估补丁范围变得困难。 Adobe ColdFusion 在企业环境中被广泛部署，大量 CVE 修复意味着存在显著的攻击面，威胁行为者可能会利用未修补系统的漏洞。这项分析对于需要理解实际风险并确定补丁优先级的系统管理员和安全专业人员至关重要。 Watchtowr Labs 的分析聚焦于公告 APSB26-68 中修复漏洞的技术细节，重点指出了 CVE 数量之多以及研究人员对披露内容可能存在缺口的担忧。该文章面向技术受众，提供了对已修补漏洞的可利用性和影响的深入见解。

rss · watchTowr Labs - Blog · 7月2日 16:38

**背景**: Adobe ColdFusion 是一个商业化的快速 Web 应用程序开发平台，最初创建于 1995 年，旨在简化 HTML 页面与数据库的连接，如今已包含完整的脚本语言（CFML）和集成开发环境。Watchtowr Labs 是一个专注于进攻性安全和预防性暴露管理的安全研究团队，定期发布针对关键漏洞的技术分析。像 APSB26-68 这样的安全公告是 Adobe 的正式安全通告，列举影响其产品的 CVE 并提供补丁指导。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Adobe_ColdFusion">Adobe ColdFusion</a></li>
<li><a href="https://labs.watchtowr.com/">watchTowr Labs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Adobe ColdFusion</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Security Research</span></p>

---

<a id="item-9"></a>

## [Meta 拟出售富余 AI 算力，进军云计算市场](https://www.bloomberg.com/news/articles/2026-07-02/south-korean-stocks-tumble-6-as-ai-jitters-hurt-chipmakers) ⭐️ 8.0/10

据报道，Meta 正筹划向外部客户出售多余的 AI 算力和模型服务，这意味着其可能进军云计算市场。与此同时，苹果正在与两家中国存储芯片厂洽谈采购面向中国市场设备所需的芯片，引发了对三星和 SK 海力士竞争地位的担忧。 Meta 进军云计算可能打破由亚马逊、微软和谷歌主导的云服务格局，同时也暗示超大型科技公司可能在 AI 基础设施上过度投入。加上苹果可能转向中国存储供应商，这些消息引发了韩国科技股的大规模抛售，Kospi 指数盘中最多跌 7%，三星电子和 SK 海力士均一度跌至少 8%。 此次抛售程度严重，韩国交易所一度暂停了 Kospi 期货的程序化卖出。市场的担忧集中在两方面：一是大型科技公司 AI 投入可能放缓、整体产能可能过剩；二是苹果多元化存储芯片采购来源，可能削弱韩国供应商的传统优势地位。

telegram · zaihuapd · 7月2日 02:29

**背景**: Meta 等大型科技公司已在 AI 基础设施上投入数十亿美元，包括用于训练大语言模型的大规模 GPU 集群。目前云计算市场由 AWS、Microsoft Azure 和 Google Cloud 主导，它们向企业客户出租计算资源。AI 芯片供应链高度依赖三星和 SK 海力士的存储芯片，尤其是 AI 加速器中使用的高带宽存储器（HBM），因此任何采购模式的变化都会对半导体行业产生重大影响。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Cloud Computing</span> <span class="tag-badge">Meta</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Market Analysis</span></p>

---

<a id="item-10"></a>

## [OpenAI 提议美国政府持有主要 AI 公司 5% 股份](https://www.bloomberg.com/news/articles/2026-07-02/openai-proposes-giving-the-us-government-a-5-stake-ft-says) ⭐️ 8.0/10

OpenAI 由 CEO Sam Altman 等高管牵头，提议由一个政府载体统一持有 OpenAI、Anthropic、Google 和 Meta 等美国主要 AI 公司各 5% 的股份。该提议旨在让公众直接分享 AI 热潮带来的经济收益。 该提议引入了一种前所未有的政府持有 AI 行业股权的框架，可能从根本上改变 AI 治理、公众利润分配和监管 oversight 之间的关系。如果被采纳，它将重塑美国政府与私营科技巨头之间的关系，同时也会引发关于监管俘获和反垄断问题的严重质疑。 该提议设想由一个单一政府实体同时持有多家相互竞争的 AI 公司的股权，这是一种新颖的结构性方案。目前尚不清楚 Google、Meta 和 Anthropic 等其他公司是否会接受这一安排，而在反垄断法和公司治理方面也存在重大的法律和监管障碍需要解决。

telegram · zaihuapd · 7月2日 06:02

**背景**: OpenAI 的公司结构已经经历了重大变化，包括从纯非营利模式转向带有利润上限的混合结构。更广泛的背景包括美国国内日益增长的 AI 监管呼声、公众对确保 AI 普惠性的关注，以及对大型科技公司市场支配力的加强审查。在政策圈中，类似的战略性产业政府持股概念也已被讨论，作为将企业激励与公共福利保持一致的一种方式。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">AI Governance</span> <span class="tag-badge">Tech Policy</span> <span class="tag-badge">Government Regulation</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-11"></a>

## [花旗禁用 GPT-5.5，多家大企业因 AI 成本飙升限制员工使用](https://www.404media.co/companies-are-throttling-employees-ai-use-because-its-too-expensive/) ⭐️ 8.0/10

根据 404 Media 获取的泄露内部文件，花旗、Atlassian、Adobe 和亚马逊等多家大型企业正在限制或完全禁用员工使用高级 AI 模型，原因是按量计费模式下成本急剧膨胀。花旗已于 6 月 24 日完全禁用 Claude Opus 4.6、4.7 及 GPT-5.5，而 Atlassian 的 AI 月支出从 2025 年 8 月的 500 万美元飙升至 2026 年 5 月的逾 1500 万美元。 这一进展暴露了企业 AI 热情与经济现实之间日益增长的矛盾，揭示了高级模型的按量计费模式在组织级规模部署时会产生不可持续的成本结构。这预示着一个更广泛的行业转折点——企业必须在部署前严格评估 AI 的投资回报率，这可能减缓 AI 的采用速度，并迫使 AI 提供商重新设计企业定价模式。 Atlassian 已终止 AI 无限使用并推出成本追踪面板，Adobe 宣布不再续签 6 月 30 日到期的 Claude 无限使用合同。亚马逊悄然关闭了内部 AI 使用排行榜，员工随后发现了此前未披露的 token 使用上限。值得注意的是，埃森哲在向客户大力推销快速采用 AI 的同时，将 AI 成本管理打包为一项新的咨询服务业务线。

telegram · zaihuapd · 7月2日 13:59

**背景**: GPT 和 Claude 等大语言模型基于 token 消耗量计费，token 代表模型处理的文本片段。当在数千名员工中部署时，这种按量计费模式可能产生不可预测且快速攀升的成本，尤其是像 Claude Opus 这样的高端模型，其每 token 费率显著更高。随着企业竞相整合 AI 能力，企业 AI 市场快速扩张，但当员工在日常任务中使用这些工具而缺乏成本可见性时，单位经济效益在规模化时会面临越来越大的压力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.hankmo.com/token-deep-dev-deepseek/">Token 是什么： 大 模 型 计 费 和上下文管理的底层逻辑 | 极客老墨</a></li>
<li><a href="https://www.datalearner.com/ai-models/pretrained-models/Claude3-Opus">Claude 3- Opus ：评测、参数与 模 型 卡 | DataLearnerAI</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">企业AI</span> <span class="tag-badge">AI成本</span> <span class="tag-badge">行业动态</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">IT支出</span></p>

---