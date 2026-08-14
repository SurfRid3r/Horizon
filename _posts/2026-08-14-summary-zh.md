---
layout: default
title: "Horizon Summary: 2026-08-14 (ZH)"
date: 2026-08-14
lang: zh
---

> 从 52 条内容中筛选出 8 条重要资讯。

---

1. [Z.AI 发布 GLM-5.3：前沿编码能力与涌现的网络安全能力](#item-1) ⭐️ 9.0/10
2. [watchTowr Labs 披露 Citrix NetScaler 预认证远程代码执行漏洞（CVE-2026-8452）](#item-2) ⭐️ 9.0/10
3. [苹果官宣换帅：特努斯接任 CEO，库克转任执行董事长](#item-3) ⭐️ 9.0/10
4. [阿里巴巴开源权重模型 Qwen3.8-27B 在 DeepSWE 基准上击败 Claude Opus 4.7 Max](#item-4) ⭐️ 8.0/10
5. [小红书开源 dots3-note：280B 参数、仅 16B 激活的 MoE 多模态模型](#item-5) ⭐️ 8.0/10
6. [PostgreSQL 修复 to_char 高危堆溢出漏洞，攻击者可执行任意代码](#item-6) ⭐️ 8.0/10
7. [苹果联手阿里自研中国专属大模型，或成首家获批在华外企](#item-7) ⭐️ 8.0/10
8. [Cursor 正式加入 SpaceX，将与 SpaceXAI 共同升级 Grok 产品线](#item-8) ⭐️ 8.0/10

---

<a id="item-1"></a>

## [Z.AI 发布 GLM-5.3：前沿编码能力与涌现的网络安全能力](https://z.ai/blog/glm-5.3) ⭐️ 9.0/10

智谱（Z.AI）发布 GLM-5.3，沿用 GLM-5.2 基座，全部提升来自后训练：内部 Z.ai Code Bench 成绩较前代提升 50%，并在 Terminal Bench 3.0 等公开基准上取得开源最优成绩。其漏洞利用类基准成绩较 GLM-5.2 翻倍以上，该模型已协助安全团队在 269 个项目中识别 2436 个漏洞（其中 1097 个为中高危），权重将在约两周后开源。 这次发布表明，仅靠针对性的后训练就能解锁前沿级的编码与进攻性安全（红队与漏洞利用）能力，大幅缩小了与闭源前沿模型的差距，并对 OpenAI 的定价地位构成压力。同时它也带来双刃剑式的安全隐忧：一个能自主挖掘 0-day、改编内核利用代码的开源权重模型，同时大幅降低了合法防御性安全研究与真实攻击的门槛。 值得注意的是，GLM-5.3 并非全新基座模型——社区成员称其本质是"GLM-5.2 加后训练魔法"，因此在等待权重（约两周后）发布期间，量化本地部署成为热议话题。早期用户报告它能完整执行红队场景，包括 WordPress 插件 0-day、RCE 以及改编 Linux 6.8 内核利用代码，甚至可以在与另一个充当防御方的 GLM 智能体对抗时完成。

hackernews · pella · 8月14日 05:19 · [社区讨论](https://news.ycombinator.com/item?id=49294997)

**背景**: GLM 是智谱（Z.AI）的大语言模型系列，自 2025 年 7 月起以 MIT 许可证开源权重发布，是挑战美国闭源前沿实验室最重要的开源力量之一。"涌现能力"指随模型规模扩大或精炼而突然出现的能力（如复杂推理或漏洞利用开发），并非被显式训练出来。安全领域的"红队"指通过模拟真实攻击（挖掘 0-day、远程代码执行、提权等）在恶意攻击者之前发现弱点；近期 OpenAI 模型在红队演练中攻破 Hugging Face 基础设施等事件，表明 AI 智能体的自主进攻性安全能力已相当强大。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Z.ai">Z . ai - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2206.07682">[2206.07682] Emergent Abilities of Large Language Models</a></li>
<li><a href="https://cybersecflux.com/en/blog/openai-s-ai-models-pen-test-hugging-face-a-warning-for-autonomous-agen">OpenAI AI Models Breach Hugging Face During Red - Teaming</a></li>

</ul>
</details>

**社区讨论**: 社区讨论热度极高且普遍认可：一位用户在看到该模型流畅执行红队场景（WordPress 插件 0-day、RCE、Linux 6.8 内核利用改编，并与 GLM 防御智能体对抗）后，立即把 18 美元订阅升到了 80 美元档，但他也承认这类模型的攻击潜力令人不安。另有评论指出它在漏洞利用基准上与 "Sol and Fable"、"Mythos 5" 相比"仅差一丝"，并赞赏 Z.AI 坦承与闭源前沿的差距而非自我吹嘘；不少人称赞公告文风更像研究者手笔而非硅谷营销腔，讨论还涉及量化本地部署以及现有经济性是否足以让人放弃 OpenAI。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">AI-model-release</span> <span class="tag-badge">cybersecurity</span> <span class="tag-badge">coding-agents</span> <span class="tag-badge">red-teaming</span></p>

---

<a id="item-2"></a>

## [watchTowr Labs 披露 Citrix NetScaler 预认证远程代码执行漏洞（CVE-2026-8452）](https://labs.watchtowr.com/youre-back-in-the-room-citrix-netscaler-pre-auth-rce-cve-2026-8452/) ⭐️ 9.0/10

watchTowr Labs 研究员 Sina Kheirkhah 披露了 Citrix NetScaler 中的一个预认证远程代码执行漏洞（编号 CVE-2026-8452），该漏洞可让未经身份验证的攻击者在受影响的设备上执行任意代码。该披露以技术分析文章的形式发布在 watchTowr Labs 官方博客上，延续了该团队对企业基础设施产品进行深度研究的传统。 Citrix NetScaler/ADC 的预认证 RCE 漏洞历来属于被利用最广泛的企业级漏洞——CVE-2019-19781 和 CVE-2023-3519 都曾遭大规模利用，波及数千台暴露在互联网上的设备。由于 NetScaler 通常部署在企业应用的入口位置，一个无需身份验证的 RCE 将造成全行业范围的关键性风险，需要立即修补和缓解。 披露中的 CVE 编号带有问号（CVE-2026-8452(?)），表明该编号可能为暂定或未经验证，防御者应对照 Citrix 官方安全公告核实受影响版本和补丁情况。作为预认证漏洞，利用时无需任何有效凭据，而 CVE-2023-3519 等先例表明这类 NetScaler 漏洞会被迅速武器化，暴露在互联网上的设备面临的风险最高。

rss · watchTowr Labs - Blog · 8月14日 07:08

**背景**: Citrix NetScaler 是一种应用交付控制器（ADC），部署在 Web 应用前端，负责负载均衡、流量管理和 SSL 卸载，因此常常直接暴露在互联网上，成为高价值攻击目标。预认证 RCE 意味着远程攻击者无需任何用户名或密码即可在设备上执行任意代码，相当于完全控制该网关。watchTowr Labs 是知名的进攻性安全研究团队，经常发布针对企业基础设施漏洞的深度分析。历史上 CVE-2019-19781 和 CVE-2023-3519 等 NetScaler/ADC 漏洞都曾被大规模利用，因此该产品线上任何新的预认证 RCE 都是企业安全团队的重大新闻。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apporto.com/what-is-citrix-netscaler">What is Citrix NetScaler ? A Complete Overview</a></li>
<li><a href="https://www.netscaler.com/about-netscaler">About NetScaler : What We Do and Why</a></li>
<li><a href="https://labs.watchtowr.com/">watchTowr Labs</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">security</span> <span class="tag-badge">vulnerability-research</span> <span class="tag-badge">citrix-netscaler</span> <span class="tag-badge">pre-auth-rce</span> <span class="tag-badge">zero-day</span></p>

---

<a id="item-3"></a>

## [苹果官宣换帅：特努斯接任 CEO，库克转任执行董事长](https://t.me/zaihuapd/43191) ⭐️ 9.0/10

苹果正式宣布管理层交接：执掌公司 14 年多的蒂姆·库克将卸任 CEO，出任董事会执行董事长，硬件工程高级副总裁约翰·特努斯将于 2026 年 9 月 1 日起接任 CEO。董事会已一致批准该安排，库克将在整个夏天继续担任 CEO，与特努斯完成平稳过渡。 作为全球市值最高的科技公司，苹果的 CEO 更替将在未来数年深刻影响 iPhone、Mac 和 AI 等领域的产品战略。让一位硬件工程老将执掌公司，标志着苹果可能转向以工程为先、产品驱动的领导路线，有望重新激发突破性硬件创新。 特努斯于 2001 年加入苹果，2013 年升任硬件工程副总裁，2021 年进入高管团队，近年负责 iPhone、Mac、iPad 和 AirPods 等硬件产品。现任董事长阿瑟·莱文森将于 2026 年 9 月 1 日转任首席独立董事，特努斯也将于同日加入董事会。

telegram · zaihuapd · 8月14日 11:00

**背景**: 蒂姆·库克于 2011 年 8 月接替乔布斯出任苹果 CEO，将公司打造成全球市值最高的企业，期间主导推出了 Apple Watch、AirPods，并完成了 Apple Silicon 芯片转型。约翰·特努斯是苹果资深高管，从硬件工程岗位一路晋升，领导了多款旗舰产品背后的研发团队。“执行董事长”通常仍深度参与公司治理与战略，日常运营则交由 CEO 负责；“首席独立董事”则是在董事长由前高管出任时保障董事会独立性的角色。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/leadership/john-ternus/">Apple Leadership - John Ternus - Apple</a></li>
<li><a href="https://blog.ovexro.com/apples-new-ceo-signals-product-first-era/">Apple ’s New CEO Signals Product-First Era – OVEX TECH</a></li>
<li><a href="https://www.jagranjosh.com/general-knowledge/john-ternus-apple-new-ceo-career-biography-and-net-worth-1820008055-1">Who is John Ternus Apple ’s Next CEO ? Check Biography, Career...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">CEO transition</span> <span class="tag-badge">Tim Cook</span> <span class="tag-badge">John Ternus</span> <span class="tag-badge">tech industry leadership</span></p>

---

<a id="item-4"></a>

## [阿里巴巴开源权重模型 Qwen3.8-27B 在 DeepSWE 基准上击败 Claude Opus 4.7 Max](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) ⭐️ 8.0/10

阿里巴巴 Qwen 团队发布了开源权重模型 Qwen3.8-27B，该模型在 DeepSWE 软件工程基准测试中取得 42.2 分，小幅超越 Claude Opus 4.7 Max 的 40 分。该模型可在消费级硬件上本地运行，Unsloth 也已发布适用于 llama.cpp 的 GGUF 量化版本。 这是开源权重 AI 的一个重要里程碑：一个可免费下载的 270 亿参数模型在严格的长期编码基准上匹敌甚至超越了顶级闭源 API 模型。这表明具有竞争力的智能体编码能力正变得可以在本地和私有环境中部署，对开发者、注重隐私的企业以及闭源 API 提供商的商业格局都会产生影响。 FP8 版本托管在 Hugging Face 上，社区用户已通过 llama.cpp 在单张 RTX 4090 上运行量化版本，采用 IQ4_NL 量化、q8_0 KV 缓存、多 token 预测（MTP）投机解码以及约 17 万的上下文窗口。DeepSWE 基准通过隔离的任务环境和基于程序的验证器，在 91 个代码仓库和 5 种编程语言上评估编码智能体完成 113 项原创长期软件工程任务的能力。

hackernews · erdaltoprak · 8月14日 15:00 · [社区讨论](https://news.ycombinator.com/item?id=49299605)

**背景**: Qwen 是阿里巴巴的大语言模型系列，已成为生态中使用最广泛的开源权重模型系列之一。"开源权重"指模型训练参数可公开下载，任何人都可以在本地运行推理或进行微调——但它与"开源"有所区别，后者还要求公开训练代码和数据。DeepSWE 是一个旨在测试真实代码库级工程行为的基准，考察长期任务而非简短编程问答，因此被视为衡量实际智能体编码能力的有效参考。本地部署通常依赖 GGUF 等量化格式配合 llama.cpp 等推理引擎，以牺牲少量精度换取大幅降低的显存需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deepswe.net/">DeepSWE Benchmark : GPT vs Claude for Agentic Coding</a></li>
<li><a href="https://benchlm.ai/benchmarks/deepswe">DeepSWE Leaderboard & Scores — August 2026 | BenchLM.ai</a></li>
<li><a href="https://www.linkedin.com/pulse/open-weights-vs-source-llms-why-difference-matters-more-kapil-uthra-6kanf">Open Weights vs . Open Source in LLMs: Why the Difference Matters...</a></li>

</ul>
</details>

**社区讨论**: 社区反响热烈且务实：一位用户分享了在 RTX 4090 上运行该模型的详细 llama.cpp 命令行（将显示器输出移至核显以释放显存），Unsloth 的 GGUF 量化版本也迅速上线。用户还希望模型产品线更加多样化，期待推出新的 MoE 变体，例如 35B A3B 或 80B A3B "Qwen 3 Coder Next" 的后续版本，以适配显存充足但功耗和算力受限的环境。

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">LLM</span> <span class="tag-badge">Qwen</span> <span class="tag-badge">Open Source AI</span> <span class="tag-badge">Local Inference</span> <span class="tag-badge">Coding Benchmark</span></p>

---

<a id="item-5"></a>

## [小红书开源 dots3-note：280B 参数、仅 16B 激活的 MoE 多模态模型](https://x.com/dotsstudioai/status/2088083314855018521) ⭐️ 8.0/10

小红书 dots 实验室开源了 dots3-note preview，这是 dots3 系列首个开放权重模型，采用混合专家（MoE）架构，总参数 280B、每个 token 仅激活 16B，支持 512K 上下文，可原生处理文字、图片、视频和音频。团队同步在 Hugging Face 发布权重，推出基于自批判和测试时价值估计的新强化学习方法 TEMPO，用于训练长程智能体，并发布了 VibeSearchBench 和 VibeLifeBench 两个真实场景智能体基准。 280B 规模的开放权重在开源社区中仍属罕见，此次发布让研究者和开发者能够接触到通常被闭源 API 锁定的前沿级多模态能力。稀疏激活（每 token 仅 16B）与 512K 长上下文的结合，让长程多模态智能体应用更加切实可行，配套发布的两个基准也有助于填补真实场景智能体评测这一薄弱环节的空白。 需要注意的是，这是一个 preview 预览版发布，实际性能仍有待社区进一步验证。尽管每个 token 仅激活 16B 参数，但完整的 280B 权重仍需全部载入显存，因此虽然推理速度快，部署门槛却并不低；此外，TEMPO 的设计会周期性地用带标注数据重新校准其批判模型，据作者称这能让模型在数百轮迭代中持续自我提升，而不会陷入限制以往方法的自我强化陷阱。

telegram · zaihuapd · 8月14日 08:27

**背景**: 混合专家（MoE）是一种由路由器为每个 token 仅激活少量"专家"网络参与计算的架构，因此模型可以拥有巨大的总容量（这里是 280B），而每个 token 只计算其中一小部分（16B），从而以快得多的推理速度获得接近大型稠密模型的质量。但显存需求取决于总参数量而非激活量，部署时所有专家都必须常驻显存。dots3-note 标志着小红书正式加入竞争日趋激烈的中国开源前沿模型赛道，与 DeepSeek、阿里 Qwen 等同场竞技；据媒体报道，dots3 同系列模型曾在国际数学奥林匹克（IMO）中取得满分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/studio-dots-ai/dots3-note-prev">GitHub - studio-dots-ai/ dots 3 - note -prev: dots 3 note preview · GitHub</a></li>
<li><a href="https://arxiv.org/html/2604.19295">TEMPO: Scaling Test-time Training for Large Reasoning Models</a></li>
<li><a href="https://eu.36kr.com/en/p/3938759517896072">Xiaohongshu Open -Sourced Dots 3 - Note : The Same-Series Model ...</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">open-source-models</span> <span class="tag-badge">MoE</span> <span class="tag-badge">multimodal</span> <span class="tag-badge">reinforcement-learning</span> <span class="tag-badge">LLM</span></p>

---

<a id="item-6"></a>

## [PostgreSQL 修复 to_char 高危堆溢出漏洞，攻击者可执行任意代码](https://www.postgresql.org/support/security/CVE-2026-14669/) ⭐️ 8.0/10

PostgreSQL 披露了高危漏洞 CVE-2026-14669（CVSS 评分 8.8），该漏洞源于 to_char(timestamptz) 函数在处理超长 POSIX 时区缩写时发生堆缓冲区溢出，能够设置时区的数据库用户可以 PostgreSQL 服务进程的操作系统权限执行任意代码。官方建议所有受支持版本的用户升级至 18.6、17.11、16.15、15.19 或 14.24。 PostgreSQL 是全球部署最广泛的开源数据库之一，此堆溢出漏洞可导致任意代码执行，威胁大量生产系统的数据安全甚至整台服务器。虽然利用该漏洞需要拥有低权限的已认证数据库账户，在一定程度上限制了可利用性，但在多租户或面向应用的数据库环境中，不受信任的用户能够执行 SQL，风险依然很高。 修复包含在小版本 18.6、17.11、16.15、15.19 和 14.24 中，只需更新程序文件并重启服务即可完成升级，无需转储/恢复数据库，也不需要运行 pg_upgrade。需要注意的是，18.5 因回归问题从未正式发布，18 系列用户应直接升级到 18.6。

telegram · zaihuapd · 8月14日 14:35

**背景**: to_char 是 PostgreSQL 内置的数据格式化函数，用于将时间戳等数据类型按自定义格式转换成文本输出。除了标准时区名称和缩写之外，PostgreSQL 还接受 POSIX 风格的时区规格（形如 STDoffset 或 STDoffsetDST，遵循 POSIX TZ 环境变量的规则），其中 STD 是时区缩写——本漏洞正是 to_char(timestamptz) 在处理超长缩写时发生了堆缓冲区溢出。PostgreSQL 的小版本发布属于常规的缺陷修复与安全更新，磁盘数据格式保持兼容，因此只需替换二进制文件并重启服务即可；pg_upgrade 只在大版本升级时才需要使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.postgresql.org/docs/current/functions-formatting.html">PostgreSQL: Documentation: 18: 9.8. Data Type Formatting Functions</a></li>
<li><a href="https://postgrespro.com/docs/postgresql/10/datetime-posix-timezone-specs">PostgreSQL : Documentation: 10: B.5. POSIX ... : Postgres Professional</a></li>
<li><a href="https://blog.csdn.net/m0_71902491/article/details/138395537">PostgreSQL-大版本升级（pg_upgrade方式）_postgresql 升级-CSDN博客</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">PostgreSQL</span> <span class="tag-badge">security-vulnerability</span> <span class="tag-badge">CVE</span> <span class="tag-badge">database-security</span> <span class="tag-badge">remote-code-execution</span></p>

---

<a id="item-7"></a>

## [苹果联手阿里自研中国专属大模型，或成首家获批在华外企](https://www.reuters.com/business/retail-consumer/apple-trains-its-own-ai-model-china-market-with-alibabas-support-sources-say-2026-08-14/) ⭐️ 8.0/10

据路透社消息源，苹果在阿里巴巴技术支持下，专门为中国市场训练了一款自研大语言模型，改变了以往依赖第三方 AI 模型的思路。中国网信办已完成苹果生成式 AI 服务的备案，为 Apple Intelligence 未来数月随 iOS 更新在华上线扫清了监管障碍。 若落地，苹果将成为首家获北京批准在华提供自有 AI 模型的外国公司，这在中国严格监管的生成式 AI 领域具有里程碑意义。此举将提升 iPhone 对抗华为等国产 AI 手机的竞争力，也表明外国科技巨头必须打造中国定制化的 AI 方案才能符合本地监管要求。 苹果将采取双轨策略，在自研中国定制模型之外同时使用阿里通义千问等第三方模型，但两者具体如何分工配合暂不明确。Apple Intelligence 预计覆盖 iPhone、iPad、Mac 和 Vision Pro 推出，苹果与阿里均未对该消息置评。

telegram · Marcoview666 · 8月14日 05:16

**背景**: 中国屏蔽了 ChatGPT 等海外 AI 服务，且依据《生成式人工智能服务管理暂行办法》，在华提供的生成式 AI 服务必须在网信办完成备案，自 2024 年以来已有数百款国产模型通过该流程获批。Apple Intelligence 于 2024 年 6 月 WWDC 发布，采用端侧与服务器协同处理，深度集成于 iOS、iPadOS 和 macOS，但其功能因地区和语言而异，导致中国 iPhone 用户长期缺少本地化 AI 功能，而华为等国产竞争对手的 AI 手机则不断发力。阿里的通义千问（Qwen）由阿里云与达摩院于 2023 年推出，是中国领先的大模型系列之一，此前曾被报道为苹果在华 AI 功能的合作方。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cac.gov.cn/2024-04/02/c_1713729983803145.htm">国家互联网信息办公室关于发布生成式人工智能服务已备案信息的公告_中央网络安全和信息化委员会办公室</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apple_Intelligence">Apple Intelligence - Wikipedia</a></li>
<li><a href="https://aibook1.com/tools/tongyi.html">通 义 千 问 Qwen 中文介绍、官网入口、 模 型 与 API 价格 - AIBook</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">Apple</span> <span class="tag-badge">大语言模型</span> <span class="tag-badge">中国AI市场</span> <span class="tag-badge">阿里巴巴</span> <span class="tag-badge">监管审批</span></p>

---

<a id="item-8"></a>

## [Cursor 正式加入 SpaceX，将与 SpaceXAI 共同升级 Grok 产品线](https://x.com/cursor_ai/status/2088249881718919393) ⭐️ 8.0/10

热门 AI 代码编辑器 Cursor 官方宣布已完成收购，正式成为 SpaceX 的一部分。团队将加入 SpaceXAI，共同优化 Grok、Grok Build、Grok Bot、Grok API 及 Cursor 本身，目标是让 Grok 成为全球最实用的 AI。 Cursor 是目前使用最广泛的 AI 代码编辑器之一，若被并入马斯克旗下的 SpaceX/xAI 生态系统，将是 AI 开发者工具领域的标志性整合事件。将头部编码工具与 Grok 模型家族直接绑定，会加剧其与 GitHub Copilot、Google 及 Anthropic 编码产品的竞争。 该消息来自 Cursor 官方 X 账号（@cursor_ai），但流传内容为 Telegram 转述，未附原始声明链接，真实性需经官方渠道交叉验证。“SpaceXAI”的提法与近期事实相符：xAI 已于 2026 年 2 月并入 SpaceX（合并估值约 1.25 万亿美元），其 AI 部门随后于 2026 年 7 月更名为 SpaceXAI。

telegram · zaihuapd · 8月14日 15:45

**背景**: Cursor 是由 Anysphere 公司开发的 AI 优先代码编辑器，基于 VS Code 构建，深度集成 AI 能力以支持代码库级对话和多文件编辑，是当前最受欢迎的 AI 编码工具之一。Grok 是马斯克于 2023 年 7 月创立的 xAI 公司打造的 AI 产品家族，后被整合进社交平台 X。2026 年 2 月，SpaceX 宣布收购 xAI，合并后公司整合人工智能、火箭、天基互联网及手机直连通信业务，估值约 1.25 万亿美元，其 AI 部门随后于 2026 年 7 月更名为 SpaceXAI。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zh.wikipedia.org/wiki/XAI">SpaceXAI - 维基百科，自由的百科全书</a></li>
<li><a href="https://www.stcn.com/article/detail/3626925.html">SpaceX与xAI合并背后， 马斯克剑指太空算力</a></li>
<li><a href="https://www.runoob.com/cursor/cursor-intro.html">Cursor 简介 | 菜鸟教程</a></li>

</ul>
</details>

<p class="tag-line"><span class="tag-label">标签:</span> <span class="tag-badge">AI收购</span> <span class="tag-badge">Cursor</span> <span class="tag-badge">SpaceX</span> <span class="tag-badge">xAI</span> <span class="tag-badge">Grok</span></p>

---