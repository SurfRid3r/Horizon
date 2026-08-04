---
layout: default
title: "Horizon Summary: 2026-08-04 (ZH)"
date: 2026-08-04
lang: zh
---

> 从 64 条内容中筛选出 18 条重要资讯。

---

1. [Keyv 及相关包遭受 Shai-Hulud NPM 供应链攻击](#item-1) ⭐️ 9.0/10
2. [N-able N-central 严重身份验证绕过漏洞正遭受野外利用](#item-2) ⭐️ 9.0/10
3. [Palo Alto 的 NOVA AI 在开源软件中发现超过 14,000 个零日漏洞](#item-3) ⭐️ 9.0/10
4. [谷歌为 Anthropic 搭建 2000 亿美元华尔街融资架构](#item-4) ⭐️ 9.0/10
5. [中国首部 L3/L4 自动驾驶强制性国标报批，将于 2027 年实施](#item-5) ⭐️ 9.0/10
6. [在单张 AMD MI300X GPU 上高效运行 DeepSeek V4 Flash](#item-6) ⭐️ 8.0/10
7. [Harness Engineering：AI 智能体自我改进的新前沿](#item-7) ⭐️ 8.0/10
8. [Cisco Talos 揭示攻击者如何武器化 AI 编程代理](#item-8) ⭐️ 8.0/10
9. [Elastic 发布面向智能体 SOC 工作流的定制化 LLM 评估框架](#item-9) ⭐️ 8.0/10
10. [Elastic 构建 AI 智能体以 85%准确率分类 HackerOne 漏洞报告](#item-10) ⭐️ 8.0/10
11. [朱雀实验室剖析 Memory Heist 攻击并推出 AI-Infra-Guard 扫描工具](#item-11) ⭐️ 8.0/10
12. [合法云平台如何使 AitM 钓鱼攻击绕过多因素认证](#item-12) ⭐️ 8.0/10
13. [华为提出“韬定律”以推动半导体技术超越摩尔定律](#item-13) ⭐️ 8.0/10
14. [Cloudflare 用 AI 代理替代第三方安全工具，漏洞赏金处理成本骤降至每月 58 美元](#item-14) ⭐️ 8.0/10
15. [美国 FCC 禁止进口新款中国人形机器人及联网电力逆变器](#item-15) ⭐️ 8.0/10
16. [9 月中美峰会前夕，两国围绕 Anthropic Mythos AI 模型的地缘政治紧张局势加剧](#item-16) ⭐️ 8.0/10
17. [对话华为半导体首席科学家廖恒：昇腾史与芯片产业 18 层宝塔](#item-17) ⭐️ 8.0/10
18. [特朗普政府拟通过 FCC 禁止进口中国数据中心光模块](#item-18) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Keyv 及相关包遭受 Shai-Hulud NPM 供应链攻击](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack) ⭐️ 9.0/10

keyv 6.0.0 及其十个相关的 npm 发布版本包含了利用 pre-install 钩子的安装期恶意软件。 Keyv 是一个广泛使用的键值存储包，其被攻陷使得攻击者能够触及大量下游应用，造成广泛的破坏与安全隐患。 恶意代码专门利用包的 pre-install 钩子，在 npm install 执行期间运行恶意软件。

hackernews · cimi_ · 8月4日 11:01 · [社区讨论](https://news.ycombinator.com/item?id=49166874)

**背景**: Keyv 是一个流行的 Node.js 简单键值存储库，支持多种后端。NPM 的 pre-install 和 post-install 钩子是在包安装前后自动执行的生命周期脚本。"Shai-Hulud" 攻击是指一种自我复制的蠕虫，近期它通过利用暴露的密钥和自动化脚本攻陷了 npm 生态系统中的数百个包。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack">Shai-Hulud 2.0 Supply Chain Attack: 25K+ Repos Exposing Secrets</a></li>
<li><a href="https://unit42.paloaltonetworks.com/npm-supply-chain-attack/">"Shai-Hulud" Worm Compromises npm Ecosystem in Supply Chain ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对 pre-install 钩子持高度批评态度，一位用户建议应极度怀疑任何新增 pre-install 钩子的包。另一位用户分享了在 .npmrc 中设置 min-release-age=5 的技巧，通过延迟更新来避免安装刚发布就被植入恶意代码的版本。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">NPM</span> <span class="tag-badge">Supply Chain Attack</span> <span class="tag-badge">JavaScript</span> <span class="tag-badge">Node.js</span></p>

---

<a id="item-2"></a>

## [N-able N-central 严重身份验证绕过漏洞正遭受野外利用](https://www.rapid7.com/blog/post/etr-cve-2026-18577-n-able-n-central-authentication-bypass-exploited-in-the-wild) ⭐️ 9.0/10

Rapid7 报告称，N-able N-central 中存在一个严重的未经验证的远程身份验证绕过漏洞 CVE-2026-18577，目前正遭到野外的主动利用。这个严重的漏洞允许远程攻击者获得易受攻击服务器的管理控制权，并于 2026 年 8 月 3 日被正式添加到 CISA 的已知被利用漏洞（KEV）目录中。 由于 N-central 是托管服务提供商（MSP）广泛使用的远程监控和管理（RMM）平台，成功入侵将为攻击者提供一条有效路径，进而破坏下游受管的客户系统。攻击者已经在利用该平台的 Take Control 功能访问端点，并部署 Cloudflare Tunnel（cloudflared）以维持持久的远程访问权限。 CVE-2026-18577 影响 2026.3.1 Hotfix 1 之前的所有 N-able N-central 版本。该漏洞源于对先前身份验证绕过问题（CVE-2026-18556）的不完整修复，本地部署需要通过立即升级到 2026.3.1.1.7 版本进行手动修复。

rss · Rapid7 Cybersecurity Blog · 8月4日 11:11

**背景**: N-able N-central 是一款重量级的远程监控和管理（RMM）工具，IT 服务提供商使用它来集中监控和管理大量客户设备和服务器。这些平台在多个客户环境中具有深度自动化和提升的管理权限，这使其成为攻击者极具吸引力的目标。CVE-2026-18556 是影响至 2026.1 版本的早期高危身份验证绕过漏洞，而最新的漏洞利用成功绕过了该问题的补丁。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://nvd.nist.gov/vuln/detail/cve-2026-18556">NVD - cve-2026-18556</a></li>
<li><a href="https://docs.blinkops.com/docs/integrations/n-able-n-central">N - able N - Central - BlinkOps Documentation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Authentication Bypass</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-3"></a>

## [Palo Alto 的 NOVA AI 在开源软件中发现超过 14,000 个零日漏洞](https://unit42.paloaltonetworks.com/frontier-ai-vulnerability-burst/) ⭐️ 9.0/10

Palo Alto Networks 的 Unit 42 推出了 NOVA，这是一个 AI 驱动的系统，在开源软件项目中自主发现了超过 14,000 个此前未知的零日漏洞。这代表了迄今为止最大规模的 AI 驱动漏洞发现演示之一，展示了传统上手工且劳动密集的安全研究过程的工业化。 这一突破标志着网络安全的根本性转变，AI 系统现在能够以工业规模发现漏洞，可能超过组织修补漏洞的能力。这一发现对整个软件供应链具有深远影响，因为这些易受攻击的开源组件中的许多都嵌入在全球关键基础设施和企业应用中。 NOVA 发现的 14,000 多个漏洞展示了自主漏洞发现的前所未有的规模，但关于这些漏洞的严重程度、受影响的项目和修复时间表的具体细节尚未完全披露。该系统似乎利用前沿 AI 能力来分析代码模式并识别传统扫描工具可能遗漏的潜在安全缺陷。

rss · Unit 42 · 8月4日 13:00

**背景**: 零日漏洞是软件中供应商未知且没有补丁的安全缺陷，特别危险，因为攻击者可以在防御者意识到问题之前就加以利用。开源软件构成了现代数字基础设施的骨干，库、框架和工具等组件在应用程序中被广泛复用——这意味着单个漏洞可能在数千个依赖项目中产生连锁反应。传统的漏洞发现依赖于人工代码审查、模糊测试和安全研究人员的专业知识，使其成为一个缓慢且资源密集的过程。像 NOVA 这样的 AI 驱动系统的出现代表了一个新时代，自主代理可以快速分析庞大的代码库，以大规模识别潜在的安全问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.akamai.com/solutions/frontier-ai-security-risks">Frontier AI Security Risks & Practical Defense Strategies | Akamai</a></li>
<li><a href="https://www.ey.com/en_gl/insights/consulting/how-can-you-redefine-resilience-for-the-next-frontier-of-vulnerabilities">Cybersecurity resilience for frontier AI vulnerabilities | EY - Global</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">vulnerability discovery</span> <span class="tag-badge">zero-day</span> <span class="tag-badge">open-source</span> <span class="tag-badge">automated security</span></p>

---

<a id="item-4"></a>

## [谷歌为 Anthropic 搭建 2000 亿美元华尔街融资架构](https://www.ft.com/content/549f2e23-5aa2-49c7-9ea6-a9784ab7087c) ⭐️ 9.0/10

谷歌已悄然搭建了史上最大规模的基础设施融资架构之一，总额约 2000 亿美元，用于支持 Anthropic 大规模采购 AI 芯片和算力。2025 年 6 月，名为"Compute SPV"的特殊目的载体完成了首批交易，购入约 350 亿美元硬件，约合 1 吉瓦算力和 100 万颗 TPU。 这种前所未有的表外融资模式借鉴了波音和 GE 在航空业首创的厂商融资玩法，代表了 AI 基础设施融资方式的重大范式转变。它让多方共同分担 AI 硬件的巨额资本风险，而无需将数百亿美元压在任何单一公司的资产负债表上，可能重塑整个 AI 算力军备竞赛的融资格局。 约 2000 亿美元合同中约八成与芯片直接挂钩，参与方包括博通、阿波罗、黑石、摩根士丹利及多家加密矿企。由于 Anthropic 没有信用评级，各方分担风险：谷歌担保数据中心，博通购买并协助融资芯片，阿波罗与黑石出资购买硬件后回租给 Anthropic。

telegram · zaihuapd · 8月4日 10:52

**背景**: TPU（张量处理单元）是谷歌专门为神经网络机器学习任务设计的定制专用集成电路，针对快速的张量和矩阵运算进行了优化。特殊目的载体（SPV）是一种为隔离金融风险而设立的法律实体，常用于资产证券化中，将特定资产与发起人的资产负债表分离。Anthropic 是一家总部位于旧金山的 AI 公益公司，由前 OpenAI 成员于 2021 年创立，以其 Claude 大语言模型系列闻名。此次采用的厂商融资模式类似于波音和 GE 历史上销售飞机和发动机的方式——通过第三方架构为巨额资本采购提供融资，而非直接持有资产。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Tensor_Processing_Unit">Tensor Processing Unit - Wikipedia</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/1937092244185261642">一文全解特殊目的载体(SPV)，资产证券化破产隔离的法律性质和实际问题</a></li>
<li><a href="https://en.wikipedia.org/wiki/Anthropic_AI_PBC">Anthropic AI PBC</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI基础设施</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">谷歌</span> <span class="tag-badge">表外融资</span> <span class="tag-badge">算力</span></p>

---

<a id="item-5"></a>

## [中国首部 L3/L4 自动驾驶强制性国标报批，将于 2027 年实施](https://t.me/zaihuapd/42972) ⭐️ 9.0/10

中国工信部已完成首部针对 L3 和 L4 级自动驾驶的强制性国家标准报批稿，计划于 2027 年 7 月 1 日实施。该标准引入了“Safety Case”安全档案机制，要求车企必须采用“声明—论据—证据”的框架来系统性地论证其自动驾驶系统的安全性。 这标志着中国自动驾驶行业的监管环境从“概念松绑”向“安全硬约束”发生了关键转变。它将深刻影响汽车制造商和系统开发商，有效遏制夸大其词的营销宣传，并为自动驾驶技术的商业化确立严格的标准化基准。 该标准对 L3 系统的人机交接过程以及 L4 系统的自主风险最小化能力提出了具体要求。它强调对运行设计域（ODD）的严格控制，以确保接管请求和动态驾驶任务得到安全处理。

telegram · zaihuapd · 8月4日 13:06

**背景**: 自动驾驶等级由国际汽车工程学会（SAE）定义，其中 L3（有条件自动驾驶）允许车辆在特定条件下执行所有驾驶操作，但需要人类驾驶员在收到请求时接管车辆。L4（高度自动驾驶）则能在限定的运行设计域（ODD）内完全自主运行，无需人类干预。在此之前，中国缺乏针对这些高级别自动驾驶的统一强制性安全标准，导致车企在营销时经常使用“L2+”等模糊概念。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.i-newcar.com/index.php?m=home&c=View&a=index&aid=1821">L3自动驾驶冗余模式和设计纲要_牛喀网-具身智能开发者生态</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Autonomous Vehicles</span> <span class="tag-badge">Regulation</span> <span class="tag-badge">Automotive Industry</span> <span class="tag-badge">L3/L4 Automation</span> <span class="tag-badge">China</span></p>

---

<a id="item-6"></a>

## [在单张 AMD MI300X GPU 上高效运行 DeepSeek V4 Flash](https://github.com/ryanzhou/deepseek-v4-flash-mi300x) ⭐️ 8.0/10

一个 GitHub 仓库展示了如何在单张 AMD MI300X GPU 上原生运行庞大的 DeepSeek V4 Flash 模型，实现了超过 150 tokens/秒的生成速度。为了适应硬件限制，该实现的上下文窗口从模型原生的 100 万 token 缩减至 25.6 万。 这一成就证明了可以在单个高显存的企业级加速器上实际部署超大规模混合专家模型，且无需牺牲原生推理权重或依赖极端的量化。它突显了 AMD 硬件生态系统在处理以前被认为需要多 GPU 集群的尖端 AI 工作负载方面的可行性。 DeepSeek V4 Flash 模型拥有 2840 亿总参数和 130 亿激活参数，利用原生 MXFP4 量化以适应 MI300X 的 192GB HBM3 显存。为了在单个 GPU 上实现高吞吐量，主要的技术权衡是将上下文长度从 100 万大幅减少到 25.6 万个 token。

hackernews · zhoutong · 8月4日 10:00 · [社区讨论](https://news.ycombinator.com/item?id=49166386)

**背景**: DeepSeek V4 Flash 是一个效率优化的混合专家语言模型，它在推理期间仅选择性地激活一小部分参数以节省计算量。AMD Instinct MI300X 是一款高性能数据中心 GPU，以其庞大的 192GB HBM3 显存而闻名，这对于容纳现代大型语言模型巨大的权重文件至关重要。由于显存容量和带宽的限制，在单个 GPU 上运行这种规模的模型通常需要在量化精度、上下文长度和推理速度之间进行仔细的权衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash">deepseek-ai/DeepSeek-V4-Flash · Hugging Face</a></li>
<li><a href="https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html">AMD Instinct™ MI300X Accelerators</a></li>
<li><a href="https://bitfern.com/blog/context-windows/">LLM Context Windows Explained: Limits, Tokens, and Memory</a></li>

</ul>
</details>

**社区讨论**: 评论者讨论了硬件的获取问题，指出 MI300X 是一种 OAM 模块，通常以昂贵的 8-GPU 配置出售；而基于 PCIe 的 MI350P 尽管显存较少，对个人用户来说可能更实际。其他人则指出了类似 DwarfStar 和 Doubleword 在双路 MI300X 配置上的替代项目，同时赞扬了通过减少上下文窗口大小来维持推理速度和原生权重的实用权衡。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">AMD MI300X</span> <span class="tag-badge">AI Inference</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">DeepSeek</span></p>

---

<a id="item-7"></a>

## [Harness Engineering：AI 智能体自我改进的新前沿](https://lilianweng.github.io/posts/2026-07-04-harness/) ⭐️ 8.0/10

Lilian Weng 的新文章指出，提升 AI 能力的重点正从扩展模型权重转向“Harness Engineering（运行环境工程）”，即对提示词、工具和周边框架进行优化。这种方法将 harness 视为推动 AI 自我改进和自主智能体性能的主要杠杆。 随着大规模模型预训练带来的收益递减和成本飙升，优化智能体的运行环境为获得更好的 AI 输出提供了一条高效、实用的途径。这种转变从根本上改变了软件工程师和 AI 从业者构建系统的方式，使他们比单纯依赖算力更加重视系统设计和上下文脚手架。 “Harness”包含多种前馈控制机制，包括系统提示词、工具描述、上下文管理和子智能体委派机制，用于引导模型行为。从业者正在积极探索为代码库等复杂任务创建可靠的“适应度函数（fitness functions）”，以便智能体能够通过爬山实验等方法进行迭代自我纠正并优化其自身的运行框架。

hackernews · tosh · 8月4日 06:17 · [社区讨论](https://news.ycombinator.com/item?id=49164896)

**背景**: 在 AI 智能体领域，harness（或称 scaffold/脚手架）指的是基础大语言模型周围的结构化操作环境。虽然底层模型包含了原始的智能（权重），但 harness 决定了这些智能如何被应用——它定义了智能体可以调用哪些工具、如何解析信息以及如何验证其决策。Harness Engineering 将这种执行环境的设计规范化，以确保智能体能够可靠、可重复且安全地执行有价值的任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness">The Anatomy of an Agent Harness</a></li>
<li><a href="https://milvus.io/blog/harness-engineering-ai-agents.md">What Is Harness Engineering for AI Agents? | Milvus - Milvus Blog</a></li>
<li><a href="https://martinfowler.com/articles/harness-engineering.html">Harness engineering for coding agent users</a></li>

</ul>
</details>

**社区讨论**: 社区对从权重训练转向 harness 和提示词优化的趋势产生了强烈共鸣，有评论者指出，提示词中的因果理论可能具有更高的样本效率。开发者们积极分享具体的实践方法，例如使用“爬山实验”并为代码库开发“适应度函数”，从而让智能体能够优化自身的工具；同时也有人幽默地警告不要过度追求科幻小说中的“Torment Nexus”。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Harness Engineering</span> <span class="tag-badge">Prompt Engineering</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-8"></a>

## [Cisco Talos 揭示攻击者如何武器化 AI 编程代理](https://blog.talosintelligence.com/keep-going-bro-youve-got-this-a-data-driven-look-at-how-adversaries-are-weaponizing-ai/) ⭐️ 8.0/10

Cisco Talos 发布了一份基于从威胁行为者端点提取的提示词日志的数据驱动分析报告，揭示了攻击者究竟如何滥用基于云的 AI 工具。该报告特别检查了对 Claude Code、Cursor 和 Gemini 等流行 AI 编程代理和应用程序的恶意使用情况。 这项研究提供了网络犯罪分子如何主动将大型语言模型整合到其攻击工作流程中的罕见实证证据，超越了理论上的 AI 安全风险。它突显了一个关键的新型攻击面，即攻击者可以利用被盗的开发者凭证，将 AI 代理武器化，用于生成恶意代码和自动化任务。 该分析的独特之处在于，它依赖于在运行 Claude Code、CodeX、Cursor 或 Gemini 等工具的受损端点上发现的实际提示词日志。通过检查这些提示词，Talos 解读了攻击者用来操纵 AI 模型执行恶意活动的具体自然语言指令。

rss · Cisco Talos Blog · 8月4日 10:00

**背景**: Cisco Talos 是 Cisco Systems 内部运营的顶级威胁情报研究组织，致力于提供全面的网络安全分析和漏洞研究。提到的 AI 工具（如 Cursor 和 Claude Code）是高级的代理式编程环境，能够根据自然语言提示词自主编辑文件、执行终端命令和搜索代码库。虽然这些基于云的 AI 应用程序极大地提高了软件开发效率，但如果落入恶意行为者手中，其广泛的系统访问权限也会带来重大的安全隐患。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cisco_Talos">Cisco Talos - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cursor_(code_editor)">Cursor (code editor)</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">Threat Intelligence</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Cisco Talos</span></p>

---

<a id="item-9"></a>

## [Elastic 发布面向智能体 SOC 工作流的定制化 LLM 评估框架](https://www.elastic.co/security-labs/llm-benchmarking-agentic-soc) ⭐️ 8.0/10

Elastic Security Labs 发布了一套专门面向安全运营中心工作流的定制化 LLM 评估框架，不再依赖公开排行榜，而是基于模型在真实运营场景中的实际产出来打分。该框架在 Elastic 的 Agent Builder、Attack Discovery 和自动迁移三大产品中，通过工具调用、执行轨迹和盲测三项核心标准来评估模型表现。 公开的 LLM 排行榜无法反映安全工作流的专业化需求，导致 SOC 团队在选型时缺乏可信参考。该框架填补了行业关键空白，建立了一套针对安全场景下智能体任务评估 LLM 的方法论，有望为整个行业的安全 AI 评估树立标杆。 该框架从三个维度评估模型：工具调用（是否正确调用了正确的工具）、执行轨迹（从推理到行动的完整路径）以及盲测（在不知道模型身份的情况下评估输出质量以消除品牌偏见）。基准测试覆盖了用于自定义智能体创建的 Agent Builder、用于告警分流和威胁调查的 Attack Discovery，以及用于安全规则和配置转换的自动迁移功能。

rss · Elastic Security Labs · 8月4日 23:59

**背景**: 智能体 SOC（Agentic Security Operations Center）是一种先进的运营模型，集成了自主 AI 智能体来动态执行告警分流、调查、上下文增强、推理和响应等任务，将安全工作从被动的事件处理转向主动的威胁预测。Elastic 的 Agent Builder 是一个 AI 对话平台，用于创建基于自然语言操作 Elasticsearch 数据的智能体；Attack Discovery 则利用 Elasticsearch 的混合搜索能力对告警详情进行排序和上下文化，以支持 LLM 驱动的分析。这些工具共同构成了智能体 SOC 愿景，即由 AI 智能体端到端地处理复杂的多步骤安全工作流。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Agentic_SOC">Agentic SOC</a></li>
<li><a href="https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder">Elastic Agent Builder</a></li>
<li><a href="https://www.elastic.co/docs/solutions/security/ai/attack-discovery">Attack Discovery | Elastic Docs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">security</span> <span class="tag-badge">SOC</span> <span class="tag-badge">evaluation</span> <span class="tag-badge">benchmarking</span></p>

---

<a id="item-10"></a>

## [Elastic 构建 AI 智能体以 85%准确率分类 HackerOne 漏洞报告](https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone) ⭐️ 8.0/10

Elastic Security Labs 推出了一款 AI 分类（triage）智能体，能够以每份仅 2 美元的成本处理 HackerOne 漏洞赏金报告。该系统与人类分析师相比达到了 85% 的准确率，并且是基于 3,300 份真实历史报告进行校准的。 大语言模型（LLM）的普及使得恶意行为者能够以极低的成本向漏洞赏金计划大量提交自动化的低质量报告，使人类防御者不堪重负。这一进展代表了一种“智能体对抗智能体”的方法，为维护众包安全计划的效率和完整性提供了可扩展的防御机制。 Elastic 分享了该智能体的完整架构，包括其威胁模型以及基于真实世界数据的校准方法。该系统专门设计用于区分可操作的安全漏洞和由自动化工具或垃圾信息生成的无效报告。

rss · Elastic Security Labs · 8月4日 00:00

**背景**: HackerOne 是一个连接组织与道德黑客的平台，旨在安全漏洞被恶意利用之前发现并修复它们。此语境下的“分类（Triage）”是指审查传入的漏洞报告，以确定它们是否有效、是否唯一以及是否值得发放赏金的过程。最近，安全团队面临着越来越多由 AI 生成的垃圾报告，因此需要自动化的漏洞分类解决方案来过滤这些无效信息。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hackerone.com/security">HackerOne - Bug Bounty Program | HackerOne</a></li>
<li><a href="https://www.pixee.ai/triage-automation">Vulnerability Triage Automation : 98% False Positive Reduction | Pixee</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">vulnerability triage</span> <span class="tag-badge">LLM agents</span> <span class="tag-badge">bug bounty</span> <span class="tag-badge">security automation</span></p>

---

<a id="item-11"></a>

## [朱雀实验室剖析 Memory Heist 攻击并推出 AI-Infra-Guard 扫描工具](https://security.tencent.com/index.php/blog/msg/225) ⭐️ 8.0/10

腾讯朱雀实验室发布了一份针对 AI Agent 记忆系统的“Memory Heist”攻击链路的详细分析，演示了如何将提示注入与 Agent 功能结合来窃取个人数据。同时，他们在 AI-Infra-Guard（A.I.G）工具中推出了一个名为 agent-scan 的自动化安全扫描模块，以主动检测此类漏洞。 随着 AI Agent 越来越依赖持久化记忆来提供个性化体验，这些记忆库已成为数据窃取的高价值目标。揭露 Memory Heist 攻击方法并提供专门的检测工具，突显了当前 AI 基础设施中的关键安全盲点，从而推动整个行业加强 Agent 与工具交互时的安全性。 Memory Heist 漏洞具体利用了 Agent 的记忆功能与其获取外部网页内容的能力的组合，允许攻击者通过提示注入静默提取敏感用户数据。AI-Infra-Guard 中新发布的 agent-scan 模块作为一个红队测试工具，可用于全面评估包括基础设施、协议和 Agent 行为在内的 Agent 攻击面。

rss · 腾讯安全响应中心 · 8月4日 14:25

**背景**: AI Agent 通常使用持久化记忆系统来存储用户偏好、过往交互和个人信息，从而随着时间推移实现高度上下文化和个性化的响应。然而，当这些 Agent 同时被赋予了与外部网络交互的工具时，恶意攻击者可以利用间接的提示注入来欺骗 Agent。这会导致 Agent 在不知不觉中访问自身的记忆，并将存储的私人数据泄露给攻击者控制的服务器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ayush.digital/blog/the-memory-heist">The Memory Heist | Ayush Paul</a></li>
<li><a href="https://github.com/Tencent/AI-Infra-Guard">GitHub - Tencent/AI-Infra-Guard: A full-stack AI Red Teaming ...</a></li>
<li><a href="https://arxiv.org/html/2606.31227v1">AI-Infra-Guard Technical Report - arXiv.org</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Security</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Memory Heist</span> <span class="tag-badge">Vulnerability Analysis</span> <span class="tag-badge">Penetration Testing</span></p>

---

<a id="item-12"></a>

## [合法云平台如何使 AitM 钓鱼攻击绕过多因素认证](https://securelist.com/cloud-platforms-in-phishing/120832/) ⭐️ 8.0/10

这篇文章深入分析了攻击者如何滥用合法云平台（包括 Cloudflare Workers、Vercel、Netlify、GitHub Pages 和 IPFS）来托管中间人钓鱼攻击活动。文章详细介绍了攻击者利用服务工作者和 Ultraviolet 反向代理工具实时截获凭证并绕过多因素认证的技术细节，并提供了各平台上的钓鱼托管统计数据。 这项分析揭示了一个危险的趋势：攻击者将受信任的、广泛使用的云基础设施武器化，使钓鱼页面对用户和安全过滤器都显得合法。通过成功绕过多因素认证——这被视为防范凭证窃取最有效的手段之一——这些 AitM 攻击活动对组织安全构成严重威胁，并削弱了人们对云托管内容的信心。 攻击者利用了 Ultraviolet——一个高度复杂的网络代理工具，它通过遵循 TompHTTP 规范的服务工作者脚本来拦截 HTTP 请求，在受害者与合法身份验证服务之间充当反向代理。这种设置使攻击者能够实时截获密码和 MFA 令牌（如 TOTP），将其重放到真实服务上进行认证，并最终窃取会话 Cookie 以实现持久访问。

rss · Kaspersky  - Information about Viruses， Hackers and Spam · 8月4日 12:00

**背景**: AitM（攻击者中间人）钓鱼是传统中间人攻击（MiTM）的演进形式，攻击者将自身置于用户和合法网站之间，以实时拦截和操纵通信。Ultraviolet 最初被设计为一个用于规避互联网审查的高级网络代理工具，它利用服务工作者在客户端拦截和重写 HTTP 请求。IPFS（星际文件系统）是一个点对点超媒体协议，使用分布式哈希表进行数据存储，由于内容分布在多个节点上而非托管在单一中心化服务器上，因此极难被删除。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Rvrbss/Ultraviolet">GitHub - Rvrbss/Ultraviolet: Highly sophisticated proxy used ...</a></li>
<li><a href="https://attack.mitre.org/techniques/T1557/">Adversary - in - the - Middle , Technique T1557... | MITRE ATT&CK</a></li>
<li><a href="https://en.wikipedia.org/wiki/InterPlanetary_File_System">InterPlanetary File System - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Phishing</span> <span class="tag-badge">Cloud Security</span> <span class="tag-badge">MFA Bypass</span> <span class="tag-badge">Adversary-in-the-Middle</span></p>

---

<a id="item-13"></a>

## [华为提出“韬定律”以推动半导体技术超越摩尔定律](https://t.me/zaihuapd/42966) ⭐️ 8.0/10

在 2026 年国际电路与系统研讨会（ISCAS）上，华为发表了“韬定律”，提出以“时间缩微”替代传统的“几何缩微”来优化半导体性能。华为透露，过去六年中已据此设计了 381 款芯片，并将于今年秋季发布一款采用“逻辑折叠”技术的新麒麟芯片。 这一战略转变为绕过摩尔定律的物理极限和缓解制造工艺限制的影响提供了潜在路径。华为通过专注于系统级的时间域优化而非仅仅缩小晶体管尺寸，旨在实现先进的性能水平，目标是到 2031 年达到等效 1.4nm 工艺的晶体管密度。 韬定律的核心在于降低时间常数（τ），以实现从器件到整个系统的多层级协同优化。其关键实现技术“逻辑折叠”是一种 3D 集成技术，旨在压缩信号传播时延并提高密度，而无需单纯依赖尖端的制程光刻工艺。

telegram · zaihuapd · 8月4日 08:04

**背景**: 摩尔定律在历史上一直通过“几何缩微”推动半导体进步，即通过缩小硅片上晶体管的尺寸来增加密度。随着晶体管尺寸接近原子尺度，这种方法面临着散热和量子隧穿效应等严峻的物理和经济障碍。“韬定律”（以代表时间常数的希腊字母τ命名）将优化焦点从空间维度转向时间域。这种方法利用先进封装和 3D 架构垂直堆叠组件，从而在不需要制造更小晶体管的情况下提升性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.huawei.com/en/news/2026/5/ieee-iscas-tau-scaling">HUAWEI Presents the Tau (τ) Scaling Law, Enabling ...</a></li>
<li><a href="https://www.yicaiglobal.com/news/huawei-presents-tau-law-to-replace-geometric-scaling-with-time-scaling-in-semiconductor-industry">Huawei Proposes Tau Scaling Law to Replace Moore’s Law in ...</a></li>
<li><a href="https://www.ithome.com/0/955/623.htm">华为“韬定律”逻辑折叠芯片设计公布，北大团队火速官宣“真 3D”EDA 工具...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Moore's Law</span> <span class="tag-badge">Chip Design</span> <span class="tag-badge">Kirin</span></p>

---

<a id="item-14"></a>

## [Cloudflare 用 AI 代理替代第三方安全工具，漏洞赏金处理成本骤降至每月 58 美元](https://www.theregister.com/security/2026/08/04/cloudflare-has-mostly-ditched-third-party-security-tools-suggests-not-trying-that-at-home/5282600) ⭐️ 8.0/10

Cloudflare 已构建 200 多个自主安全代理，几乎弃用全部第三方安全工具，改用部分由 AI 辅助编写的自研应用。公司目前使用 Anthropic 的 Claude Sonnet 模型自动化处理漏洞赏金报告的去重与评估，每月仅花费 58 美元，而若改用安全专用模型 Mythos，同样工作每月需花费约 20 万美元。 这是 AI 驱动的自动化大幅降低企业安全运营成本、重塑厂商与客户合作模式的惊人实战案例。Cloudflare 还将此前裁员 1100 人归因于 AI 带来的自动化变革，预示着 AI 普及将引发更广泛的行业性岗位替代趋势。 首席安全官 Grant Bourzikas 明确建议其他企业不要效仿，称 Cloudflare 具备自研安全软件的独特能力，并非地球上每家银行都该自己开发所有软件。首席战略官 Stephanie Cohen 还透露，Cloudflare 正计划充当 AI 公司与出版商之间的中介，通过微支付让 AI 公司付费获取内容。

telegram · zaihuapd · 8月4日 09:24

**背景**: 漏洞赏金计划是企业通过众包方式，向独立安全研究员支付报酬以发现和报告安全漏洞的安全项目。报告的分类处理——包括审查、去重和评估报告价值——传统上属于劳动密集型工作，成本高昂。Mythos 是 Anthropic 于 2026 年推出的网络安全专用大模型，以顶级安全能力和自主挖掘零日漏洞著称，但其运营成本远高于 Claude Sonnet 等通用模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.qq.com/rain/a/20260611A000PV00">Mythos模型深度解析：技术跃迁、安全革命与战略博弈</a></li>
<li><a href="https://www.gm7.org/archives/97967">谷歌 重 构 漏 洞 赏 金 计划：人工智能时代下安卓 赏 金 上调、Chrome...</a></li>
<li><a href="https://www.cnblogs.com/AmazonwebService/p/19868909">深度分析：Claude Mythos Preview —— Anthropic 网络安全专用模型的架...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cloudflare</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Automation</span> <span class="tag-badge">Industry News</span></p>

---

<a id="item-15"></a>

## [美国 FCC 禁止进口新款中国人形机器人及联网电力逆变器](https://t.me/zaihuapd/42970) ⭐️ 8.0/10

7 月 28 日，美国联邦通信委员会（FCC）宣布立即禁止进口来自中国的新款人形机器人、四足机器人和联网电力逆变器。该措施仅适用于尚未进入美国市场的型号，但 FCC 保留撤销已获批在售产品授权的权力。 此举是中美科技脱钩的重大升级，将目标从半导体和通信领域扩展到快速增长的机器人行业和关键能源基础设施组件。它直接影响寻求进入美国市场的中国制造商，并表明国家安全审查正扩大到 AI 驱动的机器人和智能电网设备领域。 禁令自发布之日起立即生效，仅涵盖指定产品类别中尚未推出的新型号。FCC 预计会豁免许多非中国供应商，但明确保留在必要时撤销现有产品授权的权利。

telegram · zaihuapd · 8月4日 11:29

**背景**: 联网电力逆变器是太阳能发电系统的核心关键部件，其功能是将太阳能电池板产生的直流电转换为与公共电网频率和相位同步的交流电。中国主导全球逆变器市场，预计 2025 年光伏逆变器出货量约为 357.8GW，同比增长 16.2%。人形机器人和四足机器人属于快速发展的服务与工业机器人领域，中国企业如宇树科技和智元机器人已具备全球竞争力。这些设备通常配备传感器、摄像头和网络连接模块，可收集环境数据，引发了美国对潜在数据窃取和网络攻击的国家安全担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.afzhan.com/news/detail/110922.html">从电能转换到电网支撑 中国联网电力逆变器产业迈入价值竞争新阶段_逆...</a></li>
<li><a href="https://www.gkzhan.com/news/detail/193960.html">从电能转换到电网支撑 中国联网电力逆变器产业迈入价值竞争新阶段_逆...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Robotics</span> <span class="tag-badge">Regulation</span> <span class="tag-badge">Trade War</span> <span class="tag-badge">AI Policy</span></p>

---

<a id="item-16"></a>

## [9 月中美峰会前夕，两国围绕 Anthropic Mythos AI 模型的地缘政治紧张局势加剧](https://www.bloomberg.com/news/articles/2026-08-03/china-is-getting-more-anxious-about-mythos-before-trump-meets-xi) ⭐️ 8.0/10

随着中美高层 9 月会晤的临近，人工智能已成为两国地缘政治博弈的关键焦点。据报道，中方对 Anthropic 公司先进的“Mythos”模型日益感到担忧和猜忌，尽管目前双方都无意立刻激化对抗。 像 Mythos 这样先进的 AI 模型被卷入国际外交领域，突显了前沿技术带来的国家安全风险不断升级。围绕该模型能力的摩擦可能会严重影响未来的全球 AI 监管政策、技术出口管制以及超级大国之间的战略力量平衡。 Anthropic 目前对 Mythos 模型实施了严格的访问限制，仅通过受信任的访问计划向经过审查的客户群体提供，这主要是因为该模型具备高度强大的双用途特性。该模型在执行功能时拥有前所未有的速度和规模，能够将长达数周的复杂黑客攻击工作压缩至短短数小时内完成。

telegram · Marcoview666 · 8月4日 01:21

**背景**: Anthropic 是一家知名的 AI 安全和研究公司，而“Mythos”指的是其高度先进的前沿 AI 模型系列，该系列在网络安全和生物学方面具有显著的双用途能力。该模型展现出了异常强大的攻击性安全特征，例如能将浏览器崩溃转化为可控制计算机的漏洞利用程序，这让全球银行和政府机构感到恐慌。随着 AI 模型实现这些颠覆性的能力，它们自然与美国和中国之间围绕技术霸权展开的广泛地缘政治竞争产生了交集。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/mythos">Claude Mythos \ Anthropic</a></li>
<li><a href="https://www.lesswrong.com/posts/MJs3qetvR7Y3zDKqy/anthropic-is-really-pushing-the-frontier-what-do-i-think">Anthropic is Really Pushing the Frontier, What do... — LessWrong</a></li>
<li><a href="https://www.linkedin.com/pulse/straight-talking-mystery-anthropic-mythos-cause-concern-williams-3tmue">Straight Talking The mystery of Anthropic Mythos - cause to celebrate...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">US-China Relations</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">Policy</span></p>

---

<a id="item-17"></a>

## [对话华为半导体首席科学家廖恒：昇腾史与芯片产业 18 层宝塔](https://www.bilibili.com/video/av116980698843032?p=1) ⭐️ 8.0/10

华为 Fellow 兼半导体首席科学家廖恒博士的 5 小时完整版深度访谈视频正式发布。在此次访谈中，他不仅讲述了 2020 年以来华为昇腾 AI 芯片的发展历程与全球半导体产业 30 年史，还首次提出了芯片产业链的“18 层宝塔”理论。 这次访谈极为难得地从华为最高技术决策层视角，提供了关于 AI 芯片研发及全球半导体格局的第一手战略与技术洞察。它深刻揭示了华为如何通过昇腾生态挑战 NVIDIA CUDA 等全球垄断地位，对于理解未来 AI 硬件和算力的发展趋势至关重要。 廖恒博士提出的“18 层宝塔”理论是对后摩尔时代芯片竞争方式的系统性表达，强调了在纵向协同与开放生态之间取得平衡的重要性。讨论还涉及了华为的计算架构、DeepSeek 对昇腾生态的影响，以及 AI 硬件领域的人才与算力挑战。

telegram · Marcoview666 · 8月4日 08:10

**背景**: 华为昇腾 AI 芯片是其构建国产 AI 算力基础设施战略的核心，尤其是在 2020 年面临外部制裁之后。该生态系统依赖于其神经网络计算架构（CANN），该架构近期已全面开源，以挑战 NVIDIA CUDA 的垄断地位。廖恒博士是华为 Fellow，14 岁便考入清华大学少年班，后赴普林斯顿大学从事博士后研究。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.eet-china.com/mp/a514555.html">华为半导体首席科学家廖恒罕见公开露面，首次提出芯片“18层宝塔”理论</a></li>
<li><a href="https://t.cj.sina.com.cn/articles/view/1432418975/5560fa9f00101ugkw">如何理解华为半导体的“18层宝塔”__财经头条__新浪财经</a></li>
<li><a href="https://docs.onethingai.com/9bc2e/9c378">华 为 宣布 CANN 全面开源开放： 昇 腾 生态重塑全球 AI 算力竞争格局</a></li>

</ul>
</details>

**社区讨论**: 该视频获得了超过 89 万的播放量和 4000 多条评论，反映出社区对这一话题的极高关注度。观众对深度的技术洞察和历史叙述反响热烈，许多人被廖恒博士将这一宏大的发展历程谦逊地概括为“只是一个工程师的故事”所打动。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Huawei</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">AI Chips</span> <span class="tag-badge">Ascend</span> <span class="tag-badge">Deep Dive</span></p>

---

<a id="item-18"></a>

## [特朗普政府拟通过 FCC 禁止进口中国数据中心光模块](https://www.reuters.com/world/trump-administration-drafting-ban-chinese-data-center-devices-sources-say-2026-08-04/) ⭐️ 8.0/10

特朗普政府正通过美国联邦通信委员会（FCC）起草新规，拟禁止进口中国制造的数据中心光模块，计划于年内落地生效。该限制方案在最终批准前仍存在修改或搁置的可能性。 这一潜在禁令可能严重扰乱全球 AI 硬件供应链，直接冲击中际旭创（全球市占率 27%）等中国头部厂商，同时迫使美国云服务商以更高成本寻找替代供应商。这些限制措施凸显了关键科技基础设施领域日益加剧的地缘政治紧张局势，可能放缓全球 AI 数据中心的降本扩张进程。 尽管 Lumentum 和 Coherent 等美国制造商的股价在消息公布后应声大涨，但其产能规模仍不足以完全替代中国供应商的供给。美国政府内部存在明显分歧，商务部近期曾缓和对华技术限制，而 FCC 却持续加码，接连限制中国无人机、路由器和逆变器等设备。

telegram · Marcoview666 · 8月4日 15:02

**背景**: 光模块是数据中心网络中实现高速数据传输的关键硬件组件，将电信号转换为光信号以进行光纤通信。随着 AI 基础设施对更快数据处理的需求，先进的光收发器（如 400G 和 800G 模块）已成为连接 AI 硬件组件和支持超大规模计算环境的必需品。中国制造商通过具有成本效益的生产和技术进步在这一市场建立了主导地位，成为全球云计算和 AI 硬件生态系统不可或缺的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://resources.l-p.com/knowledge-center/optical-modules-cloud-computing-fast-reliable-scalable-data/">The Critical Role of Optical Transceivers in Cloud Computing</a></li>
<li><a href="https://www.linkedin.com/pulse/what-optical-transceiver-ai-uses-how-works-top-companies-bwdsc">What is Optical Transceiver For AI ? Uses, How It Works & Top...</a></li>
<li><a href="https://www.optcore.net/">Optical Connectivity for AI Infrastructure, Data Center... | Optcore</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">Data Center</span> <span class="tag-badge">AI Hardware</span> <span class="tag-badge">Policy</span></p>

---