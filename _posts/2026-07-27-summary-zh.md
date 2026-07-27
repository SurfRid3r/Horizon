---
layout: default
title: "Horizon Summary: 2026-07-27 (ZH)"
date: 2026-07-27
lang: zh
---

> 从 43 条内容中筛选出 13 条重要资讯。

---

1. [月之暗面发布 3 万亿参数的 Kimi-K3 模型](#item-1) ⭐️ 9.0/10
2. [关于 Bun 运行时从 Zig 到 Rust 重写的最新进展](#item-2) ⭐️ 9.0/10
3. [谷歌透露 Gemini 4 为迄今最雄心预训练，预计年底发布](#item-3) ⭐️ 9.0/10
4. [Fast 1.x 被曝高危 RCE 漏洞，影响至 1.2.83 版本](#item-4) ⭐️ 9.0/10
5. [月之暗面将开源全球首个 3T 级前沿模型 Kimi-K3](#item-5) ⭐️ 9.0/10
6. [微软在 MDASH 中引入 MAI-Cyber-1-Flash 网络安全 AI 模型](#item-6) ⭐️ 8.0/10
7. [月之暗面发布 Kimi-K3 技术报告及开源基础设施](#item-7) ⭐️ 8.0/10
8. [PGSimCity：用三维城市可视化 PostgreSQL 内部机制](#item-8) ⭐️ 8.0/10
9. [每日安全动态推送：ImageMagick SYSTEM 命令注入、macOS 绕过及 MemGhost](#item-9) ⭐️ 8.0/10
10. [微软发布面向 AI 时代的'Project Perception'网络安全项目](#item-10) ⭐️ 8.0/10
11. [长鑫科技登陆科创板首日暴涨 471.59%，有望创科创板最大 IPO 纪录](#item-11) ⭐️ 8.0/10
12. [中方驳斥美方拟因 AI 模型蒸馏制裁中国企业的威胁](#item-12) ⭐️ 8.0/10
13. [中芯国际测试中国首台国产 DUV 光刻机](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [月之暗面发布 3 万亿参数的 Kimi-K3 模型](https://huggingface.co/moonshotai/Kimi-K3) ⭐️ 9.0/10

月之暗面（Moonshot AI）已正式在 HuggingFace 上发布了其庞大的 Kimi-K3 模型的权重。该模型拥有 2.8 万亿个参数和 100 万 Token 的上下文窗口，具备原生视觉理解能力和高级推理能力。 这一发布是一个重要的里程碑，因为它是首个接近 3 万亿参数的开源模型，显著突破了开源 AI 能力的边界。它赋能初创公司和开发者微调前沿级别的模型以用于定制化应用，赋予了他们以前专有 API 所限制的数据主权和性能提升。 该模型原生采用 mxfp4 格式，需要大约 1.5TB 的显存来托管，实际上需要由 16 张 B200 GPU 组成的集群才能实现最佳的上下文和吞吐量优化。此外，其许可证规定，任何通过“模型即服务”业务年收入超过 2000 万美元的企业必须获得单独的商业协议。

hackernews · nateb2022 · 7月27日 06:18 · [社区讨论](https://news.ycombinator.com/item?id=49065752)

**背景**: 月之暗面是一家总部位于北京的顶尖人工智能公司，被公认为中国领先的 AI 初创企业之一。在过去的几个月里，他们的模型不断刷新行业开源模型规模的上限。在此次发布之前，由于服务多万亿参数模型所需的庞大计算成本，除了大型科技巨头之外，大多数企业根本无法对其进行定制化开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://huggingface.co/moonshotai/Kimi-K3/tree/main">moonshotai/ Kimi - K 3 at main</a></li>
<li><a href="https://en.wikipedia.org/wiki/Moonshot_AI">Moonshot AI</a></li>

</ul>
</details>

**社区讨论**: 社区的参与度极高，突出了此次发布的双重性质：这对知识产权主权和模型微调是一场巨大的胜利，但托管它需要像 16 张 B200 这样的极端企业级硬件。用户指出，尽管像 Fireworks AI 这样的 API 提供商提供了易于接受的定价，但缺乏高显存的消费者级硬件使得个人根本无法在本地运行。此外，关于商业许可证中规定的 2000 万美元收入门槛也引发了积极的讨论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Open Source AI</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">Kimi-K3</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-2"></a>

## [关于 Bun 运行时从 Zig 到 Rust 重写的最新进展](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html) ⭐️ 9.0/10

Bun 创始人 Jarred 确认，从 Zig 重写为 Rust 的运行时已经在 Claude Code 的生产环境中运行了一个多月，且几乎无人察觉。然而，官方 Bun v1.4 版本的发布已被推迟，直到达到特定的 Node.js 兼容性测试目标，相关的必要拉取请求预计将很快合并。 在 LLM 的大力推动下，重大架构重写的成功静默部署证明了 AI 驱动的大规模代码翻译在实际生产环境中的可行性。这对被广泛使用的 Bun JavaScript 运行时来说是一个巨大的转变，但也突显了快速 AI 生成之后面临的持续维护和兼容性挑战。 尽管向 Rust 的过渡在 Claude Code 中运行顺利，但发布的瓶颈在于需要通过特定数量的 Node.js 兼容性测试，以确保其作为直接替代品的功能。开发人员目前正专注于追踪“unsafe”代码块并合并待处理的 PR 以达成兼容性目标，可能会在下周二发布。

hackernews · tomlockwood · 7月27日 11:12 · [社区讨论](https://news.ycombinator.com/item?id=49067854)

**背景**: Bun 是一个极快的一体化 JavaScript 运行时，旨在作为 Node.js 的直接替代品，具有原生打包器、转译器和 npm 客户端。该项目最初使用 Zig（一种通用系统编程语言）编写，最近经历了大规模的架构转变，将其核心重写为 Rust。Claude Code 是 Anthropic 公司被广泛使用的智能体编码工具，可直接在开发者的终端中运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/oven-sh/bun">GitHub - oven-sh/ bun : Incredibly fast JavaScript runtime , bundler...</a></li>
<li><a href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code overview - Anthropic</a></li>

</ul>
</details>

**社区讨论**: 创始人 Jarred 强调，虽然重写版本在生产环境中很稳定，但在兑现 Node.js 兼容性承诺之前，团队将暂缓正式发布。像 SquareWheel 这样的社区成员指出，开发者需要时间来适应新的 Rust 代码库并优先考虑安全性，而 benjiro29 则对 LLM 翻译代码库的长期可维护性表示怀疑。此外，bendmorris 提到了另一种反向尝试，即一位开发者利用 LLM 改进了原始的 Zig 代码库，这让人质疑进行重写是否绝对必要。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Bun</span> <span class="tag-badge">Rust</span> <span class="tag-badge">JavaScript Runtime</span> <span class="tag-badge">LLM Code Translation</span> <span class="tag-badge">Software Engineering</span></p>

---

<a id="item-3"></a>

## [谷歌透露 Gemini 4 为迄今最雄心预训练，预计年底发布](https://9to5google.com/2026/07/26/google-gemini-4-teases/) ⭐️ 9.0/10

谷歌 CEO Sundar Pichai 在 Alphabet 2026 年第二季度财报会上宣布，Gemini 4 已投入训练，这是公司迄今为止最具雄心的预训练项目，预计将于 2026 年底（可能在 11 月或 12 月）发布。Pichai 对内部进展表示兴奋，并承诺发布时会让外界满意。 谷歌 CEO 的官方确认标志着竞争激烈的 AI 军备竞赛进入下一个重要阶段，各大科技巨头争相构建更强大的基础模型。谷歌承诺优先将算力资源分配给前沿 AGI 研发，凸显了其在快速演变的 AI 领域保持行业领导地位的战略决心。 Pichai 强调，要在 AI 前沿竞争需要更大的基础模型，谷歌将优先把算力分配给前沿 AGI 研发，确保 Gemini 4 亮相时仍处行业前沿。此外，Gemini 3.x Flash 系列将保持近乎每月一次的迭代频率，重点提升智能编码等能力。

telegram · zaihuapd · 7月27日 04:06

**背景**: 预训练是大型语言模型训练的初始阶段，模型从大规模未标记文本数据中学习通用特征、底层模式和语义知识，然后再针对特定任务进行微调。AGI（通用人工智能）是指具备或超越人类智慧、能表现人类所有智能行为的机器智能，也被称为"强人工智能"。Gemini Flash 系列是谷歌推出的一系列轻量高效模型，主打在保持品质的前提下降低延迟和成本，最初采用以价换量的策略吸引开发者嵌入 Gemini API，建立生态黏性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.csdn.net/m0_56255097/article/details/141686878">彻底搞懂 大 模 型 LLM的构建流程（一） 预 训 练 （ Pre - training ...</a></li>
<li><a href="https://m.pedaily.cn/news/495768">AGI 通 用 人 工 智 能 如何一步步改变我们的未来生活？| 投资界</a></li>
<li><a href="https://www.php.cn/faq/2535107.html">3年涨价22倍！ 被全网吹爆的 Gemini Flash ... -人工智能-PHP中文网</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Google</span> <span class="tag-badge">Gemini 4</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Sundar Pichai</span></p>

---

<a id="item-4"></a>

## [Fast 1.x 被曝高危 RCE 漏洞，影响至 1.2.83 版本](https://t.me/zaihuapd/42797) ⭐️ 9.0/10

安全研究员 Kirill Firsov 披露了 Fast 1.2.68 至 1.2.83 版本中存在一个高危且未修复的远程代码执行（RCE）漏洞。该漏洞极其危险，因为在 JDK 8、17 和 21 上无需开启 `autoTypeSupport` 或依赖 `classpath` gadget 即可被利用。 由于 Fast 是一个被广泛使用的 Java 库，这种无需 gadget 即可利用的漏洞对使用 1.x 分支的无数应用程序构成了极大的安全威胁。此外，由于 Fast 1.x 已于 2024 年 10 月停止维护，官方极大概率不会发布安全补丁，这使得迁移到 Fast2 成为当务之急。 该漏洞影响 Fast 1.2.68 至 1.2.83 版本，它脱离了传统的 Java gadget 链独立运行，从而绕过了传统的反序列化防御机制。唯一有效的补救措施是升级到 Fast2，或者通过启动参数应用特定的配置调整。

telegram · zaihuapd · 7月27日 10:31

**背景**: Fast 是阿里巴巴开发的一个流行的 Java 库，用于将 Java 对象与 JSON 之间进行转换。从历史上看，它一直饱受反序列化漏洞的困扰，这些漏洞通常需要开启 `autoTypeSupport` 功能并依赖特定的 `classpath` gadget（即攻击者用来执行恶意代码的方法和类序列）。为了解决这些持续的安全问题，开发人员最终发布了一个从头重写且更安全的版本——Fast2，并弃用了最初的 1.x 分支。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cloud.tencent.cn/developer/article/2485929">FastJson checkAutoType安全机制研究-腾讯云开发者社区-腾讯云</a></li>
<li><a href="https://www.cnblogs.com/Ho1dF0rward/p/18425615">fastjson反序列化漏洞 - Ho1d_F0rward - 博客园</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Security</span> <span class="tag-badge">Vulnerability</span> <span class="tag-badge">Java</span> <span class="tag-badge">Fast</span> <span class="tag-badge">RCE</span></p>

---

<a id="item-5"></a>

## [月之暗面将开源全球首个 3T 级前沿模型 Kimi-K3](https://t.me/zaihuapd/42802) ⭐️ 9.0/10

月之暗面宣布将在 Hugging Face 上开源高达 3T（万亿）参数级别的前沿模型 Kimi-K3。该模型基于包含 Kimi Delta Attention 和 Attention Residuals 的全新架构构建，专为高级智能体任务、长程编程和复杂推理而设计。 此次发布标志着开源 AI 社区的重大飞跃，向公众提供了一个具备原生智能体能力的 3T 参数模型。它在复杂、多步骤任务执行和知识工作方面树立了开源智能的新标杆，直接挑战了其他前沿模型。 Kimi-K3 拥有最高达 1,048,576 个 token 的扩展上下文窗口，能够实现仓库级代码理解。其架构集成了 Kimi Delta Attention（一种高效的线性注意力模块）和 Attention Residuals（用学习到的、依赖输入的注意力替换标准残差连接），原生支持工具调用、网页浏览和多步规划。

telegram · zaihuapd · 7月27日 15:15

**背景**: 传统的 Transformer 模型依赖标准的残差连接和二次方复杂度的注意力机制，这在极端规模下会变得计算成本高昂且内存消耗巨大。月之暗面的全新架构通过使用 Kimi Delta Attention（KDA，一种细粒度的线性注意力机制）以及允许各层选择性地聚合先前表示的 Attention Residuals，来解决这些局限性。这种结合对于处理高级智能体工作流和仓库级代码理解所需的海量参数和超长上下文至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/zh-cn/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://arxiv.org/abs/2603.15031">[2603.15031] Attention Residuals - arXiv.org GitHub - MoonshotAI/Attention-Residuals Attention Residuals - arXiv.org Attention Residuals wdlctc/open-attention-residuals - GitHub Attention Residuals - openlm.ai Open Attention Residuals: Replacing Additive Residuals with ...</a></li>
<li><a href="https://arxiv.org/pdf/2510.26692">Kimi Linear: An Expressive, Efficient Attention Architecture</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">Kimi-K3</span> <span class="tag-badge">开源</span> <span class="tag-badge">大语言模型</span></p>

---

<a id="item-6"></a>

## [微软在 MDASH 中引入 MAI-Cyber-1-Flash 网络安全 AI 模型](https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/) ⭐️ 8.0/10

微软发布了 MAI-Cyber-1-Flash，这是一款全新且高性价比的 AI 模型，专为在复杂代码库中发现极具挑战性的漏洞而构建。该模型集成于微软的多模型智能扫描系统（MDASH）中，据称在 CyberGym 基准测试中达到了 96% 的得分率，并将运营成本降低了一半。 这一进展凸显了主要科技供应商正日益倾向于利用专有威胁情报来训练专门的防御性 AI 模型。通过利用数十年积累的安全信号，微软旨在显著提高漏洞发现的速度和准确性，尽管该模型在微软生态系统之外的适用性仍有待观察。 MAI-Cyber-1-Flash 专为驱动 MDASH（一个专门用于软件漏洞识别和修复的系统）而构建，并与全新的 Perception 智能安全系统同步推出。该模型的核心竞争力依赖于微软庞大的专有数据，这些数据涵盖了来自身份、端点、云和网络资源的每日数万亿个安全信号。

hackernews · migmartri · 7月27日 16:52 · [社区讨论](https://news.ycombinator.com/item?id=49072361)

**背景**: MDASH（微软安全多模型智能扫描系统）是由微软自主代码安全团队开发的一个框架，旨在实现漏洞发现过程的自动化和规模化。它作为一个平台或“引擎”，协调各种 AI 模型协同工作，从而扫描、识别和修复代码中的安全漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://runtimewire.com/article/microsoft-mai-cyber-1-flash-mdash-launch">Microsoft launches MAI - Cyber - 1 - Flash , a cost‑efficient... - RuntimeWire</a></li>
<li><a href="https://techcrunch.com/2026/07/27/microsoft-launches-its-first-cyber-model-and-a-new-agentic-cybersecurity-system/">Microsoft launches its first cybersecurity model, plus... | TechCrunch</a></li>
<li><a href="https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark/">Defense at AI speed: Microsoft ’s new... | Microsoft Security Blog</a></li>

</ul>
</details>

**社区讨论**: 社区反应褒贬不一；虽然用户承认其庞大的专有数据集令人印象深刻，但有人戏谑地指出，这意味着该模型可能只是非常擅长修复微软自身产品的问题。其他评论者质疑其实际效用，认为攻击者只需找到一个突破口，而防御者必须防守整个防线，还有人对该工具在非微软环境（如 Linux 或 Cisco 硬件）中的适用性表示担忧。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Security</span></p>

---

<a id="item-7"></a>

## [月之暗面发布 Kimi-K3 技术报告及开源基础设施](https://github.com/MoonshotAI/Kimi-K3/blob/main/k3_tech_report.pdf) ⭐️ 8.0/10

月之暗面发布了 Kimi-K3 的技术报告，这是一个拥有 2.8 万亿参数的开放权重大语言模型，于 2026 年 7 月 16 日发布，是全球首个达到 3 万亿参数级别的开源模型。同时，公司还开源了多个配套基础设施工具，包括 MoonEP、AgentEnv 和 FlashKDA。 Kimi-K3 代表了开放权重大语言模型生态系统的一个重要里程碑，在突破参数规模前沿的同时引入了 Kimi Delta Attention 和 Attention Residuals 等新颖的架构创新。超大规模开源模型、MXFP4 量化带来的高效部署，以及免费的基础设施工具的组合，为企业和研究人员提供了一个极具吸引力的专有前沿模型替代方案。 该模型具备 100 万 token 的上下文窗口、原生视觉能力，并采用 MXFP4 混合精度量化，这意味着单台 GB300 机架（约 600 万美元，配备 20.7 TB 内存）只需使用不到 10% 的内存容量即可部署完整模型。其许可证包含商业限制：运营模型即服务业务且连续 12 个月总收入超过 2000 万美元的公司，必须与月之暗面签订单独的商业协议。

hackernews · vinhnx · 7月27日 15:23 · [社区讨论](https://news.ycombinator.com/item?id=49070985)

**背景**: 开放权重的大语言模型会公开发布其训练好的参数，允许任何人下载、研究、修改和本地部署模型，这与只能通过付费 API 访问的专有模型形成对比。Kimi-K3 基于 Kimi Delta Attention（KDA）构建，这是一种混合线性注意力机制，旨在提升大规模场景下的效率，并结合 Attention Residuals 以改善梯度流动。MXFP4 是一种混合精度浮点格式，对大部分权重使用 4 位表示，与标准 FP16 或 BF16 格式相比大幅降低了内存和带宽需求。月之暗面是一家中国 AI 初创公司，一直致力于开发 Kimi 系列模型，将自身定位为长上下文和前沿规模开放 AI 领域的领导者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei">Kimi K3 Model Overview: 2.8T Parameters, MXFP4 Quantization ...</a></li>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart">Kimi K3 - Kimi API Platform</a></li>

</ul>
</details>

**社区讨论**: 社区成员进行了粗略计算，显示单台 GB300 机架可以以约每秒 30 token 的速度运行超过 6000 个并行智能体工作流，使每月推理支出超过 100 万美元的公司自建部署在经济上变得可行。评论者赞扬月之暗面同时开源了模型权重和配套基础设施，反驳了开源 AI 正在放缓的说法。许可证中 2000 万美元的模型即服务收入门槛以及各推理提供商之间统一的定价也引发了审查和讨论。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Large Language Models</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Open Source</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">Machine Learning</span></p>

---

<a id="item-8"></a>

## [PGSimCity：用三维城市可视化 PostgreSQL 内部机制](https://nikolays.github.io/PGSimCity/) ⭐️ 8.0/10

PGSimCity 是一款全新的开源浏览器端三维可视化工具，将 PostgreSQL 的内部架构呈现为一座可探索的城市，涵盖后端进程、共享缓冲区、WAL、检查点、自动清理和复制等组件。该项目基于 WebGL2 构建，目前处于早期原型阶段，欢迎社区通过 GitHub 提供反馈和贡献。 理解数据库内部机制传统上需要研读密集的架构图和文档，对初学者来说学习曲线非常陡峭。PGSimCity 引入了生动直观的空间隐喻，有可能从根本上改变复杂系统架构的教学和理解方式，而其开源特性意味着同样的方法可以推广到 Kubernetes 或云计算基础设施等其他领域。 该工具基于 WebGL2 构建，无需安装即可在浏览器中直接运行，可视化展示 PostgreSQL 的关键子系统，包括后端进程、共享缓冲区、WAL（预写式日志）、检查点、自动清理和复制。作为早期原型，它目前提供引导式导览模式，并欢迎通过 GitHub issues 和 pull requests 进行修正和改进。

hackernews · jonbaer · 7月27日 00:19 · [社区讨论](https://news.ycombinator.com/item?id=49063754)

**背景**: PostgreSQL 是一款广泛使用的开源关系型数据库管理系统，其内部架构十分复杂，涉及多个并发进程：用于处理客户端连接的后端进程、用于缓存数据页的共享缓冲区、用于保证持久性的 WAL（预写式日志）、用于将数据同步到磁盘的检查点，以及用于回收存储空间的自动清理进程。传统上，这些概念通过静态架构图、文档或基于文本的教程来讲解，对于缺乏深厚系统经验的人来说难以理解。PGSimCity 试图通过将每个组件映射为虚拟城市中的建筑或区域来弥合这一差距，使组件之间的关系和数据流更加直观、一目了然。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/NikolayS/pgsimcity">GitHub - NikolayS/PGSimCity: An explorable 3D city that shows ...</a></li>
<li><a href="https://daily.dev/posts/pgsimcity---how-postgresql-works-nhueeeyjn">PGSimCity - How PostgreSQL Works - daily.dev</a></li>
<li><a href="https://news.ycombinator.com/item?id=49063754">PGSimCity - How PostgreSQL Works | Hacker News</a></li>

</ul>
</details>

**社区讨论**: 社区对这个概念充满热情，多位用户将其与对其他系统（如 BEAM VM）的类似可视化想法进行类比，并表达了对基于 VR 的代码库探索的兴趣。然而，建设性的反馈指出当前的导览模式信息量过载，屏幕上同时发生的变化太多，用户强烈希望增加交互性——比如能够输入查询并追踪其在整个系统中的流转——而不是被动地观察。多位评论者还看到了将这种隐喻扩展到云计算和 Kubernetes 等领域的潜力。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">PostgreSQL</span> <span class="tag-badge">Data Visualization</span> <span class="tag-badge">Databases</span> <span class="tag-badge">Systems Design</span> <span class="tag-badge">Educational</span></p>

---

<a id="item-9"></a>

## [每日安全动态推送：ImageMagick SYSTEM 命令注入、macOS 绕过及 MemGhost](https://mp.weixin.qq.com/s?__biz=MzA5NDYyNDI0MA==&mid=2651960527&idx=1&sn=aa137b4bb5a6331afb1ea964ccff68bb) ⭐️ 8.0/10

本期安全动态推送涵盖了多项关键发现，包括通过 ImageMagick Delegates 触发 SYSTEM 级命令注入的 Bing 图片漏洞、绕过 macOS Gatekeeper 和 TCC 的可执行文件静默替换技术，以及名为 MemGhost 的新型 AI 代理攻击。此外，还介绍了一项使用知识增强 LLM 推理来检测虚假网络威胁情报的研究。 这些发现突显了跨多个平台的关键攻击面，要求安全专业人员立即关注以缓解潜在的破坏性漏洞。MemGhost 等攻击技术的出现以及防御性 LLM 应用的发展，凸显了 AI 与网络安全交叉领域迅速演变的态势。 ImageMagick 漏洞利用了用于文件转换的“Delegates”处理机制，使得精心构造的 SVG 能够执行任意 shell 命令。同时，MemGhost 作为一个单次有效载荷注入框架，在针对个人代理的影子副本离线训练攻击者模型后，向 AI 代理植入持久的虚假记忆。

rss · 腾讯玄武实验室 · 7月27日 09:33

**背景**: ImageMagick 的 Delegates 功能利用外部命令处理某些文件格式，如果处理不当，历来容易受到命令注入攻击。通用跨站脚本（UXSS）漏洞针对浏览器或浏览器扩展程序本身的缺陷而非特定网站，允许在用户访问的任何页面上执行恶意代码。苹果 macOS 生态系统中的 Gatekeeper 和 TCC（透明度、同意和控制）是旨在确保仅运行受信任的软件并保护用户数据免受未经授权访问的安全机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://security.snyk.io/vuln/SNYK-SLES154-IMAGEMAGICK-5664805">Arbitrary Command Injection in ImageMagick | CVE-2023-34153 ...</a></li>
<li><a href="https://thehackernews.com/2026/07/new-memghost-attack-plants-persistent.html">New MemGhost Attack Plants Persistent False Memories in AI Agents...</a></li>
<li><a href="https://www.sherlockforensics.com/blog/cve-2026-48294-adobe-acrobat-pdf-extension-chrome-uxss.html">CVE-2026-48294 Adobe Acrobat PDF Chrome Extension UXSS</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Vulnerabilities</span> <span class="tag-badge">macOS</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Threat Intelligence</span></p>

---

<a id="item-10"></a>

## [微软发布面向 AI 时代的'Project Perception'网络安全项目](https://blogs.microsoft.com/blog/2026/07/27/rethinking-security-for-the-age-of-ai/) ⭐️ 8.0/10

微软宣布推出'Project Perception'，这是一个全新的 AI 驱动的网络安全栈，旨在应对自主系统时代攻防动态的变化。它引入了分层的'Cyber Stack'架构，将数据摄取、理解、推理、协调和行动分离为独立的操作层。 随着攻击成本下降以及 AI 使威胁能够持续、自适应地运行，传统安全模型已显得不足。这一公告代表了向集成化、AI 原生安全基础设施的重大行业转变，可能会重塑企业防御日益复杂的自主威胁的方式。 据报道，Project Perception 使用多模型路由方法，可能包括 Anthropic 的 Claude Mythos 等模型，来发现软件漏洞。该平台不同于简单的聊天机器人界面，提供了一个涵盖从数据摄取到协调行动六个层面的综合架构。

rss · Microsoft Security · 7月27日 16:40

**背景**: 随着 AI 系统获得在没有人工干预的情况下进行推理、适应和持续运行的能力，网络安全格局正在发生根本性变化。传统安全工具是为人类速度的威胁和静态漏洞环境设计的，但 AI 驱动的攻击现在可以以机器速度和规模探测防御系统。微软的这一举措反映了业界更广泛的认知，即防御必须从被动的工具集演变为能够匹配 AI 驱动攻击速度和复杂性的主动式自主系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://windowsnews.ai/article/microsofts-autonomous-security-agents-enter-public-preview-august-3-what-they-can-actually-do.440626">Microsoft’s autonomous security agents enter public... - Windows News</a></li>
<li><a href="https://conversationaltechsummit.com/microsofts-project-perception-vs-anthropics-mythos-why-the-next-ai-war-is-about-systems-not-models/">Microsoft's Project Perception vs. Anthropic's Mythos: Why the Next...</a></li>
<li><a href="https://strongmocha.com/ai-infrastructure-data-centers/unpacking-signal-peak-2026-microsoft-s-ai-strategy-featuring-anthropic-s-models/">Unpacking Signal Peak 2026: Microsoft ’s AI Strategy... - StrongMocha</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Cybersecurity</span> <span class="tag-badge">Artificial Intelligence</span> <span class="tag-badge">Microsoft</span> <span class="tag-badge">Project Perception</span> <span class="tag-badge">Security</span></p>

---

<a id="item-11"></a>

## [长鑫科技登陆科创板首日暴涨 471.59%，有望创科创板最大 IPO 纪录](https://www.stcn.com/article/detail/4042119.html) ⭐️ 8.0/10

7 月 27 日，长鑫科技（688825.SH）正式登陆上交所科创板，发行价为 8.66 元/股，上市首日高开 471.59%，报 49.5 元/股。本次实际募资约 579.19 亿元，若超额配售选择权全额行使，募资总额可达约 666.07 亿元，有望超过 2020 年中芯国际 532.30 亿元的纪录，成为科创板史上最大 IPO。 长鑫科技作为中国领先的国产存储芯片制造商，其巨额 IPO 对国内半导体产业具有里程碑式意义，显示出资本市场对底层硬件技术的极高信心。此次上市有望重塑全球存储芯片市场格局，并加速中国半导体自主可控进程。 发行价定为 8.66 元/股，实际募资约 579.19 亿元，若超额配售选择权全额行使则可达约 666.07 亿元。公司预计 2026 年上半年归母净利润为 500 亿元至 570 亿元，同比大幅扭亏为盈。

telegram · zaihuapd · 7月27日 01:29

**背景**: 长鑫科技是中国最重要的国产 DRAM 存储芯片制造商，其产品广泛应用于计算机、智能手机和数据中心等领域。全球 DRAM 市场长期由韩国三星、SK 海力士和美国美光主导，长鑫科技因此成为中国半导体自主化战略中的关键企业。科创板于 2019 年在上交所设立，是类似纳斯达克的科技板块，旨在支持具有重大增长潜力的创新科技企业上市融资。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">长鑫科技</span> <span class="tag-badge">半导体</span> <span class="tag-badge">IPO</span> <span class="tag-badge">存储芯片</span> <span class="tag-badge">科创板</span></p>

---

<a id="item-12"></a>

## [中方驳斥美方拟因 AI 模型蒸馏制裁中国企业的威胁](https://www.mofcom.gov.cn/syxwfb/art/2026/art_7f1622463a7c48ef9fad600ce0ef702f.html) ⭐️ 8.0/10

7 月 27 日，中国商务部发表声明，强烈反对美方以"蒸馏"美国前沿模型、窃取知识产权等为由对中国 AI 企业实施制裁。中方反驳称，模型蒸馏是行业通用技术，部分美国企业同样在研发中使用中国开源模型。 这一争端标志着中美技术冷战的显著升级，模型蒸馏正成为围绕知识产权和开源访问的新战场。其结果可能重塑全球开源 AI 生态系统，并为跨境 AI 模型使用的治理确立先例。 中国商务部表示，美方指控"缺乏事实和法律依据"，并警告如美方行为对中方利益造成实质性损害，中方将采取"必要措施"维护中国企业合法权益。值得注意的是，据报道近 200 家美国初创企业已呼吁美国政府不要限制访问中国开源模型。

telegram · zaihuapd · 7月27日 11:01

**背景**: 模型蒸馏（知识蒸馏）是机器学习中广泛使用的技术，将知识从大型复杂的"教师"模型转移到更小、更易部署的"学生"模型。这一方法已成为 AI 行业的基础技术，使企业能够创建经济高效且保留前沿模型大部分能力的模型。该技术本质上与知识产权窃取无关——它是整个行业使用的核心机器学习方法，包括美国企业也在利用 DeepSeek 和 Qwen 等公开可用的中国开源模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mdnice.com/writing/786abf8c4a4a43918ca662357312c7c8">LLMs的 知 识 蒸 馏 ： 技 术 和应用 - mdnice 墨滴</a></li>
<li><a href="https://juejin.cn/post/7665780788496007222">今天我们讲讲大 模 型 的“核心” 技 术 ： 蒸 馏 （Model Distillation...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Geopolitics</span> <span class="tag-badge">Model Distillation</span> <span class="tag-badge">Sanctions</span> <span class="tag-badge">US-China Relations</span></p>

---

<a id="item-13"></a>

## [中芯国际测试中国首台国产 DUV 光刻机](https://t.me/zaihuapd/42800) ⭐️ 8.0/10

中芯国际正在试运行中国首台由上海初创公司宇量昇制造的国产 DUV（深紫外）浸没式光刻机。该设备目前用于生产 28 纳米芯片，中芯国际还计划通过多重图形化工艺尝试 7 纳米甚至 5 纳米制程，最早或于 2027 年实现量产。 这一进展标志着中国在美国出口管制限制 EUV 光刻设备进口的背景下，推进半导体自主化的关键一步。如果成功，国产 DUV 光刻机将减少中国对 ASML 的严重依赖，并从根本上改变芯片制造的全球地缘政治格局。 该设备大部分零部件已实现国产化，但仍有部分依赖进口。业内人士警告称，实现量产级别的稳定良率至少还需要一至两年时间，且该技术在成熟度和可靠性方面仍与 ASML 存在明显差距。

telegram · zaihuapd · 7月27日 14:10

**背景**: DUV（深紫外）光刻技术使用 193 纳米波长的氟化氩激光器在晶圆上绘制电路图形，通过多重图形化工艺可延伸至 7 纳米甚至 5 纳米制程，但良率较低且成本更高。EUV（极紫外）光刻使用 13.5 纳米的更短波长，是制造最先进制程芯片的必需设备，但受美国出口管制限制，禁止对华销售。中国最先进的芯片目前仍依赖 ASML 的 DUV 设备，因此国产替代成为战略优先事项。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cn.technode.com/post/2025-09-17/smic-yuliangsheng/">cn.technode.com/post/2025-09-17/smic- yuliangsheng</a></li>
<li><a href="https://eureka.patsnap.com/article/duv-lithography-explained-how-193nm-arf-lasers-enable-7nm-nodes">DUV Lithography Explained: How 193nm ArF Lasers Enable 7 nm ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">semiconductors</span> <span class="tag-badge">lithography</span> <span class="tag-badge">SMIC</span> <span class="tag-badge">chip-manufacturing</span> <span class="tag-badge">technology-sovereignty</span></p>

---