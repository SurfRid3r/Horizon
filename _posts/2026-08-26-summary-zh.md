---
layout: default
title: "Horizon Summary: 2026-08-26 (ZH)"
date: 2026-08-26
lang: zh
---

> 从 51 条内容中筛选出 7 条重要资讯。

---

1. [AWS 收购 DuckDB 背后的公司 DuckLabs，基金会保留开源知识产权](#item-1) ⭐️ 9.0/10
2. [Qwen3.8-Flash-Next：125B 模型辅以 51B N-gram 嵌入击败稠密 27B 模型](#item-2) ⭐️ 9.0/10
3. [DeepSeek-V4-Pro 正式上线，API 实行峰谷分时定价](#item-3) ⭐️ 9.0/10
4. [微软详述针对暴露 LiteLLM AI 网关的真实攻击](#item-4) ⭐️ 8.0/10
5. [FalconForce 研究：伪造 ETW 遥测数据可欺骗分析师并致盲 EDR](#item-5) ⭐️ 8.0/10
6. [CVE-2026-8933：Ubuntu snap-confine 安全加固反而引入 root 提权漏洞](#item-6) ⭐️ 8.0/10
7. [智谱确认 Ox Alpha 为 GLM 新迭代，使用量超 DeepSeek 两倍](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [AWS 收购 DuckDB 背后的公司 DuckLabs，基金会保留开源知识产权](https://ducklabs.com/news/2026/08/26/ducklabs-to-join-aws) ⭐️ 9.0/10

2026 年 8 月 26 日，AWS 宣布收购 DuckLabs——分析型数据库 DuckDB 背后的商业公司。关键在于，开源 DuckDB 的全部知识产权仍由独立的非营利组织 DuckDB 基金会持有，相关项目将继续以 MIT 许可证保持开源。 DuckDB 已成为最受欢迎的嵌入式分析数据库之一，被大量数据工具和流水线所采用，因此亚马逊对其核心开发团队的影响可能会改变项目走向并动摇社区信任。此次收购还凸显了开源基础设施的商业化整合与独立治理之间的更广泛张力。 DuckLabs 团队将继续从事开源工作，DuckDB 基金会还计划成立一个能够影响项目方向的利益相关者顾问委员会。基金会中的 CWI 代表 Peter Boncz 确认，基金会"持有开源 DuckDB 的全部知识产权，并将继续持有"。

hackernews · onderkalaci · 8月26日 12:59 · [社区讨论](https://news.ycombinator.com/item?id=49448321)

**背景**: DuckDB 是一个开源的进程内（嵌入式）列式 SQL 数据库，针对大型数据集上的快速分析型（OLAP）查询而优化，被数据科学家和工程师广泛用于 Python 和 R 等环境。它由荷兰国家数学与计算机科学研究中心（CWI）的 Mark Raasveldt 和 Hannes Mühleisen 创建，并于 2019 年首次发布。DuckLabs 是从 CWI 分拆出来、支持 DuckDB 开发的商业公司，而非营利的 DuckDB 基金会则独立持有项目知识产权——这种治理上的分离使开源代码免受本次收购的直接影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://duckdb.org/2026/08/26/ducklabs-to-join-aws">DuckLabs to Join AWS, Projects to Remain Open Source – DuckDB</a></li>
<li><a href="https://motherduck.com/blog/duckdb-amazon/">DuckDB outgrows its nest | MotherDuck</a></li>
<li><a href="https://en.wikipedia.org/wiki/DuckDB">DuckDB - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区反应喜忧参半：有评论者祝贺创始人成功退出，同时担心"亚马逊是最不重视维持技术上有价值项目的大公司"，未来某次重组可能会葬送 DuckDB。多位评论者指出标题具有误导性——AWS 收购的是 DuckLabs 而非 DuckDB 本身，后者的知识产权仍归基金会所有；还有人推荐了 Apache DataFusion 等替代方案，称其与 Rust 应用集成更佳。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AWS</span> <span class="tag-badge">DuckDB</span> <span class="tag-badge">acquisition</span> <span class="tag-badge">open-source</span> <span class="tag-badge">databases</span></p>

---

<a id="item-2"></a>

## [Qwen3.8-Flash-Next：125B 模型辅以 51B N-gram 嵌入击败稠密 27B 模型](https://qwen.ai/blog?id=qwen3.8-flash-next) ⭐️ 9.0/10

阿里巴巴 Qwen 团队发布了 Qwen3.8-Flash-Next，该模型将 125B 参数的主模型与额外的 51B N-gram 嵌入相结合，每个 token 仅激活 6B 参数。据报道，它超越了更大的 Qwen3.8 稠密 27B 模型，同时能在 MacBook 等消费级硬件上以可用的速度运行。 此次发布展示了一种新颖的架构，以内存容量换取计算效率，使前沿级模型质量能够在消费级设备上自托管运行。作为使用最广泛的开源 LLM 家族之一，Qwen 的架构创新可能会影响未来开源模型在总容量与推理成本之间的平衡方式。 总参数量约为 176B（125B 主模型加 51B N-gram 嵌入），这引发了量化方面的疑问——有评论者怀疑 4-bit 量化能否控制在 100GB 以内，或能否在 128GB 统一内存中运行。早期在 llama.cpp 合并实验分支上使用 iq4_xs 量化的测试达到了 23.54 token/秒，而同一配置运行 3.8 稠密 27B 模型可达 30 多 token/秒。

hackernews · tosh · 8月26日 12:52 · [社区讨论](https://news.ycombinator.com/item?id=49448210)

**背景**: 传统稠密语言模型对每个 token 都激活全部参数，因此计算成本随模型规模成比例增长。专家混合（MoE）等稀疏架构解耦了这种关系：庞大的总参数量提供更强的知识容量，而路由机制每个 token 仅激活一小部分参数，从而保持推理速度。N-gram 语言模型是一种经典的统计方法，通过固定窗口内的前几个词来预测下一个词；用 N-gram 嵌入增强 Transformer 正是遵循了这种以内存换计算的理念。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Word_n-gram_language_model">Word n-gram language model - Wikipedia</a></li>
<li><a href="https://theorempath.com/topics/mixture-of-experts">Mixture of Experts (MoE). Sparse Scaling for LLMs | TheoremPath</a></li>
<li><a href="https://gate.ai/blog/dense-model-vs.-moe-model-what-are-the-differences-in-model-architecture">Dense Model vs . MoE Model : What Are the Differences in Model ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对该模型干净利落地击败 3.8 稠密 27B 感到惊讶，有人感叹 LLM 进展速度惊人——在 5000 美元的 MacBook 上以 30 token/秒的速度自托管前沿级模型。技术讨论集中在自托管的实际问题上，例如约 176B 总参数的量化、内存需求以及 llama.cpp 支持，一位用户分享了运行速度达 23.54 token/秒的修补版本。还有人调侃希望模型能更直接地推理，而不是像小模型那样"过度思考"。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Qwen</span> <span class="tag-badge">open-source</span> <span class="tag-badge">machine-learning</span> <span class="tag-badge">self-hosting</span></p>

---

<a id="item-3"></a>

## [DeepSeek-V4-Pro 正式上线，API 实行峰谷分时定价](https://t.me/zaihuapd/43417) ⭐️ 9.0/10

DeepSeek 正式发布 V4-Pro，已同步上线 APP、网页端和 API，模型名设为 deepseek-v4-pro，调用方式保持不变。新版本增强了 Agent 能力，原生支持 Responses API 格式以适配 Codex，为 V4-Pro 和 V4-Flash 的思考模式新增 low、high、max 三档，并自 2026 年 8 月 17 日 0 时起实行 API 峰谷定价，闲时价格为高峰时段的一半。 DeepSeek 是使用最广泛的模型系列之一，此次强化 Agent 能力的重大版本发布将直接影响庞大的开发者与下游应用生态。原生支持 Responses API 意味着基于 OpenAI Agent 生态构建的工具（如 Codex）只需极少的代码改动即可切换到 DeepSeek，而峰谷定价引入的类似公用事业的分时计费模式，也可能改变批量 AI 任务的调度方式。 根据公布的规则，高峰时段为北京时间 9 时至 12 时、14 时至 18 时，其余时间按高峰价格的一半计费；值得注意的是，有报道指出与此前价格相比闲时价格同样有所上调，部分缓存命中输入价格涨幅明显。low、high、max 三档思考模式让开发者可以在推理深度与延迟、成本之间进行明确权衡。

telegram · zaihuapd · 8月26日 08:02

**背景**: Responses API 是 OpenAI 面向 Agent 和助手场景推出的新一代 API 格式，提供简化的输入、状态跟踪和后台任务支持，适合有状态的多步骤工作流。Codex 是 OpenAI 的编程 Agent，可在本地终端和 IDE 中运行，其依赖 Responses API 格式——因此 DeepSeek 原生支持该格式意味着 Codex 用户可以直接将工具指向 DeepSeek 模型。峰谷定价借鉴了电力等公用事业的需求管理思路：高峰期算力资源紧张时价格更高，以此激励用户将弹性任务转移到更便宜的时段。据报道 DeepSeek 是首个大规模采用分时 API 定价的大型 LLM 厂商，且后续已调整规则，周末全天按低谷时段计费。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cn.technode.com/post/2026-08-14/deepseek-api-peak-off-peak-pricing/">DeepSeek API 空闲时段也涨 价 ，部分 价 格最高涨12倍 - 动点科技</a></li>
<li><a href="https://vermal.mintlify.app/api-formats/openai-responses">OpenAI Responses API for agentic workflows</a></li>
<li><a href="https://github.com/openai/codex">GitHub - openai / codex : Lightweight coding agent that runs in your...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">LLM Release</span> <span class="tag-badge">API Pricing</span> <span class="tag-badge">AI Agents</span> <span class="tag-badge">Model Update</span></p>

---

<a id="item-4"></a>

## [微软详述针对暴露 LiteLLM AI 网关的真实攻击](https://www.microsoft.com/en-us/security/blog/2026/08/26/when-ai-infrastructure-becomes-target-securing-gateways-control-points/) ⭐️ 8.0/10

微软威胁情报部门发布了对暴露 AI 工作负载所遭受真实攻击的分析，记录了威胁行为者利用 LiteLLM 网关窃取凭证、建立持久化并开展挖矿活动。 随着企业大规模扩展 AI 部署，集中保管众多模型 API 密钥的网关已成为高价值的单点突破目标，一旦被攻破，整个 LLM 集群的凭证都可能暴露。该报告表明，往往因快速上线而配置薄弱的 AI 基础设施如今已明确进入攻击者视野，且攻击带有挖矿等直接牟利动机。 观测到的攻击链将 LiteLLM 网关利用与凭证窃取、持久化技术和挖矿活动相结合，表明攻击者会直接利用 AI 基础设施牟利，而不仅限于滥用 LLM 令牌进行推理。由于 LiteLLM 是广泛部署的开源软件，这些发现凸显了加固网关配置、保护存储密钥并监控异常活动的必要性。

rss · Microsoft Security · 8月26日 16:43

**背景**: LiteLLM 是一款流行的开源 AI 网关，为 100 多家 LLM 提供商提供统一接口和代理，因此它通常保存着组织整个模型集群的 API 密钥和路由凭证。暴露在外的网关因而成为安全与治理的关键咽喉点：攻击者一旦接触其管理界面或数据库，就能窃取这些密钥并横向渗透到各提供商账户。微软威胁情报是该公司追踪国家级和犯罪威胁行为者、并基于野外观测到的攻击发布防御指导的团队。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.litellm.ai/">LiteLLM — Open-Source AI Gateway & LLM Proxy</a></li>
<li><a href="https://github.com/BerriAI/litellm">GitHub - BerriAI/ litellm : The fastest, litest AI Gateway . Rust core with...</a></li>
<li><a href="https://blog.silentgrid.com/llm-gateway-security-testing/">Are You Testing Your LLM Gateway Like Any Other Critical...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI security</span> <span class="tag-badge">threat intelligence</span> <span class="tag-badge">LiteLLM</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">infrastructure security</span></p>

---

<a id="item-5"></a>

## [FalconForce 研究：伪造 ETW 遥测数据可欺骗分析师并致盲 EDR](https://medium.com/falconforce/im-in-your-logs-now-deceiving-analysts-and-blinding-edrs-6adada699be6?source=rss-5ca7329adb2b------2) ⭐️ 8.0/10

FalconForce 的研究员 Olaf Hartong 发表了新研究，展示了生成伪造 ETW 遥测数据的技术，能让安全系统相信从未发生过的事件真实发生过。研究还进一步表明，通过制造大量遥测数据或破坏遥测行为，可以让 Microsoft Defender for Endpoint 等 EDR 产品完全看不到真实的恶意活动。 这项研究动摇了“端点遥测数据可信”这一基础假设，对检测工程、威胁狩猎和事件响应都有重大影响。任何严重依赖 ETW 的云连接 EDR 产品——不仅仅是 MDE——都受此类问题影响。 研究涵盖了 ETW 遥测信任、事件上限（capping）、伪造事件和缓冲区行为等主题，并指出微软官方文档明确表明 ETW 的设计初衷是性能监控与调试而非安全用途。同一技术在防御方面也有正当用途：生成逼真的遥测数据来验证检测规则，而无需反复执行破坏性强、噪音大或不可靠的真实攻击。

rss · Stories by Olaf Hartong on Medium · 8月26日 08:06

**背景**: ETW（Event Tracing for Windows）是深度集成于 Windows 的遥测机制，由生成事件的提供程序（provider）、接收事件的消费者（consumer）、连接两者的跟踪会话（trace session）以及负责调度的内核组件构成。EDR（端点检测与响应）产品在工作站、笔记本和服务器上运行轻量级代理，持续监控端点上的可疑活动，其中许多产品严重依赖 ETW 实时会话获取检测所需的数据。由于安全从来不是 ETW 的原始设计目标，其部分设计决策带有安全隐患，而防御方直到最近才开始正视这些问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Endpoint_detection_and_response">Endpoint detection and response - Wikipedia</a></li>
<li><a href="https://cyberacademy.net/resources/encyclopedia/edr">EDR : Endpoint Detection and Response · Cyber Academy</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">EDR-evasion</span> <span class="tag-badge">detection-engineering</span> <span class="tag-badge">telemetry-spoofing</span> <span class="tag-badge">threat-hunting</span></p>

---

<a id="item-6"></a>

## [CVE-2026-8933：Ubuntu snap-confine 安全加固反而引入 root 提权漏洞](https://forum.butian.net/share/5002) ⭐️ 8.0/10

奇安信发布了对 CVE-2026-8933 的技术分析，指出 Canonical 将 snap-confine 从 setuid-root 改为基于文件 capabilities 的最小权限模型时，意外引入了 FUSE 竞争条件和符号链接竞争条件两条攻击路径。普通用户可借此在 Ubuntu 24.04/25.10/26.04 默认安装上从普通权限提权到 root，而旧的 setuid-root 版本反而不受影响。 该漏洞影响默认安装的 Ubuntu 系统，意味着大量桌面和服务器环境在无需特殊配置的情况下就面临本地提权到完整 root 权限的风险。更深层的启示在于：一次旨在缩小攻击面的权限收敛重构，反而制造出新的竞争条件攻击窗口，这对安全从业者和发行版维护者都是深刻的教训。 漏洞利用了 snap 沙箱初始化过程中的 TOCTOU 竞争条件（CWE-367）：攻击者将 FUSE 竞争与符号链接竞争相结合，诱使 snap-confine 以 root 身份 bind-mount 攻击者控制的文件，从而在特权上下文中实现任意代码执行。尽管 capabilities 模型相比完整 setuid-root 已限制了部分特权操作，但新代码路径中残留的竞争窗口仍足以让攻击者获得完整 root 权限。

rss · 奇安信攻防社区 · 8月26日 09:00

**背景**: snap-confine 是 Ubuntu 上为 snap 包构建沙箱环境的辅助程序，历史上以 setuid-root 位运行，即始终以完整 root 权限执行。Linux 文件 capabilities 的引入正是为了提供比 setuid 更细粒度的权限控制，只授予程序完成任务所需的具体能力，而非完整的 root 权限。然而，将整体 root 权限拆分为受 capabilities 控制的代码路径可能引入新的逻辑与时序缺陷，例如 TOCTOU（检查时间与使用时间）竞争条件——攻击者在程序检查文件与实际使用文件之间将文件替换为符号链接。Canonical 将 snap-confine 改为最小权限模型的初衷，正是为了降低该工具一旦被攻破所造成的影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.penligent.ai/hackinglabs/cve-2026-8933/">CVE-2026-8933: Ubuntu snap - confine Local Privilege Escalation and...</a></li>
<li><a href="https://securitybrief.com.au/story/ubuntu-snap-flaw-lets-local-users-hijack-root-access">Ubuntu snap flaw lets local users hijack root access</a></li>
<li><a href="https://cwe.mitre.org/data/definitions/367.html?ref=ctrlaltnod.com">CWE - CWE-367: Time -of- check Time -of- use ( TOCTOU ) Race ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">privilege-escalation</span> <span class="tag-badge">CVE</span> <span class="tag-badge">Ubuntu</span> <span class="tag-badge">Linux</span></p>

---

<a id="item-7"></a>

## [智谱确认 Ox Alpha 为 GLM 新迭代，使用量超 DeepSeek 两倍](https://www.bloomberg.com/news/articles/2026-08-26/china-s-z-ai-made-ox-alpha-stealth-model-that-rivals-deepseek?srnd=phx-technology) ⭐️ 8.0/10

智谱 AI（Z.ai）周三在回应彭博社询问时证实，神秘上线的 Ox Alpha 模型正是其 GLM 系列的新版本，并表示将发布该模型的权重。该模型已登顶 AI 模型平台 OpenRouter 使用量榜首，免费预览期间使用量超过 DeepSeek 两倍。 这标志着大模型竞争格局的重大变化：一款中国模型在最受关注的中立使用量平台 OpenRouter 上超越了曾经的现象级模型 DeepSeek。隐身上线策略显然激发了开发者的大量自然需求，而即将公布的定价也可能给持续中的行业价格战带来新的压力。 免费使用期预计持续约一周，后续定价尚未公布；智谱表示该代号灵感来源于最近在中国上映的一部热门电影《牛来》。智谱本月早些时候刚发布最新旗舰模型 GLM-5.3，并称其在部分基准测试上可与 Anthropic 的 Fable 5 相抗衡；此前社区网友通过指纹特征推测，Ox Alpha 可能是 GLM-5.4，也可能是 GLM-5.3 Flash。

telegram · zaihuapd · 8月26日 09:33

**背景**: 智谱 AI 是由清华大学知识工程实验室（KEG Lab）孵化的中国 AI 公司，以开源的 GLM（General Language Model，通用语言模型）系列著称，并已于今年 1 月完成上市。OpenRouter 是一个统一 API 聚合平台，可将请求路由至多种模型，服务超过 25 万个应用和 420 万用户，被广泛视为观察模型真实受欢迎程度的实时风向标。隐身上线——即一个身份不明的模型在推理平台上悄然出现——已成为 AI 行业的一种病毒式营销手段，而 OpenRouter 上的使用量份额反映的是开发者和应用的真实流量，比官方自报的基准测试更具参考价值。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wallstreetcn.com/articles/3780350">智 谱 “认领”神秘AI 模 型 Ox Alpha “牛来”，使用量已达DeepSeek...</a></li>
<li><a href="https://tg.okhk.net/posts/11079">智 谱 确认神秘“牛来” 模 型 为 GLM ... | OKHK</a></li>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>

</ul>
</details>

**社区讨论**: 该新闻本身未附带评论，但根据搜索结果，在官方确认之前，这次隐身上线已在社区引发热议：网友通过各类指纹特征推测该模型最可能是智谱的新模型，猜测集中在 GLM-5.4 或 GLM-5.3 Flash，讨论热度甚至波及谷歌 Gemini、SpaceX 等话题。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Zhipu AI</span> <span class="tag-badge">GLM</span> <span class="tag-badge">DeepSeek</span> <span class="tag-badge">OpenRouter</span></p>

---