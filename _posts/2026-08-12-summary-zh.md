---
layout: default
title: "Horizon Summary: 2026-08-12 (ZH)"
date: 2026-08-12
lang: zh
---

> 从 42 条内容中筛选出 13 条重要资讯。

---

1. [DeepSeek 发布 V4 Pro 0813 模型，定价极具竞争力](#item-1) ⭐️ 9.0/10
2. [Qwen 发布庞大的 2.4 万亿参数 MoE 模型](#item-2) ⭐️ 9.0/10
3. [xAI 发布 Grok 4.6 前沿模型](#item-3) ⭐️ 9.0/10
4. [DeepSeek-V4-Flash 正式版 API 开启公测](#item-4) ⭐️ 9.0/10
5. [Tailscale 将数据库损坏追溯至 SQLite 16 年历史的 WAL Bug](#item-5) ⭐️ 8.0/10
6. [车牌识别数据库的搜索应当需要搜查令](#item-6) ⭐️ 8.0/10
7. [AI 正在消除中级软件工程岗位](#item-7) ⭐️ 8.0/10
8. [LLM 擅长哪种数学？](#item-8) ⭐️ 8.0/10
9. [Grok 4.6 在 Artificial Analysis Intelligence Index 中获得 61 分](#item-9) ⭐️ 8.0/10
10. [CVE-2026-40369：Windows 内核 ProbeForWrite(Length=0) 零长度绕过漏洞](#item-10) ⭐️ 8.0/10
11. [LTX 发布完全开源视频模型 LTX-2.5，单张 RTX 5090 即可本地运行](#item-11) ⭐️ 8.0/10
12. [马斯克宣布未来所有特斯拉将搭载星链，Cybercab 率先集成天线](#item-12) ⭐️ 8.0/10
13. [企业级 SSD 占 NAND 出货量 48%，长江存储首进全球前三](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [DeepSeek 发布 V4 Pro 0813 模型，定价极具竞争力](https://openrouter.ai/deepseek/deepseek-v4-pro-0813) ⭐️ 9.0/10

DeepSeek 正式发布了 V4 Pro 0813 模型，这是一款大规模 mixture-of-experts (MoE) 模型，现已在 OpenRouter 等平台上线。该模型拥有高达 100 万个 token 的上下文窗口，并提供极具竞争力的 API 定价，每百万输入 token 仅需 0.435 美元。 此次发布以极低的成本提供了巨大的上下文窗口，加剧了前沿 AI 模型市场的竞争。它为开发者在处理复杂编程任务和大规模文档处理时，提供了一种极具经济效益的替代方案。 该模型支持最大 38 万个 token 的输出，每百万输出 token 的价格为 0.87 美元。社区测试强调，尽管它的成本比顶级替代方案便宜约 20 倍，但在处理复杂软件工程任务时，其表现偶尔会不如价格更高的模型。

hackernews · explosion-s · 8月12日 16:04 · [社区讨论](https://news.ycombinator.com/item?id=49274600)

**背景**: Mixture-of-Experts (MoE) 是一种机器学习架构，其中模型的不同部分专门处理不同类型的输入，从而使大型模型在计算上更加高效。DeepSeek 在其模型系列中采用了这种架构，以在平衡高性能的同时保持较低的推理成本。Token 上下文窗口决定了模型在单次提示中可以处理多少文本或代码，这对于分析整个代码库至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/deepseek/deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813 - API Pricing & Benchmarks | OpenRouter</a></li>
<li><a href="https://lmmarketcap.com/model/deepseek-v4-pro-0813">DeepSeek V 4 Pro 0813 - Pricing & Benchmarks 2026 | LM Market Cap</a></li>

</ul>
</details>

**社区讨论**: 社区称赞了该模型的成本效益，指出它比 Opus 4.8 等替代方案便宜得多，但在复杂编程任务中的绝对准确性有时会有所妥协。几位开发者指出了该模型在 Docker 配置或 SVG 渲染中产生 bug 的具体边缘情况，并得出结论：尽管它在性价比方面表现优异，但在完美执行高风险任务时，可能仍落后于 Grok 4.6 等高级模型。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-2"></a>

## [Qwen 发布庞大的 2.4 万亿参数 MoE 模型](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) ⭐️ 9.0/10

Qwen 发布了 Qwen3.8-2.4T-A95B，这是一个庞大的开源权重混合专家模型，总参数量达到 2.4 万亿，激活参数量为 950 亿。据报道，该模型的性能介于 Opus 4.8 和 Fable 5 之间，并且可以进行量化以在消费级硬件上本地运行。 这次发布是开源 AI 领域的一项重大突破，因为它将前沿水平的模型性能带到了发烧友硬件上，极大地降低了使用尖端 AI 的门槛。它加剧了开源权重生态系统中的竞争，使 Qwen 成为 Kimi k3 和 DeepSeek 最新版本等其他大型模型的直接竞争对手。 虽然完整的 BF16 模型需要 4.9TB 的存储空间，但 Unsloth 的 1-bit 量化将其压缩至大约 397GB，不过运行它仍然需要配备大约 7TB 内存的顶级机器。值得注意的是，此次开源权重版本缺乏视觉输入支持和 Qwen3.8-Max 版本中默认的 1M 上下文长度，并且对于年收入超过 5000 万美元的公司，其商业用途受到限制。

hackernews · Philpax · 8月12日 15:01 · [社区讨论](https://news.ycombinator.com/item?id=49273478)

**背景**: 混合专家是一种机器学习架构，在推理过程中仅激活其总参数的一小部分（在本例中为 2.4 万亿中的 950 亿），它模仿大脑的效率，以较低的计算成本提供高性能。量化是一种压缩技术，它降低了模型权重的精度（例如将它们转换为 8 位浮点数或 1 位格式），这显著缩小了模型的内存占用，并允许庞大的模型在本地运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/?ncid=pa-srch-goog-542457-DGX-Brand-prsp?ncid?ncid?ncid?ncid?ncid">Mixture of Experts Powers the Most Intelligent Frontier Models</a></li>
<li><a href="https://apxml.com/courses/getting-started-local-llms/chapter-3-finding-selecting-local-llms/model-quantization">What is LLM Quantization ?</a></li>
<li><a href="https://developer.nvidia.com/blog/floating-point-8-an-introduction-to-efficient-lower-precision-ai-training/">Floating-Point 8: An Introduction to Efficient, Lower-Precision AI Training | NVIDIA Technical Blog</a></li>

</ul>
</details>

**社区讨论**: 社区对于这种量级的模型能够被压缩到可在消费级硬件上运行的体积感到惊讶，尽管许多人指出其内存需求仍然超出了典型的桌面配置。关于开源权重版本缺乏多模态功能存在积极的讨论，同时用户还在量化的便利性和服务效率方面，将其与 DeepSeek V4-Pro 和 Kimi k3 等竞争模型进行了技术比较。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">MoE</span> <span class="tag-badge">Qwen</span></p>

---

<a id="item-3"></a>

## [xAI 发布 Grok 4.6 前沿模型](https://x.ai/news/grok-4-6) ⭐️ 9.0/10

xAI 发布了 Grok 4.6，这是一个拥有 1.5 万亿参数的前沿语言模型，专为编码、智能体任务和知识工作而设计。该模型基于 Grok 4.5 构建，特别侧重于长时间运行的智能体以及更具野心的交互式和视觉化工作。 此次发布标志着 AI 竞争格局的又一次重大升级，xAI 利用 SpaceX 庞大的推理计算能力，将自身定位为与其他顶级实验室抗衡的真正竞争者。这种快速的迭代展示了整个行业在推动专注于智能体工作流的更强大模型方面的激进步伐。 Grok 4.6 是一个庞大的 1.5 万亿参数模型，作为 Grok 4.5 的直接继任者。用户注意到 Grok Build 的终端用户界面（TUI）提供了极佳的体验，并且该模型在识别安全审查中的攻击面等复杂任务中表现出色。

hackernews · iLuddite · 8月12日 15:32 · [社区讨论](https://news.ycombinator.com/item?id=49274027)

**背景**: Grok 是由埃隆·马斯克旗下的 xAI 公司开发的人工智能聊天机器人。在竞争激烈的大语言模型（LLM）市场中，xAI 一直在快速迭代，此前已经发布了用于编码和智能体任务的 Grok 4.5。该模型的开发极大地受益于马斯克更广泛的产业生态，特别是 SpaceX 提供的推理计算基础设施。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://kie.ai/blog/what-is-grok-4-6">What Is Grok 4.6? xAI's 1.5T-Param Model Explained</a></li>
<li><a href="https://x.ai/news/grok-4-6">Introducing Grok 4.6 | SpaceXAI</a></li>
<li><a href="https://docs.x.ai/developers/grok-4-6">Grok 4.6 | SpaceXAI Docs</a></li>

</ul>
</details>

**社区讨论**: 社区讨论揭示了人们对各大 AI 实验室发布基准测试分数相近的模型速度之快的怀疑，一些用户怀疑存在基准测试作弊或技术的快速流通。尽管该品牌声誉两极分化，但实际用户对 Grok Build TUI 赞不绝口，并报告称该模型在应用程序安全审查等严苛任务中表现极其出色。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">LLM</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Machine Learning</span> <span class="tag-badge">Grok</span></p>

---

<a id="item-4"></a>

## [DeepSeek-V4-Flash 正式版 API 开启公测](https://t.me/zaihuapd/43149) ⭐️ 9.0/10

2026 年 7 月 31 日，DeepSeek 上线了 V4-Flash 正式版 API 公测，Agent 能力大幅增强，基准测试成绩远超此前的 V4-Pro-Preview 模型。具体而言，该模型在 Terminal Bench 2.1 上达到 82.7，CyberGym 达到 76.7，DSBench-FullStack 达到 68.7，DSBench-Hard 达到 59.6。 此次发布表明 DeepSeek 正持续推进构建在真实编程、网络安全和数据科学任务中表现出色的高能力 Agent 模型。一个 "Flash" 级别的模型在性能上超越此前的 "Pro" 预览版，意味着效率和能力的双重飞跃，可能重新定义头部 AI 实验室之间的竞争格局。 正式版 V4-Flash 原生支持 Responses API 格式，并针对 Codex 进行了专门适配，简化了开发者在 Agent 应用方面的工作流程。模型架构和参数规模与此前版本保持一致，表明性能提升主要来自训练方法和优化，而非单纯的规模扩大。

telegram · zaihuapd · 8月12日 15:30

**背景**: Terminal Bench 用于评估 AI Agent 在真实终端和命令行任务上的表现，测试其在复杂开发环境中的导航能力。CyberGym 是一个大规模网络安全基准测试，涵盖 188 个广泛使用的开源项目中的 1,507 个真实漏洞，旨在严格评估 AI Agent 在漏洞分析和防御工作流方面的能力。DSBench 是一个综合性基准测试，评估数据科学 Agent 在真实端到端任务上的表现，包括全栈开发和具有挑战性的边缘案例。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rdi.berkeley.edu/blog/cybergym/">CyberGym: Evaluating AI Agents' Real-World ...</a></li>
<li><a href="https://huggingface.co/papers/2409.07703">Paper page - DSBench : How Far Are Data Science Agents to...</a></li>
<li><a href="https://www.emergentmind.com/topics/dsbench">DSBench : Benchmark for Data Science & Safety</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">API Release</span> <span class="tag-badge">Artificial Intelligence</span></p>

---

<a id="item-5"></a>

## [Tailscale 将数据库损坏追溯至 SQLite 16 年历史的 WAL Bug](https://tailscale.com/blog/sqlite-wal-reset-bug) ⭐️ 8.0/10

Tailscale 详细记录了对其控制平面数据库损坏问题的调查，最终将其追溯到 SQLite 的 WAL（Write-Ahead Logging）重置逻辑中一个存在了 16 年的竞争条件。他们资助开发了一个开源的 SQLite VFS shim 工具，帮助隔离了该竞争条件，并在调查过程中还发现了第二个过期的表达式索引 bug。 SQLite 是世界上部署最广泛的数据库引擎之一，尽管该项目拥有超过 9200 万行测试代码，这个 bug 却长期存在。这一事件表明，即使在测试最彻底的代码库中，罕见的并发 bug 也可能长期潜伏，同时也展示了企业投资开发开源基础设施专用调试工具的价值。 WAL-Reset bug 在特定条件下触发：需要多个数据库连接以及对 WAL 模式数据库进行频繁的检查点操作。Tailscale 的单写设计被认为是 SQLite 的标准使用方式，但当检查点逻辑和写操作在不同的连接上运行时，该 bug 仍可能出现。SQLite 开发者估计该 bug 至少存在了 16 年。

hackernews · ropbear · 8月12日 14:22 · [社区讨论](https://news.ycombinator.com/item?id=49272832)

**背景**: SQLite 是一个独立的、无服务器的 SQL 数据库引擎，被嵌入在无数的应用程序和设备中。Write-Ahead Logging (WAL) 是在 SQLite 3.7.0 版本中引入的一种日志模式，通过允许同时进行读取操作和单个写操作来提高并发性。检查点是将 WAL 内容传输回主数据库文件的过程，以保持 WAL 文件较小。尽管 SQLite 以可靠性和广泛的测试套件闻名，但由于并发相关 bug 对时序和特定工作负载模式的依赖性，WAL 子系统中的此类 bug 极难被检测到。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tailscale.com/blog/sqlite-wal-reset-bug">How Tailscale helped find the SQLite WAL - Reset bug</a></li>
<li><a href="https://www.youngju.dev/blog/2026-07-16-sqlite-wal-reset-bug.en">The SQLite WAL - Reset Bug: A Data Corruption Race That Hid for 15...</a></li>
<li><a href="https://www.sqlite.org/wal.html">Write - Ahead Logging</a></li>

</ul>
</details>

**社区讨论**: 社区赞扬了 Tailscale 资助开源 VFS shim 调试工具以及维护与 SQLite 的支持合同。评论者讨论了测试与形式化验证之间的哲学局限性，引用了 Dijkstra 的名言：测试只能证明 bug 的存在，永远无法证明 bug 不存在。一些人对 Tailscale 的检查点频率配置如何导致他们遇到这个罕见 bug 表示好奇。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">SQLite</span> <span class="tag-badge">Tailscale</span> <span class="tag-badge">Debugging</span> <span class="tag-badge">Concurrency</span> <span class="tag-badge">Databases</span></p>

---

<a id="item-6"></a>

## [车牌识别数据库的搜索应当需要搜查令](https://andrewpwheeler.com/2026/08/12/license-plate-reader-searches-should-require-a-warrant/) ⭐️ 8.0/10

Andrew Wheeler 在其博客文章中提出，执法部门搜索车牌识别（LPR）数据库应当需要搜查令，这一观点重新引发了对大规模监控和宪法第四修正案保护的热烈讨论。文章指出 ALPR 技术能够对经过摄像头的所有车辆进行持续追踪，从而建立包含详细位置历史的可搜索数据库。 ALPR 网络是现代社会中最具渗透性的大规模监控形式之一，然而法律框架尚未跟上技术能力的步伐。如果采用搜查令要求，这将为执法部门在没有司法监督的情况下对普通公民进行追溯性位置追踪建立重要的宪法制约。 自动车牌识别器（ALPR）是人工智能驱动的摄像头，能够捕获并分析所有过往车辆的图像，存储包括位置、日期、时间以及有时还包括车辆品牌和型号在内的详细信息。最近发生的事件，例如一名 DEA（美国缉毒局）特工滥用警察的登录凭证进行未经授权的移民执法搜索，说明了这些数据库访问控制不足的现实风险。

hackernews · apwheele · 8月12日 14:43 · [社区讨论](https://news.ycombinator.com/item?id=49273165)

**背景**: 美国宪法第四修正案保护人民免受不合理的搜查和扣押，但其在数字数据方面的适用在法律上非常复杂，因为个人并不拥有或控制存储其追踪信息的数据库。ALPR 技术已被警察部门、私人公司和业主协会广泛部署，形成了庞大的互联监控网络。像 DeFlock 这样的项目绘制了这些读取器的分布图，帮助公众了解其普及程度。关于访问数字位置数据是否构成需要搜查令的"搜查"，法律先例仍在不断发展中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deflock.org/">DeFlock is an open-source project that maps license plate readers ...</a></li>
<li><a href="https://banthecams.org/posts/2025/08/12/license-plate-reader-used-for-immigration/">DEA Agent Misuse of License Plate Reader Data | Ban The Cams!</a></li>

</ul>
</details>

**社区讨论**: 评论者提出了几个实质性的关注点：一位评论者认为将这些设备称为"车牌识别器"具有误导性，因为它们本质上是可随时被重新编程的联网通用摄像头，并举出门铃摄像头后来被整合进监控网络的先例。另一些人则认为仅凭搜查令要求是不够的，因为它会使大规模监控常态化，还有人质疑文章中"不可避免"的语气，指出在一些地方如德国，在公共场所 indiscriminately 拍摄已经是非法的。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">privacy</span> <span class="tag-badge">surveillance</span> <span class="tag-badge">civil liberties</span> <span class="tag-badge">policy</span> <span class="tag-badge">legal</span></p>

---

<a id="item-7"></a>

## [AI 正在消除中级软件工程岗位](https://blog.florianherrengt.com/ai-removing-middle-class-software-engineering.html) ⭐️ 8.0/10

一篇引发广泛讨论的博客文章指出，AI 工具正在通过自动化传统上由中级工程师承担的常规编码任务来重塑软件工程人才结构，实际上正在掏空该职业的中间层。文章认为，AI 同时放大了优秀工程师和糟糕工程师的产出，使良好的工程实践得以更快扩展，但同时也加速了低质量代码的传播。 这一分析预示着软件工程职业路径的根本性重组，从初级到高级工程师的传统晋升通道可能被打破。其影响涉及招聘策略、工程文化，以及组织如何调整工作流程以管理生产力加速和技术债务叠加的双重风险。 文章强调，资深工程师现在可以利用 AI 代理直接从高层设计生成实现代码，从而绕过对中级工程师的传统任务分配。然而，这一转变也意味着缺乏批判性思维或深度理解的工程师现在能以前所未有的规模产出更多有问题的代码，使薄弱的工程文化更快崩溃。

hackernews · florianherrengt · 8月12日 13:20 · [社区讨论](https://news.ycombinator.com/item?id=49271994)

**背景**: 在传统的软件工程组织中，工作通常被划分为初级、中级和高级岗位，高级工程师负责架构和设计决策，而中级工程师负责实现明确定义的任务。由 LLM 驱动的编码助手和自主编码代理的兴起，大幅减少了常规实现工作所需的时间和精力。这一技术转变正在迫使行业重新思考工程团队的组织方式，以及工程师如何发展晋升到高级职位所需的专业能力。

**社区讨论**: 社区很大程度上认同文章的前提，评论者指出 AI 正在自动化以前依赖搜索驱动编码的"Stack Overflow 工程师"原型。有人对职业管道被打破表示担忧，随着入门和中级岗位变得更加稀缺，培养未来的高级工程师将更加困难。多位评论者强调，绝不能将决策权外包给 LLM，并警告那些跳过扎实学习基础的工程师将积累危险程度的技术债务。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Software Engineering</span> <span class="tag-badge">AI</span> <span class="tag-badge">Career</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">Industry Trends</span></p>

---

<a id="item-8"></a>

## [LLM 擅长哪种数学？](https://gowers.wordpress.com/2026/08/12/what-sort-of-maths-are-llms-good-at/) ⭐️ 8.0/10

著名数学家 Timothy Gowers 发表了一篇深入分析，探讨了大语言模型目前能胜任哪些具体类型的数学问题，并提出了判断 AI 何时能在数学定理证明中达到人类水平创造力的具体标准。他认为，当模型能使用新颖且令人惊讶、但事后看来既优美又自然的方法来完成证明时，才算真正达到了人类水平。 这篇分析的重要性在于它出自世界顶级数学家之手，为关于 AI 在高等数学领域能力的讨论提供了罕见的领域权威视角。它为 AI 定理证明社区提出了一个关键开放问题：不仅仅是模型能否找到正确的证明，而是它们能否发现那种代表最优秀人类工作特征的、富有创造性和美学意义的数学洞见。 Gowers 以 Vinogradov 定理等例子说明了暴力搜索或模式匹配方法足以解决的问题与需要真正创造性洞察力的问题之间的区别。他指出，当前 LLM 的优势在于适合采样和搜索策略的领域，而真正原创性的数学推理仍然遥不可及。这篇文章隐含地提出了关于测试时计算扩展以及纯粹的采样量能否替代真正的数学创造力的问题。

hackernews · ColinWright · 8月12日 10:04 · [社区讨论](https://news.ycombinator.com/item?id=49270022)

**背景**: 自动定理证明（ATP）自计算机科学诞生以来就一直是一个目标，它使用形式逻辑自动生成证明。大语言模型近期为该领域带来了新的能力，但其数学推理能力在不同问题表述和表示方式下已被证明是脆弱的。更广泛的研究社区使用 GSM-Symbolic 等基准来评估 LLM 是否真正理解数学概念还是仅仅在训练数据上进行模式匹配。测试时计算扩展——允许模型在推理阶段使用更多计算资源——已成为一项关键技术，例如 AlphaCode 生成数百万个候选程序并进行筛选过滤。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Automated_theorem_proving">Automated theorem proving</a></li>
<li><a href="https://arxiv.org/pdf/2402.00157">Large Language Models for Mathematical Reasoning</a></li>
<li><a href="https://www.linkedin.com/pulse/mathematical-reasoning-capabilities-large-language-models-kilari-57rlc">The Mathematical Reasoning Capabilities of Large Language Models...</a></li>

</ul>
</details>

**社区讨论**: 讨论显示读者对 Gowers 论证的细节有很强的参与度。用户 h_mirin 将文章重新定位为本质上关于测试时扩展的讨论，将其与 AlphaCode 大规模采样加过滤的方法进行类比。用户 calf 对 Vinogradov 例子提出了技术性质疑，认为存在量子的使用在元数学层面是否有病态之嫌。用户 jerf 推测了 LLM 在时序逻辑问题上的表现，将其与编码代理在并发代码方面众所周知的困难进行了类比。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLMs</span> <span class="tag-badge">Mathematics</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Theorem Proving</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-9"></a>

## [Grok 4.6 在 Artificial Analysis Intelligence Index 中获得 61 分](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis) ⭐️ 8.0/10

xAI 的 Grok 4.6 在 Artificial Analysis Intelligence Index 上获得了 61 分，该综合基准聚合了包括 GPQA Diamond、SciCode 和 Humanity's Last Exam 在内的九项评估。该模型在 Grok 4.5 的基础上进行了改进，特别关注长时间运行的代理和交互式视觉工作。 61 分的成绩使 Grok 4.6 跻身竞争性前沿模型行列，加剧了 xAI、OpenAI 和 Anthropic 之间争夺开发者关注的竞争。然而，缓存读取定价从每 token 0.30 美元几乎翻倍至 0.50 美元，引发了对重度编码工作流中成本效率的担忧，因为在这些场景中缓存占据 token 使用的主导地位。 Grok 4.6 的缓存读取定价上涨至每 token 0.50 美元，相比 Grok 4.5 的 0.30 美元有所增加，这在重度编码会话中尤为关键，因为缓存读写可占 token 总成本的约 80%。Artificial Analysis Intelligence Index v4.1.1 是九项生产基准的加权平均值，评分范围为 0 到 100，该模型还具备与其能力相匹配的改进安全防护措施。

hackernews · wertyk · 8月12日 16:54 · [社区讨论](https://news.ycombinator.com/item?id=49275385)

**背景**: Artificial Analysis Intelligence Index 是一个独立的基准测试系统，聚合了九项评估任务，包括用于研究生级推理的 GPQA Diamond、用于科学编程的 SciCode，以及用于专家级知识的 Humanity's Last Exam。Grok 是 xAI 于 2023 年 11 月由 Elon Musk 推出的生成式 AI 系列，定位为 OpenAI 和 Anthropic 模型的竞争对手。该指数得分提供了一个综合指标，用于比较前沿模型在不同领域的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index">Artificial Analysis Intelligence Index | Artificial Analysis</a></li>
<li><a href="https://x.ai/news/grok-4-6">Introducing Grok 4 . 6 | SpaceXAI</a></li>
<li><a href="https://artificialanalysis.ai/">AI Model & API Providers Analysis | Artificial Analysis</a></li>

</ul>
</details>

**社区讨论**: 用户指出，Cursor 集成的 Grok 模型相比 OpenAI 和 Anthropic 的订阅提供了极高的性价比，特别是在结合编排器和执行器工作流时。然而，用户对缓存读取定价从 0.30 美元上涨至 0.50 美元表示担忧，有用户指出在重度编码会话中缓存大约占其 token 账单的 80%。此外，还有人对 xAI 在向 Anthropic 出售算力的同时又在同一市场竞争感到困惑。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Benchmarks</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Developer Tools</span></p>

---

<a id="item-10"></a>

## [CVE-2026-40369：Windows 内核 ProbeForWrite(Length=0) 零长度绕过漏洞](https://forum.butian.net/share/4958) ⭐️ 8.0/10

一份关于 CVE-2026-40369 的深度技术分析被公开，揭示了 Windows 内核的 ProbeForWrite 函数在 Length=0 时会变成完全的空操作（no-op），使攻击者能够整体绕过缓冲区校验。结合 nt!ExpGetProcessInformation 中未被校验的空指针解引用漏洞（通过 NtQuerySystemInformation 调用并使用信息类 253 即可触达），该缺陷赋予非特权进程一个任意 12 字节的内核写入原语。 该漏洞能够突破包括 Chrome、Edge、Firefox 在内的所有现代浏览器沙箱，允许攻击者直接从低权限的渲染器进程提升至 SYSTEM 级别。由于缺陷位于内核核心代码（ntoskrnl.exe）中，且通过已文档化的系统调用即可轻松触达，因此它在 Windows 11 24H2 及相关版本上造成了广泛的攻击面。 ProbeForWrite 的缺陷在于整个函数体被 `if (Length)` 检查包裹，零长度请求会静默跳过所有指针校验。利用链借此将未被校验的空指针（或攻击者控制的指针）传入 ExpGetProcessInformation，而该函数会向内核空间中该地址写入 12 字节而不做任何验证，从而产生一个精准的内核写入原语。

rss · 奇安信攻防社区 · 8月12日 09:34

**背景**: ProbeForWrite 是 Windows 内核 API，驱动程序在触碰用户提供的缓冲区指针之前用它来验证该指针确实位于用户空间且可写——通常在 METHOD_NEITHER I/O 场景下使用。ExpGetProcessInformation 是 ntoskrnl.exe（Windows NT 内核映像）内部的例程，当 NtQuerySystemInformation 使用特定信息类被调用时即被触达。"沙箱逃逸"指的是从受限的渲染器进程（例如浏览器标签页）突破到更高权限上下文的行为；从那里进一步达到 SYSTEM 即意味着对操作系统的完全接管。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cyberkendra.com/2026/05/windows-kernel-bug-breaks-every-browser.html">Windows Kernel Bug Breaks Every Browser Sandbox... - Cyber Kendra</a></li>
<li><a href="https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/nf-wdm-probeforwrite">ProbeForWrite function (wdm.h) - Windows drivers | Microsoft Learn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Windows Kernel</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerability Analysis</span> <span class="tag-badge">Exploit</span> <span class="tag-badge">Privilege Escalation</span></p>

---

<a id="item-11"></a>

## [LTX 发布完全开源视频模型 LTX-2.5，单张 RTX 5090 即可本地运行](https://ltx.io/model/ltx-2-5) ⭐️ 8.0/10

LTX 发布了完全开源的视频生成基础模型 LTX-2.5，权重、训练代码与推理管线全部开放。该模型支持文生视频与图生视频，采用了全新的扩散视频解码器和 Gemma 4 12B 文本编码器，在 98 个提示词的文生视频瑕疵评测中于十款模型中排名第一。 在闭源模型主导的视频生成领域，LTX-2.5 的完全开源发布——包括权重、训练代码和推理管线——对研究者和开发者具有重要价值。其在单张 RTX 5090 上本地运行的能力，以及年收入低于 1000 万美元可免费商用的政策，大幅降低了高质量视频生成的使用门槛。 该模型采用全新的扩散视频解码器，与传统卷积解码器不同，它本身是一个小型扩散模型，通过条件去噪来生成像素。模型还使用了 Gemma 4 12B 文本编码器，改进了多镜头场景连贯性和提示词遵循能力，支持一次性生成多镜头场景并导出电影级 EXR 格式。

telegram · zaihuapd · 8月12日 02:15

**背景**: 视频生成模型利用深度学习技术从文本提示或图像生成视频内容，通常基于扩散架构，通过逐步去噪随机信号来生成连贯的视觉输出。扩散视频解码器与传统的卷积解码器不同，它本身是一个微型扩散模型，以额外计算为代价提供更高的生成质量。文本编码器（本模型中使用的是 Gemma 4 12B）将自然语言提示转化为嵌入向量来引导生成过程。在该领域中开源发布非常罕见，因为大多数领先的视频生成模型（如 Runway 或 OpenAI 的产品）仍为闭源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ltx.io/model/ltx-2-5">LTX - 2 . 5 : LTX's Latest AI Open-Source Foundation Model | LTX</a></li>
<li><a href="https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ltx2/pipeline_ltx2_diffusion_decode.py">diffusers/src/diffusers/pipelines/ltx2/pipeline_ltx2_ diffusion _ decode .py...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">开源模型</span> <span class="tag-badge">视频生成</span> <span class="tag-badge">LTX-2.5</span> <span class="tag-badge">AIGC</span> <span class="tag-badge">本地部署</span></p>

---

<a id="item-12"></a>

## [马斯克宣布未来所有特斯拉将搭载星链，Cybercab 率先集成天线](https://www.techspot.com/news/113429-elon-musk-every-tesla-have-starlink-starting.html) ⭐️ 8.0/10

特斯拉官方 Robotaxi 账号展示了一台金色 Cybercab 原型车，车顶后部集成了 Starlink V5 天线，最高速率可达 375 Mbps。马斯克在财报电话会上确认，未来所有特斯拉车型最终都将集成星链连接功能，至少覆盖星链已运营的市场。 这标志着 SpaceX 的卫星互联网技术首次在硬件层面深度集成到特斯拉车辆中，为自动驾驶 Robotaxi 车队运营提供了至关重要的全天候连接能力。卫星直连与自动驾驶的结合有望重塑车内体验，乘客无需完全依赖蜂窝网络即可观看 4K 视频和使用生产力工具。 Cybercab 原型车没有方向盘和踏板，完全依赖自动驾驶，卫星连接用于导航、客服和车队管理。除星链外，车辆还将配备 GPS 天线和 5G LTE 等多种连接方式。目前尚未公布集成星链硬件或 Cybercab 的量产时间表，不过预计将于 2026 年左右投入生产。

telegram · zaihuapd · 8月12日 03:53

**背景**: Starlink 是 SpaceX 的低轨道卫星互联网星座，已在 100 多个国家提供宽带覆盖。V5 天线是最新一代星链硬件，下载速度相比早期版本有显著提升。特斯拉 Cybercab 是一款专为完全自动驾驶设计的 Robotaxi，在特斯拉「We, Robot」活动上首次亮相，取消了方向盘和踏板等传统驾驶控制装置。将卫星连接直接集成到车辆中可以摆脱对地面蜂窝基础设施的依赖，这一直是自动驾驶车队运营商在偏远或信号覆盖较差地区面临的限制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hypebeast.com/2026/8/tesla-cybercab-debuts-with-integrated-starlink-v5">Tesla Cybercab With Starlink V 5 Antenna Revealed | Hypebeast</a></li>
<li><a href="https://www.follownews.com.br/en/a/tesla-teases-cybercab-with-a-built-in-starlink-v5-antenna--cmruor8ni14fhky0xl3pa9dcn">Tesla teases Cybercab with a built-in Starlink V 5 antenna | FollowNews</a></li>
<li><a href="https://www.linkedin.com/posts/uptin_tesla-evs-autos-activity-7338963843739529216-wtk5">Tesla 's CyberCab prototype : no steering wheel, no pedals... | LinkedIn</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Tesla</span> <span class="tag-badge">Starlink</span> <span class="tag-badge">Automotive</span> <span class="tag-badge">Connectivity</span> <span class="tag-badge">Robotaxi</span></p>

---

<a id="item-13"></a>

## [企业级 SSD 占 NAND 出货量 48%，长江存储首进全球前三](https://china.counterpointresearch.com/%e6%9c%8d%e5%8a%a1%e5%99%a8%e9%9c%80%e6%b1%82%e6%8e%a8%e5%8d%87%e4%bc%81%e4%b8%9a%e7%ba%a7-ssd-%e5%8d%a0-nand-%e5%87%ba%e8%b4%a7%e9%87%8f%e7%99%be%e5%88%86%e4%b9%8b-48/) ⭐️ 8.0/10

Counterpoint 报告显示，2026 年第二季度企业级 SSD 占全球 NAND 出货量的 48%，同比接近翻倍，行业营收较去年同期增长五倍。长江存储以 14% 的份额首次超越铠侠，跻身全球前三。 这一里程碑凸显了 AI 推理工作负载正在从根本上重塑存储行业，将需求大幅推向企业级 SSD。长江存储跻身前三标志着全球半导体供应链的重大重组，中国厂商在关键存储器市场的竞争力日益增强。 三星以 25% 份额领跑，SK 海力士以 22% 居第二，长江存储以 14% 排第三。尽管出货量高，长江存储因产品偏消费级，营收仅排第五。报告预计到 2026 年底，企业级 SSD 将消耗超过一半的 NAND 位元总量。

telegram · zaihuapd · 8月12日 11:00

**背景**: 企业级 SSD 与消费级 SSD 在设计目标上有本质区别：企业级 SSD 专为数据中心中持续高吞吐、高耐久性的工作负载而构建，而消费级 SSD 则面向较轻量、间歇性的使用场景。AI 推理工作负载占 AI 计算总量的 80–90%，对存储 I/O 性能、吞吐量和容量要求极高，远超训练时代的存储架构所能提供的水平。NAND 闪存是所有 SSD 的底层存储技术，"位元消耗量"指所有产品线出货的 NAND 存储容量总和。企业级市场占 NAND 位元消耗比例的持续增长，反映了 AI 部署驱动的大规模基础设施建设。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.computerweekly.com/feature/What-are-the-storage-requirements-for-AI-training-and-inference">What are the storage requirements for AI training and inference?</a></li>
<li><a href="https://www.linkedin.com/pulse/enterprise-ssd-vs-consumer-all-key-differences-uynie">Enterprise SSD vs Consumer SSD : All Key Differences Explaine</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Enterprise SSD</span> <span class="tag-badge">NAND Flash</span> <span class="tag-badge">YMTC</span> <span class="tag-badge">AI Infrastructure</span> <span class="tag-badge">Hardware</span></p>

---