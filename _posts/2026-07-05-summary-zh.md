---
layout: default
title: "Horizon Summary: 2026-07-05 (ZH)"
date: 2026-07-05
lang: zh
---

> 从 51 条内容中筛选出 8 条重要资讯。

---

1. [F-Droid 警告：Google 新的 ADV 系统是不可卸载的恶意软件](#item-1) ⭐️ 9.0/10
2. [Box2D 创建者发布 Box3D 开源 3D 物理引擎](#item-2) ⭐️ 9.0/10
3. [Shadcn/UI 将默认底层基础从 Radix 切换为 Base UI](#item-3) ⭐️ 8.0/10
4. [大模型训练从推理式思考转向智能体式思考](#item-4) ⭐️ 8.0/10
5. [香港处理中国过半芯片进口，创历史新高](#item-5) ⭐️ 8.0/10
6. [SpaceX 原型手机现身投资人面前](#item-6) ⭐️ 8.0/10
7. [GitHub 仓库收集主流 AI 工具泄露的系统提示词](#item-7) ⭐️ 8.0/10
8. [Chrome DevTools MCP：面向 AI 编码代理的官方工具](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [F-Droid 警告：Google 新的 ADV 系统是不可卸载的恶意软件](https://f-droid.org/2026/07/01/adv-malware.html) ⭐️ 9.0/10

Google 正通过 Play Protect 在约 40 亿台安卓设备上部署“Android Developer Verifier” (ADV)，作为一个拥有 root 权限且无法移除的系统进程。从 9 月 30 日起，该程序将在部分国家开始阻止运行未经 Google 集中批准的应用，全球推广计划于 2027 年及以后进行。 这从根本上将安卓从开放的生态系统转变为封闭的平台模式，严重影响了用户自由和侧载应用的能力。包括 EFF 和 FSF 在内的 70 多个数字权利组织已经谴责了该计划，警告称这赋予了 Google 单方面封禁软件和开发者的不受限制的权力。 F-Droid 批评 Google 在其开发者服务条款中刻意不对“恶意软件”下定义，从而允许该公司随意将广告拦截器等不受欢迎的应用归类为恶意软件。9 月 30 日的初步激活将针对巴西、印度尼西亚、新加坡和泰国运行 Android 8 及以上版本的认证设备用户。

telegram · zaihuapd · 7月5日 00:41

**背景**: Google 官方将 Android 开发者验证描述为一个新的安全层，旨在阻止不良行为者并确保应用来自认证设备上的经验证来源。F-Droid 是一个广受欢迎的、由社区运行的替代性应用仓库，允许用户轻松安装免费开源软件 (FOSS)。尽管 Google 将 Play Protect 宣传为手机的免疫系统，但批评人士认为，这一新的验证过程破坏了操作系统基础的开放性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.android.com/developer-verification">Android developer verification | Android Developers</a></li>
<li><a href="https://support.google.com/android/answer/17065026?hl=en">Learn about Android developer verification - Android Help</a></li>
<li><a href="https://en.wikipedia.org/wiki/F-Droid">F-Droid - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 提供的内容强调了社区的强烈抵制，指出已有数十万人签署请愿书反对 ADV 的推出。此外，由 EFF、FSF 和 ACLU 等 70 多个组织组成的联盟签署了公开信，谴责 Google 的计划是对数字权利的攻击。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Android</span> <span class="tag-badge">Google</span> <span class="tag-badge">F-Droid</span> <span class="tag-badge">Digital Rights</span> <span class="tag-badge">Malware</span></p>

---

<a id="item-2"></a>

## [Box2D 创建者发布 Box3D 开源 3D 物理引擎](https://github.com/erincatto/box3d) ⭐️ 9.0/10

广受欢迎的 Box2D 引擎创建者 Erin Catto 正式发布了 Box3D，这是一个用 C 语言编写的开源 3D 游戏物理引擎。该项目现已在 GitHub 上公开，可以被视为 Box2D 的分支，并扩展了 3D 游戏所需的功能。 鉴于 Erin Catto 在 Box2D 上的成功记录（该引擎曾驱动《愤怒的小鸟》和《地狱边境》等作品），Box3D 有望成为 3D 游戏开发生态系统中的基础库。它解决了开发者在使用现有引擎原生物理解决方案（如虚幻引擎中的物理系统）时遇到的挫折，并且已经被一些游戏和平台采用。 Box3D 的代码库部分源自 "Rubikon-Lite"，这是最初为《Half-Life: Alyx》开发的物理引擎的分支。据报道，该项目的开发是因为在使用虚幻引擎原生物理时遇到了局限性而开始的，这表明该引擎的设计考虑了实际生产需求。

ossinsight · erincatto · 7月5日 20:00

**背景**: Box2D 是由 Erin Catto 创建的极具影响力的开源 2D 物理引擎，使用 C 语言编写并在 MIT 许可证下发布。它已被无数 PC、主机和移动平台上的游戏所使用，包括《愤怒的小鸟》、《铲子骑士》和《Noita》等热门作品。物理引擎用于模拟重力、碰撞和物体动力学等物理现象，使游戏世界能够表现出真实的行为，而无需开发者手动编写每一个交互的代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://box2d.org/posts/2026/06/announcing-box3d/">Announcing Box3D :: Box2D</a></li>
<li><a href="https://www.phoronix.com/news/Box3D-Open-Source-3D-Physics">Box3D Debuts As New Open-Source 3D Physics Engine</a></li>
<li><a href="https://en.wikipedia.org/wiki/Box2D">Box2D</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">game-development</span> <span class="tag-badge">physics-engine</span> <span class="tag-badge">c</span> <span class="tag-badge">open-source</span> <span class="tag-badge">simulation</span></p>

---

<a id="item-3"></a>

## [Shadcn/UI 将默认底层基础从 Radix 切换为 Base UI](https://ui.shadcn.com/docs/changelog) ⭐️ 8.0/10

广受欢迎的 React 组件库 Shadcn/UI 已正式将其默认底层基础更新为使用 Base UI，而不是 Radix 原语。此外，该项目正在积极探索使用大型语言模型（LLMs）来协助用户在升级过程中进行代码迁移。 由于 Shadcn/UI 被广泛采用，这一转变显著提升了 Base UI 在 React 生态系统中作为顶级无样式组件库的地位。此外，依赖 AI 进行代码迁移突显了一个新兴的行业趋势，即使用 LLMs 来替代诸如 codemods 等确定性工具，以处理复杂的代码库转换。 Base UI 提供了无样式且具备可访问性的 React 组件和底层 hooks，赋予开发者对样式的完全控制权。然而，针对“复制粘贴”组件模型引入基于 LLM 的迁移，相较于传统包管理库中典型的简单版本递增，引发了人们对可预测性的担忧。

hackernews · dabinat · 7月5日 04:46 · [社区讨论](https://news.ycombinator.com/item?id=48791328)

**背景**: Shadcn/UI 是一个广泛使用的 React 组件库，它采用“复制并粘贴”的代码分发模式，而不是作为传统的 npm 包进行安装。过去，它严重依赖 Radix 原语（一个开源的无样式、可访问 UI 组件库）来处理模态框和弹出框等复杂行为。Base UI 是由 MUI 团队开发的一个类似的无样式 React 组件和 hooks 库，专为构建高度可配置的可访问设计系统而设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://base-ui.com/">Unstyled UI components for accessible design systems · Base UI</a></li>
<li><a href="https://www.radix-ui.com/primitives">Radix Primitives</a></li>
<li><a href="https://ui.shadcn.com/">The Foundation for your Design System - shadcn/ui</a></li>

</ul>
</details>

**社区讨论**: 社区对“复制粘贴”模式褒贬不一，有人指出虽然它易于修改，但却使升级变得复杂，以至于开发者现在需要 AI 代理来完成过去只需简单增加版本号就能搞定的事情。此外，针对 Radix 和 Base UI 中过度使用 `<div>` 元素而非原生 HTML 语义的做法也存在明显的批评。最后，虽然一些人对由 LLM 驱动的迁移方法感到好奇，但也有人因为认为公告带有 AI 生成的语气而感到反感。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Shadcn/UI</span> <span class="tag-badge">React</span> <span class="tag-badge">Base UI</span> <span class="tag-badge">Frontend</span> <span class="tag-badge">UI Components</span></p>

---

<a id="item-4"></a>

## [大模型训练从推理式思考转向智能体式思考](https://arthurchiao.art/blog/from-reasoning-thinking-to-agentic-thinking-zh/) ⭐️ 8.0/10

来自 Junyang Lin（Qwen 团队）的译文详细阐述了大语言模型训练的根本性范式转变：从推理式思考（训练模型想得更久）转向智能体式思考（训练模型在环境中采取行动）。这将训练对象从单一模型转变为"Agent+Harness"（智能体+框架）组合系统，并将关注点从数据多样性转向环境多样性。 这一转变代表了 AI 发展的重要转折点，模型不再仅仅依据推理能力来评估，而是根据其与现实环境交互并采取行动的能力来衡量。它重新定义了模型的训练、评估和部署方式，强化学习从可选步骤变成了一个系统工程学科。 文章揭示了 Qwen 尝试将思考和非思考模式融合到单一模型中的尝试因数据分布和行为目标冲突而失败，最终回到了独立的 Instruct 和 Thinking 模型。它强调生成更长的推理轨迹并不会自动让模型更聪明，思考模式应由目标 workload 来决定，而非强制统一。

rss · ArthurChiao's Blog · 7月5日 00:00

**背景**: "推理式思考"是指由 OpenAI o1 和 DeepSeek-R1 等模型推广的范式，模型在回答前生成扩展的思维链推理。"Agent+Harness"架构意味着一个智能体由原始大语言模型和框架组成——框架是使模型能够与外部环境交互的代码、配置、工具执行、状态管理和反馈回路。这一区分至关重要，因为在智能体系统中，框架工程往往比模型选择对生产可靠性更为重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.langchain.com/blog/the-anatomy-of-an-agent-harness">The Anatomy of an Agent Harness - langchain.com</a></li>
<li><a href="https://harness-engineering.ai/blog/agent-harness-complete-guide/">The Complete Guide to Agent Harness: What It Is and Why It Matters</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Agentic AI</span> <span class="tag-badge">Model Training</span> <span class="tag-badge">Reasoning</span> <span class="tag-badge">AI Paradigm Shift</span></p>

---

<a id="item-5"></a>

## [香港处理中国过半芯片进口，创历史新高](https://thenextweb.com/news/hong-kong-china-ai-chip-trade-hub) ⭐️ 8.0/10

2026 年前五个月，香港经手了中国逾半数的芯片进口，转口至内地的芯片价值约 1240 亿美元，占中国同期芯片采购总额的 52%。这一比例十年前仅为三分之一，创下历史新高。 这一里程碑巩固了香港作为亚洲 AI 相关技术贸易关键中转枢纽的地位，凸显了全球半导体供应链中重大的地缘政治和经济转变。香港在中美科技紧张局势中的中间人角色也使其面临可观的地缘政治风险，可能重塑该地区的贸易格局。 AI 相关电子产品目前占香港出口总额的 57% 至 70%，促使香港贸发局将 2026 年出口增长预测上调至逾 20%。香港的优势源于其自由港地位、零关税、无资本管制以及发达的航空货运网络，这些条件与半导体高价值、低重量、时效性强的特点高度契合。

telegram · zaihuapd · 7月5日 02:45

**背景**: 香港长期以来一直扮演着连接中国内地与全球市场的转口枢纽角色，凭借其自由港地位享受无关税和最低限度贸易限制的优势。近年来，随着美国及其盟友不断收紧对华先进半导体和 AI 芯片的出口管制，中转贸易枢纽的作用变得愈发具有战略性。半导体是 AI 开发、数据中心和先进制造的关键组件，使芯片贸易成为中美地缘政治博弈的焦点。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Semiconductors</span> <span class="tag-badge">Hong Kong</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Supply Chain</span> <span class="tag-badge">AI Trade</span></p>

---

<a id="item-6"></a>

## [SpaceX 原型手机现身投资人面前](https://www.wsj.com/tech/spacexs-telecom-dreams-d461e568) ⭐️ 8.0/10

据报道，SpaceX 已向投资人展示了一款原型智能手机，称其比 iPhone 更薄，并运行自有操作系统。总裁 Gwynne Shotwell 还透露了建设地面移动网络或与蜂窝运营商合作的计划，直连 Starlink 卫星的移动通信是公司的战略重点。 SpaceX 自主研发手机并搭载专属操作系统，意味着公司从火箭和卫星互联网业务大幅扩展到消费硬件和全球通信领域。这一举措将卫星连接与定制硬件相结合，可能颠覆整个移动行业，甚至消除对传统蜂窝基础设施的依赖。 该原型机在潜在 IPO 之前展示，据称比当前 iPhone 更薄，运行 SpaceX 自主操作系统而非 Android 或 iOS。Shotwell 表示 SpaceX 正在考虑自建地面网络以及与现有蜂窝运营商合作，暗示采用混合覆盖策略。

telegram · zaihuapd · 7月5日 14:10

**背景**: Starlink 目前主要通过碟形终端提供家庭和偏远地区的卫星互联网服务。其 Direct-to-Cell 技术自 2024 年起与 T-Mobile 等合作伙伴进行测试，允许普通智能手机无需硬件改装即可直连低轨道卫星，卫星相当于在轨基站。直连设备的卫星通信市场预计到 2033 年将超过 100 亿美元，是卫星通信领域的重要增长方向。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2506.00283v6">Direct-to-Cell: A First Look into Starlink's Direct Satellite-to-Device ...</a></li>
<li><a href="https://nova.space/in-the-loop/direct-to-device-how-satellite-connectivity-is-transforming-global-connectivity/">D2D Satellite Connectivity: Transforming Global Coverage</a></li>
<li><a href="https://www.ugbulletin.co.ug/airtel-uganda-starts-testing-starlinks-direct-to-cell-technology/">Airtel Uganda starts testing Starlink 's direct - to - cell technology</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">Starlink</span> <span class="tag-badge">Telecommunications</span> <span class="tag-badge">Hardware</span> <span class="tag-badge">Emerging Tech</span></p>

---

<a id="item-7"></a>

## [GitHub 仓库收集主流 AI 工具泄露的系统提示词](https://github.com/asgeirtj/system_prompts_leaks) ⭐️ 8.0/10

一个名为 'asgeirtj/system_prompts_leaks' 的热门 GitHub 仓库正在积极收集并定期更新从领先 AI 平台提取的系统提示词。该仓库声称包含来自 ChatGPT、Claude Code、Gemini、Grok、Cursor 和 Copilot 等工具的泄露提示词。 该仓库为开发者和研究人员提供了一个宝贵的资源，用于研究业界领先的大语言模型（LLM）所使用的行为工程、安全防护和底层指令。分析这些提示词为我们提供了前所未有的视角，以了解顶级 AI 公司如何配置其模型来处理复杂交互并执行安全措施。 该集合包含了各种特定模型和编程助手的提示词，例如 Claude Code、Codex 以及 VS Code 集成工具。这些提示词通常是通过提示词注入等漏洞获取的，该技术会诱骗 AI 泄露其隐藏的系统指令。

ossinsight · asgeirtj · 7月5日 20:00

**背景**: 系统提示词是提供给大语言模型（LLM）的基础（通常是保密的）指令，用于决定其行为、语气和安全防护机制。系统提示词泄露被公认为是一项重大的安全风险（常被列入 OWASP LLM 应用十大安全风险中），因为它会暴露本不应被用户看到的业务逻辑和配置。攻击者通常使用提示词注入技术来操纵模型，使其忽略限制并泄露这些隐藏指令。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://witness.ai/blog/llm-system-prompt-leakage/">LLM System Prompt Leakage : Prevention Guide 2026 - WitnessAI</a></li>
<li><a href="https://owasp.org/www-community/attacks/PromptInjection">Prompt Injection - OWASP Foundation</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">System Prompts</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Prompt Engineering</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Reverse Engineering</span></p>

---

<a id="item-8"></a>

## [Chrome DevTools MCP：面向 AI 编码代理的官方工具](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐️ 8.0/10

ChromeDevTools 团队发布了一个名为 chrome-devtools-mcp 的官方集成工具，它使 AI 编码代理能够通过 Chrome DevTools 检查、调试和交互 Web 应用程序。该项目使用 TypeScript 编写，最近在 GitHub 上开始获得关注，在过去 24 小时内累积了 17 颗星。 这个工具在浏览器检查功能与 AI 编码代理之间建立了重要的桥梁，满足了 AI 辅助开发生态系统日益增长的关键需求。通过利用模型上下文协议 (MCP)，它使 AI 代理能够直接访问和操作 Web 应用程序，有望改变开发者调试和优化代码的方式。 该项目遵循模型上下文协议 (MCP)，这是 Anthropic 在 2024 年 11 月推出的开放标准，旨在标准化 AI 系统与外部工具和数据源的集成方式。它使用 TypeScript 构建，为编码代理提供了执行全面 Web 应用程序检查和调试任务的能力。

ossinsight · ChromeDevTools · 7月5日 20:00

**背景**: 模型上下文协议 (MCP) 是 Anthropic 在 2024 年 11 月推出的开源标准，旨在标准化大型语言模型 (LLM) 等 AI 系统与外部工具、系统和数据源的集成和数据共享方式。MCP 可以被视为 AI 应用程序的“USB-C 端口”，使它们能够连接到数据源、工具和工作流程。Chrome DevTools 是直接内置在 Google Chrome 浏览器中的一套 Web 开发者工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://modelcontextprotocol.io/docs/getting-started/intro">What is the Model Context Protocol (MCP)?</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Chrome DevTools</span> <span class="tag-badge">MCP</span> <span class="tag-badge">Developer Tools</span> <span class="tag-badge">TypeScript</span></p>

---