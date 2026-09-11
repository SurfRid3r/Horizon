---
layout: default
title: "Horizon Summary: 2026-09-11 (ZH)"
date: 2026-09-11
lang: zh
---

> 从 49 条内容中筛选出 7 条重要资讯。

---

1. [陶哲轩等顶尖数学家警告 AI 在数学领域出现严重错位](#item-1) ⭐️ 9.0/10
2. [GitLab 修复 CVSS 10.0 漏洞：未认证用户可读取服务器任意文件](#item-2) ⭐️ 9.0/10
3. [OpenAI 推出 Agents API 公测版，一次调用即可创建生产级云端智能体](#item-3) ⭐️ 9.0/10
4. [OpenAI 在 API 中推出全双工实时语音模型 GPT-Live-1](#item-4) ⭐️ 8.0/10
5. [DeepSeek 发布 V4.1 Flash：552B 参数多模态新架构模型](#item-5) ⭐️ 8.0/10
6. [Anthropic 威胁情报报告点名七家中国 AI 实验室大规模蒸馏 Claude](#item-6) ⭐️ 8.0/10
7. [Anthropic 报告指 Moonshot AI 悄悄将 Kimi 用户请求转发给 Claude](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [陶哲轩等顶尖数学家警告 AI 在数学领域出现严重错位](https://mathandai.org/) ⭐️ 9.0/10

陶哲轩与其他顶尖数学家发布声明，警告 AI 在数学领域出现“严重错位”，指出以 OpenAI 为代表的方法只追求生成证明而完全不顾人类理解。《经济学人》报道称顶级数学家对 OpenAI 的做法感到愤怒，该新闻在 Hacker News 上引发了 276 条评论、187 个点赞的高质量讨论。 陶哲轩是当今在世最具影响力的数学家之一，他的严厉批评表明数学界最高层对 AI 实验室运作方式存在深度不安。这场争论触及数学文化的核心——成果归属、证明验证以及人类理解的价值——并预示着随着 AI 能力增强，类似冲突将蔓延至其他研究领域。 数学家的核心不满在于：AI 系统被优化用来解决开放难题（为了基准测试或宣传），而非产出人类能够验证和学习的解释，这摧毁了传统上以“解决开放问题”衡量数学贡献的标尺。有评论者指出，成果归属问题在实践中已无法挽回：正如一位评论者所说，即使 AI 实验室不再投入数百万资金，“这些模型的能力已经放出盒子了”。

hackernews · meredydd · 9月11日 17:45 · [社区讨论](https://news.ycombinator.com/item?id=49662371)

**背景**: 数学传统上通过人类专家验证并消化的证明来进步，解决著名的开放问题长期以来是这一学科声望与成果归属的“通货”。近来的 AI 模型（包括 OpenAI 的系统）已能产出冗长且能力日益强大的证明，但人类难以检查或理解，这威胁到数学赖以验证的社会过程。这一事件让人联想到早前的望月新一 abc 猜想争议：当时数学界面对一个庞大且难以理解的论证，以怀疑、专题会议和消化性论文作为回应。

**社区讨论**: Hacker News 上的讨论非常有分量：一位数学家将其与望月新一 abc 猜想事件类比，认为即使 AI 给出一个庞大而无法理解的黎曼猜想证明，也可能反过来催生会议、论文和报告，帮助社区消化它。另一位评论者认为 AI 摧毁的不是数学家建立理解的能力，而是用来衡量贡献的标尺（解决开放问题）；还有人将陶哲轩的批评比作波德莱尔在 19 世纪对摄影作为机械复制品的抨击。反对意见则认为，让人类理解变得无关紧要正是 AI 数学的目标所在，因此这封信在 AI 实验室那里只会被置若罔闻。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">mathematics</span> <span class="tag-badge">Terence Tao</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">research ethics</span></p>

---

<a id="item-2"></a>

## [GitLab 修复 CVSS 10.0 漏洞：未认证用户可读取服务器任意文件](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-3-2-released/) ⭐️ 9.0/10

GitLab 于 9 月 10 日发布 19.3.2、19.2.6 和 19.1.8 紧急补丁，修复 CVSS 10.0 满分漏洞 CVE-2026-85706。在特定条件下，攻击者可利用代码仓库 commits API 的路径约束和认证缺陷，以未认证身份读取 GitLab 服务器上的任意文件。 满分严重等级加上未认证任意文件读取，对大量自建 GitLab 实例构成严重威胁，这些实例中往往存有专有源代码、CI/CD 密钥和配置文件。泄露的文件可能包含凭据和密钥，为后续攻击打开大门，因此自建实例的组织必须立即升级。 受影响范围包括 18.7 至 19.1.8 之前的版本、19.2.6 之前的 19.2 版本以及 19.3.2 之前的 19.3 版本；GitLab.com 已完成修复，GitLab Dedicated 用户无需操作。该漏洞由研究员 s3ntago 通过 HackerOne 报告，官方未公开具体前置条件，网上暂无可复现的公开 PoC，也没有在野利用的证据。

telegram · zaihuapd · 9月11日 11:05

**背景**: GitLab 是广泛使用的 DevOps 平台，将 Git 仓库托管与 CI/CD 流水线结合，许多组织在自己的基础设施上运行自管理实例。仓库 commits API 是一个 REST 端点，供 CI/CD 流水线、自动化脚本和第三方集成访问版本控制数据。CVSS（通用漏洞评分系统）是业界标准的 0 到 10 分漏洞严重性评分体系，10.0 为最高危级别。PoC（概念验证）是用于证明漏洞真实存在的验证代码，目前尚无公开 PoC 降低了但不排除短期内被利用的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.gitlab.com/api/commits/">Documentation for the REST API for Git commits in GitLab .</a></li>
<li><a href="https://thecybersecguru.com/news/gitlab-cve-2026-85706-cvss-10-path-traversal/">GitLab CVE-2026-85706: Critical CVSS... | The CyberSec Guru</a></li>
<li><a href="https://gist.github.com/caoya171193579/0662f16eeedf51a9307e01069a2bedf1">一些相关的安全术语，比如：VUL、CVE、Exp、 PoC 等。 · GitHub</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">安全漏洞</span> <span class="tag-badge">GitLab</span> <span class="tag-badge">CVE</span> <span class="tag-badge">应急补丁</span> <span class="tag-badge">DevOps</span></p>

---

<a id="item-3"></a>

## [OpenAI 推出 Agents API 公测版，一次调用即可创建生产级云端智能体](https://openai.com/index/introducing-the-agents-api/) ⭐️ 9.0/10

2026 年 9 月 10 日，OpenAI 推出 Agents API 公测版，开发者只需一次 API 调用即可创建生产级云端智能体，并可选择 OpenAI 托管沙箱、自有基础设施或合作伙伴环境。该 API 基于开源的 Codex harness 构建，支持长会话上下文压缩、工具搜索、并行工具调用和子智能体协作，公测期间不收取额外费用，用户仅需为智能体消耗的令牌和工具付费。 此次发布标志着 AI 智能体构建与部署方式的重大转变，开发者无需自行搭建底层基础设施和编排逻辑，可将精力集中在智能体本身。通过将灵活的执行环境、上下文压缩和子智能体编排整合进单一 API，OpenAI 有望抢占新兴的智能体平台市场，并加剧与现有智能体框架的竞争。 公测期间不收取额外费用，用户只需为智能体实际消耗的令牌和工具付费。开发者可选择在 OpenAI 托管沙箱、自有基础设施或合作伙伴环境中运行智能体，长会话则通过自动上下文压缩来维持运行，而不会触及模型上下文上限。

telegram · zaihuapd · 9月11日 11:12

**背景**: Codex harness 是 OpenAI 于 2026 年 8 月以 Apache-2.0 协议在 github.com/openai/codex 完全开源的底层执行框架，驱动 Codex App、CLI 和 IDE 扩展运行，负责管理模型、工具与环境之间的循环调度。上下文压缩是指在将文本送入 LLM 之前，通过各种技术手段减少 token 数量，同时尽可能保留对当前任务有用的信息，从而使智能体能够长时间持续运行。子智能体协作是一种多智能体模式，由主智能体将子任务分派给专门的子智能体并汇总其结果，适合可并行化的工作，但若使用不当，多智能体系统也可能更慢、更贵、更难调试。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://segmentfault.com/a/1190000048185190">人工 智 能 - 刚刚！ Codex Harness 全面 开 源 ： OpenAI ...</a></li>
<li><a href="https://learnagent.wiki/agent/cards/context-compression">上 下 文 压 缩 （ Context Compression ... | Learn Agent 知识库</a></li>
<li><a href="https://blog.liuzijian.com/post/2026/07/27/langgraph-multi-agent/">LangGraph Multi Agent 多 智 能 体 协 作 - Liu Zijian's Blog | 一个技术博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Agents API</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">LLM</span> <span class="tag-badge">API</span></p>

---

<a id="item-4"></a>

## [OpenAI 在 API 中推出全双工实时语音模型 GPT-Live-1](https://openai.com/index/introducing-gpt-live-1-in-the-api/) ⭐️ 8.0/10

OpenAI 于 2026 年 9 月 10 日在 API 上线 GPT-Live-1，这是一个可同时听说的全双工实时语音模型，支持自然打断、背景噪声处理、长对话以及电话语音代理。OpenAI 称其在 Full Duplex Bench 上较 GPT-Realtime-2.1 提升 30 个百分点，API 语音前端定价为每分钟 0.05 美元。 支持自然打断的全双工语音缩小了 AI 语音助手与真人对话之间的关键差距，使语音代理在电话客服等实时场景中真正可用。由低价语音前端将复杂推理与工具调用交给后端模型的混合架构，也可能重塑构建语音代理的成本结构。 该模型可将复杂推理与工具调用交给后端模型处理，语音前端按每分钟 0.05 美元计费；OpenAI 还发布了 GPT-Live-1 mini 版本，并开始在 ChatGPT 中推出 GPT-Live。30 个百分点的提升是 OpenAI 自己在 Full Duplex Bench（一个评测话轮转换能力的基准）上给出的数据，并非独立评测结果。

telegram · zaihuapd · 9月11日 03:09

**背景**: 传统语音助手采用级联式流水线：等待用户说完、将音频转成文字、调用语言模型、再合成语音返回，因此无法实现自然的对话轮换和打断。全双工语音模型则可以同时听和说，能够感知用户何时想插话、处理重叠语音，并以接近真人的节奏回应。Full Duplex Bench 是一个专门评测全双工口语对话模型话轮转换能力的基准。将推理委托给后端模型意味着语音层可以保持快速且廉价，而繁重的计算则异步进行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/introducing-gpt-live-1-in-the-api/">Build more natural voice experiences with GPT ‑ Live ‑ 1 in the... | OpenAI</a></li>
<li><a href="https://full-duplex-bench.github.io/">Full - Duplex - Bench : A Benchmark for Full - duplex Spoken Dialogue...</a></li>
<li><a href="https://opewatson.com/casearchive/notes/Full-Duplex+Speech+Models">Full - Duplex Speech Models | Ope Watson</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">OpenAI</span> <span class="tag-badge">Speech AI</span> <span class="tag-badge">Realtime API</span> <span class="tag-badge">Voice Agents</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-5"></a>

## [DeepSeek 发布 V4.1 Flash：552B 参数多模态新架构模型](https://t.me/zaihuapd/43770) ⭐️ 8.0/10

DeepSeek 正式发布 V4.1 Flash，这是其全新模型结构系列中最小尺寸的模型，采用 552B 参数的 Causal-Encoder-Decoder 结构，输入和输出激活分别为 8B 和 16B。该模型原生支持多模态视觉理解，已上线 DeepSeek API（模型名为 deepseek-flash），新价格将于 2026 年 9 月 10 日 12:00 生效。 这标志着 DeepSeek 全新 Causal-Encoder-Decoder 架构系列的首次亮相，是对当前主导大模型领域的纯解码器架构的重要突破，同时原生多模态支持让视觉理解直接融入基础模型。稀疏 MoE 设计意味着以低得多的推理成本获得强大能力，延续了 DeepSeek 让前沿 AI 更强、更快、更普惠的路线。 根据 Hugging Face 模型卡，V4.1 Flash 是一个拥有 552B 主干参数的多模态混合专家（MoE）模型，支持高达一百万 token 的上下文，可原生处理图像和文本并自回归地生成文本。值得注意的变更包括：旧版 V4-Flash 和 V4-Flash-Vision-Exp 模型已被下线，且 2026 年 9 月 14 日 12:00 之后 deepseek-v4-pro 的 API 请求将被重新路由。

telegram · zaihuapd · 9月11日 11:32

**背景**: 大多数现代大语言模型采用纯解码器架构以自回归方式生成文本，而编码器-解码器设计（如最初的 Transformer）将输入理解与输出生成分开，GLM-130B 等混合前缀解码器方案则先双向编码前缀序列再解码输出。混合专家（MoE）模型依赖稀疏激活机制：路由器为每个 token 只激活一小部分专家网络，因此像 V4.1 Flash 这样的 552B 参数模型每次计算仅激活约 8B/16B 参数，大幅降低推理成本。"原生多模态"意味着视觉理解直接内置于基础模型本身，而非通过单独的视觉专家版本外挂实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.deepseek.com/en/news/deepseek-v4-1-flash/">Introducing DeepSeek - V 4 . 1 - Flash : smarter, faster, more efficient.</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash">deepseek -ai/ DeepSeek - V 4 . 1 - Flash · Hugging Face</a></li>
<li><a href="https://lmstudio.ai/models/deepseek-v4.1-flash">DeepSeek V 4 . 1 Flash</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI Models</span> <span class="tag-badge">Multimodal</span> <span class="tag-badge">Model Release</span></p>

---

<a id="item-6"></a>

## [Anthropic 威胁情报报告点名七家中国 AI 实验室大规模蒸馏 Claude](https://t.me/zaihuapd/43773) ⭐️ 8.0/10

Anthropic 发布最新威胁情报报告，称自今年 2 月以来已发现并阻止七家中国 AI 实验室对 Claude 进行的大规模「蒸馏」活动，直接点名阿里巴巴、智谱、小米、商汤和 MiniMax。其中阿里巴巴规模最大，5 月至 7 月间产生超过 1.51 亿次交互，高峰期每天接近 300 万次，Anthropic 称这些数据被用于训练 Qwen 3.5、3.6 和 3.7，并用于强化学习环境和模型架构工作。 这是一家头部美国 AI 实验室罕见地公开点名中国大型科技公司，大幅升级了关于服务条款执行、AI 知识产权保护以及中美 AI 竞争的争论。相关发现可能影响美国关于保护前沿模型输出的政策讨论，并改变 AI 服务商检测和执行使用限制的方式。 报告称商汤的蒸馏管道中包含从第三方数据供应商购买的 Claude 对话记录，而 MiniMax 通过一家空壳公司建立了代理网络，仅提供 Anthropic 和 OpenAI 的模型。Anthropic 还指出部分滥用案例涉及从客户环境中窃取的 API 密钥，但其自身系统并未被入侵。

telegram · zaihuapd · 9月11日 15:33

**背景**: 模型蒸馏是一种标准的 AI 训练技术，即用较小的「学生」模型学习复现较大的「教师」模型的输出，以远低于原模型的成本迁移大部分能力——这本身并非不当做法，各实验室也经常对自家模型进行蒸馏。但 Anthropic 的服务条款禁止使用 Claude 的输出训练竞争模型，因此第三方对 Claude 的蒸馏构成合同违约。通义千问（Qwen）是阿里巴巴的旗舰开源大模型系列，第五代 Qwen 3.5 于 2026 年初发布，是一个 3970 亿参数的混合专家（MoE）模型。此类威胁情报报告是 Anthropic 记录并打击其认定的模型滥用行为的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/threat-intelligence-report-september-2026">Countering misuse of AI: September 2026 / Anthropic \ Anthropic</a></li>
<li><a href="https://www.unite.ai/anthropic-details-disrupted-claude-misuse-across-seven-harm-areas/">Anthropic Details Disrupted Claude Misuse Across Seven Harm Areas</a></li>
<li><a href="https://www.aol.com/articles/explainer-ai-model-distillation-why-060104000.html">Explainer-What is AI model distillation and why is it becoming... - AOL</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">model-distillation</span> <span class="tag-badge">industry-competition</span> <span class="tag-badge">US-China-AI</span></p>

---

<a id="item-7"></a>

## [Anthropic 报告指 Moonshot AI 悄悄将 Kimi 用户请求转发给 Claude](https://www.anthropic.com/threat-intelligence-report-september-2026) ⭐️ 8.0/10

Anthropic 2026 年 9 月的威胁情报报告指出，开发 Kimi 系列模型的 Moonshot AI 并未使用自家模型处理客户请求，而是悄悄将请求转发给 Claude，再把 Claude 的回复呈现给以为自己在使用 Kimi 的用户。报告还记录了相关案例：一家中国科技公司的敏感内部文档，以及来自成都数百个摄像头、覆盖解放军设施和中电科下属机构的闭路电视监控数据，都经由这种模型链式调用被送入 Claude 处理。 这一发现揭示了 AI 行业中一种隐蔽的"模型替代"行为——用户被欺骗，不知道究竟是哪个模型在处理自己的数据——这动摇了对模型提供商的信任，并引发了对跨境数据流动的严重质疑。报告中记录的案例（包括与解放军相关的用户利用闭路电视数据进行针对性监控分析）也凸显了 AI 模型在监控活动中被滥用的风险，以及敏感数据在原始用户不知情的情况下流向境外提供商的问题。 在其中一案例中，一家中国科技公司的员工误以为自己使用的是 DeepSeek 来分析公司内部文档，而该服务将数据传递给了 Claude——这意味着该公司几乎肯定事先并不知情其旗舰 AI 项目的完整规格和战略目标被送入了 Claude。在另一案例中，一名被评估为很可能与解放军有关的用户从闭路电视录像库中加载针对特定人物的监控数据（覆盖成都数百个摄像头，涉及解放军设施、中电科下属机构及一家大型国有企业），并要求模型分析被跟踪者是否存在异常行为。

telegram · Marcoview666 · 9月11日 07:22

**背景**: Moonshot AI 是一家成立于 2023 年的北京 AI 初创公司，以 Kimi 系列模型和产品闻名，其创始团队的技术背景涵盖 Transformer-XL、RoPE 和 Mooncake 等。Anthropic 的这份报告涵盖了 2025 年 12 月至 2026 年 8 月期间被阻止的威胁行为者案例研究，涉及从网络攻击到生物滥用等七个危害领域。本案涉及的现象是"模型链式调用"（即一个 AI 服务将请求转发给另一家提供商的模型）——名义上由 Kimi 或 DeepSeek 处理的请求最终由 Claude 处理，这也是 Anthropic 得以观察到底层流量的原因。监控数据中出现的机构之一中国电子科技集团公司（CETC）是仅次于华为和联想的中国第三大电子与 IT 公司。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/threat-intelligence-report-september-2026">Countering misuse of AI: September 2026 / Anthropic \ Anthropic</a></li>
<li><a href="https://vocus.cc/article/6a868f02fd89780001a5047b">2026 Kimi AI 教學｜ Kimi K3 是什麼、怎麼用、價格與 模 型 總整理</a></li>
<li><a href="https://www.nodeloc.com/t/topic/108288">Anthropic 的“ 威 胁 情 报 报 告 ”，更像一份公关稿 - AI - NodeLoc</a></li>

</ul>
</details>

**社区讨论**: 原帖是一个 Telegram 转发，附有"太精彩了"的热烈评论，本身没有实质性的讨论串。相关网络讨论反应两极：有读者觉得这份报告"绝对是今天看过的最乐的消息"，而 NodeLoc 等论坛上的批评者则认为 Anthropic 的"威胁情报报告"更像一份公关稿而非真正的情报，提示这种煽动性的表述在核实方面需要保持一定谨慎。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI安全</span> <span class="tag-badge">Anthropic</span> <span class="tag-badge">威胁情报</span> <span class="tag-badge">Moonshot AI</span> <span class="tag-badge">数据隐私</span></p>

---